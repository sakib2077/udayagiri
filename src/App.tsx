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
    'video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/jcoZuXbNceU?si=VkA8cuZvZDHyi00j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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
    'video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/0fhk4ffiugE?si=_YRzK87y7fG_Z47W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  }
};

const galleryImages = [
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
];

const udayagiriCaves = [
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
];

const khandagiriCaves = [
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
];

const references = [
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
];

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-2">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-amber-600" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
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
          <h1 className="text-5xl font-bold mb-4 text-center px-4">{currentContent.title}</h1>
          <p className="text-xl mb-8 text-center px-4">{currentContent.subtitle}</p>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6" />
            <p>{currentContent.location}</p>
          </div>
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
          <h2 className="text-2xl font-bold mb-6 text-center">Explore Udayagiri</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative pb-[56.25%] h-0" dangerouslySetInnerHTML={{ __html: currentContent.video}}>      
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Info */}
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

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
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
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold mb-8">{currentContent.historicalOverview}</h2>
          {currentContent.historicalText.map((paragraph, index) => (
            <p key={index} className="mb-6 text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Cave Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Udayagiri Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">{currentContent.udayagiriTitle}</h3>
            <div className="space-y-6">
              <p className="text-gray-600">
                {currentContent.udayagiriDescription}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Notable Caves:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">Hathi Gumpha (Cave No. 14)</h5>
                    <p className="text-gray-600">The most important cave featuring prehistoric rock paintings and
                    the famous 17-line royal inscription about King Kharavela's expeditions.</p>
                  </div>
                  <div>
                    <h5 className="font-medium">Rani Gumpha (Cave No. 1)</h5>
                    <p className="text-gray-600">A double-storied monastery with elaborate friezes depicting
                    various scenes including royal processions, hunting expeditions, and dance performances.</p>
                  </div>
                  <div>
                    <h5 className="font-medium">Ganesa Gumpha (Cave No. 10)</h5>
                    <p className="text-gray-600">Features relief images and an 8th-century inscription, with
                    scenes depicting the story of Udayana and Vasavadatta.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-3">All Caves:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {udayagiriCaves.map((cave, index) => (
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
                <h4 className="font-semibold text-lg">Notable Caves:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">Ananta Gumpha (Cave No. 3)</h5>
                    <p className="text-gray-600">Known for its rich ornamentations, twin serpent figures,
                    and sculptural features including Jain auspicious symbols.</p>
                  </div>
                  <div>
                    <h5 className="font-medium">Cave No. 8</h5>
                    <p className="text-gray-600">Contains figures of all 24 Tirthankaras and their Sasanadevis,
                    with unique twelve-armed figures of Chakreshvari and Rohini.</p>
                  </div>
                  <div>
                    <h5 className="font-medium">{currentContent.modernTempleTitle}</h5>
                    <p className="text-gray-600">{currentContent.modernTempleDescription}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-3">All Caves:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {khandagiriCaves.map((cave, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{cave.number}:</span> {cave.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="flex items-center mb-6">
            <Book className="w-6 h-6 text-amber-600 mr-3" />
            <h3 className="text-2xl font-bold">References</h3>
          </div>
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <p className="font-medium text-gray-900">{ref.author}</p>
                <p className="text-gray-600">"{ref.title}"</p>
                <p className="text-sm text-gray-500">{ref.publication}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-amber-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Visit Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Archaeological Survey of India</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <p>Bhubaneswar Circle, Samantarapur, Bhubaneswar- 751002 (Odisha)</p>
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
              <h4 className="font-semibold mb-4">Location</h4>
              <p>Udayagiri: Lat. 20°15'45" N, Long. 85°47'05" E</p>
              <p>Khandagiri: Lat. 20°15'47" N, Long. 85°47'08" E</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;