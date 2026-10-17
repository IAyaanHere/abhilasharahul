/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 * File paths are relative so this template works inside /khwahish/ or any folder.
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Abhilasha & Rahul — Wedding Invitation",
    description:
      "You are warmly invited to celebrate the Wedding of Abhilasha and Rahul.",
  },

  couple: {
    brideInitial: "A",
    groomInitial: "R",
    bride: {
      name: "Abhilasha",
      shortName: "Abhilasha",
      relation: "Daughter of",
      parents: "Mr. Anil Dhabarde",
    },
    groom: {
      name: "Rahul",
      shortName: "Rahul",
      relation: "Son of",
      parents: "Mr. Santosh Sahakate",
    },
  },

  copy: {
    bismillah: "",
    bismillahTranslation: "",
    welcomeLine: "With the Blessings of\nOur Parents and Elders\n\nWe joyfully invite you to\ncelebrate the Wedding of",
    invitation: "",
    heroClosing: "Please join us as we begin\nour new journey together.",
    welcomeTitle: "A Beautiful Beginning",
    welcomeBody:
      "A beautiful beginning, blessed by family and tradition. With hearts full of joy, we warmly invite you to join us as we celebrate this special occasion with the love and blessings of our families.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can't wait to celebrate with you.",
    dua: "",
    duaTranslation: "",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2026-11-22T19:00:00+05:30",
    date: "November 22, 2026",
    day: "Sunday",
    time: "07:00 PM",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-placeholder.mp4",
    introPoster:
      "./media/intro-placeholder.webp",
    music: "./media/Pookkal Pookkum X Malare Mounama MASHUP _ Sruthi Balamurali.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./media/gallery/01.webp",
        alt: "A softly lit wedding detail",
        caption: "",
      },
      {
        src: "./media/gallery/02.webp",
        alt: "A joyful wedding celebration",
        caption: "",
      },
      {
        src: "./media/gallery/03.webp",
        alt: "Elegant wedding florals and table setting",
        caption: "",
      },
    ],
  },

  program: [
    {
      time: "07:00 PM",
      title: "Muhurtham",
      note: "The Auspicious Wedding Ceremony",
    },
    {
      time: "After the Ceremony",
      title: "Blessings",
      note: "Family greetings & photographs",
    },
    {
      time: "Dinner",
      title: "Dinner",
      note: "A feast shared with love",
    },
  ],

  venue: {
    name: "Chandni Celebration Lawn",
    address:
      "Kamptee Rd, Nagpur,\nMaharashtra 440029",
    mapUrl: "https://www.google.com/maps/search/Chandni+Celebration+Lawn+Kamptee+Rd+Nagpur+Maharashtra+440029",
  },

dressCode: {
  title: "Traditional Festive Attire",
  description:
    "Sarees, silk sarees, lehengas, dhotis, kurtas and sherwanis are warmly encouraged. Join us in celebrating this special occasion.",
  swatches: [
    "#7A1F2B",
    "#234638",
    "#C49A56",
    "#7A4968",
    "#31506B",
  ],
},

  preWeddingEvents: [
    {
      name: "Wedding Ceremony",
      date: "November 22, 2026",
      time: "07:00 PM",
      location: "Chandni Celebration Lawn, Nagpur",
      mapLink: "https://www.google.com/maps/search/Chandni+Celebration+Lawn+Kamptee+Rd+Nagpur+Maharashtra+440029",
    },
    {
      name: "Reception",
      date: "November 23, 2026",
      time: "07:00 PM",
      location: "Chandni Celebration Lawn, Nagpur",
      mapLink: "https://www.google.com/maps/search/Chandni+Celebration+Lawn+Kamptee+Rd+Nagpur+Maharashtra+440029",
    },
  ],

  rsvp: {
    deadline: "",
    contact: "",
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "Dietary notes or a message for the couple",
    },
  },

theme: {
  ivory: "#F1E3CE",       /* warm candlelit cream */
  plum: "#3A070C",        /* deepest burgundy */
  lavender: "#6F0B17",    /* wine red */
  mauve: "#A51520",       /* rose/crimson accent */
  lilac: "#D0B294",       /* warm nude / muted beige */
  champagne: "#C9A35F",   /* antique gold */
},
};
