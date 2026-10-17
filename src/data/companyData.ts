import { Language } from './translations';

export interface LocalizedText {
  el: string;
  en: string;
}

export interface ServiceItem {
  id: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  iconName: string;
  startingPrice: number;
  popular?: boolean;
  features: LocalizedText[];
  idealFor: LocalizedText;
  durationEstimate: LocalizedText;
}

export interface ReviewItem {
  id: string;
  name: string;
  city: LocalizedText;
  avatar: string;
  rating: number;
  date: LocalizedText;
  service: LocalizedText;
  text: LocalizedText;
  originalLang: 'el' | 'en';
  verified: boolean;
  helpfulCount: number;
}

export interface PricingPlan {
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  monthlyPrice: number;
  oneTimePrice: number;
  popular?: boolean;
  features: { text: LocalizedText; included: boolean }[];
  recommendedFor: LocalizedText;
}

export interface FaqItem {
  q: LocalizedText;
  a: LocalizedText;
}

export const COMPANY_CONFIG = {
  name: "Maxclean",
  shortName: "Maxclean",
  phone: "+357 96 295989",
  displayPhone: "+357 96 295989",
  tel: "+35796295989",
  whatsappNumber: "+35796295989",
  email: "maximusclean2022@gmail.com",
  address: "Alvertou, Paphos 8015, Cyprus",
  googleMapsUrl: "https://maps.app.goo.gl/YEJXpkEGdQhoGV2m9?g_st=ac",
  tagline: "Feel Your Way For Freshness",
  ceo: {
    name: "Sarah Jenkins",
    role: {
      el: "Ιδρυτής & Επικεφαλής Επιθεώρησης",
      en: "Founder & Head of Operations",
    },
  },
  hours: {
    el: "Δευτέρα – Σάββατο: 08:00 – 19:00 (Κυριακή: Κατόπιν συνεννόησης)",
    en: "Mon – Sat: 08:00 – 19:00 (Sun: By appointment)",
  },
  yearFounded: 2022,
  rating: "5.0",
  reviewCount: 250,
  stats: {
    happyClients: "800+",
    awardsReceived: "180+",
    projectsCompleted: "1,000+",
    expertCleaners: "123+",
    repeatClients: "400+",
    satisfactionRate: "100%",
  },
};

export const CYPRUS_DISTRICTS = [
  { id: 'nicosia', name: { el: 'Λευκωσία (Nicosia)', en: 'Nicosia (Λευκωσία)' }, keyCity: 'Nicosia' },
  { id: 'limassol', name: { el: 'Λεμεσός (Limassol)', en: 'Limassol (Λεμεσός)' }, keyCity: 'Limassol' },
  { id: 'larnaca', name: { el: 'Λάρνακα (Larnaca)', en: 'Larnaca (Λάρνακα)' }, keyCity: 'Larnaca' },
  { id: 'paphos', name: { el: 'Πάφος (Paphos)', en: 'Paphos (Πάφος)' }, keyCity: 'Paphos' },
  { id: 'famagusta', name: { el: 'Αμμόχωστος (Famagusta)', en: 'Famagusta (Αμμόχωστος)' }, keyCity: 'Famagusta' },
];

export const SERVICE_AREAS = [
  "Nicosia (Λευκωσία)",
  "Limassol (Λεμεσός)",
  "Larnaca (Λάρνακα)",
  "Paphos (Πάφος)",
  "Famagusta (Αμμόχωστος)",
  "Ayia Napa (Αγία Νάπα)",
  "Protaras (Πρωταράς)",
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "home-cleaning",
    title: { el: "Γενικός Καθαρισμός Σπιτιού", en: "Home Cleaning" },
    tagline: { el: "Τακτική φροντίδα & υγιεινή για κάθε σπίτι", en: "Routine sparkle for living spaces" },
    description: {
      el: "Ολοκληρωμένο ξεσκόνισμα, ηλεκτρική σκούπα, σφουγγάρισμα, απολύμανση επιφανειών και φροντίδα κουζίνας & μπάνιου προσαρμοσμένα στις ανάγκες σας.",
      en: "Room-by-room dusting, vacuuming, surface sanitization, and kitchen/bathroom care tailored to your daily household schedule."
    },
    iconName: "Home",
    startingPrice: 35,
    popular: false,
    features: [
      { el: "Ξεσκόνισμα όλων των επιφανειών, επίπλων και φωτιστικών", en: "Dusting all surfaces, furniture & fixtures" },
      { el: "Σχολαστική απολύμανση πάγκων κουζίνας, νεροχύτη και εστιών", en: "Sanitization of kitchen counters, sink & stove" },
      { el: "Καθαρισμός αλάτων σε μπάνια, τουαλέτες και πλακάκια", en: "Descaling and disinfection of bathrooms & tiles" },
      { el: "Σκούπισμα και σφουγγάρισμα όλων των δαπέδων", en: "Vacuuming and damp washing of all floors" },
      { el: "Άδειασμα καλάθων και στρώσιμο κρεβατιών", en: "Bin emptying and linen organization" },
    ],
    idealFor: { el: "Οικογένειες, πολυάσχολους επαγγελματίες και ιδιοκτήτες κατοικιών", en: "Families, busy professionals, and homeowners" },
    durationEstimate: { el: "2 – 3.5 Ώρες", en: "2 – 3.5 Hours" },
  },
  {
    id: "deep-cleaning",
    title: { el: "Βαθύς Καθαρισμός", en: "Deep Cleaning" },
    tagline: { el: "Σχολαστικός καθαρισμός από γωνία σε γωνία", en: "Intensive corner-to-corner restoration" },
    description: {
      el: "Ενδελεχής καθαρισμός που φτάνει στα πιο δυσπρόσιτα σημεία: πίσω από συσκευές, εσωτερικό φούρνου/ψυγείου, σοβατεπί, αρμούς και άλατα.",
      en: "Thorough top-to-bottom scrub targeting grime behind appliances, inside ovens, skirting boards, tile grout, and hard water scale."
    },
    iconName: "Sparkles",
    startingPrice: 75,
    popular: true,
    features: [
      { el: "Καθαρισμός στο εσωτερικό φούρνου, μικροκυμάτων και ψυγείου", en: "Inside oven, microwave & refrigerator detailing" },
      { el: "Τρίψιμο αρμών πλακιδίων και αφαίρεση επίμονων αλάτων", en: "Scrubbing tile grout lines and mineral lime scale" },
      { el: "Σοβατεπί, κάσες θυρών, διακόπτες και πόμολα", en: "Skirting boards, doorframes, switches and handles" },
      { el: "Καθαρισμός κάτω από έπιπλα, ανεμιστήρες οροφής και γρίλιες", en: "Under-furniture vacuuming, ceiling fans and AC vents" },
      { el: "Γυάλισμα εξωτερικών ντουλαπιών και συσκευών", en: "Cabinet exterior degreasing and polishing" },
    ],
    idealFor: { el: "Εποχιακός καθαρισμός, ανοιξιάτικη φροντίδα ή πρώτη επίσκεψη", en: "Seasonal resets, spring cleaning, or first-time service" },
    durationEstimate: { el: "4 – 6 Ώρες", en: "4 – 6 Hours" },
  },
  {
    id: "airbnb-holiday",
    title: { el: "Εξοχικά & Airbnb Καταλύματα", en: "Holiday Home / Airbnb" },
    tagline: { el: "Άμεση προετοιμασία για 5-star κριτικές φιλοξενίας", en: "Turnover cleaning for 5-star guest reviews" },
    description: {
      el: "Ειδικά σχεδιασμένη υπηρεσία για ιδιοκτήτες και διαχειριστές τουριστικών καταλυμάτων στην Κύπρο. Ταχύτητα, αλλαγή κλινοσκεπασμάτων, έλεγχος ζημιών και αστραφτερή καθαριότητα.",
      en: "Specialized turnover service for Cyprus holiday villa owners and Airbnb hosts: fast linen turnarounds, amenities restocking, and immaculate readiness."
    },
    iconName: "CheckCircle2",
    startingPrice: 65,
    popular: true,
    features: [
      { el: "Αλλαγή και στρώσιμο κλινοσκεπασμάτων & πετσετών ξενοδοχειακού τύπου", en: "Fresh hotel-style bed linen changing and towel dressing" },
      { el: "Απολύμανση κουζίνας, πλύσιμο πιάτων και προετοιμασία σκευών", en: "Kitchen sanitization, dishwashing & utensil setup" },
      { el: "Καθαρισμός μπαλκονιών, βεράντας, εξωτερικών επίπλων και ψησταριάς", en: "Balcony, patio, outdoor furniture, and BBQ wipe-down" },
      { el: "Αναπλήρωση αναλωσίμων (σαπούνια, χαρτικά) και άμεσος οπτικός έλεγχος", en: "Amenities replenishment and visual inventory damage check" },
      { el: "Αποστολή φωτογραφιών ολοκλήρωσης στον ιδιοκτήτη", en: "Completion photo verification sent to property manager" },
    ],
    idealFor: { el: "Ιδιοκτήτες Airbnb, τουριστικές επαύλεις και εξοχικά σπίτια", en: "Airbnb hosts, vacation villas, and coastal apartments" },
    durationEstimate: { el: "3 – 5 Ώρες", en: "3 – 5 Hours" },
  },
  {
    id: "post-construction",
    title: { el: "Μετά από Ανακαίνιση / Κατασκευή", en: "Post-Construction Cleaning" },
    tagline: { el: "Απομάκρυνση σκόνης, μπογιών και υπολειμμάτων", en: "Dust, paint & debris removal after renovations" },
    description: {
      el: "Ειδικός βιομηχανικός καθαρισμός μετά από εργασίες ανακαίνισης ή οικοδομής. Αφαίρεση λεπτής σκόνης γύψου, υπολειμμάτων σιλικόνης, τσιμέντου και χρωμάτων.",
      en: "Industrial post-renovation cleanup: extraction of fine plaster dust, paint splatters, silicones, and adhesive residue from all new surfaces."
    },
    iconName: "Flame",
    startingPrice: 110,
    popular: false,
    features: [
      { el: "Ειδική αναρρόφηση λεπτής σκόνης με επαγγελματικά φίλτρα HEPA", en: "HEPA filtration extraction of fine gypsum & cement dust" },
      { el: "Αφαίρεση μπογιών, αυτοκόλλητων ταινιών και σιλικόνης από τζάμια/κουφώματα", en: "Paint and tape residue removal from glass and aluminum frames" },
      { el: "Πλύσιμο και βαθύς καθαρισμός όλων των νέων δαπέδων", en: "Intensive machine wash of new tiled or parquet flooring" },
      { el: "Καθαρισμός εσωτερικού όλων των νέων ντουλαπιών και συρταριών", en: "Detailed wipe-down inside all new closets, drawers & cabinets" },
      { el: "Χώρος έτοιμος για άμεση επίπλωση και κατοίκηση", en: "Ready-to-inhabit inspection finish" },
    ],
    idealFor: { el: "Νεόδμητα διαμερίσματα, κατοικίες μετά από ανακαίνιση και εργολάβους", en: "Newly built apartments, renovated homes, and contractors" },
    durationEstimate: { el: "5 – 8 Ώρες", en: "5 – 8 Hours" },
  },
  {
    id: "office-commercial",
    title: { el: "Γραφεία & Επιχειρήσεις", en: "Office & Commercial" },
    tagline: { el: "Υγιεινό & παραγωγικό επαγγελματικό περιβάλλον", en: "Productive, healthy work environments" },
    description: {
      el: "Τακτικός ή περιοδικός καθαρισμός εταιρικών γραφείων, ιατρείων, δικηγορικών γραφείων και καταστημάτων στην Κύπρο. Ευέλικτα ωράρια χωρίς να διακόπτεται η εργασία σας.",
      en: "Scheduled cleaning for corporate offices, clinics, law firms, and commercial spaces across Cyprus. Flexible scheduling with zero workday disruption."
    },
    iconName: "Building2",
    startingPrice: 80,
    popular: false,
    features: [
      { el: "Απολύμανση γραφείων, υπολογιστών και κοινόχρηστων χώρων", en: "Disinfection of workstations, keyboards & conference rooms" },
      { el: "Υγιεινή κουζίνας προσωπικού και καθαρισμός συσκευών", en: "Staff kitchenette degreasing and coffee station hygiene" },
      { el: "Απολύμανση τουαλετών και αναπλήρωση χαρτικών", en: "Restroom sterilization and consumable restocking" },
      { el: "Σκούπισμα μοκετών και περιποίηση επαγγελματικών δαπέδων", en: "Commercial carpet vacuuming and floor buffing" },
      { el: "Εξυπηρέτηση εκτός ωραρίου εργασίας (πρωί ή απόγευμα)", en: "After-hours or early morning flexible visits" },
    ],
    idealFor: { el: "Εταιρικά γραφεία, ιατρεία, ινστιτούτα και καταστήματα", en: "Corporate offices, law firms, clinics, and studios" },
    durationEstimate: { el: "Ευέλικτο Πρόγραμμα", en: "Custom Schedule" },
  },
  {
    id: "move-in-out",
    title: { el: "Καθαρισμός Μετακόμισης", en: "Move-In / Move-Out" },
    tagline: { el: "Εγγύηση επιστροφής εγγύησης ενοικίου", en: "Guaranteed lease deposit refund clean" },
    description: {
      el: "Πλήρης καθαρισμός για ενοικιαστές και ιδιοκτήτες που παραδίδουν ή παραλαμβάνουν ακίνητο, ικανοποιώντας τις πιο αυστηρές απαιτήσεις επιθεώρησης.",
      en: "Exhaustive turnover clean for tenants and landlords, fulfilling strict tenancy inspection guidelines for a guaranteed deposit refund."
    },
    iconName: "Layers",
    startingPrice: 90,
    popular: false,
    features: [
      { el: "Καθαρισμός εσωτερικά και εξωτερικά σε όλα τα άδεια ντουλάπια & συρτάρια", en: "Inside and outside wipe-down of all empty closets and drawers" },
      { el: "Βαθύς καθαρισμός φούρνου, απορροφητήρα και ψυγείου", en: "Deep degreasing of ovens, range hoods, and refrigerators" },
      { el: "Καθαρισμός κουφωμάτων, τζαμιών και οδηγών παραθύρων", en: "Window glass, frames, and sliding track detailing" },
      { el: "Απολύμανση μπάνιων, ντους και ειδών υγιεινής", en: "Full descaling and sterilization of sanitary fittings" },
      { el: "Έλεγχος παράδοσης με εγγύηση ικανοποίησης", en: "Move-in ready inspection guarantee" },
    ],
    idealFor: { el: "Ενοικιαστές, ιδιοκτήτες και κτηματομεσίτες", en: "Tenants, landlords, and real estate agencies" },
    durationEstimate: { el: "4 – 7 Ώρες", en: "4 – 7 Hours" },
  },
  {
    id: "carpet-upholstery",
    title: { el: "Βιολογικός Καθαρισμός Σαλονιών & Στρωμάτων", en: "Carpet & Upholstery" },
    tagline: { el: "Απομάκρυνση ακάρεων, λεκέδων και οσμών", en: "Revitalize fibers, remove dust mites & stains" },
    description: {
      el: "Επαγγελματικός βιολογικός καθαρισμός σαλονιών, καναπέδων, στρωμάτων και χαλιών με θερμή εκχύλιση. Εξαλείφει ακάρεα, σκόνη και αλλεργιογόνα χωρίς τοξικά χημικά.",
      en: "Professional steam extraction cleaning for sofas, armchairs, mattresses, and carpets. Removes dust mites, allergens, and pet odors with quick-dry tech."
    },
    iconName: "ShieldCheck",
    startingPrice: 45,
    popular: false,
    features: [
      { el: "Ειδική θεραπεία κατά των ακάρεων σκόνης και των αλλεργιογόνων", en: "Specialized dust mite and allergen neutralization" },
      { el: "Θερμή εκχύλιση με πιστοποιημένα βιολογικά καθαριστικά", en: "High-temperature injection-extraction with bio-cleaners" },
      { el: "Αφαίρεση δύσκολων λεκέδων (καφές, κρασί, κατοικίδια)", en: "Targeted enzyme stain lifting for wine, coffee & pet stains" },
      { el: "Τεχνολογία ταχείας ξήρανσης (στεγνό σε 2-3 ώρες)", en: "Rapid dry airflow technology (ready in 2-3 hours)" },
      { el: "Ασφαλές για βρέφη και άτομα με αναπνευστικές ευαισθησίες", en: "Safe for babies and sensitive individuals" },
    ],
    idealFor: { el: "Σπίτια με κατοικίδια, άτομα με αλλεργίες και στρώματα ύπνου", en: "Homes with pets, children, or allergy sufferers" },
    durationEstimate: { el: "1.5 – 3 Ώρες", en: "1.5 – 3 Hours" },
  },
  {
    id: "windows-glass",
    title: { el: "Τζάμια & Υαλοπίνακες", en: "Windows & Glass" },
    tagline: { el: "Κρυστάλλινη διαύγεια χωρίς γραμμές και άλατα", en: "Crystal clear, streak-free natural views" },
    description: {
      el: "Καθαρισμός εσωτερικών και εξωτερικών τζαμιών, μεγάλων συρόμενων υαλοπινάκων, μπαλκονόπορτων και κάγκελων γυαλιού με απιονισμένο νερό.",
      en: "Interior and reachable exterior glass cleaning for large patio doors, balustrades, and shopfronts using deionized pure water."
    },
    iconName: "Droplets",
    startingPrice: 35,
    popular: false,
    features: [
      { el: "Καθαρισμός τζαμιών εσωτερικά και εξωτερικά", en: "Interior and exterior pane scrub & squeegee" },
      { el: "Σχολαστικός καθαρισμός οδηγών αλουμινίου και σιτών", en: "Aluminum sliding track vacuuming & insect screen washing" },
      { el: "Αφαίρεση αλάτων και κηλίδων από τη βροχή και τη σκόνη", en: "Removal of rain spots, dust film, and hard water residue" },
      { el: "Καθαρισμός γυάλινων κάγκελων πισίνας και βεράντας", en: "Glass veranda & swimming pool balustrade detailing" },
      { el: "Υδροφοβικό φινίρισμα που διαρκεί περισσότερο", en: "Hydrophobic streak-resistant protective finish" },
    ],
    idealFor: { el: "Ηλιόλουστες κατοικίες, επαύλεις με θέα και βιτρίνες", en: "Sunny residences, sea-view villas, and retail storefronts" },
    durationEstimate: { el: "1 – 2.5 Ώρες", en: "1 – 2.5 Hours" },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: { el: "Βασικό (Basic Clean)", en: "Basic Clean" },
    tagline: { el: "Ιδανικό για τακτική συντήρηση διαμερισμάτων", en: "Essential touch-up for studios & apartments" },
    monthlyPrice: 35,
    oneTimePrice: 45,
    features: [
      { text: { el: "Ξεσκόνισμα όλων των βασικών χώρων και επίπλων", en: "Surface dusting in all main living rooms" }, included: true },
      { text: { el: "Σκούπισμα & σφουγγάρισμα δαπέδων", en: "Floor sweeping, vacuuming & damp mopping" }, included: true },
      { text: { el: "Καθαρισμός πάγκων κουζίνας, νεροχύτη και εστιών", en: "Kitchen countertops, stovetop & sink wipe-down" }, included: true },
      { text: { el: "Απολύμανση τουαλέτας, καθρεφτών και νιπτήρα", en: "Toilet, mirror & bathroom sink sanitization" }, included: true },
      { text: { el: "Άδειασμα καλάθων απορριμμάτων", en: "Trash emptying & fresh bag replacement" }, included: true },
      { text: { el: "Εσωτερικός καθαρισμός φούρνου & ψυγείου", en: "Inside oven & refrigerator cleaning" }, included: false },
      { text: { el: "Τρίψιμο αρμών & αφαίρεση επίμονων αλάτων", en: "Deep grout descaling & wall spots" }, included: false },
      { text: { el: "Οδηγοί παραθύρων και σήτες", en: "Interior window tracks & insect screens" }, included: false },
    ],
    recommendedFor: { el: "Τακτική εβδομαδιαία συντήρηση για 1-2 υπνοδωμάτια", en: "Routine weekly maintenance for 1-2 bedroom spaces" },
  },
  {
    id: "standard",
    name: { el: "Πλήρες (Standard Clean)", en: "Standard Clean" },
    tagline: { el: "Η πιο δημοφιλής επιλογή για ολοκληρωμένη φροντίδα", en: "Our most popular comprehensive home rejuvenation" },
    monthlyPrice: 75,
    oneTimePrice: 95,
    popular: true,
    features: [
      { text: { el: "Όλα όσα περιλαμβάνει το Βασικό Πακέτο", en: "Everything in Basic Clean included" }, included: true },
      { text: { el: "Πλήρης απομάκρυνση αλάτων μπάνιου & ντουζιέρας", en: "Full bathroom deep descaling & bathtub scrub" }, included: true },
      { text: { el: "Εσωτερικό μικροκυμάτων & γυάλισμα ηλεκτρικών συσκευών", en: "Inside microwave & exterior appliance buffing" }, included: true },
      { text: { el: "Αλλαγή σεντονιών και στρώσιμο κρεβατιών", en: "Bed linen changing & bed dressing" }, included: true },
      { text: { el: "Σοβατεπί, πόμολα θυρών και διακόπτες φωτός", en: "Skirting boards, light switches & doorknob sanitization" }, included: true },
      { text: { el: "Αρωματοθεραπεία χώρου με βιολογικά αιθέρια έλαια", en: "Eco-friendly botanical scent aromatherapy" }, included: true },
      { text: { el: "Εσωτερικός καθαρισμός ψυγείου & κατάψυξης", en: "Inside refrigerator interior detailing" }, included: false },
      { text: { el: "Βιολογικός καθαρισμός καναπέ με εκχύλιση", en: "Deep steam upholstery extraction" }, included: false },
    ],
    recommendedFor: { el: "Διαμερίσματα & κατοικίες 2-3 υπνοδωματίων", en: "Apartments & 2-3 bedroom homes wanting a sparkling reset" },
  },
  {
    id: "premium",
    name: { el: "Βαθύ & Πολυτελές (Premium Deep)", en: "Premium Deep" },
    tagline: { el: "Κορυφαίος σχολαστικός καθαρισμός από την κορυφή ως τα νύχια", en: "Top-to-bottom white-glove luxury restoration" },
    monthlyPrice: 130,
    oneTimePrice: 165,
    features: [
      { text: { el: "Όλα όσα περιλαμβάνει το Πλήρες Πακέτο", en: "Everything in Standard Clean included" }, included: true },
      { text: { el: "Εσωτερικό φούρνου, απορροφητήρα και ψυγείου", en: "Inside oven degreasing & refrigerator scrub" }, included: true },
      { text: { el: "Τζάμια εσωτερικά & εξωτερικά με καθαρισμό οδηγών", en: "Interior & reachable exterior glass and track scrubbing" }, included: true },
      { text: { el: "Τρίψιμο αρμών και απομάκρυνση αλάτων σε βάθος", en: "Tile grout bleaching & mineral deposit removal" }, included: true },
      { text: { el: "Καθαρισμός πίσω & κάτω από έπιπλα", en: "Under-furniture vacuuming & cabinet fronts" }, included: true },
      { text: { el: "Γρίλιες κλιματιστικών και ανεμιστήρες οροφής", en: "Air conditioner vents & ceiling fan blades" }, included: true },
      { text: { el: "Προτεραιότητα κρατήσεων με επικεφαλής επόπτη", en: "Priority VIP booking slot with team supervisor" }, included: true },
      { text: { el: "Δωρεάν εγγύηση επανελέγχου εντός 48 ωρών", en: "Free 48-hour satisfaction guarantee reclean" }, included: true },
    ],
    recommendedFor: { el: "Μεγάλες κατοικίες, επαύλεις, εξοχικά και βαθύς ετήσιος καθαρισμός", en: "Large residences, luxury villas, or seasonal deep reset" },
  },
];

export const GOOGLE_REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Γιώργος Παπαδόπουλος",
    city: { el: "Λεμεσός", en: "Limassol" },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: { el: "πριν από 3 μέρες", en: "3 days ago" },
    service: { el: "Βαθύς Καθαρισμός", en: "Deep Cleaning" },
    text: {
      el: "Η Maxclean έκανε φανταστική δουλειά στο σπίτι μας στη Λεμεσό! Ήρθαν ακριβώς στην ώρα τους, με σύγχρονα οικολογικά υλικά χωρίς ενοχλητικές μυρωδιές χημικών. Ο φούρνος και τα τζάμια έγιναν σαν καινούργια. Συστήνω ανεπιφύλακτα!",
      en: "Maxclean did a fantastic job at our home in Limassol! They arrived exactly on time with modern eco-friendly products without unpleasant chemical smells. The oven and windows look brand new. Highly recommended!"
    },
    originalLang: 'el',
    verified: true,
    helpfulCount: 18,
  },
  {
    id: "rev-2",
    name: "Μαρία Χαραλάμπους",
    city: { el: "Λευκωσία", en: "Nicosia" },
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: { el: "πριν από 1 εβδομάδα", en: "1 week ago" },
    service: { el: "Γενικός Καθαρισμός Σπιτιού", en: "Home Cleaning" },
    text: {
      el: "Έχουμε δύο σκυλάκια στο διαμέρισμα στη Λευκωσία και η ομάδα ήταν εξαιρετικά προσεκτική και φιλική. Το σπίτι μοσχοβολάει φρεσκάδα. Πολύ ευγενικό και διακριτικό προσωπικό, θα συνεχίσουμε με μηνιαίο πακέτο.",
      en: "We have two dogs in our Nicosia apartment and the team was exceptionally careful and friendly. The home smells fresh and clean. Very polite and discreet staff, we will continue with the monthly plan."
    },
    originalLang: 'el',
    verified: true,
    helpfulCount: 12,
  },
  {
    id: "rev-3",
    name: "David Miller",
    city: { el: "Πάφος", en: "Paphos" },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: { el: "πριν από 2 εβδομάδες", en: "2 weeks ago" },
    service: { el: "Βαθύς Καθαρισμός & Τζάμια", en: "Deep Cleaning & Windows" },
    text: {
      el: "Ζούμε στην Πάφο και μετά τις αμμοθύελλες τα τζάμια και οι βεράντες ήταν σε άθλια κατάσταση. Το συνεργείο της Maxclean τα έκανε να αστράφτουν με απιονισμένο νερό χωρίς κανένα ίχνος ή άλατα. Εξαιρετική αξιοπιστία και ευγένεια!",
      en: "We live in Paphos and after the spring dust storms the windows and verandas were covered in grit. The Maxclean crew made them sparkle using pure water with zero spots or mineral streaks. Outstanding reliability and politeness!"
    },
    originalLang: 'en',
    verified: true,
    helpfulCount: 24,
  },
  {
    id: "rev-4",
    name: "Ανδρέας Κωνσταντίνου",
    city: { el: "Πάφος", en: "Paphos" },
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: { el: "πριν από 3 εβδομάδες", en: "3 weeks ago" },
    service: { el: "Εξοχικά & Airbnb Καταλύματα", en: "Holiday Home / Airbnb" },
    text: {
      el: "Διαχειρίζομαι 4 τουριστικές επαύλεις στην περιοχή Πέγειας και Coral Bay. Η συνέπεια και η ταχύτητα της Maxclean μεταξύ των αφίξεων των τουριστών είναι άψογη. Όλοι οι πελάτες μας αφήνουν 5 αστέρια στην καθαριότητα!",
      en: "I manage 4 holiday villas in the Peyia and Coral Bay area. Maxclean's punctuality and speed between guest check-ins is flawless. All our guests leave 5 stars for cleanliness on Airbnb!"
    },
    originalLang: 'el',
    verified: true,
    helpfulCount: 16,
  },
  {
    id: "rev-5",
    name: "Emily Watson",
    city: { el: "Λεμεσός", en: "Limassol" },
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: { el: "πριν από 1 μήνα", en: "1 month ago" },
    service: { el: "Βιολογικός Καθαρισμός Σαλονιού", en: "Upholstery & Sofa Care" },
    text: {
      el: "Είχαμε επίμονους λεκέδες καφέ και κρασιού στον ανοιχτόχρωμο καναπέ μας στη Λεμεσό. Ο τεχνικός με το μηχάνημα θερμής εκχύλισης τους αφαίρεσε πλήρως. Το ύφασμα στέγνωσε σε 2 ώρες και δείχνει ολοκαίνουργιο!",
      en: "We had stubborn coffee and wine spills on our cream sofa in Limassol. The technician with the hot water extraction machine removed every trace completely. The fabric dried in 2 hours and looks brand new!"
    },
    originalLang: 'en',
    verified: true,
    helpfulCount: 15,
  },
  {
    id: "rev-6",
    name: "Ελένη Ιωάννου",
    city: { el: "Λάρνακα", en: "Larnaca" },
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: { el: "πριν από 1 μήνα", en: "1 month ago" },
    service: { el: "Μετά από Ανακαίνιση", en: "Post-Construction" },
    text: {
      el: "Μετά την ανακαίνιση του διαμερίσματός μας στη Λάρνακα, υπήρχε παντού σκόνη και υπολείμματα μπογιάς. Μέσα σε μία μέρα το παρέδωσαν πεντακάθαρο, έτοιμο να μπούμε μέσα. Επαγγελματίες με όλη τη σημασία της λέξης!",
      en: "After renovating our apartment in Larnaca, there was plaster dust and paint splatters everywhere. In just one day they delivered it spotless, fully ready to move in. True professionals in every sense!"
    },
    originalLang: 'el',
    verified: true,
    helpfulCount: 19,
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    q: {
      el: "Φέρνετε δικά σας υλικά καθαρισμού και εξοπλισμό;",
      en: "Do you bring your own cleaning supplies and equipment?"
    },
    a: {
      el: "Ναι, απόλυτα. Το συνεργείο μας φτάνει με πλήρη επαγγελματικό εξοπλισμό: ισχυρές σκούπες φίλτρου HEPA, συστήματα θερμής εκχύλισης, πανιά μικροϊνών και 100% οικολογικά, βιοδιασπώμενα προϊόντα ασφαλή για παιδιά και κατοικίδια.",
      en: "Yes, absolutely. Our technicians arrive fully equipped with professional tools: HEPA filter vacuums, steam extractors, microfiber cloths, and 100% eco-friendly, biodegradable solutions safe for children and pets."
    }
  },
  {
    q: {
      el: "Είναι το προσωπικό σας ασφαλισμένο και ελεγμένο;",
      en: "Are your staff insured and background-checked?"
    },
    a: {
      el: "Ναι. Όλα τα μέλη της ομάδας μας υποβάλλονται σε αυστηρό έλεγχο ιστορικού και ποινικού μητρώου, ενώ διαθέτουμε πλήρη ασφάλιση αστικής ευθύνης για απόλυτη ασφάλεια της περιουσίας σας.",
      en: "Yes. Every team member undergoes a strict background and police clearance check, and we carry comprehensive commercial liability insurance for complete peace of mind."
    }
  },
  {
    q: {
      el: "Αναλαμβάνετε εξοχικά σπίτια και καταλύματα Airbnb;",
      en: "Do you clean holiday homes and Airbnb rentals?"
    },
    a: {
      el: "Βεβαίως! Ειδικευόμαστε στη διαχείριση εξοχικών κατοικιών και Airbnb σε όλες τις πόλεις της Κύπρου, προσφέροντας ταχύτατο turnover, αλλαγή κλινοσκεπασμάτων, έλεγχο ζημιών και φωτογραφική επιβεβαίωση.",
      en: "Certainly! We specialize in vacation villas and Airbnb turnover across Cyprus, providing fast check-in readiness, hotel-grade linen changes, inventory checks, and photo confirmation."
    }
  },
  {
    q: {
      el: "Πώς μπορώ να λάβω δωρεάν προσφορά;",
      en: "How do I get a free quote?"
    },
    a: {
      el: "Μπορείτε να συμπληρώσετε τη φόρμα άμεσης κράτησης στην ιστοσελίδα μας σε 60 δευτερόλεπτα, να μας καλέσετε στο +357 96 295989 ή να μας στείλετε μήνυμα στο WhatsApp.",
      en: "You can fill out our online booking form in under 60 seconds, call us directly at +357 96 295989, or send us a quick WhatsApp message."
    }
  },
  {
    q: {
      el: "Ποιες περιοχές της Κύπρου εξυπηρετείτε;",
      en: "Which areas of Cyprus do you serve?"
    },
    a: {
      el: "Εξυπηρετούμε ολόκληρη την Κύπρο με καθημερινά δρομολόγια σε Λευκωσία, Λεμεσό, Λάρνακα, Πάφο και ελεύθερη Αμμόχωστο (Αγία Νάπα, Πρωταράς), καθώς και τα γύρω προάστια.",
      en: "We serve all of Cyprus with daily routes across Nicosia, Limassol, Larnaca, Paphos, and Famagusta (Ayia Napa, Protaras), as well as surrounding suburban areas."
    }
  },
  {
    q: {
      el: "Ποιοι είναι οι διαθέσιμοι τρόποι πληρωμής;",
      en: "What payment methods do you accept?"
    },
    a: {
      el: "Δεχόμαστε μετρητά, πιστωτικές/χρεωστικές κάρτες (Visa, Mastercard), τραπεζική μεταφορά, καθώς και άμεσες πληρωμές μέσω Revolut και QuickPay (Τράπεζα Κύπρου). Η πληρωμή γίνεται μετά την ολοκλήρωση των εργασιών.",
      en: "We accept cash, credit/debit cards (Visa, Mastercard), bank transfer, as well as instant transfers via Revolut and Bank of Cyprus QuickPay. Payment is made upon completion."
    }
  },
  {
    q: {
      el: "Ποια είναι η εγγύηση ικανοποίησης που προσφέρετε;",
      en: "What is your satisfaction guarantee?"
    },
    a: {
      el: "Εάν κάποιο σημείο του χώρου σας δεν πληροί τα υψηλά μας πρότυπα, ενημερώστε μας εντός 24 ωρών. Ένας επικεφαλής επόπτης θα επιστρέψει και θα επαναλάβει τον καθαρισμό εντελώς δωρεάν.",
      en: "If any corner of your space does not meet your high standards, let us know within 24 hours. A supervisor will return to reclean the area completely free of charge."
    }
  },
  {
    q: {
      el: "Είναι τα καθαριστικά ασφαλή για βρέφη, κατοικίδια και άτομα με αλλεργίες;",
      en: "Are your cleaning products safe for babies, pets, and allergy sufferers?"
    },
    a: {
      el: "Απόλυτα. Χρησιμοποιούμε αποκλειστικά υποαλλεργικά, πιστοποιημένα βιολογικά καθαριστικά, χωρίς χλώριο, αμμωνία ή τοξικά χημικά που θα μπορούσαν να ερεθίσουν παιδιά ή κατοικίδια.",
      en: "Absolutely. We exclusively deploy hypoallergenic, certified bio-based formulas free from bleach, ammonia, and harsh chemicals that could irritate children or pets."
    }
  },
];
