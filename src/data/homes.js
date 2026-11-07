// ======================================================
// The only file you edit: the agency, the areas and the homes
// Every text has an Arabic (Ar) and an English version
// ======================================================

export const agency = {
  name: "MASKAN",
  nameAr: "مسكن",
  whatsapp: "971500000000", // change to the agent's number
  currency: { en: "AED", ar: "د.إ" },
  city: { en: "Dubai", ar: "دبي" },
};

// Areas with the point the map shows for them
export const areas = {
  marina: { en: "Dubai Marina", ar: "دبي مارينا" },
  downtown: { en: "Downtown Dubai", ar: "وسط مدينة دبي" },
  palm: { en: "Palm Jumeirah", ar: "نخلة جميرا" },
  businessBay: { en: "Business Bay", ar: "الخليج التجاري" },
  jvc: { en: "Jumeirah Village Circle", ar: "قرية جميرا الدائرية" },
  hills: { en: "Dubai Hills", ar: "دبي هيلز" },
  jlt: { en: "Jumeirah Lake Towers", ar: "أبراج بحيرات جميرا" },
  creek: { en: "Dubai Creek Harbour", ar: "خور دبي" },
  jumeirah: { en: "Jumeirah", ar: "جميرا" },
  barsha: { en: "Al Barsha", ar: "البرشاء" },
};

export const types = {
  apartment: { en: "Apartment", ar: "شقة" },
  studio: { en: "Studio", ar: "استوديو" },
  villa: { en: "Villa", ar: "فيلا" },
  townhouse: { en: "Townhouse", ar: "تاون هاوس" },
  penthouse: { en: "Penthouse", ar: "بنتهاوس" },
};

// Every home:
// deal: "rent" (price per year) or "sale"
// beds: 0 means studio. size in square feet. lat / lng: where it is on the map
// image: a photo in public/homes
export const homes = [
  {
    id: 1, deal: "rent", type: "apartment", area: "marina", beds: 2, baths: 2, size: 1250, price: 145000,
    lat: 25.0805, lng: 55.1403, image: "/homes/marina-2br.webp",
    title: "Marina View Apartment", titleAr: "شقة بإطلالة على المارينا",
    about: "Bright apartment on a high floor with floor-to-ceiling windows over the marina.",
    aboutAr: "شقة مشمسة بطابق عالي، بشبابيك من الأرض للسقف على المارينا.",
    features: ["balcony", "pool", "gym", "parking"],
  },
  {
    id: 2, deal: "rent", type: "studio", area: "downtown", beds: 0, baths: 1, size: 480, price: 75000,
    lat: 25.1951, lng: 55.2766, image: "/homes/downtown-studio.webp",
    title: "Burj View Studio", titleAr: "استوديو بإطلالة على البرج",
    about: "Smart studio steps from Dubai Mall, with a direct view of Burj Khalifa.",
    aboutAr: "استوديو ذكي جنب دبي مول، بإطلالة مباشرة على برج خليفة.",
    features: ["furnished", "gym", "pool"],
  },
  {
    id: 3, deal: "sale", type: "villa", area: "palm", beds: 5, baths: 6, size: 7400, price: 18500000,
    lat: 25.1124, lng: 55.139, image: "/homes/palm-villa.webp",
    title: "Beachfront Palm Villa", titleAr: "فيلا على البحر بالنخلة",
    about: "Private beach, infinity pool and open living spaces facing the sea.",
    aboutAr: "شاطئ خاص، بركة إنفينيتي، ومساحات مفتوحة على البحر.",
    features: ["private pool", "beach", "garden", "maid room", "parking"],
  },
  {
    id: 4, deal: "sale", type: "apartment", area: "businessBay", beds: 1, baths: 1, size: 760, price: 1450000,
    lat: 25.1866, lng: 55.262, image: "/homes/businessbay-1br.webp",
    title: "Canal Side 1 Bedroom", titleAr: "شقة غرفة على القناة",
    about: "Modern one bedroom with a canal view, close to Downtown.",
    aboutAr: "شقة غرفة نوم عصرية بإطلالة على القناة، قريبة من وسط المدينة.",
    features: ["balcony", "pool", "gym"],
  },
  {
    id: 5, deal: "rent", type: "townhouse", area: "jvc", beds: 3, baths: 3, size: 2100, price: 120000,
    lat: 25.0606, lng: 55.2091, image: "/homes/jvc-townhouse.webp",
    title: "Family Townhouse", titleAr: "تاون هاوس للعائلة",
    about: "Quiet community townhouse with a small garden and parks nearby.",
    aboutAr: "تاون هاوس بمجمع هادي، مع حديقة صغيرة وحدائق قريبة.",
    features: ["garden", "parking", "kids play area"],
  },
  {
    id: 6, deal: "sale", type: "villa", area: "hills", beds: 4, baths: 5, size: 4300, price: 6200000,
    lat: 25.1031, lng: 55.2437, image: "/homes/hills-villa.webp",
    title: "Golf Course Villa", titleAr: "فيلا على ملعب الغولف",
    about: "Contemporary villa overlooking the golf course, minutes from schools.",
    aboutAr: "فيلا عصرية على ملعب الغولف، دقايق من المدارس.",
    features: ["private pool", "garden", "maid room", "parking"],
  },
  {
    id: 7, deal: "rent", type: "apartment", area: "jlt", beds: 1, baths: 1, size: 820, price: 82000,
    lat: 25.0693, lng: 55.1418, image: "/homes/jlt-1br.webp",
    title: "Lake View 1 Bedroom", titleAr: "شقة غرفة على البحيرة",
    about: "Cozy apartment by the lake, next to the metro station.",
    aboutAr: "شقة دافية جنب البحيرة، وجنب محطة المترو.",
    features: ["balcony", "gym", "metro nearby"],
  },
  {
    id: 8, deal: "sale", type: "apartment", area: "creek", beds: 2, baths: 2, size: 1180, price: 2350000,
    lat: 25.201, lng: 55.346, image: "/homes/creek-2br.webp",
    title: "Creek Waterfront 2 Bedroom", titleAr: "شقة غرفتين على الخور",
    about: "New tower on the waterfront with views of the creek and the skyline.",
    aboutAr: "برج جديد على الواجهة البحرية، بإطلالة على الخور والمدينة.",
    features: ["balcony", "pool", "gym", "parking"],
  },
  {
    id: 9, deal: "rent", type: "villa", area: "jumeirah", beds: 4, baths: 4, size: 5200, price: 380000,
    lat: 25.2048, lng: 55.242, image: "/homes/jumeirah-villa.webp",
    title: "Classic Jumeirah Villa", titleAr: "فيلا كلاسيك بجميرا",
    about: "Arabic-style villa with a private pool, close to the beach.",
    aboutAr: "فيلا بطابع عربي مع بركة خاصة، قريبة من البحر.",
    features: ["private pool", "garden", "maid room", "parking"],
  },
  {
    id: 10, deal: "rent", type: "apartment", area: "barsha", beds: 3, baths: 3, size: 1900, price: 135000,
    lat: 25.1136, lng: 55.1966, image: "/homes/barsha-3br.webp",
    title: "Spacious Family Apartment", titleAr: "شقة واسعة للعائلة",
    about: "Large three bedroom near Mall of the Emirates and schools.",
    aboutAr: "شقة 3 غرف كبيرة قريبة من مول الإمارات والمدارس.",
    features: ["balcony", "parking", "maid room"],
  },
  {
    id: 11, deal: "sale", type: "penthouse", area: "downtown", beds: 4, baths: 5, size: 5600, price: 12900000,
    lat: 25.1985, lng: 55.2721, image: "/homes/downtown-penthouse.webp",
    title: "Downtown Sky Penthouse", titleAr: "بنتهاوس بالسما وسط المدينة",
    about: "Double-height living room and a private terrace with city views.",
    aboutAr: "صالة بارتفاع طابقين وتراس خاص بإطلالة على المدينة.",
    features: ["terrace", "private pool", "maid room", "parking"],
  },
  {
    id: 12, deal: "sale", type: "studio", area: "marina", beds: 0, baths: 1, size: 450, price: 850000,
    lat: 25.0838, lng: 55.1446, image: "/homes/marina-studio.webp",
    title: "Marina Studio with Balcony", titleAr: "استوديو بالمارينا مع بلكونة",
    about: "Stylish studio with a balcony, a great first investment.",
    aboutAr: "استوديو أنيق مع بلكونة، أحلى أول استثمار.",
    features: ["balcony", "pool", "gym"],
  },
];

// Feature names in Arabic
export const featuresAr = {
  balcony: "بلكونة", pool: "بركة سباحة", gym: "نادي رياضي", parking: "موقف سيارة", furnished: "مفروشة",
  "private pool": "بركة خاصة", beach: "شاطئ خاص", garden: "حديقة", "maid room": "غرفة خادمة",
  "kids play area": "ألعاب أطفال", "metro nearby": "جنب المترو", terrace: "تراس",
};
