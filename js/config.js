const CONFIG = {
  version: "2.0.1",
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
    kn: { label: "Kannada", native: "ಕನ್ನಡ", enabled: true, lang: "kn-IN", order: 2 },
    ta: { label: "Tamil", native: "தமிழ்", enabled: true, lang: "ta-IN", order: 3 }
  }
};
