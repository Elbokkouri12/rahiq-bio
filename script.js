/* ===== RAHIQ BIO - JavaScript ===== */

// Products Data
const products = {
  'amlou-louz': {
    id: 'amlou-louz',
    nameAr: 'أملو اللوز',
    nameFr: 'Amlou Amande Au Miel De Citron',
    category: 'أملو',
    price: 220,
    image: 'assets/images/amlou-louz-1.png',
    gallery: [
      'assets/images/amlou-louz-1.png',
      'assets/images/amlou-louz-2.png',
      'assets/images/amlou-louz-3.png',
    ],
    slogan: 'مزيج لوز وعسل حر وزيت أركان طبيعي',
    shortDesc: 'أملو اللوز بعسل الليمون — مزيج طبيعي أصيل من لوز محمص وعسل ليمون طبيعي وزيت أركان غذائي',
    fullDesc: 'أملو اللوز من Rahiq Bio — مزيج طبيعي مغربي أصيل يجمع بين اللوز المحمص المطحون بجودة عالية وعسل الليمون الحر الطبيعي وزيت الأركان الغذائي الأصلي. غني بالبروتينات والدهون الصحية والطاقة الطبيعية. بلا سكر مضاف، بلا حافظات، مصنوع بالمغرب 100%.',
    benefits: [
      'مصدر ممتاز للطاقة الطبيعية والبروتينات',
      'يحتوي على زيت أركان الغذائي الأصلي',
      'مثالي للفطور الصحي والرياضيين',
      'بلا سكر مضاف، بلا مواد حافظة',
    ],
    ingredients: 'لوز محمص ومطحون بجودة عالية (50%)، عسل ليمون حر طبيعي (40%)، زيت أركان غذائي أصلي (10%)',
    usage: 'مثالي للفطور أو كسناك طبيعي للطاقة — مناسب للرياضيين والطلاب — يُستهلك بملعقة أو مع الخبز يومياً',
    storage: 'يحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس — يُغلق بإحكام بعد الاستعمال',
    warnings: 'يحتوي على لوز — غير مناسب للأشخاص الذين يعانون من حساسية المكسرات',
    nutrition: { calories: '520–540', protein: '10–12غ', fat: '32–35غ', carbs: '45–50غ', sugar: '30–35غ', fiber: '5–7غ' },
    lot: '01-01AMA',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 110 },
      { label: '1 كيلوغرام', price: 220 },
    ]
  },
  'amlou-cacao': {
    id: 'amlou-cacao',
    nameAr: 'أملو كاكاو',
    nameFr: 'Amlou Cacahuète Au Miel De Citron',
    category: 'أملو',
    price: 180,
    image: 'assets/images/amlou-cacao.jpg',
    shortDesc: 'مزيج مغربي أصيل: كاكاو + عسل الليمون + زيت زيتون + زرازع',
    fullDesc: 'أملو الكاكاو — تحفة مغربية أصيلة تجمع بين الكاكاو المطحون ناعماً وعسل الليمون الطبيعي وزيت الزيتون البكر وحبات الزرازع المنتقاة. غني بالبروتينات والدهون الصحية والمعادن الأساسية. طعمه لذيذ ومميز يذوب في الفم.',
    benefits: ['غني بالبروتينات والدهون الصحية','مصدر ممتاز للطاقة الطبيعية','يحتوي على مضادات الأكسدة','بلا سكر مضاف، بلا حافظات'],
    ingredients: 'كاكاو، عسل الليمون الطبيعي، زيت الزيتون البكر، زرازع',
    badge: 'طبيعي 100%',
    sizes: [{ label: '500 غرام', price: 99 }, { label: '1 كيلوغرام', price: 180 }]
  },
  'energie-royale': {
    id: 'energie-royale',
    nameAr: 'مزيج ملكي بالعسل والمكسرات',
    nameFr: 'Énergie Royale Mix',
    category: 'مريج ملكي',
    price: 180,
    image: 'assets/images/energie-royale-900g.png',
    gallery: [
      'assets/images/energie-royale-900g.png',
      'assets/images/energie-royale-450g.png',
      'assets/images/energie-royale-back-nutrition.png',
      'assets/images/energie-royale-back-info.png',
    ],
    slogan: 'طاقة طبيعية في كل ملعقة',
    shortDesc: 'مزيج طبيعي فاخر من العسل الحر والمكسرات المختارة — طاقة فورية مثالية للفطور والرياضة والنشاط اليومي',
    fullDesc: 'مزيج ملكي بالعسل والمكسرات من Rahiq Bio — مزيج طبيعي 100% يجمع بين العسل الحر الطبيعي ومجموعة مختارة من المكسرات والبذور الصحية. غني بالبروتينات والدهون الصحية والطاقة الطبيعية. مثالي للفطور الصحي، قبل التمرين، أو كوجبة خفيفة مغذية. بدون مواد حافظة، بدون إضافات صناعية، منتج مغربي 100%.',
    benefits: [
      'يعزز الطاقة والحيوية طوال اليوم بشكل طبيعي',
      'مصدر ممتاز للبروتين والدهون الصحية',
      'يدعم جهاز المناعة بفضل العسل الطبيعي',
      'مثالي للرياضيين وكل من يبحث عن طاقة صحية',
    ],
    ingredients: 'عسل حر طبيعي (50%)، لوز (16%)، جوز/كركاع (12%)، كاجو (8%)، سمسم (6%)، بذور الكتان (2%)، بذور دوار الشمس (1%)، بذور القرع (1%)',
    usage: 'ملعقة صغيرة إلى كبيرة يومياً — يتناول مع الخبز أو مباشرة — مناسب للفطور أو قبل التمرين',
    storage: 'يحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس — يُغلق بإحكام بعد الاستعمال',
    warnings: 'يحتوي على مكسرات (لوز، جوز، كاجو، فستق، بندق) • يحتوي على بذور (سمسم، كتان، دوار الشمس) • قد يحتوي على آثار من الفلونين',
    nutrition: { calories: '490–510', protein: '11–13غ', fat: '28–30غ', carbs: '48–52غ', sugar: '34–38غ', fiber: '6–7غ' },
    badge: 'الأكثر مبيعاً',
    sizes: [
      { label: '450 غرام', price: 100, image: 'assets/images/energie-royale-450g.png' },
      { label: '900 غرام', price: 180, image: 'assets/images/energie-royale-900g.png' },
    ]
  },
  'shilajit': {
    id: 'shilajit',
    nameAr: 'شيلاجيت',
    nameFr: 'Shilajit Pur',
    category: 'مكملات طبيعية',
    price: 170,
    image: 'assets/images/shilajit-new.png',
    shortDesc: 'شيلاجيت نقي 100% — مستخلص أصلي من أعالي جبال الهيمالايا، مقوي طبيعي للطاقة والمناعة والقدرة الجنسية',
    fullDesc: 'شيلاجيت Rahiq Bio مستخلص أصلي من أعالي جبال الهيمالايا. مادة طبيعية نادرة غنية بالمعادن وحمض الفولفيك. مقوي عام للجسم، يزيد الطاقة والنشاط، ويدعم المناعة والقدرة الجنسية. منتج نقي 100% بدون إضافات.',
    benefits: [
      'مقوي عام للجسم',
      'يزيد الطاقة والنشاط',
      'يدعم المناعة والقدرة الجنسية',
      'يحسن التركيز والذاكرة',
    ],
    ingredients: 'شيلاجيت نقي 100% طبيعي',
    usage: 'يُذاب جزء صغير جداً (بحجم حبة عدس) في كوب ماء دافئ أو حليب — يُتناول مرة واحدة في اليوم صباحاً على معدة فارغة',
    storage: 'يُحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة',
    warnings: 'لا يُنصح به للنساء الحوامل أو المرضعات • يُمنع على الأشخاص المصابين بأمراض مزمنة دون استشارة طبية • يُحفظ بعيداً عن متناول الأطفال',
    lot: '01-01SHI',
    badge: 'نقي 100% طبيعي',
    sizes: [{ label: '50 غرام', price: 170 }]
  },
  'eucalyptus': {
    id: 'eucalyptus',
    nameAr: 'عسل الكاليبتوس',
    nameFr: "Miel d'Eucalyptus",
    category: 'عسل',
    price: 200,
    image: 'assets/images/eucalyptus-3.png',
    gallery: [
      'assets/images/eucalyptus-3.png',
      'assets/images/eucalyptus-2.png',
      'assets/images/eucalyptus-1.png',
      'assets/images/eucalyptus-4.png',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل الكاليبتوس الطبيعي — مفيد لمشاكل الجهاز التنفسي، يُسهل التنفس ويُقوي المناعة',
    fullDesc: 'عسل الكاليبتوس من Rahiq Bio هو عسل طبيعي 100% يُستخرج من أزهار شجرة الكاليبتوس. مفيد لمشاكل الجهاز التنفسي والسعال، يُسهل التنفس في حالات الزكام والأنفلونزا. غني بمضادات الأكسدة الطبيعية ويساعد على تخفيف التهابات الحلق والجيوب الأنفية. منتج طبيعي خاضع لمراقبة ONSSA، بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'مفيد لمشاكل الجهاز التنفسي والسعال',
      'يُسهل التنفس في حالات الزكام والأنفلونزا',
      'غني بمضادات الأكسدة الطبيعية',
      'يهدئ الجسم ويساعد على الراحة',
      'يساعد على تخفيف التهابات الحلق والجيوب الأنفية',
    ],
    ingredients: 'عسل كاليبتوس طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح (مادة مغذية توجد في العسل) • يُنصح بالحذر فقط لمن لديهم حساسية مفرطة من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01EUC',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 110, image: 'assets/images/eucalyptus-2.png' },
      { label: '1 كيلوغرام', price: 200, image: 'assets/images/eucalyptus-3.png' }
    ]
  },
  'sidr': {
    id: 'sidr',
    nameAr: 'عسل السدر',
    nameFr: 'Miel de Jujubier',
    category: 'عسل',
    price: 250,
    image: 'assets/images/sidr-new-4.png',
    gallery: [
      'assets/images/sidr-new-4.png',
      'assets/images/sidr-new-1.png',
      'assets/images/sidr-new-2.png',
      'assets/images/sidr-new-3.png',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل السدر الطبيعي الذهبي — مفيد للجهاز الهضمي والمعدة، يعزز الطاقة ويساهم في الوقاية من البكتيريا',
    fullDesc: 'عسل السدر من Rahiq Bio هو عسل طبيعي 100% يُستخرج من أزهار شجرة السدر (النبق). مفيد للجهاز الهضمي والمعدة، يساعد في التخفيف من الالتهابات ويعزز الطاقة والنشاط. يساهم في الوقاية من بعض أنواع البكتيريا والفيروسات. منتج طبيعي خاضع لمراقبة ONSSA، بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'مفيد للجهاز الهضمي والمعدة',
      'يساعد في التخفيف من الالتهابات',
      'يعزز الطاقة ويساعد على الراحة والنشاط',
      'يساهم في الوقاية من بعض أنواع البكتيريا والفيروسات',
    ],
    ingredients: 'عسل سدر طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح (مادة مغذية توجد في العسل) • يُنصح بالحذر فقط لمن لديهم حساسية مفرطة من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01SID',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 135, image: 'assets/images/sidr-new-1.png' },
      { label: '1 كيلوغرام', price: 250, image: 'assets/images/sidr-new-4.png' }
    ]
  },
  'zaatar': {
    id: 'zaatar',
    nameAr: 'عسل الزعتر',
    nameFr: 'Miel de Thym',
    category: 'عسل',
    price: 300,
    image: 'assets/images/zaatar-4.png',
    gallery: [
      'assets/images/zaatar-4.png',
      'assets/images/zaatar-1.png',
      'assets/images/zaatar-2.png',
      'assets/images/zaatar-3.png',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل الزعتر الطبيعي — مضاد حيوي طبيعي، مفيد للجهاز التنفسي ويُنشط الدورة الدموية',
    fullDesc: 'عسل الزعتر من Rahiq Bio هو عسل طبيعي 100% يُستخرج من رحيق أزهار الزعتر. يقوي المناعة ومفيد للجهاز التنفسي خصوصاً في حالات السعال والزكام. يساعد في تخفيف التهابات الحلق واللوزتين ويُنشط الدورة الدموية. يُستخدم كمضاد للبكتيريا. منتج طبيعي خاضع لمراقبة ONSSA، بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'يقوي المناعة',
      'مفيد للجهاز التنفسي، خصوصا في حالات السعال والزكام',
      'يساعد في تخفيف التهابات الحلق واللوزتين',
      'يُنشط الدورة الدموية ويُستخدم كمضاد للبكتيريا',
    ],
    ingredients: 'عسل زعتر طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح (مادة مغذية توجد في العسل) • يُنصح بالحذر فقط لمن لديهم حساسية مفرطة من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01THY',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 160, image: 'assets/images/zaatar-1.png' },
      { label: '1 كيلوغرام', price: 300, image: 'assets/images/zaatar-4.png' }
    ]
  },
  'limon': {
    id: 'limon',
    nameAr: 'عسل الليمون',
    nameFr: 'Miel de Citronnier',
    category: 'عسل',
    price: 130,
    image: 'assets/images/limon-1.png',
    gallery: [
      'assets/images/limon-1.png',
      'assets/images/limon-4.png',
      'assets/images/limon-2.png',
      'assets/images/limon-3.png',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل الليمون الذهبي المنعش — يُنقي الجسم، يُهدئ الأعصاب، مفيد للحلق والبلعوم',
    fullDesc: 'عسل الليمون من Rahiq Bio هو عسل طبيعي 100% يُستخرج من رحيق أزهار شجرة الليمون. يُنقي الجسم من السموم ويُهدئ الأعصاب ويُساعد على النوم. يقوي المناعة ومفيد للحلق والبلعوم. يُستعمل في حالات نزلات البرد الخفيفة. منتج طبيعي خاضع لمراقبة ONSSA، بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'يُنقي الجسم من السموم',
      'يُهدئ الأعصاب ويُساعد على النوم',
      'يساعد في تقوية المناعة',
      'مفيد للحلق والبلعوم',
      'يُستعمل في حالات نزلات البرد الخفيفة',
    ],
    ingredients: 'عسل ليمون طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح (مادة مغذية توجد في العسل) • يُنصح بالحذر فقط لمن لديهم حساسية مفرطة من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01CIT',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 70, image: 'assets/images/limon-4.png' },
      { label: '1 كيلوغرام', price: 130, image: 'assets/images/limon-1.png' }
    ]
  },
  'aachab': {
    id: 'aachab',
    nameAr: 'عسل الأعشاب',
    nameFr: 'Miel Multi Fleurs',
    category: 'عسل',
    price: 280,
    image: 'assets/images/aachab-1.png',
    gallery: [
      'assets/images/aachab-1.png',
      'assets/images/aachab-4.png',
      'assets/images/aachab-2.png',
      'assets/images/aachab-3.png',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل الأعشاب المتعدد الأزهار — يقوي المناعة، يمنح طاقة طبيعية، مناسب للاستهلاك اليومي',
    fullDesc: 'عسل الأعشاب من Rahiq Bio هو عسل طبيعي 100% يُجمع من رحيق أزهار متعددة. يقوي المناعة ويمنح طاقة طبيعية للجسم. يساعد على تحسين الهضم وهو مناسب للاستهلاك اليومي. منتج طبيعي خاضع لمراقبة ONSSA، بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'يقوي المناعة',
      'يمنح طاقة طبيعية للجسم',
      'يساعد على تحسين الهضم',
      'مناسب للاستهلاك اليومي',
    ],
    ingredients: 'عسل طبيعي من أزهار متعددة 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح • يُنصح بالحذر لمن لديهم حساسية من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01HER',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 150, image: 'assets/images/aachab-4.png' },
      { label: '1 كيلوغرام', price: 280, image: 'assets/images/aachab-1.png' }
    ]
  },
  'olive': {
    id: 'olive',
    nameAr: 'زيت الزيتون الطبيعي',
    nameFr: "Huile d'Olive",
    category: 'زيوت طبيعية',
    price: 230,
    image: 'assets/images/olive-2.png',
    gallery: [
      'assets/images/olive-2.png',
      'assets/images/olive-1.png',
    ],
    slogan: '100% طحن تقليدي بالبارد — بني ملال',
    shortDesc: 'زيت زيتون طبيعي 100% من منطقة بني ملال — استخراج تقليدي بالمعصرة الحجرية، يحافظ على جودته العالية ونكهته الأصيلة',
    fullDesc: 'زيت الزيتون من Rahiq Bio هو زيت زيتون طبيعي 100% من منطقة بني ملال. نوعية الزيتون المنسارة والحوزية يتم استخراجه بطريقة تقليدية باستخدام المعصرة الحجرية، طحن التقليدي بالبارد مما يحافظ على جودته العالية ونكهته الأصيلة. بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'غني بالدهون الصحية',
      'يدعم صحة القلب',
      'يحتوي على مضادات الأكسدة',
      'مفيد للبشرة والشعر',
    ],
    ingredients: 'زيت زيتون طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف بعيداً عن الضوء — يُفضل إغلاق العبوة جيداً بعد الاستعمال',
    warnings: 'لا توجد مواد مسببة للحساسية • يُحفظ بعيداً عن الأطفال',
    lot: '01-01OLB',
    badge: '100% طبيعي',
    sizes: [
      { label: '1 لتر', price: 50, image: 'assets/images/olive-1.png' },
      { label: '5 لتر', price: 230, image: 'assets/images/olive-2.png' }
    ]
  },
  'jarjir': {
    id: 'jarjir',
    nameAr: 'عسل الجرجير',
    nameFr: 'Miel de Roquette',
    category: 'عسل',
    price: 320,
    image: 'assets/images/jarjir-1.jpg',
    gallery: [
      'assets/images/jarjir-1.jpg',
      'assets/images/jarjir-2.jpg',
      'assets/images/jarjir-3.jpg',
      'assets/images/jarjir-4.jpg',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل الجرجير الطبيعي — مهدئ للأعصاب، يُحسّن النوم، يقوي المناعة ومضاد للبكتيريا',
    fullDesc: 'عسل الجرجير من Rahiq Bio هو عسل طبيعي 100% مفيد للأعصاب ويساعد على الاسترخاء. يساهم في تحسين النوم وتقليل التوتر. يعزز المناعة ويملك خصائص مطهرة ومضادة للبكتيريا. يُستعمل في علاج الالتهابات الخفيفة. منتج مغربي أصيل خاضع لرقابة ONSSA، بدون أي إضافات.',
    benefits: [
      'مفيد للأعصاب ويساعد على الاسترخاء',
      'يساهم في تحسين النوم وتقليل التوتر',
      'يعزز المناعة',
      'يملك خصائص مطهرة ومضادة للبكتيريا',
      'يُستعمل في علاج الالتهابات الخفيفة',
    ],
    ingredients: 'عسل ماردیسیا طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح (مادة مغذية توجد في العسل) • يُنصح بالحذر فقط لمن لديهم حساسية مفرطة من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01ROQ',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 179, image: 'assets/images/jarjir-2.jpg' },
      { label: '1 كيلوغرام', price: 320, image: 'assets/images/jarjir-1.jpg' }
    ]
  },
  'daghmous': {
    id: 'daghmous',
    nameAr: 'عسل الدغموس',
    nameFr: 'Miel de Daghmous',
    category: 'عسل',
    price: 300,
    image: 'assets/images/daghmous-1.jpg',
    gallery: [
      'assets/images/daghmous-1.jpg',
      'assets/images/daghmous-3.jpg',
      'assets/images/daghmous-2.jpg',
      'assets/images/daghmous-4.jpg',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل الدغموس الطبيعي — مقو ممتاز للجسم، مفيد للجهاز التنفسي ويُعزز المناعة',
    fullDesc: 'عسل الدغموس من Rahiq Bio هو مقو طبيعي ممتاز للجسم. يساعد في حالات الربو ومشاكل الجهاز التنفسي. يُعزز المناعة ويساعد في الوقاية من الفيروسات. يُساهم في علاج فقر الدم وتحفيز الطاقة. مفيد للمعدة ومشاكل الهضم. منتج طبيعي خاضع لمراقبة ONSSA، بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'مقو طبيعي ممتاز للجسم',
      'يساعد في حالات الربو ومشاكل الجهاز التنفسي',
      'يُعزز المناعة ويساعد في الوقاية من الفيروسات',
      'يُساهم في علاج فقر الدم وتحفيز الطاقة',
      'مفيد للمعدة ومشاكل الهضم',
    ],
    ingredients: 'عسل دغموس طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح (مادة مغذية توجد في العسل) • يُنصح بالحذر فقط لمن لديهم حساسية مفرطة من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01DAG',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 160, image: 'assets/images/daghmous-3.jpg' },
      { label: '1 كيلوغرام', price: 300, image: 'assets/images/daghmous-1.jpg' }
    ]
  },
  'granola': {
    id: 'granola',
    nameAr: 'جرانولا بالمكسرات',
    nameFr: 'Granola Nuts Mix',
    category: 'مكملات طبيعية',
    price: 90,
    image: 'assets/images/granola-500g.png',
    gallery: [
      'assets/images/granola-500g.png',
      'assets/images/granola-220g.png',
      'assets/images/granola-back-500g.png',
      'assets/images/granola-back-220g.png',
    ],
    slogan: '100% طبيعي — فطور صحي بالمكسرات',
    shortDesc: 'جرانولا طبيعية 100% بالمكسرات والبذور — فطور صحي لذيذ يمنحك الطاقة والنشاط طوال اليوم',
    fullDesc: 'جرانولا بالمكسرات من Rahiq Bio — مزيج طبيعي 100% يجمع بين الشوفان والمكسرات المختارة والبذور الصحية. مصدر غني بالطاقة والبروتين والألياف الطبيعية. مثالي للفطور الصحي أو كسناك يومي للحفاظ على نشاطك وطاقتك. بدون مواد حافظة، بدون إضافات صناعية، منتج مغربي 100%.',
    benefits: [
      'مصدر غني بالطاقة الطبيعية',
      'يحتوي على بروتينات وألياف طبيعية',
      'يساعد على تحسين الهضم',
      'مناسب للرياضيين ونمط الحياة الصحي',
    ],
    ingredients: 'شوفان، لوز، زريعة القرع، زريعة نوار الشمس، كاجو، بندق، بيستاج، زبيب بلدي، مشمش، قطع شوكولاتة، عسل طبيعي',
    usage: 'ملعقتين كبيرتين مع الياغورت كوجبة فطور، أو مع الحليب، أو يتناول مباشرة كسناك صحي',
    storage: 'يحفظ في مكان بارد وجاف بعيداً عن الرطوبة وأشعة الشمس — يُغلق بإحكام بعد الفتح',
    warnings: 'يحتوي على مكسرات — قد يسبب حساسية لمن لديهم حساسية من المكسرات',
    lot: '01-01GRA',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '220 غرام', price: 50, image: 'assets/images/granola-220g.png' },
      { label: '500 غرام', price: 90, image: 'assets/images/granola-500g.png' },
    ]
  },
  'bundle-sante': {
    id: 'bundle-sante',
    nameAr: 'باقة الصحة والطبيعة',
    nameFr: 'Santé & Nature',
    category: 'باقات',
    price: 299,
    image: 'assets/images/bundle-sante-nature.png',
    gallery: [
      'assets/images/bundle-sante-nature.png',
      'assets/images/bundle-sante-jarjir.png',
      'assets/images/bundle-sante-kharroub.png',
      'assets/images/bundle-sante-olive.png',
      'assets/images/bee-pollen.png',
    ],
    slogan: 'وفر 100 درهم — باقة متكاملة من الطبيعة',
    shortDesc: 'باقة متكاملة: عسل الجرجير 500g + عسل الخروب 500g + زيت الزيتون 1L + حبوب اللقاح 50g — بدل 399 درهم بـ 299 درهم فقط',
    fullDesc: 'باقة الصحة والطبيعة من Rahiq Bio — مجموعة متكاملة من أجود المنتجات الطبيعية المغربية في عبوة واحدة. تحتوي على عسل الجرجير 500g، عسل الخروب 500g، زيت الزيتون البكر من بني ملال 1L، وحبوب اللقاح الطبيعية 50g. جميع المنتجات طبيعية 100% بدون مواد حافظة. منتجات مراقبة ومعتمدة من ONSSA.',
    benefits: [
      'عسل الجرجير: يعزز المناعة ويساعد على الراحة والنوم',
      'عسل الخروب: مفيد للهضم ويمنح طاقة طبيعية',
      'زيت الزيتون: غني بالدهون الصحية ومفيد للقلب',
      'حبوب اللقاح: مصدر طاقة وفيتامينات طبيعية',
    ],
    ingredients: 'عسل الجرجير الطبيعي 100% • عسل الخروب الطبيعي 100% • زيت زيتون طبيعي 100% (بني ملال) • حبوب لقاح طبيعية 100%',
    storage: 'يحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس — العسل قد يتبلور بشكل طبيعي وهذا لا يؤثر على الجودة',
    warnings: 'لا يُعطى للأطفال أقل من سنة • قد يحتوي على آثار حبوب اللقاح • يجب الحذر لمن لديهم حساسية من منتجات النحل',
    onssa: 'N° M.28.10.25',
    badge: 'وفر 100 درهم',
    sizes: [{ label: 'الباقة الكاملة', price: 299 }]
  },
  'bee-pollen': {
    id: 'bee-pollen',
    nameAr: 'حبوب اللقاح',
    nameFr: 'Bee Pollen',
    category: 'مكملات طبيعية',
    price: 50,
    image: 'assets/images/bee-pollen.png',
    gallery: ['assets/images/bee-pollen.png'],
    slogan: '100% طبيعي — غذاء النحل الطبيعي',
    shortDesc: 'حبوب لقاح بلدية طبيعية 100% — غنية بالبروتينات والفيتامينات ومضادات الأكسدة، تدعم الطاقة والمناعة',
    fullDesc: 'حبوب اللقاح البلدية من Rahiq Bio هي كريات طبيعية يجمعها النحل من أزهار متنوعة. غنية بالبروتينات والأحماض الأمينية والفيتامينات والمعادن ومضادات الأكسدة. تُعتبر من أكثر الأغذية الطبيعية قيمة غذائية، تدعم النشاط اليومي والمناعة وصحة الجسم بشكل عام. منتج طبيعي 100% بدون إضافات أو مواد حافظة.',
    benefits: [
      'غنية بالبروتينات والأحماض الأمينية والفيتامينات',
      'تدعم الطاقة والنشاط اليومي',
      'غنية بمضادات الأكسدة الطبيعية',
      'تساهم في دعم المناعة والصحة العامة',
    ],
    ingredients: 'حبوب لقاح بلدية طبيعية 100%',
    usage: 'ملعقة صغيرة يومياً — تؤخذ مباشرة أو تُضاف إلى العسل، الزبادي، العصائر أو الشوفان',
    storage: 'يحفظ في مكان جاف وبارد بعيداً عن الرطوبة وأشعة الشمس — يُغلق جيداً بعد كل استعمال',
    warnings: 'غير مناسب لمن يعاني من حساسية تجاه حبوب اللقاح أو منتجات النحل • النساء الحوامل أو المرضعات يُفضل استشارة مختص • يُحفظ بعيداً عن متناول الأطفال',
    badge: 'طبيعي 100%',
    sizes: [{ label: '100 غرام', price: 50 }]
  },
  'psyllium': {
    id: 'psyllium',
    nameAr: 'نخالة القاطونة',
    nameFr: 'Psyllium Husk',
    category: 'مكملات طبيعية',
    price: 65,
    image: 'assets/images/psyllium.png',
    gallery: ['assets/images/psyllium.png'],
    slogan: '100% طبيعي — غني بالألياف الذائبة',
    shortDesc: 'نخالة القاطونة الطبيعية 100% — تحسين الهضم، تنظيم الأمعاء، دعم صحة القلب وتنظيم السكر',
    fullDesc: 'نخالة القاطونة (Psyllium Husk) من Rahiq Bio هي ألياف طبيعية مستخرجة من بذور نبات Plantago ovata. عند مزجها بالماء تكوّن مادة هلامية تساعد على تحسين الهضم وتنظيم حركة الأمعاء بشكل طبيعي. تدعم صحة القلب وتساعد في التحكم بمستويات السكر والكوليسترول ضمن نظام غذائي متوازن. منتج طبيعي 100% معبأ من طرف Rahiq Bio.',
    benefits: [
      'تساعد على تحسين الهضم وتنظيم حركة الأمعاء',
      'تزيد الشعور بالشبع وتساعد على التحكم في الوزن',
      'تساعد على خفض الكوليسترول الضار (LDL)',
      'تساهم في استقرار مستويات السكر بعد الوجبات',
    ],
    ingredients: 'نخالة القاطونة الطبيعية 100% (Psyllium Husk)',
    usage: 'تُمزج ملعقة صغيرة إلى ملعقتين في كوب كبير من الماء أو العصير — تُشرب مباشرة بعد التحريك مع شرب كمية كافية من الماء خلال اليوم',
    storage: 'يحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس — يُغلق جيداً بعد كل استعمال',
    warnings: 'يجب تناولها مع كمية كافية من الماء • لا تُستخدم في حالة صعوبة البلع إلا بعد استشارة مختص • إذا كنت تتناول أدوية يُفضل الفصل بينها وبين القاطونة بساعتين • يُحفظ بعيداً عن متناول الأطفال',
    badge: 'طبيعي 100%',
    sizes: [{ label: '200 غرام', price: 65 }]
  },
  'kharroub': {
    id: 'kharroub',
    nameAr: 'عسل الخروب',
    nameFr: 'Miel de Caroubier',
    category: 'عسل',
    price: 230,
    image: 'assets/images/kharroub-1.png',
    gallery: [
      'assets/images/kharroub-1.png',
      'assets/images/kharroub-4.png',
      'assets/images/kharroub-2.png',
      'assets/images/kharroub-3.png',
    ],
    slogan: '100% طبيعي — 100% شفاء',
    shortDesc: 'عسل الخروب الطبيعي — غني بالمعادن ومضادات الأكسدة، يقوي الجهاز الهضمي ويعزز الطاقة',
    fullDesc: 'عسل الخروب من Rahiq Bio هو عسل طبيعي 100% يُستخرج من أزهار شجرة الخروب. غني بالمعادن ومضادات الأكسدة. يساعد على تقوية الجهاز الهضمي ومفيد في حالات فقر الدم. يعزز الطاقة والنشاط اليومي. منتج طبيعي خاضع لمراقبة ONSSA، بدون أي إضافات أو مواد حافظة.',
    benefits: [
      'غني بالمعادن ومضادات الأكسدة',
      'يساعد على تقوية الجهاز الهضمي',
      'مفيد في حالات فقر الدم',
      'يعزز الطاقة والنشاط اليومي',
    ],
    ingredients: 'عسل خروب طبيعي 100%',
    storage: 'يحفظ في مكان بارد وجاف، بعيداً عن الضوء والحرارة. قد يتبلور العسل بشكل طبيعي، وهذا لا يؤثر على جودته',
    warnings: 'لا إعطي للأطفال أقل من سنة • قد يحتوي على آثار طبيعية من حبوب اللقاح • يُنصح بالحذر لمن لديهم حساسية من منتجات النحل',
    onssa: 'N° M.28.10.25',
    lot: '01-01CAR',
    badge: 'طبيعي 100%',
    sizes: [
      { label: '500 غرام', price: 120, image: 'assets/images/kharroub-1.png' },
      { label: '1 كيلوغرام', price: 230, image: 'assets/images/kharroub-4.png' }
    ]
  }
};

// ===== UPSELL MAP — related products per product =====
const relatedMap = {
  'jarjir':         ['kharroub', 'sidr', 'daghmous', 'bundle-sante'],
  'daghmous':       ['jarjir', 'eucalyptus', 'sidr', 'kharroub'],
  'kharroub':       ['jarjir', 'daghmous', 'aachab', 'bundle-sante'],
  'eucalyptus':     ['zaatar', 'sidr', 'daghmous', 'aachab'],
  'sidr':           ['zaatar', 'eucalyptus', 'jarjir', 'daghmous'],
  'zaatar':         ['sidr', 'eucalyptus', 'limon', 'kharroub'],
  'limon':          ['zaatar', 'aachab', 'kharroub', 'jarjir'],
  'aachab':         ['limon', 'kharroub', 'zaatar', 'eucalyptus'],
  'olive':          ['bundle-sante', 'jarjir', 'kharroub', 'bee-pollen'],
  'shilajit':       ['bee-pollen', 'psyllium', 'energie-royale', 'sidr'],
  'psyllium':       ['shilajit', 'bee-pollen', 'energie-royale', 'aachab'],
  'bee-pollen':     ['shilajit', 'psyllium', 'bundle-sante', 'jarjir'],
  'bundle-sante':   ['jarjir', 'kharroub', 'olive', 'bee-pollen'],
  'amlou-louz':     ['amlou-cacao', 'energie-royale', 'limon', 'kharroub'],
  'amlou-cacao':    ['amlou-louz', 'energie-royale', 'jarjir', 'limon'],
  'energie-royale': ['amlou-cacao', 'granola', 'bee-pollen', 'psyllium'],
  'granola':        ['amlou-cacao', 'energie-royale', 'bee-pollen', 'psyllium'],
};

const moroccanCities = [
  'الدار البيضاء','الرباط','مراكش','فاس','طنجة','أكادير','مكناس','وجدة','القنيطرة','تطوان',
  'سلا','بني ملال','الحسيمة','الجديدة','آسفي','الناظور','خريبكة','سطات','خنيفرة','تازة',
  'الداخلة','العيون','كلميم','ورززات','الرشيدية','إفران','شفشاون','الفقيه بن صالح','برشيد','سيدي سليمان'
];

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== SELECTED SIZES STATE =====
const selectedSizes = {};

function selectSize(productId, sizeIdx) {
  const p = products[productId];
  selectedSizes[productId] = sizeIdx;
  document.querySelectorAll(`[data-pid="${productId}"]`).forEach((btn, i) => {
    btn.classList.toggle('active', i === sizeIdx);
  });
  const priceEl = document.getElementById(`lp-price-${productId}`);
  if (priceEl) priceEl.textContent = p.sizes[sizeIdx].price.toLocaleString('ar-MA');
  const qty = parseInt(document.getElementById(`qty_${productId}`)?.value) || 1;
  updateTotal(p.sizes[sizeIdx].price, qty, productId);
  // Switch main image if size has a dedicated image
  const sizeImg = p.sizes[sizeIdx].image;
  if (sizeImg) {
    const mainImg = document.getElementById(`lp-main-img-${productId}`);
    if (mainImg) {
      mainImg.style.opacity = '0';
      setTimeout(function() { mainImg.src = sizeImg; mainImg.style.opacity = '1'; }, 160);
    }
  }
}

function getCurrentPrice(productId) {
  const p = products[productId];
  const idx = selectedSizes[productId] ?? (p.sizes.length - 1);
  return p.sizes[idx].price;
}

function getCurrentSizeLabel(productId) {
  const p = products[productId];
  const idx = selectedSizes[productId] ?? (p.sizes.length - 1);
  return p.sizes[idx].label;
}

// ===== PRODUCT MODAL =====
function switchGalleryImg(pid, src, btn) {
  const mainImg = document.getElementById(`lp-main-img-${pid}`);
  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 180);
  }
  var strip = btn.closest('.lp-thumbs-strip') || btn.closest('.lp-v2-thumbs');
  if (strip) strip.querySelectorAll('.lp-thumb-btn, .lp-v2-thumb').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function openProduct(productId) {
  const p = products[productId];
  if (!p) return;

  selectedSizes[productId] = p.sizes.length - 1;

  const modal = document.getElementById('productModal');
  const modalInner = document.getElementById('modalInner');
  modalInner.innerHTML = buildProductLanding(p);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  updateTotal(getCurrentPrice(productId), 1, productId);
  document.getElementById('modalContent')?.scrollTo(0, 0);

  // Update URL so each product has its own shareable link
  history.pushState({ product: productId }, p.nameAr, '#' + productId);

  // Show sticky button
  var stickyBuy = document.getElementById('globalStickyBuy');
  var stickyBtn = document.getElementById('globalStickyBtn');
  if (stickyBuy) {
    stickyBuy.style.display = 'block';
    if (stickyBtn) stickyBtn.dataset.pid = productId;
  }
}

function closeProduct() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
  var stickyBuy = document.getElementById('globalStickyBuy');
  if (stickyBuy) stickyBuy.style.display = 'none';
  // Restore clean URL
  if (location.hash) history.pushState({}, '', location.pathname);
}

// Open product directly from URL (e.g. rahiqbio.com/#jarjir)
// Script is at bottom of body so DOM is already ready — run immediately
(function() {
  const hash = location.hash.slice(1);
  if (hash && products[hash]) openProduct(hash);
})();

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
  const modal = document.getElementById('productModal');
  if (e.state && e.state.product) {
    openProduct(e.state.product);
  } else if (modal && modal.classList.contains('open')) {
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
    var stickyBuy = document.getElementById('globalStickyBuy');
    if (stickyBuy) stickyBuy.style.display = 'none';
  }
});

function scrollToOrderForm() {
  var formBox = document.querySelector('.lp-v2-form-box');
  var rightCol = document.querySelector('.lp-v2-right-col');
  var modalContent = document.getElementById('modalContent');
  if (formBox && rightCol && rightCol.scrollHeight > rightCol.clientHeight) {
    rightCol.scrollTo({ top: formBox.offsetTop - 10, behavior: 'smooth' });
  } else if (formBox && modalContent) {
    modalContent.scrollTo({ top: formBox.getBoundingClientRect().top + modalContent.scrollTop - 70, behavior: 'smooth' });
  }
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProduct(); closeSuccess(); }
});

function buildProductLanding(p) {
  const cityOptions = moroccanCities.map(c => `<option value="${c}">${c}</option>`).join('');
  const defaultIdx  = p.sizes.length - 1;
  const defaultPrice = p.sizes[defaultIdx].price;
  const images = p.gallery || [p.image];

  const WA_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  const STAR = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#FED617"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;

  const thumbsHtml = images.map((img, i) => `
    <button type="button" class="lp-v2-thumb ${i === 0 ? 'active' : ''}" onclick="switchGalleryImg('${p.id}','${img}',this)">
      <img src="${img}" alt="">
    </button>`).join('');

  const sizePicker = p.sizes.map((s, i) => `
    <button type="button" class="lp-v2-size-btn${i === defaultIdx ? ' active' : ''}"
      data-pid="${p.id}" data-idx="${i}" onclick="selectSize('${p.id}',${i})">
      <span class="lp-v2-size-w">${s.label}</span>
      <span class="lp-v2-size-p">${s.price} درهم</span>
    </button>`).join('');

  const benefitIcons = [
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/></svg>`,
  ];

  const nutritionSection = p.nutrition ? `
    <div class="lp-nutrition-section">
      <div class="lp-section-header-wrap">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
        <h3 class="lp-sec-title-sm">القيمة الغذائية <small>لكل 100غ</small></h3>
      </div>
      <div class="lp-nut-grid">
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.calories}</span><span class="lp-nut-label">سعرات</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.protein}</span><span class="lp-nut-label">بروتين</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.fat}</span><span class="lp-nut-label">دهون</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.carbs}</span><span class="lp-nut-label">كربوهيدرات</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.sugar}</span><span class="lp-nut-label">سكريات</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.fiber}</span><span class="lp-nut-label">ألياف</span></div>
      </div>
    </div>` : '';

  return `
  <div class="product-landing">

    <!-- HEADER -->
    <div class="lp-page-header">
      <button onclick="closeProduct()" class="lp-back-btn" aria-label="رجوع">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        رجوع
      </button>
      <span class="lp-page-name">${p.nameAr}</span>
      <span class="lp-page-badge">${p.badge}</span>
    </div>

    <!-- MAIN 2-COLUMN GRID -->
    <div class="lp-v2-main">

      <!-- LEFT: CLEAN IMAGES -->
      <div class="lp-v2-imgs-col">
        <div class="lp-v2-img-frame">
          <div class="lp-img-badge">${p.badge}</div>
          <img src="${images[0]}" alt="${p.nameAr}" class="lp-v2-main-img" id="lp-main-img-${p.id}">
        </div>
        ${images.length > 1 ? `<div class="lp-v2-thumbs">${thumbsHtml}</div>` : ''}
      </div>

      <!-- RIGHT: INFO + ORDER FORM -->
      <div class="lp-v2-right-col">

        <!-- Product info -->
        <div class="lp-v2-prod-header">
          <span class="lp-cat-tag">${p.category}</span>
          <h1 class="lp-v2-title">${p.nameAr}</h1>
          <p class="lp-v2-subtitle">${p.nameFr}</p>
          ${p.slogan ? `<div class="lp-slogan lp-slogan--center">${p.slogan}</div>` : ''}
          ${p.onssa ? `<div class="lp-onssa-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> مراقب من ONSSA — ${p.onssa}</div>` : ''}
          <div class="lp-v2-rating">${STAR}${STAR}${STAR}${STAR}${STAR}<span>4.9 · <strong>+127 تقييم</strong></span></div>
        </div>

        <!-- Size picker -->
        <div class="lp-v2-size-section">
          <p class="lp-v2-size-label">اختر الوزن / الحجم</p>
          <div class="lp-v2-sizes">${sizePicker}</div>
        </div>

        <!-- Price -->
        <div class="lp-v2-price-row">
          <span class="lp-v2-price" id="lp-price-${p.id}">${defaultPrice}</span>
          <span class="lp-v2-cur">درهم</span>
          <span class="lp-v2-cod"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> الدفع عند الاستلام</span>
        </div>

        <!-- Benefits as grid box -->
        <div class="lp-v2-ben-grid">
          ${p.benefits.map((b, i) => `
            <div class="lp-v2-ben-item">
              <div class="lp-v2-ben-icon">${benefitIcons[i % 5]}</div>
              <span>${b}</span>
            </div>`).join('')}
        </div>

        <!-- COMPACT ORDER FORM -->
        <div class="lp-v2-form-box">
          <p class="lp-v2-form-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            أكمل طلبك الآن
          </p>
          <form class="lp-v2-form" onsubmit="submitOrder(event,'${p.id}')">
            <div class="lp-v2-form-row">
              <div class="lp-v2-field">
                <label class="lp-v2-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  الاسم الكامل
                </label>
                <input type="text" name="name" placeholder="مثال: أحمد بن علي" required>
              </div>
              <div class="lp-v2-field">
                <label class="lp-v2-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.09 2.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  رقم الهاتف
                </label>
                <input type="tel" name="phone" placeholder="0600 000 000" required>
              </div>
            </div>
            <div class="lp-v2-form-row">
              <div class="lp-v2-field">
                <label class="lp-v2-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  المدينة
                </label>
                <select name="city" required>
                  <option value="">اختر مدينتك</option>
                  ${cityOptions}
                </select>
              </div>
              <div class="lp-v2-field">
                <label class="lp-v2-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  العنوان التفصيلي
                </label>
                <input type="text" name="address" placeholder="الحي، الشارع، رقم الدار..." required>
              </div>
            </div>
            <div class="lp-v2-field">
              <label class="lp-v2-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><line x1="12" y1="7" x2="12" y2="17"/></svg>
                الكمية
              </label>
              <div class="lp-v2-qty">
                <button type="button" class="lp-v2-qty-btn" onclick="changeModalQty('${p.id}',-1)">−</button>
                <input type="number" id="qty_${p.id}" value="1" min="1" max="99" readonly>
                <button type="button" class="lp-v2-qty-btn" onclick="changeModalQty('${p.id}',1)">+</button>
              </div>
            </div>
            <div class="lp-v2-total-bar">
              <span>المجموع الكلي</span>
              <strong id="totalAmount_${p.id}">${defaultPrice} درهم</strong>
            </div>
            <button type="submit" class="lp-v2-submit" id="submitBtn_${p.id}">
              ${WA_SVG} تأكيد الطلب عبر واتساب
            </button>
            <div class="lp-v2-divider">أو تواصل مباشرة</div>
            <a href="#" id="waOrderBtn_${p.id}" class="lp-v2-wa" target="_blank">
              ${WA_SVG} واتساب مباشر
            </a>
          </form>
        </div>

        <!-- Trust signals -->
        <div class="lp-v2-trust">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> جودة مضمونة</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> توصيل سريع</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> دفع عند الاستلام</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/></svg> طبيعي 100%</span>
        </div>
      </div>
    </div>

    <!-- BELOW FOLD: Description -->
    <div class="lp-story-section">
      <div class="lp-story-inner">
        <div class="lp-story-icon">
          <svg width="32" height="32" viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="35" rx="14" ry="10" fill="#FED617"/><ellipse cx="30" cy="26" rx="8" ry="7" fill="#2A4937"/><ellipse cx="20" cy="28" rx="8" ry="4" fill="white" opacity="0.7" transform="rotate(-20 20 28)"/><ellipse cx="40" cy="28" rx="8" ry="4" fill="white" opacity="0.7" transform="rotate(20 40 28)"/></svg>
        </div>
        <h2 class="lp-story-title">ما هو ${p.nameAr}؟</h2>
        <p class="lp-story-text">${p.fullDesc}</p>
      </div>
    </div>

    <!-- BELOW FOLD: Benefits grid 2x2 -->
    <div class="lp-bens-section">
      <h2 class="lp-sec-title">لماذا تختار <span>${p.nameAr}</span>؟</h2>
      <div class="lp-grid-box">
        ${p.benefits.map((b, i) => `
          <div class="lp-grid-item">
            <div class="lp-grid-icon">${benefitIcons[i % 5]}</div>
            <span>${b}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- BELOW FOLD: Details -->
    <div class="lp-details-section">
      ${nutritionSection}
      <!-- Ingredients as grid box -->
      <div class="lp-section-label">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
        المكونات الطبيعية
      </div>
      <div class="lp-grid-box lp-grid-box--sm">
        ${p.ingredients.split('،').map(ing => `
          <div class="lp-grid-item lp-grid-item--ing">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/></svg>
            <span>${ing.trim()}</span>
          </div>`).join('')}
      </div>
      ${(p.storage || p.warnings) ? `
      <div class="lp-details-cards-row">
        ${p.storage ? `
        <div class="lp-storage-card">
          <div class="lp-storage-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div>
          <div><strong>طريقة التخزين</strong><p>${p.storage}</p></div>
        </div>` : ''}
        ${p.warnings ? `
        <div class="lp-warnings-card">
          <div class="lp-warn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
          <div><strong>تحذيرات وتنبيهات</strong><p>${p.warnings}</p></div>
        </div>` : ''}
      </div>` : ''}
    </div>

    ${(function() {
      const ids = (relatedMap[p.id] || []).filter(id => products[id]).slice(0, 4);
      if (!ids.length) return '';
      const STAR_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#FED617"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      const EYE_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
      const cards = ids.map(id => {
        const rp = products[id];
        const minPrice = Math.min(...rp.sizes.map(s => s.price));
        return `
          <div class="lp-upsell-card" onclick="openProduct('${id}')">
            <div class="lp-upsell-img-wrap">
              <img src="${rp.image}" alt="${rp.nameAr}" loading="lazy">
              <div class="lp-upsell-badge">${rp.badge || 'طبيعي'}</div>
              <div class="lp-upsell-overlay">${EYE_SVG}</div>
            </div>
            <div class="lp-upsell-body">
              <p class="lp-upsell-name">${rp.nameAr}</p>
              <p class="lp-upsell-fr">${rp.nameFr}</p>
              <div class="lp-upsell-footer">
                <span class="lp-upsell-price">${minPrice} <small>درهم</small></span>
                <button class="lp-upsell-btn" onclick="event.stopPropagation();openProduct('${id}')">عرض ←</button>
              </div>
            </div>
          </div>`;
      }).join('');
      return `
    <div class="lp-upsell-section">
      <div class="lp-upsell-head">
        <div class="lp-upsell-line"></div>
        <div class="lp-upsell-title-wrap">
          <div class="lp-upsell-icon">${STAR_SVG}</div>
          <span class="lp-upsell-title">منتجات قد تعجبك</span>
          <span class="lp-upsell-sub">Vous pourriez aussi aimer</span>
        </div>
        <div class="lp-upsell-line"></div>
      </div>
      <div class="lp-upsell-grid">${cards}</div>
    </div>`;
    })()}

  </div>`;
}

function changeModalQty(productId, delta) {
  const input = document.getElementById(`qty_${productId}`);
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
  updateTotal(getCurrentPrice(productId), val, productId);
}

function updateTotal(price, qty, productId) {
  const total = price * qty;
  const totalEl = document.getElementById(`totalAmount_${productId}`);
  if (totalEl) totalEl.textContent = total.toLocaleString('ar-MA') + ' درهم';
  const globalPrice = document.getElementById('globalStickyPrice');
  if (globalPrice) globalPrice.textContent = total.toLocaleString('ar-MA') + ' درهم';

  // Update WhatsApp link
  const waBtn = document.getElementById(`waOrderBtn_${productId}`);
  if (waBtn) {
    const p = products[productId];
    const msg = `مرحباً، أريد طلب:\n\n🛒 *${p.nameAr}* (${p.nameFr})\n📦 الكمية: ${qty}\n💰 السعر الإجمالي: ${total} درهم\n\nأرجو التواصل معي لتأكيد الطلب.`;
    waBtn.href = `https://wa.me/212713793867?text=${encodeURIComponent(msg)}`;
  }
}

function submitOrder(e, productId) {
  e.preventDefault();
  const form = e.target;
  const p = products[productId];
  const btn = document.getElementById(`submitBtn_${productId}`);

  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const city = form.querySelector('[name="city"]').value;
  const address = form.querySelector('[name="address"]').value.trim();
  const notes = form.querySelector('[name="notes"]').value.trim();
  const qty   = parseInt(document.getElementById(`qty_${productId}`).value);
  const price = getCurrentPrice(productId);
  const size  = getCurrentSizeLabel(productId);
  const total = price * qty;

  if (!name || !phone || !city || !address) return;

  btn.disabled = true;
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".3"/><path d="M21 12a9 9 0 01-9 9"/></svg> جارٍ الإرسال...`;

  const msg = `🌿 *طلب جديد - Rahiq Bio*\n\n👤 *الاسم:* ${name}\n📞 *الهاتف:* ${phone}\n🏙️ *المدينة:* ${city}\n📍 *العنوان:* ${address}\n\n🛒 *المنتج:* ${p.nameAr} (${p.nameFr})\n📏 *الحجم:* ${size}\n📦 *الكمية:* ${qty}\n💰 *المجموع:* ${total} درهم${notes ? '\n\n📝 *ملاحظات:* ' + notes : ''}`;

  setTimeout(() => {
    window.open(`https://wa.me/212713793867?text=${encodeURIComponent(msg)}`, '_blank');
    closeProduct();
    showSuccess();
    btn.disabled = false;
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> تأكيد الطلب عبر واتساب`;
  }, 800);
}

function showSuccess() {
  const modal = document.getElementById('successModal');
  modal.classList.add('open');
}

function closeSuccess() {
  const modal = document.getElementById('successModal');
  modal.classList.remove('open');
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      mobileMenu.classList.remove('open');
    }
  });
});

// ===== HERO SOUND TOGGLE =====
function _syncSoundBtn(isMuted) {
  const iconMuted = document.getElementById('iconMuted');
  const iconSound = document.getElementById('iconSound');
  const label     = document.getElementById('soundLabel');
  if (iconMuted) iconMuted.style.display = isMuted ? 'block' : 'none';
  if (iconSound) iconSound.style.display  = isMuted ? 'none'  : 'block';
  if (label)     label.textContent        = isMuted ? 'تشغيل الصوت' : 'كتم الصوت';
}

// الحالة الداخلية — دائماً تبدأ مكتومة
var _heroSoundMuted = true;

function toggleHeroSound() {
  const video = document.getElementById('heroVideo');
  if (!video) return;

  _heroSoundMuted = !_heroSoundMuted;

  if (_heroSoundMuted) {
    video.muted = true;
    _syncSoundBtn(true);
  } else {
    video.removeAttribute('muted');
    video.muted = false;
    video.volume = 1;
    _syncSoundBtn(false);
  }
}

// تأكيد الحالة الابتدائية — دائماً مكتوم
setTimeout(function() {
  const video = document.getElementById('heroVideo');
  if (video) { video.muted = true; }
  _syncSoundBtn(true);
}, 300);

// ===== CSS SPIN ANIMATION =====
const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

// ===== FREE-FLYING BEE ENGINE =====
class FreeBee {
  constructor(el, size, speed, phase) {
    this.el  = el;
    this.img = el.querySelector('.free-bee-img');
    this.img.style.width = size + 'px';

    this.W = window.innerWidth;
    this.H = window.innerHeight;

    // Start position — spawn from a random edge
    const edge = Math.floor(Math.random() * 4);
    if (edge === 0) { this.x = Math.random() * this.W; this.y = -size; }
    else if (edge === 1) { this.x = this.W + size; this.y = Math.random() * this.H; }
    else if (edge === 2) { this.x = Math.random() * this.W; this.y = this.H + size; }
    else { this.x = -size; this.y = Math.random() * this.H; }

    this.vx = 0;
    this.vy = 0;
    this.speed   = speed;           // max px/frame
    this.size    = size;
    this.angle   = 0;               // current heading in radians
    this.smoothAngle = 0;

    // Bob cycle offset so two bees don't bob in sync
    this.bobPhase  = phase;
    this.bobAmp    = 3;             // px
    this.bobFreq   = 0.04;         // radians/frame

    this.frame = 0;

    // Pick first waypoint
    this.tx = 0; this.ty = 0;
    this._newTarget();
  }

  _newTarget() {
    // Mix of interior points and just-outside-edge points
    const r = Math.random();
    if (r < 0.75) {
      // inside viewport (stay visible most of the time)
      this.tx = this.size * 2 + Math.random() * (this.W - this.size * 4);
      this.ty = this.size * 2 + Math.random() * (this.H - this.size * 4);
    } else {
      // outside edge — enter/exit effect
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { this.tx = Math.random() * this.W; this.ty = -this.size * 1.5; }
      else if (edge === 1) { this.tx = this.W + this.size; this.ty = Math.random() * this.H; }
      else if (edge === 2) { this.tx = Math.random() * this.W; this.ty = this.H + this.size; }
      else { this.tx = -this.size; this.ty = Math.random() * this.H; }
    }
    // Min distance to prevent zero-length targets
    const d = Math.hypot(this.tx - this.x, this.ty - this.y);
    if (d < 80) this._newTarget();
  }

  update() {
    this.frame++;
    this.W = window.innerWidth;
    this.H = window.innerHeight;

    // Vector toward target
    const dx = this.tx - this.x;
    const dy = this.ty - this.y;
    const dist = Math.hypot(dx, dy);

    // New target when close enough
    if (dist < 60) this._newTarget();

    // Desired velocity (normalised × speed)
    const desVx = (dx / dist) * this.speed;
    const desVy = (dy / dist) * this.speed;

    // Smooth steering (inertia — feels like a real insect)
    this.vx += (desVx - this.vx) * 0.025;
    this.vy += (desVy - this.vy) * 0.025;

    // Bob perpendicular to travel direction
    const travelAngle = Math.atan2(this.vy, this.vx);
    const bob = Math.sin(this.frame * this.bobFreq + this.bobPhase) * this.bobAmp;
    const perpX = -Math.sin(travelAngle) * bob;
    const perpY =  Math.cos(travelAngle) * bob;

    this.x += this.vx + perpX;
    this.y += this.vy + perpY;

    // Heading angle: atan2 + 90° because bee image head points UP (0°=up)
    const targetAngle = Math.atan2(this.vy, this.vx) + Math.PI / 2;

    // Smooth angle interpolation (handle wrap-around)
    let da = targetAngle - this.smoothAngle;
    while (da >  Math.PI) da -= 2 * Math.PI;
    while (da < -Math.PI) da += 2 * Math.PI;
    this.smoothAngle += da * 0.06;

    // Apply transform: position + rotation
    this.el.style.transform =
      `translate(${this.x}px, ${this.y}px) rotate(${this.smoothAngle}rad)`;
  }
}

// Create two bees — disabled on mobile to save battery/CPU
const beeEl1 = document.getElementById('bee1');
const beeEl2 = document.getElementById('bee2');
const isMobile = window.innerWidth < 768;

let bee1, bee2;

if (beeEl1 && beeEl2 && !isMobile) {
  bee1 = new FreeBee(beeEl1, 72, 2.4, 0);
  bee2 = new FreeBee(beeEl2, 55, 1.9, Math.PI);

  let lastBeeFrame = 0;
  function animateBees(ts) {
    if (ts - lastBeeFrame >= 33) { // ~30fps instead of 60fps
      bee1.update();
      bee2.update();
      lastBeeFrame = ts;
    }
    requestAnimationFrame(animateBees);
  }
  requestAnimationFrame(animateBees);

  // Update viewport size on resize
  window.addEventListener('resize', () => {
    if (bee1) { bee1.W = window.innerWidth; bee1.H = window.innerHeight; }
    if (bee2) { bee2.W = window.innerWidth; bee2.H = window.innerHeight; }
  });
}

// ===== REELS PLAYER =====
const reelVideos = document.querySelectorAll('.reel-video');
const reelState = {}; // { index: { playing, muted } }

// Init all reels
reelVideos.forEach((video, i) => {
  reelState[i] = { playing: false, muted: true };

  // Update progress bar while playing
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    const bar = document.getElementById(`progress-${i}`);
    if (bar) bar.style.width = pct + '%';
  });

  // Intersection Observer — auto-play when scrolled into view, pause when out
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
        document.getElementById(`reel-${i}`).classList.add('playing');
        reelState[i].playing = true;
        updatePlayIcon(i, true);
      } else {
        video.pause();
        document.getElementById(`reel-${i}`).classList.remove('playing');
        reelState[i].playing = false;
        updatePlayIcon(i, false);
      }
    });
  }, { threshold: 0.5 });

  io.observe(video);
});

function toggleReel(index) {
  const video = document.querySelector(`.reel-video[data-index="${index}"]`);
  const card = document.getElementById(`reel-${index}`);
  if (!video) return;

  if (reelState[index].playing) {
    video.pause();
    card.classList.remove('playing');
    reelState[index].playing = false;
    updatePlayIcon(index, false);
  } else {
    video.play().catch(() => {});
    card.classList.add('playing');
    reelState[index].playing = true;
    updatePlayIcon(index, true);
  }
}

function toggleSound(index) {
  const video = document.querySelector(`.reel-video[data-index="${index}"]`);
  if (!video) return;

  const muted = !video.muted;
  video.muted = muted;
  reelState[index].muted = muted;

  // Mute all other videos
  if (!muted) {
    reelVideos.forEach((v, i) => {
      if (i !== index) { v.muted = true; reelState[i].muted = true; updateSoundIcon(i, true); }
    });
  }

  updateSoundIcon(index, muted);
}

function updatePlayIcon(index, playing) {
  const btn = document.getElementById(`playBtn-${index}`);
  if (!btn) return;
  btn.innerHTML = playing
    ? `<svg viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>`;
}

function updateSoundIcon(index, muted) {
  const icon = document.getElementById(`soundIcon-${index}`);
  const btn = document.getElementById(`soundBtn-${index}`);
  if (!icon || !btn) return;

  if (muted) {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" opacity="0.5"/>
      <line x1="23" y1="9" x2="17" y2="15" stroke="white" stroke-width="2" opacity="0.5"/>
      <line x1="17" y1="9" x2="23" y2="15" stroke="white" stroke-width="2" opacity="0.5"/>
    `;
    btn.classList.add('muted');
  } else {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    `;
    btn.classList.remove('muted');
  }
}

// ===== CART SYSTEM =====
const cart = [];

function addToCart(productId, btn) {
  const card = document.querySelector(`[data-product="${productId}"]`);
  const activeVariant = card.querySelector('.variant-btn.active');
  if (activeVariant && activeVariant.dataset.soldout === 'true') return;
  const priceEl = card.querySelector('.price-val');
  const nameEl = card.querySelector('.product-name-ar');
  const p = products[productId];

  const name = nameEl.textContent.trim();
  const price = parseInt(priceEl.textContent);
  const weight = activeVariant ? activeVariant.textContent.split('—')[0].trim() : '';
  const img = p ? p.image : '';

  const key = productId + '|' + weight;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id: productId, name, price, weight, img, qty: 1 });
  }

  // Animate button
  btn.classList.add('added');
  btn.textContent = '✓ أضيف!';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> أضف للسلة`;
  }, 1500);

  updateCartUI();
}

function changeQty(key, delta) {
  const idx = cart.findIndex(i => i.key === key);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function removeFromCart(key) {
  const idx = cart.findIndex(i => i.key === key);
  if (idx !== -1) cart.splice(idx, 1);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
}

function checkoutWhatsapp() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let msg = 'السلام عليكم، أريد أن أطلب:\n\n';
  cart.forEach(i => {
    msg += `• ${i.name} (${i.weight}) × ${i.qty} = ${i.price * i.qty} درهم\n`;
  });
  msg += `\nالمجموع الكلي: ${total} درهم`;
  window.open(`https://wa.me/212713793867?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== GOOGLE SHEETS URL — أضف رابطك هنا بعد إعداد Apps Script =====
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxYl94ywHQlf-afAcowhY_m2bgB21zVYz7ATxwZ6YQzJY5U9hNQ4w9lS-UkyLqDdYmCJQ/exec';

// ===== CHECKOUT MODAL =====
function openCheckout() {
  if (cart.length === 0) return;

  // Build items summary
  const summaryEl = document.getElementById('chkSummary');
  if (summaryEl) {
    summaryEl.innerHTML = cart.map(item => `
      <div class="chk-sum-item">
        <img src="${item.img}" alt="${item.name}" class="chk-sum-img" onerror="this.style.background='#f0f4f1';this.style.display='none'">
        <div class="chk-sum-info">
          <div class="chk-sum-name">${item.name}</div>
          <div class="chk-sum-variant">
            ${item.weight}
            <span class="chk-sum-qty">× ${item.qty}</span>
          </div>
        </div>
        <span class="chk-sum-price">${(item.price * item.qty).toLocaleString('ar-MA')} درهم</span>
      </div>`).join('');
  }

  // Update header subtitle
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const headerSub = document.getElementById('chkHeaderSub');
  if (headerSub) headerSub.textContent = `${totalItems} منتج في طلبك`;

  // Calculate totals
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  _updateCheckoutTotals(subtotal);

  // Show modal, close cart
  document.getElementById('cartDrawer').classList.remove('open');
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function _updateCheckoutTotals(subtotal) {
  const cityEl = document.getElementById('chkCity');
  const city = cityEl ? cityEl.value : '';
  const isTanger = city === 'طنجة';
  const shipping = !city ? 0 : (isTanger ? (subtotal >= 150 ? 0 : 20) : (subtotal >= 350 ? 0 : 35));
  const grand = subtotal + shipping;

  const sub = document.getElementById('chkSubtotal');
  const shp = document.getElementById('chkShipping');
  const grd = document.getElementById('chkGrand');
  if (sub) sub.textContent = subtotal + ' درهم';
  if (shp) {
    shp.textContent = !city ? 'اختر المدينة' : (shipping === 0 ? 'مجاني 🎉' : shipping + ' درهم');
    shp.style.color = shipping === 0 && city ? '#25D366' : 'inherit';
  }
  if (grd) grd.textContent = grand + ' درهم';

  // Shipping progress bar — shows after city selected
  const wrap = document.getElementById('chkShipProgressWrap');
  const bar  = document.getElementById('chkShipBarFill');
  const msg  = document.getElementById('chkShipProgressMsg');
  if (!wrap || !bar || !msg) return;
  if (!city) { wrap.style.display = 'none'; return; }

  const threshold = isTanger ? 150 : 350;
  const pct = Math.min((subtotal / threshold) * 100, 100);
  bar.style.width = pct + '%';
  wrap.style.display = 'block';

  if (subtotal >= threshold) {
    bar.className = 'chk-ship-bar-fill chk-ship-bar-fill--done';
    msg.innerHTML = isTanger
      ? '🎉 <strong>مبروك!</strong> توصيل مجاني داخل طنجة'
      : '🎉 <strong>مبروك!</strong> توصيل مجاني لمدينتك';
    msg.className = 'chk-ship-progress-msg chk-ship-progress-msg--free';
  } else {
    bar.className = 'chk-ship-bar-fill';
    const remaining = threshold - subtotal;
    msg.innerHTML = isTanger
      ? `🚚 أضف <strong>${remaining} درهم</strong> للتوصيل المجاني داخل طنجة`
      : `🚚 أضف <strong>${remaining} درهم</strong> للتوصيل المجاني (من ${threshold} درهم)`;
    msg.className = 'chk-ship-progress-msg';
  }
}

function submitCartOrder(e) {
  e.preventDefault();
  if (cart.length === 0) return;

  const nameEl    = document.getElementById('chkName');
  const phoneEl   = document.getElementById('chkPhone');
  const cityEl    = document.getElementById('chkCity');
  const addressEl = document.getElementById('chkAddress');
  const notesEl   = document.getElementById('chkNotes');
  const btn       = document.getElementById('chkSubmitBtn');

  // Validate required fields
  let valid = true;
  [nameEl, phoneEl, cityEl, addressEl].forEach(el => {
    if (!el || !el.value.trim()) { if(el) el.classList.add('invalid'); valid = false; }
    else el.classList.remove('invalid');
  });
  if (!valid) {
    const firstInvalid = document.querySelector('.chk-field .invalid');
    if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const name    = nameEl.value.trim();
  const phone   = phoneEl.value.trim();
  const city    = cityEl.value;
  const address = addressEl.value.trim();
  const notes   = notesEl ? notesEl.value.trim() : '';

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const isTanger = city === 'طنجة';
  const shipping = !city ? 0 : (isTanger ? (subtotal >= 150 ? 0 : 20) : (subtotal >= 350 ? 0 : 35));
  const grand    = subtotal + shipping;

  // Build WhatsApp message
  let msg = `🌿 *طلب جديد - Rahiq Bio*\n\n`;
  msg += `👤 *الاسم:* ${name}\n`;
  msg += `📞 *الهاتف:* ${phone}\n`;
  msg += `🏙️ *المدينة:* ${city}\n`;
  msg += `📍 *العنوان:* ${address}\n\n`;
  msg += `🛒 *المنتجات:*\n`;
  cart.forEach(i => {
    const lineTotal = i.price * i.qty;
    const qty = i.qty > 1 ? `×${i.qty}  ` : ``;
    msg += `  • ${qty}${i.name} (${i.weight}) — ${lineTotal} درهم\n`;
  });
  msg += `\n💰 *المجموع:* ${subtotal} درهم`;
  msg += `\n🚚 *التوصيل:* ${shipping === 0 ? 'مجاني' : shipping + ' درهم'}`;
  msg += `\n✅ *الإجمالي:* ${grand} درهم`;
  if (notes) msg += `\n\n📝 *ملاحظات:* ${notes}`;

  // Loading state
  btn.disabled = true;
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 0.8s linear infinite"><path d="M21 12a9 9 0 11-4-7.5" stroke-linecap="round"/></svg> جارٍ تسجيل الطلب...`;

  // ─── Send to Google Sheets ───
  function finalize() {
    window.open(`https://wa.me/212713793867?text=${encodeURIComponent(msg)}`, '_blank');
    cart.length = 0;
    updateCartUI();
    closeCheckout();
    showSuccess();
    btn.disabled = false;
    btn.innerHTML = originalHTML;
  }

  if (SHEETS_URL) {
    const now = new Date();
    const orderDate = now.toLocaleDateString('ar-MA', { timeZone: 'Africa/Casablanca' })
      + ' ' + now.toLocaleTimeString('ar-MA', { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit' });

    const items = cart.map(i => ({
      name:  `${i.name} (${i.weight})`,
      price: `${i.price} درهم`,
      qty:   i.qty
    }));

    const payload = { date: orderDate, name, phone, city, address, items };

    // إرسال عبر form مخفي → iframe مخفي (يتجاوز مشكلة CORS مع Apps Script)
    let iframe = document.getElementById('_sheetsIframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = '_sheetsIframe';
      iframe.name = '_sheetsIframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = SHEETS_URL;
    form.target = '_sheetsIframe';
    const inp = document.createElement('input');
    inp.type = 'hidden';
    inp.name = 'payload';
    inp.value = JSON.stringify(payload);
    form.appendChild(inp);
    document.body.appendChild(form);
    form.submit();
    setTimeout(() => { if (form.parentNode) form.parentNode.removeChild(form); }, 2000);
    setTimeout(finalize, 800);
  } else {
    setTimeout(finalize, 500);
  }
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  const badge = document.getElementById('cartBadge');
  if (badge) { badge.textContent = count > 0 ? count : ''; }

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = total + ' درهم';

  const footer = document.getElementById('cartFooter');
  if (footer) footer.style.display = cart.length > 0 ? 'block' : 'none';


  const itemsEl = document.getElementById('cartItems');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty-state">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#c5ccc8" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <p>السلة فارغة</p></div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span class="item-variant">${item.weight}</span>
        <span class="item-price">${item.price * item.qty} درهم</span>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeQty('${item.key}', -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.key}', 1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">✕</button>
    </div>
  `).join('');
}

// Update shipping when city changes in checkout
document.addEventListener('change', function(e) {
  if (e.target && e.target.id === 'chkCity') {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    _updateCheckoutTotals(subtotal);
  }
});

// ===== TICKER: pixel-perfect seamless loop =====
function initTicker() {
  const track = document.getElementById('tickerTrack');
  const half  = document.getElementById('tickerHalf');
  if (!track || !half) return;

  // Clone the half once — track = [half][clone]
  const clone = half.cloneNode(true);
  track.appendChild(clone);

  // Measure after layout is stable
  const halfW = half.getBoundingClientRect().width || half.scrollWidth;

  // Set animation to move exactly one half-width in pixels (seamless reset)
  const speed = 110; // px per second
  const dur   = halfW / speed;
  track.style.setProperty('--ticker-move', `-${halfW}px`);
  track.style.setProperty('--ticker-duration', `${dur.toFixed(1)}s`);
  track.classList.add('ticker-ready');
}

// Run after fonts & images are loaded for accurate measurement
if (document.readyState === 'complete') {
  initTicker();
} else {
  window.addEventListener('load', initTicker);
}

// Sold-out state helper
function updateSoldOutState(card) {
  const activeVariant = card.querySelector('.variant-btn.active');
  const addBtn = card.querySelector('.btn-add-cart');
  if (!addBtn) return;
  if (activeVariant && activeVariant.dataset.soldout === 'true') {
    addBtn.classList.add('soldout');
    addBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> نفذ المخزون`;
  } else {
    addBtn.classList.remove('soldout');
    addBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> أضف للسلة`;
  }
}

// Variant price switching
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.variant-btn');
  if (!btn) return;
  const container = btn.closest('.product-variants');
  container.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const card = container.closest('.product-card');
  const priceEl = card.querySelector('.price-val');
  if (priceEl) {
    priceEl.style.transform = 'scale(1.15)';
    priceEl.textContent = btn.dataset.price;
    setTimeout(() => { priceEl.style.transform = ''; }, 200);
  }
  const origValEl = card.querySelector('.price-orig-val');
  if (origValEl && btn.dataset.origPrice) {
    origValEl.textContent = btn.dataset.origPrice;
  }
  updateSoldOutState(card);
});

// Initialize sold-out state on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.product-card').forEach(updateSoldOutState);
});


// ===== MAINTENANCE MODE — تعطيل المنتجات مؤقتاً (ماعدا المنتجات الجاهزة) =====
(function applyMaintenance() {
  const liveProducts = ['jarjir', 'daghmous', 'kharroub', 'eucalyptus', 'sidr', 'zaatar', 'limon', 'aachab', 'olive', 'shilajit', 'psyllium', 'bee-pollen', 'bundle-sante', 'granola', 'energie-royale', 'amlou-louz']; // المنتجات الجاهزة للبيع
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.dataset.product;
    if (!liveProducts.includes(pid)) {
      card.classList.add('maintenance');
    }
  });
})();

// ===== CATEGORY FILTER =====
function filterProducts(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.products-grid .product-card').forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
  });
}
