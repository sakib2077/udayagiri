import React from 'react';
import { MapPin, Clock, Phone, Mail, ChevronDown, Camera, Landmark, History, Book } from 'lucide-react';

const galleryImages = [
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/2-Ranigumpha-Udayagiri-scaled.jpg",
    title: "Ranigumpha Udayagiri",
    description: "The architectural marvel of the entire complex"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/4-Baghgumpha-Udayagiri.jpg",
    title: "Baghgumpha Udayagiri",
    description: "Cave with opening carved like a tiger's head"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/5-Landscape-Scene-Ranigumpha.jpg",
    title: "Landscape Scene Ranigumpha",
    description: "Detailed landscape carvings from Rani Gumpha"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/7-A-Female-Dancer-Ranigumpha.jpg",
    title: "Female Dancer Ranigumpha",
    description: "Ancient carving depicting a dance performance"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/8-Manchapuri-and-svargapuri-Caves-Udayagiri-scaled.jpg",
    title: "Manchapuri and Svargapuri Caves",
    description: "Double-storied cave with historical inscriptions"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/9-Landscape-Scene-Ranigumpha.jpg",
    title: "Landscape Scene",
    description: "Intricate landscape carving showing historical scenes"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/13-Gajalakshmi-Anantagumpha-Khandagiri.jpg",
    title: "Gajalakshmi Anantagumpha",
    description: "Sculptural detail from Ananta Gumpha, Khandagiri"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/14-Risabhanath-and-Amra-scaled.jpg",
    title: "Risabhanath and Amra",
    description: "Religious sculpture depicting Jain figures"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/Panel-1-scaled.jpg",
    title: "Historical Panel 1",
    description: "Detailed panel showing historical scenes"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/Panel-2-scaled.jpg",
    title: "Historical Panel 2",
    description: "Ancient carved panel with historical significance"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/Panel-3-scaled.jpg",
    title: "Historical Panel 3",
    description: "Intricate carvings depicting historical events"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/Panel-4-scaled.jpg",
    title: "Historical Panel 4",
    description: "Detailed relief work showing historical scenes"
  },
  {
    url: "https://resonancemedia.co.in/wp-content/uploads/2025/02/Panel-5-scaled.jpg",
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
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://resonancemedia.co.in/wp-content/uploads/2025/02/2-Ranigumpha-Udayagiri-scaled.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Udayagiri and Khandagiri Caves</h1>
          <p className="text-xl mb-8">Ancient Jaina Rock-Cut Architecture in Eastern India</p>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6" />
            <p>Bhubaneswar, Odisha, India</p>
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
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <History className="w-8 h-8 mb-4 text-amber-600" />
            <h3 className="text-lg font-semibold mb-2">Historical Significance</h3>
            <p>First century B.C. rock cut caves excavated during Emperor Kharavela's reign</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Landmark className="w-8 h-8 mb-4 text-amber-600" />
            <h3 className="text-lg font-semibold mb-2">Architecture</h3>
            <p>33 rock-cut caves 18 in Udayagiri hill and 15 in Khandagiri hill featuring unique Jaina architecture</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Camera className="w-8 h-8 mb-4 text-amber-600" />
            <h3 className="text-lg font-semibold mb-2">Notable Features</h3>
            <p>Ancient inscriptions, sculptures, and rock cut architecture</p>
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
          <h2 className="text-3xl font-bold mb-8">Historical Overview</h2>
          <p className="mb-6">
            The twin hills of Udayagiri and Khandagiri, anciently known as Kumara and Kumari parvatas respectively,
            represent one of the earliest groups of Jaina rock-cut architecture in eastern India. These monuments
            were primarily excavated during the reign of Emperor Kharavela in the first century B.C., as evidenced
            by inscriptions found within the caves. The Jaina occupation continued here with occasional breaks down
            to the present day. The caves were first noticed and partly described by A. Sterling in 1825.
          </p>
          <p className="mb-6">
            Meant for the residence of Jaina ascetics noted for their self mortification, the caves provide little
            amenities. Generally caves are single storied but a few of them are double storied also. Most of the
            caves consist of a row of cells open either directly to the verandah or to the open space in front.
            These are essentially dormitories, an inference substantiated by a sloping rise of the floor to serve
            the purpose of a pillow.
          </p>
          <p>
            The doorways of the cells have pilasters on either side with crowning animal figures and arches over
            them are decorated with flowers, creepers and animal motifs. The sculptural and decorative art of the
            caves include panels/friezes depicting popular legends, historical episodes, religious observances,
            dancing performances etc.
          </p>
        </div>

        {/* Cave Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Udayagiri Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Udayagiri Caves</h3>
            <div className="space-y-6">
              <p className="text-gray-600">
                The Udayagiri hill contains 18 caves with remarkable features including the famous Hathi Gumpha
                inscription and the architecturally significant Rani Gumpha.
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
            <h3 className="text-2xl font-bold mb-6">Khandagiri Caves</h3>
            <div className="space-y-6">
              <p className="text-gray-600">
                The Khandagiri hill features 15 caves, including several converted into sanctuaries
                with important Jain religious carvings and sculptures.
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
                    <h5 className="font-medium">Modern Jain Temple</h5>
                    <p className="text-gray-600">Located at the hilltop, constructed in the late 19th century
                    and still active, preserving the site's religious continuity.</p>
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