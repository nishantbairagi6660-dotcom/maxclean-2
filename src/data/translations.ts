export type Language = 'el' | 'en';

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    howItWorks: string;
    pricing: string;
    reviews: string;
    faq: string;
    contactUs: string;
    callUs: string;
    bookEstimate: string;
  };
  hero: {
    pillTagline: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    ourServicesBtn: string;
    watchVideo: string;
    watchVideoSub: string;
    vipClients: string;
    activeMembers: string;
    reviewsCount: string;
    statHappyClients: string;
    statAwards: string;
    basedOnReviews: string;
  };
  pillars: {
    expertTeamTitle: string;
    expertTeamDesc: string;
    expertTeamBadge: string;
    qualityServiceTitle: string;
    qualityServiceDesc: string;
    qualityServiceBadge: string;
    affordablePriceTitle: string;
    affordablePriceDesc: string;
    affordablePriceBadge: string;
    guarantee: string;
  };
  about: {
    pill: string;
    heading: string;
    p1: string;
    p2: string;
    statProjects: string;
    statCleaners: string;
    statRepeat: string;
    ratingBadge: string;
    ratingBadgeSub: string;
    ceoTitle: string;
    ceoRole: string;
  };
  whyChooseUs: {
    pill: string;
    heading: string;
    desc: string;
    reasons: {
      staffTitle: string;
      staffDesc: string;
      ecoTitle: string;
      ecoDesc: string;
      insuredTitle: string;
      insuredDesc: string;
      guaranteeTitle: string;
      guaranteeDesc: string;
    };
    contactCard: {
      title: string;
      btn: string;
    };
    badgeQuality: string;
    badgeLocation: string;
    petSafeBadge: string;
    petSafeDesc: string;
  };
  services: {
    pill: string;
    heading: string;
    desc: string;
    fromPrice: string;
    mostRequested: string;
    scopeDetails: string;
    bookBtn: string;
  };
  howItWorks: {
    pill: string;
    heading: string;
    desc: string;
    stepPrefix: string;
    steps: {
      step01Title: string;
      step01Desc: string;
      step02Title: string;
      step02Desc: string;
      step03Title: string;
      step03Desc: string;
      step04Title: string;
      step04Desc: string;
    };
    ctaBtn: string;
  };
  pricing: {
    pill: string;
    heading: string;
    desc: string;
    oneTimeBtn: string;
    monthlyBtn: string;
    saveBadge: string;
    mostPopular: string;
    perCleanMonthly: string;
    perCleanOneTime: string;
    bookNowBtn: string;
    vatNote: string;
    customQuoteNote: string;
  };
  reviews: {
    pill: string;
    heading: string;
    googleRatingText: string;
    verifiedCustomers: string;
    independentVerified: string;
    helpful: string;
    readMoreGoogle: string;
    translatedTag: string;
  };
  beforeAfter: {
    pill: string;
    heading: string;
    desc: string;
    beforeLabel: string;
    afterLabel: string;
    dragHint: string;
    btnClean: string;
    btnSplit: string;
    btnBefore: string;
  };
  gallery: {
    pill: string;
    heading: string;
    desc: string;
    allFilter: string;
    residential: string;
    commercial: string;
    bathrooms: string;
    kitchens: string;
    airbnb: string;
  };
  faq: {
    pill: string;
    heading: string;
    desc: string;
    searchPlaceholder: string;
    noResults: string;
    clearSearch: string;
    haveQuestion: string;
    supportAvailable: string;
    askUsBtn: string;
  };
  ctaBanner: {
    pill: string;
    heading: string;
    desc: string;
    insuredPerk: string;
    sameDayPerk: string;
    directLine: string;
    getEstimateBtn: string;
  };
  serviceAreasBanner: {
    pill: string;
    heading: string;
    subheading: string;
    badge: string;
  };
  booking: {
    pill: string;
    heading: string;
    desc: string;
    estimatedRate: string;
    discountApplied: string;
    standardRate: string;
    recurringPerVisit: string;
    oneTimeTotal: string;
    includesVatNote: string;
    trustInsured: string;
    trustCancellation: string;
    trustReclean: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      phone: string;
      email: string;
      emailPlaceholder: string;
      serviceType: string;
      propertySize: string;
      frequency: string;
      preferredDate: string;
      arrivalWindow: string;
      notes: string;
      notesPlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      noPrepayment: string;
    };
    success: {
      confirmedBadge: string;
      thankYou: string;
      detailsMsg: string;
      refCode: string;
      bookAnother: string;
    };
    sizes: {
      studio: string;
      twoBed: string;
      threeBed: string;
      fourBed: string;
      commercial: string;
      villa: string;
    };
    frequencies: {
      oneTime: string;
      weekly: string;
      biWeekly: string;
      monthly: string;
    };
    windows: {
      morning: string;
      afternoon: string;
      lateAfternoon: string;
      flexible: string;
    };
  };
  footer: {
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterBtn: string;
    newsletterSuccess: string;
    taglineSubtitle: string;
    quickLinks: string;
    ourServices: string;
    contactHours: string;
    serviceAreasTitle: string;
    copyright: string;
    privacy: string;
    terms: string;
    insurance: string;
  };
  modals: {
    videoTitle: string;
    videoDesc: string;
    videoQuote: string;
    serviceScopeTitle: string;
    durationEstimate: string;
    startingAt: string;
    bookServiceNow: string;
    googleModalTitle: string;
    leaveReviewTitle: string;
    yourRating: string;
    shareExpPlaceholder: string;
    submitReviewBtn: string;
    reviewSuccessMsg: string;
    viewOnGoogleMaps: string;
    quickSupport: string;
    chatWhatsApp: string;
    getEstimateQuick: string;
    close: string;
    chatAndBook: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  el: {
    meta: {
      title: "Maxclean – Επαγγελματικές Υπηρεσίες Καθαρισμού | Κύπρος",
      description: "Κορυφαίες υπηρεσίες καθαρισμού στην Κύπρο από τη Maxclean. Γενικός, βαθύς καθαρισμός, εξοχικά & Airbnb, γραφεία και βιολογικός καθαρισμός με αξιολόγηση 5.0 στο Google.",
    },
    nav: {
      home: "Αρχική",
      about: "Σχετικά",
      services: "Υπηρεσίες",
      howItWorks: "Πώς Λειτουργεί",
      pricing: "Τιμές",
      reviews: "Κριτικές",
      faq: "Συχνές Ερωτήσεις",
      contactUs: "Επικοινωνία",
      callUs: "Τηλεφωνήστε μας",
      bookEstimate: "Κράτηση Προσφοράς",
    },
    hero: {
      pillTagline: "Νιώστε την Απόλυτη Φρεσκάδα",
      headlinePart1: "Νιώστε την Απόλυτη",
      headlineHighlight: "Φρεσκάδα",
      headlinePart2: "με Επαγγελματικό Καθαρισμό",
      description: "Αναζωογονήστε τον χώρο σας με την πιο αξιόπιστη ομάδα καθαρισμού στην Κύπρο. Πιστοποιημένο προσωπικό, οικολογικά προϊόντα και εγγύηση 100% ικανοποίησης.",
      ourServicesBtn: "Οι Υπηρεσίες μας",
      watchVideo: "Δείτε Βίντεο",
      watchVideoSub: "Η ομάδα μας σε δράση",
      vipClients: "VIP Πελάτες",
      activeMembers: "800+ Ικανοποιημένοι Χρήστες",
      reviewsCount: "250+ Αξιολογήσεις",
      statHappyClients: "800+ Πελάτες",
      statAwards: "180+ Βραβεύσεις",
      basedOnReviews: "Βασισμένο σε 250+ κριτικές Google",
    },
    pillars: {
      expertTeamTitle: "Έμπειρη Ομάδα",
      expertTeamDesc: "Πλήρως ελεγμένοι, εκπαιδευμένοι και πιστοποιημένοι επαγγελματίες με πολυετή πείρα και σεβασμό στον χώρο σας.",
      expertTeamBadge: "100% Ελεγμένο Προσωπικό",
      qualityServiceTitle: "Κορυφαία Ποιότητα",
      qualityServiceDesc: "Πρότυπα υψηλής υγιεινής με 100% οικολογικά, βιολογικά και ασφαλή για παιδιά & κατοικίδια καθαριστικά.",
      qualityServiceBadge: "Οικολογικά Προϊόντα",
      affordablePriceTitle: "Διαφανείς Τιμές",
      affordablePriceDesc: "Ξεκάθαρες τιμές από 35€ χωρίς κρυφές χρεώσεις. Περιλαμβάνεται ΦΠΑ 19% και δωρεάν επαναληπτικός καθαρισμός αν χρειαστεί.",
      affordablePriceBadge: "Ξεκάθαρη Χρέωση",
      guarantee: "Εγγύηση Maxclean",
    },
    about: {
      pill: "Σχετικά με εμάς",
      heading: "Κάνουμε Κάθε Χώρο Αστραφτερό & Υγιεινό",
      p1: "Με έδρα την Κύπρο, η Maxclean προσφέρει απαράμιλλη ποιότητα καθαρισμού σε κατοικίες, επαγγελματικά κτίρια, εξοχικά και καταλύματα Airbnb σε όλες τις πόλεις.",
      p2: "Συνδυάζουμε σύγχρονο επαγγελματικό εξοπλισμό, οικολογικά απορρυπαντικά και αυστηρές λίστες ελέγχου ώστε να απολαμβάνετε έναν πεντακάθαρο, υγιεινό χώρο χωρίς κόπο.",
      statProjects: "1,000+ Ολοκληρωμένα Έργα",
      statCleaners: "123+ Εξειδικευμένοι Καθαριστές",
      statRepeat: "400+ Σταθεροί Πελάτες",
      ratingBadge: "5.0★ Αξιολόγηση",
      ratingBadgeSub: "Επαληθευμένο Google Maps",
      ceoTitle: "Ομάδα Maxclean",
      ceoRole: "Εξειδικευμένοι Επαγγελματίες Καθαρισμού",
    },
    whyChooseUs: {
      pill: "Γιατί Εμάς",
      heading: "Γιατί Εκατοντάδες Κάτοικοι στην Κύπρο Επιλέγουν τη Maxclean",
      desc: "Η εμπιστοσύνη είναι το θεμέλιο της δουλειάς μας. Φροντίζουμε τον χώρο σας με συνέπεια, διακριτικότητα και υψηλά πρότυπα καθαριότητας.",
      reasons: {
        staffTitle: "Εκπαιδευμένο & Πιστοποιημένο Προσωπικό",
        staffDesc: "Συνεχής εκπαίδευση στις πιο σύγχρονες τεχνικές απολύμανσης και χειρισμού ευαίσθητων επιφανειών.",
        ecoTitle: "Οικολογικά & Ασφαλή για Κατοικίδια",
        ecoDesc: "Χωρίς επιβλαβείς χημικές αναθυμιάσεις. Ιδανικό για οικογένειες, μωρά, άτομα με αλλεργίες και κατοικίδια.",
        insuredTitle: "Ασφαλισμένο & Αξιόπιστο Συνεργείο",
        insuredDesc: "Πλήρης ασφαλιστική κάλυψη αστικής ευθύνης για απόλυτη σιγουριά και ξεγνοιασιά.",
        guaranteeTitle: "100% Εγγύηση Ικανοποίησης",
        guaranteeDesc: "Αν κάτι δεν είναι απόλυτα τέλειο, επιστρέφουμε εντός 24 ωρών και το διορθώνουμε δωρεάν.",
      },
      contactCard: {
        title: "Χρειάζεστε άμεσο καθαρισμό ή εξατομικευμένη προσφορά;",
        btn: "Άμεση Προσφορά",
      },
      badgeQuality: "5★ Ποιότητα",
      badgeLocation: "Σε όλη την Κύπρο",
      petSafeBadge: "Ασφαλές για Παιδιά & Κατοικίδια",
      petSafeDesc: "Υποαλλεργικά, πιστοποιημένα βιολογικά προϊόντα καθαρισμού.",
    },
    services: {
      pill: "Οι Υπηρεσίες μας",
      heading: "Ολοκληρωμένες Λύσεις Καθαρισμού για Κάθε Ανάγκη",
      desc: "Από τακτικό καθαρισμό σπιτιού και εξοχικά Airbnb μέχρι βαθύ καθαρισμό μετά από ανακαίνιση και βιολογικό καθαρισμό σαλονιών.",
      fromPrice: "Από",
      mostRequested: "Δημοφιλές",
      scopeDetails: "Αναλυτικά",
      bookBtn: "Κράτηση",
    },
    howItWorks: {
      pill: "Απλή Διαδικασία",
      heading: "Πώς Λειτουργεί σε 4 Απλά Βήματα",
      desc: "Η οργάνωση του καθαρισμού σας γίνεται γρήγορα, αξιόπιστα και χωρίς περιττή γραφειοκρατία.",
      stepPrefix: "Βήμα",
      steps: {
        step01Title: "Κάντε Κράτηση",
        step01Desc: "Επιλέξτε την υπηρεσία, το μέγεθος του χώρου και την επιθυμητή ημερομηνία σε λιγότερο από 60 δευτερόλεπτα.",
        step02Title: "Επιβεβαίωση",
        step02Desc: "Λαμβάνετε άμεση επιβεβαίωση με τα στοιχεία του συνεργείου, την ώρα άφιξης και τη λεπτομερή λίστα εργασιών.",
        step03Title: "Καθαρίζουμε",
        step03Desc: "Το επαγγελματικό μας συνεργείο φτάνει στην ώρα του με όλο τον σύγχρονο οικολογικό εξοπλισμό.",
        step04Title: "Απολαμβάνετε",
        step04Desc: "Μπαίνετε σε έναν αστραφτερό, υγιεινό και ευωδιαστό χώρο με εγγύηση 100% ικανοποίησης.",
      },
      ctaBtn: "Προγραμματίστε τον Καθαρισμό σας",
    },
    pricing: {
      pill: "Διαφανής Τιμολόγηση",
      heading: "Επιλέξτε το Ιδανικό Πακέτο Καθαρισμού",
      desc: "Ξεκάθαρες τιμές χωρίς απρόοπτα. Κερδίστε 20% έκπτωση με μηνιαίο τακτικό προγραμματισμό.",
      oneTimeBtn: "Μία Φορά",
      monthlyBtn: "Μηνιαίο / Τακτικό",
      saveBadge: "Κέρδος 20%",
      mostPopular: "Πιο Δημοφιλές",
      perCleanMonthly: "/ επίσκεψη (μηνιαία συνδρομή)",
      perCleanOneTime: "/ επίσκεψη (εφάπαξ)",
      bookNowBtn: "Επιλογή Πακέτου",
      vatNote: "Όλες οι τιμές περιλαμβάνουν ΦΠΑ 19%",
      customQuoteNote: "Δωρεάν προσφορά για μεγάλα σπίτια και επαγγελματικούς χώρους",
    },
    reviews: {
      pill: "Αξιολογήσεις Πελατών",
      heading: "Τι Λένε οι Πελάτες μας σε όλη την Κύπρο",
      googleRatingText: "5.0 Αξιολόγηση στο Google",
      verifiedCustomers: "100% Πραγματικοί Πελάτες",
      independentVerified: "Επαληθευμένες κριτικές Google",
      helpful: "χρήσιμη",
      readMoreGoogle: "Διαβάστε Περισσότερες Κριτικές στο Google Maps",
      translatedTag: "Μετάφραση",
    },
    beforeAfter: {
      pill: "Πραγματικά Αποτελέσματα",
      heading: "Δείτε τη Μεταμόρφωση",
      desc: "Σύρετε τον δείκτη οριζόντια για να συγκρίνετε το πριν και το μετά από τον επαγγελματικό μας καθαρισμό.",
      beforeLabel: "Πριν: Σκόνη & Ακαταστασία",
      afterLabel: "Μετά: Απόλυτη Καθαριότητα",
      dragHint: "Σύρετε για σύγκριση",
      btnClean: "Κυρίως Μετά (80%)",
      btnSplit: "Ίσο Μοίρασμα (50/50)",
      btnBefore: "Κυρίως Πριν (80%)",
    },
    gallery: {
      pill: "Δείγματα Δουλειάς",
      heading: "Φωτογραφίες από Χώρους που Φροντίσαμε",
      desc: "Αυθεντικές εικόνες από σπίτια, πολυτελείς επαύλεις, εξοχικά και γραφεία σε Λεμεσό, Λευκωσία, Πάφο και Λάρνακα.",
      allFilter: "Όλα",
      residential: "Κατοικίες",
      commercial: "Επαγγελματικοί Χώροι",
      bathrooms: "Μπάνια",
      kitchens: "Κουζίνες",
      airbnb: "Εξοχικά & Airbnb",
    },
    faq: {
      pill: "Συχνές Ερωτήσεις",
      heading: "Όλα όσα θέλετε να γνωρίζετε",
      desc: "Απαντήσεις σχετικά με τα υλικά, την ασφάλεια, τις περιοχές εξυπηρέτησης και τους τρόπους πληρωμής.",
      searchPlaceholder: "Αναζήτηση ερώτησης (π.χ. υλικά, εξοχικά, πληρωμές, κατοικίδια)...",
      noResults: "Δεν βρέθηκαν αποτελέσματα για την αναζήτησή σας.",
      clearSearch: "Καθαρισμός αναζήτησης",
      haveQuestion: "Έχετε κάποια άλλη απορία;",
      supportAvailable: "Η ομάδα εξυπηρέτησης πελατών μας είναι διαθέσιμη Δευτέρα – Σάββατο.",
      askUsBtn: "Ρωτήστε μας Άμεσα",
    },
    ctaBanner: {
      pill: "Δωρεάν Τηλεφωνική Προσφορά",
      heading: "Έτοιμοι να Νιώσετε τη Φρεσκάδα στον Χώρο σας;",
      desc: "Κάντε κράτηση online σε 60 δευτερόλεπτα ή καλέστε μας απευθείας. Εξυπηρετούμε άμεσα όλη την Κύπρο με εγγύηση ικανοποίησης.",
      insuredPerk: "Ασφαλισμένο Συνεργείο",
      sameDayPerk: "Δυνατότητα Αυθημερόν Εξυπηρέτησης",
      directLine: "Απευθείας Γραμμή",
      getEstimateBtn: "Ζητήστε Δωρεάν Προσφορά",
    },
    serviceAreasBanner: {
      pill: "Παγκύπρια Κάλυψη",
      heading: "Εξυπηρετούμε Ολόκληρη την Κύπρο",
      subheading: "Καθημερινά δρομολόγια σε όλες τις πόλεις και επαρχίες",
      badge: "Παγκύπρια Εξυπηρέτηση",
    },
    booking: {
      pill: "Άμεση Εκτίμηση Κόστους",
      heading: "Κλείστε τον Καθαρισμό σας σε 60 Δευτερόλεπτα",
      desc: "Συμπληρώστε τα στοιχεία του χώρου σας για να λάβετε άμεση προσφορά. Φέρνουμε όλα τα επαγγελματικά υλικά και μηχανήματα.",
      estimatedRate: "Εκτιμώμενη Τιμή",
      discountApplied: "Εφαρμόστηκε Έκπτωση 20%",
      standardRate: "Κανονική Τιμή",
      recurringPerVisit: "/ τακτική επίσκεψη",
      oneTimeTotal: "εφάπαξ σύνολο",
      includesVatNote: "Συμπεριλαμβάνεται ΦΠΑ 19%",
      trustInsured: "Πλήρης Ασφάλιση Αστικής Ευθύνης",
      trustCancellation: "Δωρεάν Ακύρωση έως 24 ώρες πριν",
      trustReclean: "Δωρεάν Επαναληπτικός Καθαρισμός αν χρειαστεί",
      form: {
        fullName: "Ονοματεπώνυμο *",
        fullNamePlaceholder: "π.χ. Ανδρέας Γεωργίου",
        phone: "Αριθμός Τηλεφώνου *",
        email: "Διεύθυνση Email *",
        emailPlaceholder: "name@example.com",
        serviceType: "Είδος Υπηρεσίας *",
        propertySize: "Μέγεθος Ακινήτου",
        frequency: "Συχνότητα",
        preferredDate: "Επιθυμητή Ημερομηνία *",
        arrivalWindow: "Προτιμώμενο Διάστημα Άφιξης",
        notes: "Ειδικές Οδηγίες ή Σημειώσεις Εισόδου",
        notesPlaceholder: "π.χ. Κλειδί σε θυρίδα με κωδικό 4291, έχουμε φιλικό σκύλο, δώστε έμφαση στα πλακάκια της κουζίνας.",
        submitBtn: "Επιβεβαίωση Κράτησης",
        submittingBtn: "Καταχώρηση Αιτήματος...",
        noPrepayment: "Δεν απαιτείται προπληρωμή. Η εξόφληση γίνεται μετά την επιθεώρηση και την ικανοποίησή σας.",
      },
      success: {
        confirmedBadge: "Επιβεβαίωση Αιτήματος",
        thankYou: "Ευχαριστούμε",
        detailsMsg: "Λάβαμε το αίτημά σας. Θα επικοινωνήσουμε άμεσα μαζί σας για την τελική επιβεβαίωση της ώρας.",
        refCode: "Κωδικός Κράτησης",
        bookAnother: "Νέα Κράτηση",
      },
      sizes: {
        studio: "Στούντιο / 1 Υπνοδωμάτιο (~55 τ.μ.)",
        twoBed: "2 Υπνοδωμάτια (~90 τ.μ.)",
        threeBed: "3 Υπνοδωμάτια (~140 τ.μ.)",
        fourBed: "4+ Υπνοδωμάτια (~200+ τ.μ.)",
        commercial: "Επαγγελματικός Χώρος / Γραφείο",
        villa: "Έπαυλη / Μεγάλη Μονοκατοικία με Πισίνα",
      },
      frequencies: {
        oneTime: "Μία Φορά (Εφάπαξ)",
        weekly: "Εβδομαδιαία (Έκπτωση 20%)",
        biWeekly: "Κάθε 2 Εβδομάδες (Έκπτωση 20%)",
        monthly: "Μηνιαία (Έκπτωση 20%)",
      },
      windows: {
        morning: "Πρωί (08:00 – 11:00)",
        afternoon: "Μεσημέρι (11:00 – 14:00)",
        lateAfternoon: "Απόγευμα (14:00 – 18:00)",
        flexible: "Ευέλικτο / Οποιαδήποτε ώρα",
      },
    },
    footer: {
      newsletterTitle: "Κερδίστε 15€ Έκπτωση στον Πρώτο σας Καθαρισμό",
      newsletterDesc: "Εγγραφείτε για να λαμβάνετε εποχιακές προσφορές και συμβουλές φροντίδας σπιτιού στην Κύπρο.",
      newsletterPlaceholder: "Το email σας...",
      newsletterBtn: "Εγγραφή",
      newsletterSuccess: "Ευχαριστούμε! Ελέγξτε το email σας για την έκπτωση 15€.",
      taglineSubtitle: "Κορυφαία ποιότητα καθαρισμού κατοικιών, εξοχικών Airbnb και επιχειρήσεων σε όλη την Κύπρο με βιολογικά, πιστοποιημένα υλικά.",
      quickLinks: "Γρήγοροι Σύνδεσμοι",
      ourServices: "Υπηρεσίες",
      contactHours: "Επικοινωνία & Ωράριο",
      serviceAreasTitle: "Περιοχές Εξυπηρέτησης στην Κύπρο:",
      copyright: "Όλα τα δικαιώματα διατηρούνται.",
      privacy: "Πολιτική Απορρήτου",
      terms: "Όροι Χρήσης",
      insurance: "Πιστοποιητικό Ασφάλισης",
    },
    modals: {
      videoTitle: "Η Φροντίδα της Maxclean σε Δράση",
      videoDesc: "Δείτε πώς τα εξειδικευμένα συνεργεία μας φέρνουν καθαριότητα, υγιεινή και φρέσκια αύρα σε χώρους σε όλη την Κύπρο.",
      videoQuote: "Αντιμετωπίζουμε κάθε σπίτι με απόλυτο σεβασμό και σχολαστικότητα.",
      serviceScopeTitle: "Τι Περιλαμβάνει η Υπηρεσία:",
      durationEstimate: "Εκτιμώμενη Διάρκεια",
      startingAt: "Από",
      bookServiceNow: "Κράτηση Υπηρεσίας",
      googleModalTitle: "Κριτικές Πελατών Google",
      leaveReviewTitle: "Αφήστε τη δική σας αξιολόγηση στο Google",
      yourRating: "Η Βαθμολογία σας:",
      shareExpPlaceholder: "Μοιραστείτε την εμπειρία σας από την εξυπηρέτηση της Maxclean...",
      submitReviewBtn: "Υποβολή Κριτικής Google",
      reviewSuccessMsg: "Ευχαριστούμε θερμά! Η αξιολόγησή σας καταχωρήθηκε.",
      viewOnGoogleMaps: "Προβολή στο Google Maps",
      quickSupport: "Άμεση Εξυπηρέτηση & Κρατήσεις",
      chatWhatsApp: "Συνομιλία στο WhatsApp",
      getEstimateQuick: "Άμεση Προσφορά",
      close: "Κλείσιμο",
      chatAndBook: "Επικοινωνία",
    },
  },
  en: {
    meta: {
      title: "Maxclean – Professional Cleaning Services | Cyprus",
      description: "Premier residential and commercial cleaning services across Cyprus by Maxclean. Deep cleaning, Airbnb turnovers, office care, and upholstery cleaning with 5.0 Google rating.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      howItWorks: "How It Works",
      pricing: "Pricing",
      reviews: "Reviews",
      faq: "FAQ",
      contactUs: "Contact Us",
      callUs: "Call Us",
      bookEstimate: "Book Estimate",
    },
    hero: {
      pillTagline: "Feel Your Way For Freshness",
      headlinePart1: "Feel Your Way For",
      headlineHighlight: "Freshness",
      headlinePart2: "With Pro Cleaning",
      description: "Restore peace and pristine hygiene to your sanctuary. Our certified, insured cleaners utilize hospital-standard eco formulations to make every corner shine effortlessly across Cyprus.",
      ourServicesBtn: "Our Services",
      watchVideo: "Watch Video",
      watchVideoSub: "See our cleaners in action",
      vipClients: "VIP Clients",
      activeMembers: "800+ Active Members",
      reviewsCount: "250+ Reviews",
      statHappyClients: "800+ Clients",
      statAwards: "180+ Awards",
      basedOnReviews: "Based on 250+ Google reviews",
    },
    pillars: {
      expertTeamTitle: "Expert Team",
      expertTeamDesc: "Background-checked, police-cleared, and extensively certified technicians with over 40 hours of rigorous method training.",
      expertTeamBadge: "100% Vetted Staff",
      qualityServiceTitle: "Quality Service",
      qualityServiceDesc: "Hospital-grade hygiene protocols with 100% plant-based, cruelty-free, and pet-safe botanical cleaning solutions.",
      qualityServiceBadge: "Eco-Friendly Products",
      affordablePriceTitle: "Affordable Price",
      affordablePriceDesc: "Transparent flat-rate upfront quotes from €35. Includes 19% VAT, zero hidden fees, and free 24-hr re-clean guarantee.",
      affordablePriceBadge: "Flat Upfront Rates",
      guarantee: "Maxclean Guarantee",
    },
    about: {
      pill: "About Us",
      heading: "We Make Places Clean & Bright",
      p1: "Based in Cyprus, Maxclean delivers premium cleaning excellence for residences, luxury villas, offices, and Airbnb vacation rentals across all districts.",
      p2: "We combine state-of-the-art equipment, eco-certified formulations, and rigorous checklists to ensure every space is left healthy, fragrant, and spotless.",
      statProjects: "1,000+ Projects Completed",
      statCleaners: "123+ Expert Cleaners",
      statRepeat: "400+ Repeat Clients",
      ratingBadge: "5.0★ Rating",
      ratingBadgeSub: "Verified on Google Maps",
      ceoTitle: "Maxclean Team",
      ceoRole: "Professional Cleaning Specialists",
    },
    whyChooseUs: {
      pill: "Why Choose Us",
      heading: "Why Hundreds of Cyprus Residents Trust Maxclean",
      desc: "Inviting someone into your home requires complete trust. We treat every residence with unmatched integrity, discretion, and care.",
      reasons: {
        staffTitle: "Trained & Certified Staff",
        staffDesc: "Continuous hygiene training, chemical safety courses, and careful handling of premium surfaces.",
        ecoTitle: "Eco-Friendly & Pet Safe",
        ecoDesc: "Zero harsh bleach or toxic petrochemical fumes. 100% biodegradable and hypoallergenic botanical solutions.",
        insuredTitle: "Insured & Background-Checked",
        insuredDesc: "Protected by comprehensive commercial liability coverage for complete peace of mind.",
        guaranteeTitle: "100% Satisfaction Guarantee",
        guaranteeDesc: "If anything does not meet your expectations, we return within 24 hours to reclean it free of charge.",
      },
      contactCard: {
        title: "Need quick service or a tailored quotation?",
        btn: "Get Instant Estimate",
      },
      badgeQuality: "5★ Quality",
      badgeLocation: "All Cyprus Districts",
      petSafeBadge: "Pet & Child Safe",
      petSafeDesc: "Hypoallergenic, certified organic cleaning formulations.",
    },
    services: {
      pill: "Our Services",
      heading: "Tailored Cleaning Solutions for Every Space",
      desc: "From routine home maintenance and holiday home turnovers to deep post-renovation scrubs and biological upholstery extraction.",
      fromPrice: "From",
      mostRequested: "Most Requested",
      scopeDetails: "Scope Details",
      bookBtn: "Book Now",
    },
    howItWorks: {
      pill: "Effortless Process",
      heading: "How It Works in 4 Simple Steps",
      desc: "Booking your professional cleaning is smooth, reliable, and completely transparent from start to finish.",
      stepPrefix: "Step",
      steps: {
        step01Title: "Book Online",
        step01Desc: "Pick your service, select property size or rooms, and choose a time that fits your day in under 60 seconds.",
        step02Title: "We Confirm",
        step02Desc: "Receive immediate confirmation with your assigned cleaner's credentials, arrival window, and checklist.",
        step03Title: "We Clean",
        step03Desc: "Our uniformed professionals arrive right on schedule with all high-grade eco-friendly equipment.",
        step04Title: "You Enjoy",
        step04Desc: "Step into a spotless, fresh-smelling home and enjoy reclaimed free time backed by our 100% guarantee.",
      },
      ctaBtn: "Book Your Clean Today",
    },
    pricing: {
      pill: "Transparent Pricing",
      heading: "Choose Your Perfect Clean",
      desc: "Transparent rates with zero hidden surcharges. Enjoy 20% off with regular monthly maintenance.",
      oneTimeBtn: "One-Time Clean",
      monthlyBtn: "Monthly / Recurring",
      saveBadge: "Save 20%",
      mostPopular: "Most Popular",
      perCleanMonthly: "/ clean (billed monthly)",
      perCleanOneTime: "/ visit (one-time)",
      bookNowBtn: "Choose Plan",
      vatNote: "All prices include 19% VAT",
      customQuoteNote: "Free quote for large homes and commercial spaces",
    },
    reviews: {
      pill: "Client Reviews",
      heading: "Loved by Hundreds of Clients Across Cyprus",
      googleRatingText: "5.0 Rating on Google",
      verifiedCustomers: "100% Real Customers",
      independentVerified: "Independent Google verified reviews",
      helpful: "helpful",
      readMoreGoogle: "Read More Reviews on Google Maps",
      translatedTag: "Translated",
    },
    beforeAfter: {
      pill: "Real Results",
      heading: "See The Transformation",
      desc: "Drag the slider horizontally to reveal how our deep sanitation breathes new life into cluttered and dusty spaces.",
      beforeLabel: "Before: Dust & Clutter",
      afterLabel: "After: Spotless Clean",
      dragHint: "Drag slider to compare",
      btnClean: "Mostly After (80%)",
      btnSplit: "Split 50 / 50",
      btnBefore: "Mostly Before (80%)",
    },
    gallery: {
      pill: "Our Work",
      heading: "Our Cleaning Gallery",
      desc: "Explore authentic photos of our team delivering immaculate finishes across Cyprus residences, luxury villas, and offices.",
      allFilter: "All",
      residential: "Residential",
      commercial: "Commercial",
      bathrooms: "Bathrooms",
      kitchens: "Kitchens",
      airbnb: "Holiday & Airbnb",
    },
    faq: {
      pill: "Got Questions?",
      heading: "Frequently Asked Questions",
      desc: "Everything you need to know about our supplies, insurance, service coverage across Cyprus, and payment methods.",
      searchPlaceholder: "Search questions (e.g. supplies, Airbnb, payment, pets)...",
      noResults: "No questions matched your search query.",
      clearSearch: "Clear search",
      haveQuestion: "Have a question not listed here?",
      supportAvailable: "Our customer care team is available Monday – Saturday.",
      askUsBtn: "Ask Us Directly",
    },
    ctaBanner: {
      pill: "Call For A Free Quote",
      heading: "Ready To Feel The Freshness in Your Space?",
      desc: "Book in 60 seconds online or call our scheduling specialists directly. We serve all of Cyprus with a 100% satisfaction guarantee.",
      insuredPerk: "Insured & Bonded",
      sameDayPerk: "Same-Day Availability",
      directLine: "Direct Line",
      getEstimateBtn: "Get Free Instant Estimate",
    },
    serviceAreasBanner: {
      pill: "Island-Wide Coverage",
      heading: "We Serve All of Cyprus",
      subheading: "Daily routes and reliable local teams in all major cities and districts",
      badge: "All Cyprus Covered",
    },
    booking: {
      pill: "Free Instant Quote",
      heading: "Book Your Sparkle in Under 60 Seconds",
      desc: "Fill in your space requirements to receive an upfront estimate with no surprises. Our team brings all certified supplies.",
      estimatedRate: "Estimated Rate",
      discountApplied: "20% Recurring Discount Applied",
      standardRate: "Standard Rate",
      recurringPerVisit: "/ recurring visit",
      oneTimeTotal: "one-time total",
      includesVatNote: "Includes 19% VAT",
      trustInsured: "Comprehensive Liability Insured",
      trustCancellation: "Zero Cancellation Fees up to 24 hrs",
      trustReclean: "100% Free Re-Clean if not completely happy",
      form: {
        fullName: "Your Full Name *",
        fullNamePlaceholder: "e.g. Andreas Georgiou",
        phone: "Phone Number *",
        email: "Email Address *",
        emailPlaceholder: "name@example.com",
        serviceType: "Service Type *",
        propertySize: "Property Size",
        frequency: "Frequency",
        preferredDate: "Preferred Date (DD/MM/YYYY) *",
        arrivalWindow: "Preferred Arrival Window",
        notes: "Special Instructions or Entry Notes",
        notesPlaceholder: "e.g. Key is in lockbox code 4291, friendly dog inside, please focus on kitchen tile grout.",
        submitBtn: "Confirm Instant Booking",
        submittingBtn: "Securing Your Reservation...",
        noPrepayment: "No upfront payment required. You will only be billed after your space is inspected and verified.",
      },
      success: {
        confirmedBadge: "Booking Request Received",
        thankYou: "Thank You",
        detailsMsg: "We've received your request. Our booking coordinator will reach out shortly to confirm details.",
        refCode: "Booking Reference",
        bookAnother: "Book Another Clean",
      },
      sizes: {
        studio: "Studio / 1 Bedroom (~55 m²)",
        twoBed: "2 Bedrooms (~90 m²)",
        threeBed: "3 Bedrooms (~140 m²)",
        fourBed: "4+ Bedrooms (~200+ m²)",
        commercial: "Commercial / Office Space",
        villa: "Luxury Villa / Large House with Pool",
      },
      frequencies: {
        oneTime: "One-Time Clean",
        weekly: "Weekly (Save 20%)",
        biWeekly: "Bi-Weekly (Save 20%)",
        monthly: "Monthly (Save 20%)",
      },
      windows: {
        morning: "Morning (08:00 - 11:00)",
        afternoon: "Afternoon (11:00 - 14:00)",
        lateAfternoon: "Late Afternoon (14:00 - 18:00)",
        flexible: "Flexible / Any Time",
      },
    },
    footer: {
      newsletterTitle: "Get €15 Off Your First Clean + Home Care Tips",
      newsletterDesc: "Join 5,000+ Cyprus residents receiving seasonal maintenance tips and exclusive VIP discounts.",
      newsletterPlaceholder: "Enter your email...",
      newsletterBtn: "Subscribe",
      newsletterSuccess: "Thank you! Check your inbox for your €15 voucher.",
      taglineSubtitle: "Delivering hospital-standard residential, villa, Airbnb, and commercial cleanliness across Cyprus with eco-certified botanicals.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactHours: "Contact & Hours",
      serviceAreasTitle: "Service Areas in Cyprus:",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      insurance: "Insurance Certificate",
    },
    modals: {
      videoTitle: "The Maxclean Touch in Motion",
      videoDesc: "Watch our uniformed technicians bring calm, cleanliness, and botanical aromas to spaces across Cyprus.",
      videoQuote: "We treat every baseboard, mirror, and countertop with white-glove respect.",
      serviceScopeTitle: "What's Included in This Service:",
      durationEstimate: "Estimated Duration",
      startingAt: "From",
      bookServiceNow: "Book This Service",
      googleModalTitle: "Google Customer Reviews",
      leaveReviewTitle: "Leave a Verified Google Review",
      yourRating: "Your Rating:",
      shareExpPlaceholder: "Share your experience with Maxclean's service and staff...",
      submitReviewBtn: "Submit Google Review",
      reviewSuccessMsg: "Thank you! Your review was successfully submitted.",
      viewOnGoogleMaps: "View on Google Maps",
      quickSupport: "Instant Support & Booking",
      chatWhatsApp: "Chat on WhatsApp",
      getEstimateQuick: "Get Instant Estimate",
      close: "Close",
      chatAndBook: "Chat & Book",
    },
  },
};

export const formatPrice = (amount: number, lang: Language): string => {
  return lang === 'el' ? `${amount}€` : `€${amount}`;
};
