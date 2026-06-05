/* ===================================================
   RAHIQ BIO — Meta Pixel Conversion Events
   Pixel ID: 1978239439688283
   Events: ViewContent · AddToCart · InitiateCheckout · Purchase
   Loads AFTER script.js
   =================================================== */

(function () {
  'use strict';

  function safeCall(fn) {
    try { fn(); } catch (e) { /* silent */ }
  }

  function cartTotal() {
    try {
      return (cart || []).reduce(function (sum, item) {
        return sum + (item.price || 0) * (item.qty || 1);
      }, 0);
    } catch (e) { return 0; }
  }

  function cartIds() {
    try {
      return (cart || []).map(function (item) { return item.id; });
    } catch (e) { return []; }
  }

  function cartNumItems() {
    try {
      return (cart || []).reduce(function (n, item) { return n + (item.qty || 1); }, 0);
    } catch (e) { return 0; }
  }

  function productMinPrice(productId) {
    try {
      var p = products[productId];
      if (!p) return 0;
      if (p.sizes && p.sizes.length > 0) { return p.sizes[0].price; }
      return p.price || 0;
    } catch (e) { return 0; }
  }

  function waitForFbq(callback, retries) {
    if (typeof fbq === 'function') {
      callback();
    } else if ((retries || 0) < 20) {
      setTimeout(function () { waitForFbq(callback, (retries || 0) + 1); }, 300);
    }
  }

  /* openProduct -> ViewContent */
  var _origOpenProduct = window.openProduct;
  if (typeof _origOpenProduct === 'function') {
    window.openProduct = function (productId) {
      var result = _origOpenProduct.apply(this, arguments);
      safeCall(function () {
        var p = products[productId];
        if (!p) return;
        waitForFbq(function () {
          fbq('track', 'ViewContent', {
            content_ids: [productId],
            content_name: p.nameAr || p.nameFr || productId,
            content_category: p.category || '',
            content_type: 'product',
            value: productMinPrice(productId),
            currency: 'MAD'
          });
        });
      });
      return result;
    };
  }

  /* addToCart -> AddToCart */
  var _origAddToCart = window.addToCart;
  if (typeof _origAddToCart === 'function') {
    window.addToCart = function (productId) {
      var result = _origAddToCart.apply(this, arguments);
      safeCall(function () {
        var item = null;
        try { item = (cart || []).find(function (c) { return c.id === productId; }); } catch (e) {}
        var itemPrice = item ? item.price : productMinPrice(productId);
        var itemName = item ? item.name : (products[productId] ? products[productId].nameAr : productId);
        var category = products[productId] ? products[productId].category : '';
        waitForFbq(function () {
          fbq('track', 'AddToCart', {
            content_ids: [productId],
            content_name: itemName || productId,
            content_category: category,
            content_type: 'product',
            value: itemPrice,
            currency: 'MAD'
          });
        });
      });
      return result;
    };
  }

  /* openCheckout -> InitiateCheckout */
  var _origOpenCheckout = window.openCheckout;
  if (typeof _origOpenCheckout === 'function') {
    window.openCheckout = function () {
      var result = _origOpenCheckout.apply(this, arguments);
      safeCall(function () {
        waitForFbq(function () {
          fbq('track', 'InitiateCheckout', {
            content_ids: cartIds(),
            num_items: cartNumItems(),
            value: cartTotal(),
            currency: 'MAD'
          });
        });
      });
      return result;
    };
  }

  /* showSuccess -> Purchase (cart flow) */
  var _origShowSuccess = window.showSuccess;
  if (typeof _origShowSuccess === 'function') {
    window.showSuccess = function () {
      safeCall(function () {
        var total = cartTotal();
        var ids = cartIds();
        var num = cartNumItems();
        waitForFbq(function () {
          fbq('track', 'Purchase', {
            content_ids: ids,
            content_type: 'product',
            num_items: num,
            value: total,
            currency: 'MAD'
          });
        });
      });
      return _origShowSuccess.apply(this, arguments);
    };
  }

  /* submitOrder -> Purchase (LP direct-buy form) */
  var _origSubmitOrder = window.submitOrder;
  if (typeof _origSubmitOrder === 'function') {
    window.submitOrder = function (event, productId) {
      safeCall(function () {
        var value = 0;
        var ids = [];
        var num = 0;
        if (productId && products[productId]) {
          var qtyInput = document.querySelector('[name="qty"], #lp-qty, .lp-qty');
          var qty = qtyInput ? (parseInt(qtyInput.value, 10) || 1) : 1;
          value = productMinPrice(productId) * qty;
          ids = [productId];
          num = qty;
        } else {
          value = cartTotal();
          ids = cartIds();
          num = cartNumItems();
        }
        waitForFbq(function () {
          fbq('track', 'Purchase', {
            content_ids: ids,
            content_type: 'product',
            num_items: num,
            value: value,
            currency: 'MAD'
          });
        });
      });
      return _origSubmitOrder.apply(this, arguments);
    };
  }

})();
