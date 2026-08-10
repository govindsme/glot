const CONFIG = {
  version: "1.3.0",
  dataFile: "glot.txt",
  speed: 1,
  speedOptions: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  pauseBetweenLanguages: 1200,
  pauseBeforeNextEnglish: 2000,
  english: {
    label: "English",
    lang: "en-US"
  },
  languages: {
    hi: { label: "Hindi", native: "हिन्दी", enabled: true, lang: "hi-IN", order: 1 },
    sa: { label: "Sanskrit", native: "संस्कृत", enabled: true, lang: "sa-IN", order: 2 },
    kn: { label: "Kannada", native: "ಕನ್ನಡ", enabled: true, lang: "kn-IN", order: 3 },
    ta: { label: "Tamil", native: "தமிழ்", enabled: true, lang: "ta-IN", order: 4 },
    nl: { label: "Dutch", native: "Nederlands", enabled: true, lang: "nl-NL", order: 5 }
  }
};
