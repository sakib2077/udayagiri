import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, ChevronDown, Camera, Landmark, History, Book, Globe } from 'lucide-react';

type Language = 'en' | 'hi' | 'od';

const content = {
  en: {
    title: "Udayagiri and Khandagiri Caves",
    subtitle: "Ancient Jaina Rock-Cut Architecture in Eastern India",
    location: "Bhubaneswar, Odisha, India",
    historicalOverview: "Historical Overview",
    historicalText: [
      "The twin hills of Udayagiri and Khandagiri, anciently known as Kumara and Kumari parvatas respectively, represent one of the earliest groups of Jaina rock-cut architecture in eastern India. These monuments were primarily excavated during the reign of Emperor Kharavela in the first century B.C., as evidenced by inscriptions found within the caves. The Jaina occupation continued here with occasional breaks down to the present day. The caves were first noticed and partly described by A. Sterling in 1825.",
      "Meant for the residence of Jaina ascetics noted for their self mortification, the caves provide little amenities. Generally caves are single storied but a few of them are double storied also. Most of the caves consist of a row of cells open either directly to the verandah or to the open space in front. These are essentially dormitories, an inference substantiated by a sloping rise of the floor to serve the purpose of a pillow.",
      "The doorways of the cells have pilasters on either side with crowning animal figures and arches over them are decorated with flowers, creepers and animal motifs. The sculptural and decorative art of the caves include panels/friezes depicting popular legends, historical episodes, religious observances, dancing performances etc."
    ],
    udayagiriTitle: "Udayagiri Caves",
    udayagiriDescription: "The Udayagiri hill contains 18 caves with remarkable features including the famous Hathi Gumpha inscription and the architecturally significant Rani Gumpha.",
    khandagiriTitle: "Khandagiri Caves",
    khandagiriDescription: "The Khandagiri hill features 15 caves, including several converted into sanctuaries with important Jain religious carvings and sculptures.",
    modernTempleTitle: "Modern Jain Temple",
    modernTempleDescription: "Located at the hilltop, constructed in the late 19th century and still active, preserving the site's religious continuity.",
    quickInfoCards: {
      historical: {
        title: "Historical Significance",
        description: "First century B.C. rock cut caves excavated during Emperor Kharavela's reign"
      },
      architecture: {
        title: "Architecture",
        description: "33 rock-cut caves 18 in Udayagiri hill and 15 in Khandagiri hill featuring unique Jaina architecture"
      },
      features: {
        title: "Notable Features",
        description: "Ancient inscriptions, sculptures, and rock cut architecture"
      }
    },
    notableCavesTitle: "Notable Caves:",
    hathiGumphaTitle: "Hathi Gumpha (Cave No. 14)",
    hathiGumphaDesc: "The most important cave featuring prehistoric rock paintings and the famous 17-line royal inscription about King Kharavela's expeditions.",
    raniGumphaTitle: "Rani Gumpha (Cave No. 1)",
    raniGumphaDesc: "A double-storied monastery with elaborate friezes depicting various scenes including royal processions, hunting expeditions, and dance performances.",
    ganesaGumphaTitle: "Ganesa Gumpha (Cave No. 10)",
    ganesaGumphaDesc: "Features relief images and an 8th-century inscription, with scenes depicting the story of Udayana and Vasavadatta.",
    allCavesTitle: "All Caves:",
    anantaGumphaTitle: "Ananta Gumpha (Cave No. 3)",
    anantaGumphaDesc: "Known for its rich ornamentations, twin serpent figures, and sculptural features including Jain auspicious symbols.",
    cave8Title: "Cave No. 8",
    cave8Desc: "Contains figures of all 24 Tirthankaras and their Sasanadevis, with unique twelve-armed figures of Chakreshvari and Rohini.",
    referencesTitle: "References",
    visitInfoTitle: "Visit Information",
    asiTitle: "Archaeological Survey of India",
    locationTitle: "Location",
    address: "Bhubaneswar Circle, Samantarapur, Bhubaneswar- 751002 (Odisha)",
    udayagiriCoord: "Udayagiri: Lat. 20°15'45\" N, Long. 85°47'05\" E",
    khandagiriCoord: "Khandagiri: Lat. 20°15'47\" N, Long. 85°47'08\" E",
    exploreTitle: "Explore Udayagiri",
    virtualTour: "https://asimuseum.info/UdayGiri_Khandagiri/UdayGiri%20Khandagiri/index.htm",
    virtualTourText: "Virtual Tour of Udayagiri and Khandagiri",
    galleryTitle: "Gallery",
    galleryImages: [
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Ranigumpha-Udayagiri-scaled.jpg",
        title: "Ranigumpha Udayagiri",
        description: "The architectural marvel of the entire complex"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/4-Baghgumpha-Udayagiri.jpg",
        title: "Baghgumpha Udayagiri",
        description: "Cave with opening carved like a tiger's head"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/5-Landscape-Scene-Ranigumpha.jpg",
        title: "Landscape Scene Ranigumpha",
        description: "Detailed landscape carvings from Rani Gumpha"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/7-A-Female-Dancer-Ranigumpha.jpg",
        title: "Female Dancer Ranigumpha",
        description: "Ancient carving depicting a dance performance"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/8-Manchapuri-and-svargapuri-Caves-Udayagiri-scaled.jpg",
        title: "Manchapuri and Svargapuri Caves",
        description: "Double-storied cave with historical inscriptions"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/9-Landscape-Scene-Ranigumpha.jpg",
        title: "Landscape Scene",
        description: "Intricate landscape carving showing historical scenes"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/13-Gajalakshmi-Anantagumpha-Khandagiri.jpg",
        title: "Gajalakshmi Anantagumpha",
        description: "Sculptural detail from Ananta Gumpha, Khandagiri"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/14-Risabhanath-and-Amra-scaled.jpg",
        title: "Risabhanath and Amra",
        description: "Religious sculpture depicting Jain figures"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-1-scaled.jpg",
        title: "Historical Panel 1",
        description: "Detailed panel showing historical scenes"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-2-scaled.jpg",
        title: "Historical Panel 2",
        description: "Ancient carved panel with historical significance"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-3-scaled.jpg",
        title: "Historical Panel 3",
        description: "Intricate carvings depicting historical events"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-4-scaled.jpg",
        title: "Historical Panel 4",
        description: "Detailed relief work showing historical scenes"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-5-scaled.jpg",
        title: "Historical Panel 5",
        description: "Ancient panel with historical carvings"
      }
    ],
    udayagiriCaves: [
      { name: "Rani Gumpha", number: "Cave No. 1" },
      { name: "Bajaghar Gumpha", number: "Cave No. 2" },
      { name: "Chhota Hathi Gumpha", number: "Cave No. 3" },
      { name: "Alakapuri Gumpha", number: "Cave No. 4" },
      { name: "Jaya-Vijaya Gumpha", number: "Cave No. 5" },
      { name: "Panasa Gumpha", number: "Cave No. 6" },
      { name: "Thakurani Gumpha", number: "Cave No. 7" },
      { name: "Patalapuri Gumpha", number: "Cave No. 8" },
      { name: "Manchapuri and Swargapuri Gumpha", number: "Cave No. 9" },
      { name: "Ganesa Gumpha", number: "Cave No. 10" },
      { name: "Jambesvara Gumpha", number: "Cave No. 11" },
      { name: "Bagha Gumpha", number: "Cave No. 12" },
      { name: "Sarpa Gumpha", number: "Cave No. 13" },
      { name: "Hathi Gumpha", number: "Cave No. 14" },
      { name: "Dhanaghara Gumpha", number: "Cave No. 15" },
      { name: "Haridasa Gumpha", number: "Cave No. 16" },
      { name: "Jagannatha Gumpha", number: "Cave No. 17" },
      { name: "Rasui Gumpha", number: "Cave No. 18" }
    ],
    khandagiriCaves: [
      { name: "Tatowa Gumpha 1", number: "Cave No. 1" },
      { name: "Tatowa Gumpha 2", number: "Cave No. 2" },
      { name: "Ananta Gumpha", number: "Cave No. 3" },
      { name: "Tentuli Gumpha", number: "Cave No. 4" },
      { name: "Khandagiri Gumpha", number: "Cave No. 5" },
      { name: "Dhyanaghara/Dhyana Gumpha", number: "Cave No. 6" },
      { name: "Navamuni Gumpha", number: "Cave No. 7" },
      { name: "Barabhuji Gumpha", number: "Cave No. 8" },
      { name: "Trisula Gumpha", number: "Cave No. 9" },
      { name: "Unnamed Cave", number: "Cave No. 10" },
      { name: "Lalatendukesari Gumpha", number: "Cave No. 11" },
      { name: "Unnamed cave near Radhakunda", number: "Cave No. 12" },
      { name: "Unnamed cave beyond Radhakunda", number: "Cave No. 13" },
      { name: "Ekadasi Gumpha", number: "Cave No. 14" },
      { name: "Unnamed cave near Gupta Ganga", number: "Cave No. 15" }
    ],
    references: [
      {
        author: "A. Sterling",
        title: "An Account, Geographical, Statistical and Historical of Orissa Proper or Cuttack",
        publication: "Asiatic Researches, XV, Serampur, 1825, PP.311-15"
      },
      {
        author: "D. Mitra",
        title: "Udayagiri and Khandagiri",
        publication: "Archaeological Survey of India, New Delhi, 1992"
      },
      {
        author: "K. P. Jayaswal & R. D. Banerji",
        title: "The Hathigumpha Inscription of Kharavela",
        publication: "Epigraphia Indica, Vol XX, 1930, PP.71-89"
      },
      {
        author: "R. D. Banerji",
        title: "Inscriptions in the Udayagiri and Khandagiri Caves",
        publication: "Epigraphia Indica, Vol. XX, 1930, PP.71-89"
      },
      {
        author: "R. P. Mohapatra",
        title: "Udayagiri and Khandagiri Caves",
        publication: "D. K. Publications, Delhi, 1981"
      }
    ],
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nrB9js74WNM?si=FCWM7p3DcXh6mPq5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  hi: {
    title: "उदयगिरि और खंडगिरि गुफाएं",
    subtitle: "पूर्वी भारत में प्राचीन जैन चट्टान-कट वास्तुकला",
    location: "भुवनेश्वर, ओडिशा, भारत",
    historicalOverview: "ऐतिहासिक अवलोकन",
    historicalText: [
      "उदयगिरि और खंडगिरि की जुड़वां पहाड़ियाँ, जिन्हें प्राचीन काल में क्रमशः कुमार और कुमारी पर्वत के नाम से जाना जाता था, पूर्वी भारत में जैन चट्टान-कट वास्तुकला के सबसे प्रारंभिक समूहों में से एक का प्रतिनिधित्व करती हैं। ये स्मारक मुख्य रूप से सम्राट खारवेल के शासनकाल के दौरान पहली शताब्दी ईसा पूर्व में खुदाई किए गए थे, जैसा कि गुफाओं के भीतर पाए गए शिलालेखों से प्रमाणित होता है। जैन धर्मावलंबियों ने यहाँ अवसरिक विराम के साथ वर्तमान समय तक निवास किया है। गुफाओं को सबसे पहले ए. स्टर्लिंग ने 1825 में देखा और आंशिक रूप से वर्णित किया था।",
      "जैन सन्यासियों के निवास के लिए बने इन गुफाओं में बहुत कम सुविधाएँ हैं। अधिकांश गुफाएँ एक मंजिला हैं लेकिन कुछ दो मंजिला भी हैं। अधिकांश गुफाओं में बरामदे या सामने की ओर खुलने वाली कोशिकाओं की एक पंक्ति होती है। ये अनिवार्य रूप से छात्रावास हैं, एक अनुमान जो तकिए के उद्देश्य को पूरा करने के लिए फर्श के ढलान से प्रमाणित होता है।",
      "कोशिकाओं के दरवाजों पर दोनों तरफ पिलास्टर हैं जिन पर मुकुट में पशु आकृतियाँ और उनके ऊपर मेहराब हैं जो फूलों, लताओं और पशु आकृतियों से सजाए गए हैं। गुफाओं की मूर्तिकला और सजावटी कला में लोकप्रिय कथाएँ, ऐतिहासिक प्रकरण, धार्मिक अनुष्ठान, नृत्य प्रदर्शन आदि को दर्शाने वाले पैनल/फ्रिज़ शामिल हैं।"
    ],
    udayagiriTitle: "उदयगिरि गुफाएँ",
    udayagiriDescription: "उदयगिरि पहाड़ी में 18 गुफाएँ हैं जिनमें उल्लेखनीय विशेषताएं हैं, जिनमें प्रसिद्ध हाथी गुम्फा शिलालेख और वास्तुकला की दृष्टि से महत्वपूर्ण रानी गुम्फा शामिल हैं।",
    khandagiriTitle: "खंडगिरि गुफाएँ",
    khandagiriDescription: "खंडगिरि पहाड़ी में 15 गुफाएँ हैं, जिनमें से कई को अहम जैन धार्मिक नक्काशी और मूर्तियों के साथ मंदिरों में परिवर्तित कर दिया गया है।",
    modernTempleTitle: "आधुनिक जैन मंदिर",
    modernTempleDescription: "पहाड़ी की चोटी पर स्थित, 19वीं सदी के अंत में निर्मित और अभी भी सक्रिय, यह मंदिर स्थल की धार्मिक निरंतरता को संरक्षित करता है।",
    quickInfoCards: {
      historical: {
        title: "ऐतिहासिक महत्व",
        description: "सम्राट खारवेल के शासनकाल में खुदाई की गई पहली शताब्दी ईसा पूर्व की चट्टान कट गुफाएं"
      },
      architecture: {
        title: "वास्तुकला",
        description: "33 चट्टान-कट गुफाएं - उदयगिरि पहाड़ी में 18 और खंडगिरि पहाड़ी में 15 अनूठी जैन वास्तुकला के साथ"
      },
      features: {
        title: "उल्लेखनीय विशेषताएं",
        description: "प्राचीन शिलालेख, मूर्तियां और चट्टान कट वास्तुकला"
      }
    },
    notableCavesTitle: "उल्लेखनीय गुफाएं:",
    hathiGumphaTitle: "हाथी गुम्फा (गुफा संख्या 14)",
    hathiGumphaDesc: "सबसे महत्वपूर्ण गुफा जिसमें प्रागैतिहासिक रॉक पेंटिंग और राजा खारवेल के अभियानों के बारे में प्रसिद्ध 17-पंक्ति का शाही शिलालेख है।",
    raniGumphaTitle: "रानी गुम्फा (गुफा संख्या 1)",
    raniGumphaDesc: "विस्तृत फ्रिज़ के साथ एक दो मंजिला मठ जिसमें शाही जुलूस, शिकार अभियान और नृत्य प्रदर्शन सहित विभिन्न दृश्यों को दर्शाया गया है।",
    ganesaGumphaTitle: "गणेश गुम्फा (गुफा संख्या 10)",
    ganesaGumphaDesc: "इसमें राहत चित्र और 8वीं शताब्दी का शिलालेख है, जिसमें उदयन और वास्रवदत्ता की कहानी को दर्शाने वाले दृश्य हैं।",
    allCavesTitle: "सभी गुफाएं:",
    anantaGumphaTitle: "अनंत गुम्फा (गुफा संख्या 3)",
    anantaGumphaDesc: "अपनी समृद्ध सजावट, जुड़वां सर्प आकृतियों और जैन शुभ प्रतीकों सहित मूर्तिकला विशेषताओं के लिए जाना जाता है।",
    cave8Title: "गुफा संख्या 8",
    cave8Desc: "इसमें सभी 24 तीर्थंकरों और उनकी सासनदेवियों की आकृतियाँ हैं, जिनमें चक्रेश्वरी और रोहिणी की अद्वितीय बारह भुजाओं वाली आकृतियाँ हैं।",
    referencesTitle: "संदर्भ",
    visitInfoTitle: "आने की जानकारी",
    asiTitle: "भारतीय पुरातत्व सर्वेक्षण",
    locationTitle: "स्थान",
    address: "भुवनेश्वर सर्कल, सामंतरापुर, भुवनेश्वर- 751002 (ओडिशा)",
    udayagiriCoord: "उदयगिरि: अक्षांश 20°15'45\" उ., देशांतर 85°47'05\" पू.",
    khandagiriCoord: "खंडगिरि: अक्षांश 20°15'47\" उ., देशांतर 85°47'08\" पू.",
    exploreTitle: "उदयगिरि का अन्वेषण करें",
    virtualTour: "https://asimuseum.info/UdayGiri_Khandagiri/Udayagiri%20Khandagiri/index.htm",
    virtualTourText: "उदयगिरि और खंडगिरि का वर्चुअल टूर",
    galleryTitle: "गैलरी",
    galleryImages: [
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Ranigumpha-Udayagiri-scaled.jpg",
        title: "रानी गुम्फा उदयगिरि",
        description: "पूरे परिसर का स्थापत्य चमत्कार"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/4-Baghgumpha-Udayagiri.jpg",
        title: "बाघ गुम्फा उदयगिरि",
        description: "शेर के सिर की तरह नक्काशीदार द्वार वाली गुफा"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/5-Landscape-Scene-Ranigumpha.jpg",
        title: "परिदृश्य दृश्य रानी गुम्फा",
        description: "रानी गुम्फा से विस्तृत परिदृश्य नक्काशी"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/7-A-Female-Dancer-Ranigumpha.jpg",
        title: "महिला नर्तकी रानी गुम्फा",
        description: "नृत्य प्रदर्शन को दर्शाती प्राचीन नक्काशी"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/8-Manchapuri-and-svargapuri-Caves-Udayagiri-scaled.jpg",
        title: "मंचपुरी और स्वर्गपुरी गुफाएं",
        description: "ऐतिहासिक शिलालेखों वाली दो मंजिला गुफा"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/9-Landscape-Scene-Ranigumpha.jpg",
        title: "परिदृश्य दृश्य",
        description: "ऐतिहासिक दृश्यों को दर्शाती जटिल परिदृश्य नक्काशी"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/13-Gajalakshmi-Anantagumpha-Khandagiri.jpg",
        title: "गजलक्ष्मी अनंत गुम्फा",
        description: "अनंत गुम्फा, खंडगिरि से मूर्तिकला विवरण"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/14-Risabhanath-and-Amra-scaled.jpg",
        title: "ऋषभनाथ और आम्र",
        description: "जैन आकृतियों को दर्शाती धार्मिक मूर्तिकला"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-1-scaled.jpg",
        title: "ऐतिहासिक पैनल 1",
        description: "ऐतिहासिक दृश्यों को दर्शाने वाला विस्तृत पैनल"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-2-scaled.jpg",
        title: "ऐतिहासिक पैनल 2",
        description: "ऐतिहासिक महत्व का प्राचीन नक्काशीदार पैनल"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-3-scaled.jpg",
        title: "ऐतिहासिक पैनल 3",
        description: "ऐतिहासिक घटनाओं को दर्शाती जटिल नक्काशी"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-4-scaled.jpg",
        title: "ऐतिहासिक पैनल 4",
        description: "ऐतिहासिक दृश्यों को दर्शाने वाला विस्तृत राहत कार्य"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-5-scaled.jpg",
        title: "ऐतिहासिक पैनल 5",
        description: "ऐतिहासिक नक्काशी वाला प्राचीन पैनल"
      }
    ],
    udayagiriCaves: [
      { name: "रानी गुम्फा", number: "गुफा संख्या 1" },
      { name: "बजाघर गुम्फा", number: "गुफा संख्या 2" },
      { name: "छोटा हाथी गुम्फा", number: "गुफा संख्या 3" },
      { name: "अलकापुरी गुम्फा", number: "गुफा संख्या 4" },
      { name: "जय-विजय गुम्फा", number: "गुफा संख्या 5" },
      { name: "पनासा गुम्फा", number: "गुफा संख्या 6" },
      { name: "ठकुरानी गुम्फा", number: "गुफा संख्या 7" },
      { name: "पातालपुरी गुम्फा", number: "गुफा संख्या 8" },
      { name: "मंचपुरी और स्वर्गपुरी गुम्फा", number: "गुफा संख्या 9" },
      { name: "गणेश गुम्फा", number: "गुफा संख्या 10" },
      { name: "जाम्बेश्वर गुम्फा", number: "गुफा संख्या 11" },
      { name: "बाघ गुम्फा", number: "गुफा संख्या 12" },
      { name: "सर्प गुम्फा", number: "गुफा संख्या 13" },
      { name: "हाथी गुम्फा", number: "गुफा संख्या 14" },
      { name: "धनघर गुम्फा", number: "गुफा संख्या 15" },
      { name: "हरिदास गुम्फा", number: "गुफा संख्या 16" },
      { name: "जगन्नाथ गुम्फा", number: "गुफा संख्या 17" },
      { name: "रसोई गुम्फा", number: "गुफा संख्या 18" }
    ],
    khandagiriCaves: [
      { name: "ततोवा गुम्फा 1", number: "गुफा संख्या 1" },
      { name: "ततोवा गुम्फा 2", number: "गुफा संख्या 2" },
      { name: "अनंत गुम्फा", number: "गुफा संख्या 3" },
      { name: "तेन्तुली गुम्फा", number: "गुफा संख्या 4" },
      { name: "खंडगिरि गुम्फा", number: "गुफा संख्या 5" },
      { name: "ध्यानघर गुम्फा", number: "गुफा संख्या 6" },
      { name: "नवमुनि गुम्फा", number: "गुफा संख्या 7" },
      { name: "बरभुजी गुम्फा", number: "गुफा संख्या 8" },
      { name: "त्रिशूल गुम्फा", number: "गुफा संख्या 9" },
      { name: "अनाम गुफा", number: "गुफा संख्या 10" },
      { name: "ललाटेन्दुकेशरी गुम्फा", number: "गुफा संख्या 11" },
      { name: "राधाकुंड के पास अनाम गुफा", number: "गुफा संख्या 12" },
      { name: "राधाकुंड से आगे अनाम गुफा", number: "गुफा संख्या 13" },
      { name: "एकादशी गुम्फा", number: "गुफा संख्या 14" },
      { name: "गुप्त गंगा के पास अनाम गुफा", number: "गुफा संख्या 15" }
    ],
    references: [
      {
        author: "A. Sterling",
        title: "ओडिशा प्रॉपर या कटक का भौगोलिक, सांख्यिकीय और ऐतिहासिक विवरण",
        publication: "एशियाटिक रिसर्च, XV, सेरामपुर, 1825, पृ. 311-15"
      },
      {
        author: "D. Mitra",
        title: "उदयगिरि और खंडगिरि",
        publication: "भारतीय पुरातत्व सर्वेक्षण, नई दिल्ली, 1992"
      },
      {
        author: "K. P. Jayaswal और R. D. Banerji",
        title: "खारवेल का हाथीगुम्फा शिलालेख",
        publication: "एपिसोग्राफिया इंडिका, खंड XX, 1930, पृ. 71-89"
      },
      {
        author: "R. D. Banerji",
        title: "उदयगिरि और खंडगिरि गुफाओं में शिलालेख",
        publication: "एपिसोग्राफिया इंडिका, खंड XX, 1930, पृ. 71-89"
      },
      {
        author: "R. P. Mohapatra",
        title: "उदयगिरि और खंडगिरि गुफाएँ",
        publication: "डी. के. पब्लिकेशंस, दिल्ली, 1981"
      }
    ],
    'video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/jcoZuXbNceU?si=VkA8cuZvZDHyi00j" title="यूट्यूब वीडियो प्लेयर" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  od: {
    title: "ଉଦୟଗିରି ଏବଂ ଖଣ୍ଡଗିରି ଗୁମ୍ଫା",
    subtitle: "ପୂର୍ବ ଭାରତରେ ପ୍ରାଚୀନ ଜୈନ ଶିଳା-କଟ ସ୍ଥାପତ୍ୟ",
    location: "ଭୁବନେଶ୍ୱର, ଓଡିଶା, ଭାରତ",
    historicalOverview: "ଐତିହାସିକ ଅବଲୋକନ",
    historicalText: [
      "ଉଦୟଗିରି ଏବଂ ଖଣ୍ଡଗିରିର ଜୋଡ଼ା ପାହାଡ଼, ଯାହାକୁ ପ୍ରାଚୀନ କାଳରେ କୁମାର ଏବଂ କୁମାରୀ ପର୍ବତ ନାମରେ ଜଣାଶୁଣା ଥିଲା, ପୂର୍ବ ଭାରତରେ ଜୈନ ଶିଳା-କଟ ସ୍ଥାପତ୍ୟର ସବୁଠାରୁ ପ୍ରାରମ୍ଭିକ ଗୋଷ୍ଠୀମାନଙ୍କ ମଧ୍ୟରୁ ଗୋଟିଏ ଅଟେ। ଏହି ସ୍ମାରକଗୁଡ଼ିକ ମୁଖ୍ୟତଃ ଖାରବେଳ ସମ୍ରାଟଙ୍କ ଶାସନ କାଳ ସମୟରେ ପ୍ରଥମ ଶତାବ୍ଦୀ ଈସା ପୂର୍ବରେ ଖୋଦିତ ହୋଇଥିଲା, ଯାହା ଗୁମ୍ଫା ମଧ୍ୟରେ ଥିବା ଶିଳାଲେଖରୁ ସୂଚିତ ହୁଏ।",
      "ଜୈନ ସନ୍ୟାସୀମାନଙ୍କ ନିବାସ ପାଇଁ ଏହି ଗୁମ୍ଫାଗୁଡ଼ିକରେ ଅତି କମ ସୁବିଧା ରହିଛି। ସାଧାରଣତଃ ଗୁମ୍ଫାଗୁଡ଼ିକ ଏକ ମହଲା ବିଶିଷ୍ଟ କିନ୍ତୁ କିଛି ଦୁଇ ମହଲା ମଧ୍ୟ ଅଛି। ଅଧିକାଂଶ ଗୁମ୍ଫାରେ ବାରଣ୍ଡା କିମ୍ବା ସାମ୍ନା ଖୋଲା ସ୍ଥାନକୁ କୋଠରୀଗୁଡ଼ିକର ଏକ ଧାଡ଼ି ଅଛି।",
      "କୋଠରୀଗୁଡ଼ିକର ଦ୍ୱାରରେ ଦୁଇ ପାର୍ଶ୍ୱରେ ପିଲାସ୍ଟର ଅଛି ଯେଉଁଥିରେ ମୁକୁଟରେ ପଶୁ ଆକୃତି ଏବଂ ଉପରେ ମେହରାବ ଅଛି ଯାହା ଫୁଲ, ଲତା ଏବଂ ପଶୁ ଆକୃତିରେ ସଜାଯାଇଛି। ଗୁମ୍ଫାଗୁଡ଼ିକର ମୂର୍ତ୍ତିକଳା ଏବଂ ସାଜସଜ୍ଜା କଳାରେ ଲୋକପ୍ରିୟ କାହାଣୀ, ଐତିହାସିକ ଘଟଣା, ଧାର୍ମିକ ଅନୁଷ୍ଠାନ, ନୃତ୍ୟ ପ୍ରଦର୍ଶନ ଆଦି ଦର୍ଶାଉଥିବା ପ୍ୟାନେଲ/ଫ୍ରିଜ୍ ଅନ୍ତର୍ଭୁକ୍ତ।"
    ],
    udayagiriTitle: "ଉଦୟଗିରି ଗୁମ୍ଫା",
    udayagiriDescription: "ଉଦୟଗିରି ପାହାଡ଼ରେ ୧ୈ ଗୁମ୍ଫା ଅଛି ଯେଉଁଥିରେ ଉଲ୍ଲେଖନୀୟ ବିଶେଷତା ଅଛି, ଯେଉଁଥିରେ ପ୍ରସିଦ୍ଧ ହାତୀ ଗୁମ୍ଫା ଶିଳାଲେଖ ଏବଂ ସ୍ଥାପତ୍ୟ ଦୃଷ୍ଟିରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ରାଣୀ ଗୁମ୍ଫା ଅନ୍ତର୍ଭୁକ୍ତ।",
    khandagiriTitle: "ଖଣ୍ଡଗିରି ଗୁମ୍ଫା",
    khandagiriDescription: "ଖଣ୍ଡଗିରି ପାହାଡ଼ରେ ୧୫ ଗୁମ୍ଫା ଅଛି, ଯେଉଁଥିରୁ ଅନେକକୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଜୈନ ଧାର୍ମିକ ଖୋଦିତ କାର୍ଯ୍ୟ ଏବଂ ମୂର୍ତ୍ତି ସହିତ ମନ୍ଦିରରେ ପରିବର୍ତ୍ତିତ କରାଯାଇଛି।",
    modernTempleTitle: "ଆଧୁନିକ ଜୈନ ମନ୍ଦିର",
    modernTempleDescription: "ପାହାଡ଼ ଚୂଡ଼ାରେ ଅବସ୍ଥିତ, ୧୯ ଶତାବ୍ଦୀର ଶେଷରେ ନିର୍ମିତ ଏବଂ ଏବେ ବି ସକ୍ରିୟ, ଏହି ମନ୍ଦିର ସ୍ଥାନର ଧାର୍ମିକ ନିରନ୍ତରତାକୁ ସଂରକ୍ଷଣ କରେ।",
    quickInfoCards: {
      historical: {
        title: "ଐତିହାସିକ ମହତ୍ତ୍ୱ",
        description: "ସମ୍ରାଟ ଖାରବେଳଙ୍କ ଶାସନ କାଳରେ ଖୋଦିତ ପ୍ରଥମ ଶତାବ୍ଦୀ ଈସା ପୂର୍ବର ଶିଳା କଟ ଗୁମ୍ଫା"
      },
      architecture: {
        title: "ସ୍ଥାପତ୍ୟ",
        description: "୩୩ ଶିଳା-କଟ ଗୁମ୍ଫା - ଉଦୟଗିରି ପାହାଡ଼ରେ ୧୮ ଏବଂ ଖଣ୍ଡଗିରି ପାହାଡ଼ରେ ୧୫ ଅନନ୍ୟ ଜୈନ ସ୍ଥାପତ୍ୟ ସହିତ"
      },
      features: {
        title: "ଉଲ୍ଲେଖନୀୟ ବିଶେଷତା",
        description: "ପ୍ରାଚୀନ ଶିଳାଲେଖ, ମୂର୍ତ୍ତି ଏବଂ ଶିଳା କଟ ସ୍ଥାପତ୍ୟ"
      }
    },
    notableCavesTitle: "ଉଲ୍ଲେଖନୀୟ ଗୁମ୍ଫା:",
    hathiGumphaTitle: "ହାତୀ ଗୁମ୍ଫା (ଗୁମ୍ଫା ନଂ. ୧୪)",
    hathiGumphaDesc: "ପ୍ରାଗୈତିହାସିକ ଶୈଳ ଚିତ୍ର ଏବଂ ରାଜା ଖାରବେଳଙ୍କ ଅଭିଯାନ ବିଷୟରେ ପ୍ରସିଦ୍ଧ ୧୭-ଧାଡ଼ି ବିଶିଷ୍ଟ ରାଜକୀୟ ଶିଳାଲେଖ ଥିବା ସବୁଠାରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଗୁମ୍ଫା।",
    raniGumphaTitle: "ରାଣୀ ଗୁମ୍ଫା (ଗୁମ୍ଫା ନଂ. ୧)",
    raniGumphaDesc: "ଏକ ଦୁଇ ମହଲା ବିଶିଷ୍ଟ ମଠ ଯେଉଁଥିରେ ରାଜକୀୟ ଶୋଭାଯାତ୍ରା, ଶିକାର ଅଭିଯାନ ଏବଂ ନୃତ୍ୟ ପ୍ରଦର୍ଶନ ସହିତ ବିଭିନ୍ନ ଦୃଶ୍ୟ ପ୍ରଦର୍ଶନ କରୁଥିବା ବିସ୍ତୃତ ଫ୍ରିଜ୍ ରହିଛି।",
    ganesaGumphaTitle: "ଗଣେଶ ଗୁମ୍ଫା (ଗୁମ୍ଫା ନଂ. ୧୦)",
    ganesaGumphaDesc: "ଏଥିରେ ରିଲିଫ୍ ଚିତ୍ର ଏବଂ ଅଷ୍ଟମ ଶତାବ୍ଦୀର ଏକ ଶିଳାଲେଖ ରହିଛି, ଯେଉଁଥିରେ ଉଦୟନ ଏବଂ ବାସବଦତ୍ତାଙ୍କ କାହାଣୀ ପ୍ରଦର୍ଶନ କରୁଥିବା ଦୃଶ୍ୟ ରହିଛି।",
    allCavesTitle: "ସମସ୍ତ ଗୁମ୍ଫା:",
    anantaGumphaTitle: "ଅନନ୍ତ ଗୁମ୍ଫା (ଗୁମ୍ଫା ନଂ. ୩)",
    anantaGumphaDesc: "ଏହାର ସମୃଦ୍ଧ ଅଳଙ୍କାର, ଯୁଗଳ ସର୍ପ ଆକୃତି ଏବଂ ଜୈନ ଶୁଭ ପ୍ରତୀକ ସହିତ ମୂର୍ତ୍ତିକଳା ବିଶେଷତା ପାଇଁ ଜଣାଶୁଣା।",
    cave8Title: "ଗୁମ୍ଫା ନଂ. ୮",
    cave8Desc: "ଏଥିରେ ସମସ୍ତ ୨୪ ତୀର୍ଥଙ୍କର ଏବଂ ସେମାନଙ୍କ ଶାସନଦେବୀଙ୍କ ଚିତ୍ର ରହିଛି, ଯେଉଁଥିରେ ଚକ୍ରେଶ୍ୱରୀ ଏବଂ ରୋହିଣୀଙ୍କ ଅନନ୍ୟ ବାର-ବାହୁ ବିଶିଷ୍ଟ ଚିତ୍ର ରହିଛି।",
    referencesTitle: "ସନ୍ଦର୍ଭ",
    visitInfoTitle: "ଭ୍ରମଣ ସୂଚନା",
    asiTitle: "ଭାରତୀୟ ପ୍ରତ୍ନତତ୍ତ୍ୱ ସର୍ବେକ୍ଷଣ",
    locationTitle: "ସ୍ଥାନ",
    address: "ଭୁବନେଶ୍ୱର ସର୍କଲ୍, ସାମନ୍ତରାପୁର, ଭୁବନେଶ୍ୱର- ୭୫୧୦୦୨ (ଓଡ଼ିଶା)",
    udayagiriCoord: "ଉଦୟଗିରି: ଅକ୍ଷାଂଶ ୨୦°୧୫'୪୫\" ଉ., ଦ୍ରାଘିମା ୮୫°୪୭'୦୫\" ପୂ.",
    khandagiriCoord: "ଖଣ୍ଡଗିରି: ଅକ୍ଷାଂଶ ୨୦°୧୫'୪୭\" ଉ., ଦ୍ରାଘିମା ୮୫°୪୭'୦୮\" ପୂ.",
    exploreTitle: "ଉଦୟଗିରି ଅନୁସନ୍ଧାନ କରନ୍ତୁ",
    virtualTour: "https://asimuseum.info/UdayGiri_Khandagiri/Udayagiri%20Khandagiri/index.htm",
    virtualTourText: "ଉଦୟଗିରି ଏବଂ ଖଣ୍ଡଗିରିର ଭର୍ଚୁଆଲ ଟୁର",
    galleryTitle: "ଗ୍ୟାଲେରୀ",
    galleryImages: [
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Ranigumpha-Udayagiri-scaled.jpg",
        title: "ରାଣୀ ଗୁମ୍ଫା ଉଦୟଗିରି",
        description: "ସମଗ୍ର ପରିସରର ସ୍ଥାପତ୍ୟ ଚମତ୍କାର"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/4-Baghgumpha-Udayagiri.jpg",
        title: "ବାଘ ଗୁମ୍ଫା ଉଦୟଗିରି",
        description: "ବାଘ ମୁଣ୍ଡ ପରି ଖୋଦିତ ଦ୍ୱାର ଥିବା ଗୁମ୍ଫା"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/5-Landscape-Scene-Ranigumpha.jpg",
        title: "ପରିଦୃଶ୍ୟ ଦୃଶ୍ୟ ରାଣୀ ଗୁମ୍ଫା",
        description: "ରାଣୀ ଗୁମ୍ଫାରୁ ବିସ୍ତୃତ ପରିଦୃଶ୍ୟ ଖୋଦିତ କାର୍ଯ୍ୟ"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/7-A-Female-Dancer-Ranigumpha.jpg",
        title: "ନର୍ତ୍ତକୀ ରାଣୀ ଗୁମ୍ଫା",
        description: "ନୃତ୍ୟ ପ୍ରଦର୍ଶନକୁ ଦର୍ଶାଉଥିବା ପ୍ରାଚୀନ ଖୋଦିତ କାର୍ଯ୍ୟ"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/8-Manchapuri-and-svargapuri-Caves-Udayagiri-scaled.jpg",
        title: "ମଞ୍ଚପୁରୀ ଏବଂ ସ୍ୱର୍ଗପୁରୀ ଗୁମ୍ଫା",
        description: "ଐତିହାସିକ ଶିଳାଲେଖ ସହିତ ଦୁଇ ମହଲା ବିଶିଷ୍ଟ ଗୁମ୍ଫା"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/9-Landscape-Scene-Ranigumpha.jpg",
        title: "ପରିଦୃଶ୍ୟ ଦୃଶ୍ୟ",
        description: "ଐତିହାସିକ ଦୃଶ୍ୟ ଦର୍ଶାଉଥିବା ଜଟିଳ ପରିଦୃଶ୍ୟ ଖୋଦିତ କାର୍ଯ୍ୟ"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/13-Gajalakshmi-Anantagumpha-Khandagiri.jpg",
        title: "ଗଜଲକ୍ଷ୍ମୀ ଅନନ୍ତ ଗୁମ୍ଫା",
        description: "ଅନନ୍ତ ଗୁମ୍ଫା, ଖଣ୍ଡଗିରିରୁ ମୂର୍ତ୍ତିକଳା ବିବରଣୀ"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/14-Risabhanath-and-Amra-scaled.jpg",
        title: "ଋଷଭନାଥ ଏବଂ ଆମ୍ର",
        description: "ଜୈନ ପ୍ରତିମା ଦର୍ଶାଉଥିବା ଧାର୍ମିକ ମୂର୍ତ୍ତି"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-1-scaled.jpg",
        title: "ଐତିହାସିକ ପ୍ୟାନେଲ୍ ୧",
        description: "ଐତିହାସିକ ଦୃଶ୍ୟ ଦର୍ଶାଉଥିବା ବିସ୍ତୃତ ପ୍ୟାନେଲ୍"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-2-scaled.jpg",
        title: "ଐତିହାସିକ ପ୍ୟାନେଲ୍ ୨",
        description: "ଐତିହାସିକ ମହତ୍ତ୍ୱର ପ୍ରାଚୀନ ଖୋଦିତ ପ୍ୟାନେଲ୍"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-3-scaled.jpg",
        title: "ଐତିହାସିକ ପ୍ୟାନେଲ୍ ୩",
        description: "ଐତିହାସିକ ଘଟଣା ଦର୍ଶାଉଥିବା ଜଟିଳ ଖୋଦିତ କାର୍ଯ୍ୟ"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-4-scaled.jpg",
        title: "ଐତିହାସିକ ପ୍ୟାନେଲ୍ ୪",
        description: "ଐତିହାସିକ ଦୃଶ୍ୟ ଦର୍ଶାଉଥିବା ବିସ୍ତୃତ ରିଲିଫ୍ କାର୍ଯ୍ୟ"
      },
      {
        url: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/Panel-5-scaled.jpg",
        title: "ଐତିହାସିକ ପ୍ୟାନେଲ୍ ୫",
        description: "ଐତିହାସିକ ଖୋଦିତ କାର୍ଯ୍ୟ ସହିତ ପ୍ରାଚୀନ ପ୍ୟାନେଲ୍"
      }
    ],
    udayagiriCaves: [
      { name: "ରାଣୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧" },
      { name: "ବଜାଘର ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୨" },
      { name: "ଛୋଟ ହାତୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୩" },
      { name: "ଅଳକାପୁରୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୪" },
      { name: "ଜୟ-ବିଜୟ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୫" },
      { name: "ପନସ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୬" },
      { name: "ଠାକୁରାଣୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୭" },
      { name: "ପାତାଳପୁରୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୮" },
      { name: "ମଞ୍ଚପୁରୀ ଏବଂ ସ୍ୱର୍ଗପୁରୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୯" },
      { name: "ଗଣେଶ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୦" },
      { name: "ଜମ୍ବେଶ୍ୱର ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୧" },
      { name: "ବାଘ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୨" },
      { name: "ସର୍ପ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୩" },
      { name: "ହାତୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୪" },
      { name: "ଧାନଘର ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୫" },
      { name: "ହରିଦାସ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୬" },
      { name: "ଜଗନ୍ନାଥ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୭" },
      { name: "ରୋଷେଇ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୮" }
    ],
    khandagiriCaves: [
      { name: "ତତୋୱା ଗୁମ୍ଫା ୧", number: "ଗୁମ୍ଫା ନଂ. ୧" },
      { name: "ତତୋୱା ଗୁମ୍ଫା ୨", number: "ଗୁମ୍ଫା ନଂ. ୨" },
      { name: "ଅନନ୍ତ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୩" },
      { name: "ତେନ୍ତୁଳି ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୪" },
      { name: "ଖଣ୍ଡଗିରି ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୫" },
      { name: "ଧ୍ୟାନଘର ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୬" },
      { name: "ନବମୁନି ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୭" },
      { name: "ବାରଭୁଜି ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୮" },
      { name: "ତ୍ରିଶୂଳ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୯" },
      { name: "ଅନାମ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୦" },
      { name: "ଲଲାଟେନ୍ଦୁକେଶରୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୧" },
      { name: "ରାଧାକୁଣ୍ଡ ନିକଟସ୍ଥ ଅନାମ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୨" },
      { name: "ରାଧାକୁଣ୍ଡ ପରବର୍ତ୍ତୀ ଅନାମ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୩" },
      { name: "ଏକାଦଶୀ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୪" },
      { name: "ଗୁପ୍ତ ଗଙ୍ଗା ନିକଟସ୍ଥ ଅନାମ ଗୁମ୍ଫା", number: "ଗୁମ୍ଫା ନଂ. ୧୫" }
    ],
    references: [
      {
        author: "A. Sterling",
        title: "ଓଡ଼ିଶା ପ୍ରପର ବା କଟକର ଭୌଗୋଳିକ, ପରିସଂଖ୍ୟାନ ଏବଂ ଐତିହାସିକ ବିବରଣୀ",
        publication: "Asiatic Researches, XV, Serampur, 1825, PP.311-15"
      },
      {
        author: "D. Mitra",
        title: "ଉଦୟଗିରି ଏବଂ ଖଣ୍ଡଗିରି",
        publication: "Archaeological Survey of India, New Delhi, 1992"
      },
      {
        author: "K. P. Jayaswal & R. D. Banerji",
        title: "ଖାରବେଳଙ୍କ ହାତୀଗୁମ୍ଫା ଶିଳାଲେଖ",
        publication: "Epigraphia Indica, Vol XX, 1930, PP.71-89"
      },
      {
        author: "R. D. Banerji",
        title: "ଉଦୟଗିରି ଏବଂ ଖଣ୍ଡଗିରି ଗୁମ୍ଫାର ଶିଳାଲେଖ",
        publication: "Epigraphia Indica, Vol. XX, 1930, PP.71-89"
      },
      {
        author: "R. P. Mohapatra",
        title: "ଉଦୟଗିରି ଏବଂ ଖଣ୍ଡଗିରି ଗୁମ୍ଫା",
        publication: "D. K. Publications, Delhi, 1981"
      }
    ],
    'video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/q_XnS_1G1vc?si=eJ2YvRM6SdJfX0Hi" title="ୟୁଟ୍ୟୁବ୍ ଭିଡିଓ ପ୍ଲେୟାର୍" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  }
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [odiaPdfOpen, setOdiaPdfOpen] = useState(false);

  // URL for the Odia-language PDF popup.  Update with whatever link you need.
  const odiaPdfUrl = "https://jpraaar3li.ufs.sh/f/coNgfsp8HpgYUaxSEBqfKpAjSzvTMQy8krXJPnCxhFuER73l";

  const currentContent = content[language];
  const isOdia = language === 'od';

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-2">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-amber-600" />
            <select 
              value={language} 
              onChange={(e) => {
                const newLang = e.target.value as Language;
                setLanguage(newLang);
                if (newLang === 'od') {
                  setOdiaPdfOpen(true);
                } else {
                  setOdiaPdfOpen(false);
                }
              }}
              className="border-none bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="od">ଓଡ଼ିଆ</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Ranigumpha-Udayagiri-scaled.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {!isOdia && (
            <>
              <h1 className="text-5xl font-bold mb-4 text-center px-4">{currentContent.title}</h1>
              <p className="text-xl mb-8 text-center px-4">{currentContent.subtitle}</p>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <p>{currentContent.location}</p>
              </div>
            </>
          )}
          <button 
            onClick={() => document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-8 animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div id="main-content" className="max-w-7xl mx-auto px-4 py-16">
        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">{currentContent.exploreTitle}</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative pb-[56.25%] h-0" dangerouslySetInnerHTML={{ __html: currentContent.video}}>      
              </div>
            </div>
          </div>
          {/* Virtual Tour Link */}
          <p className="mt-4 text-center">
            <a
              href={currentContent.virtualTour}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {currentContent.virtualTourText}
            </a>
          </p>
        </div>

        {/* Inline Odia PDF viewer */}
        {odiaPdfOpen && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-center">Odia Document</h2>
            <div className="w-full h-[600px]">
              <iframe
                src={odiaPdfUrl}
                className="w-full h-full border"
                title="Odia PDF"
              />
            </div>
          </div>
        )}
        
        {/* Quick Info */}
        {!isOdia && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <History className="w-8 h-8 mb-4 text-amber-600" />
            <h3 className="text-lg font-semibold mb-2">{currentContent.quickInfoCards.historical.title}</h3>
            <p>{currentContent.quickInfoCards.historical.description}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Landmark className="w-8 h-8 mb-4 text-amber-600" />
            <h3 className="text-lg font-semibold mb-2">{currentContent.quickInfoCards.architecture.title}</h3>
            <p>{currentContent.quickInfoCards.architecture.description}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Camera className="w-8 h-8 mb-4 text-amber-600" />
            <h3 className="text-lg font-semibold mb-2">{currentContent.quickInfoCards.features.title}</h3>
            <p>{currentContent.quickInfoCards.features.description}</p>
          </div>
        </div>
        )}

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{currentContent.galleryTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentContent.galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        {!isOdia && (
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold mb-8">{currentContent.historicalOverview}</h2>
          {currentContent.historicalText.map((paragraph, index) => (
            <p key={index} className="mb-6 text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        )}

        {/* Cave Details */}
        {!isOdia && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Udayagiri Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">{currentContent.udayagiriTitle}</h3>
            <div className="space-y-6">
              <p className="text-gray-600">
                {currentContent.udayagiriDescription}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">{currentContent.notableCavesTitle}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">{currentContent.hathiGumphaTitle}</h5>
                    <p className="text-gray-600">{currentContent.hathiGumphaDesc}</p>
                  </div>
                  <div>
                    <h5 className="font-medium">{currentContent.raniGumphaTitle}</h5>
                    <p className="text-gray-600">{currentContent.raniGumphaDesc}</p>
                  </div>
                  <div>
                    <h5 className="font-medium">{currentContent.ganesaGumphaTitle}</h5>
                    <p className="text-gray-600">{currentContent.ganesaGumphaDesc}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-3">{currentContent.allCavesTitle}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentContent.udayagiriCaves.map((cave, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{cave.number}:</span> {cave.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Khandagiri Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">{currentContent.khandagiriTitle}</h3>
            <div className="space-y-6">
              <p className="text-gray-600">
                {currentContent.khandagiriDescription}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">{currentContent.notableCavesTitle}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">{currentContent.anantaGumphaTitle}</h5>
                    <p className="text-gray-600">{currentContent.anantaGumphaDesc}</p>
                  </div>
                  <div>
                    <h5 className="font-medium">{currentContent.cave8Title}</h5>
                    <p className="text-gray-600">{currentContent.cave8Desc}</p>
                  </div>
                  <div>
                    <h5 className="font-medium">{currentContent.modernTempleTitle}</h5>
                    <p className="text-gray-600">{currentContent.modernTempleDescription}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-3">{currentContent.allCavesTitle}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentContent.khandagiriCaves.map((cave, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{cave.number}:</span> {cave.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* References Section */}
        {!isOdia && (
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="flex items-center mb-6">
            <Book className="w-6 h-6 text-amber-600 mr-3" />
            <h3 className="text-2xl font-bold">{currentContent.referencesTitle}</h3>
          </div>
          <div className="space-y-4">
            {currentContent.references.map((ref, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <p className="font-medium text-gray-900">{ref.author}</p>
                <p className="text-gray-600">"{ref.title}"</p>
                <p className="text-sm text-gray-500">{ref.publication}</p>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Contact Information */}
        {!isOdia && (
        <div className="bg-amber-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">{currentContent.visitInfoTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">{currentContent.asiTitle}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <p>{currentContent.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <p>0674-2340 068 / 174</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <p>circlebhubaheswar.asi@gov.in</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{currentContent.locationTitle}</h4>
              <p>{currentContent.udayagiriCoord}</p>
              <p>{currentContent.khandagiriCoord}</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;