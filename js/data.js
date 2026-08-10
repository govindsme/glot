const TRANSLATIONS = {
  "Good Morning": {
    hi: { text: "सुप्रभात", pron: "su-pra-bhaat" },
    sa: { text: "सुप्रभातम्", pron: "su-pra-bhaa-tam" },
    kn: { text: "ಶುಭೋದಯ", pron: "shu-bho-da-ya" },
    ta: { text: "காலை வணக்கம்", pron: "kaa-lai va-nak-kam" },
    nl: { text: "Goedemorgen", pron: "khoo-duh-mor-khen" }
  },
  "Good Afternoon": {
    hi: { text: "शुभ अपराह्न", pron: "shubh a-praa-hn" },
    sa: { text: "शुभं अपराह्णम्", pron: "shub-ham a-praa-hnam" },
    kn: { text: "ಶುಭ ಮಧ್ಯಾಹ್ನ", pron: "shu-bha madh-yaa-hna" },
    ta: { text: "மதிய வணக்கம்", pron: "ma-di-ya va-nak-kam" },
    nl: { text: "Goedemiddag", pron: "khoo-duh-mi-dakh" }
  },
  "Good Evening": {
    hi: { text: "शुभ संध्या", pron: "shubh san-dhyaa" },
    sa: { text: "शुभं सायम्", pron: "shub-ham saa-yam" },
    kn: { text: "ಶುಭ ಸಂಜೆ", pron: "shu-bha san-je" },
    ta: { text: "மாலை வணக்கம்", pron: "maa-lai va-nak-kam" },
    nl: { text: "Goedenavond", pron: "khoo-duh-nah-vont" }
  },
  "Good Night": {
    hi: { text: "शुभ रात्रि", pron: "shubh raa-tri" },
    sa: { text: "शुभरात्रिः", pron: "shub-ha-raa-trih" },
    kn: { text: "ಶುಭ ರಾತ್ರಿ", pron: "shu-bha raa-tri" },
    ta: { text: "இனிய இரவு", pron: "i-ni-ya i-ra-vu" },
    nl: { text: "Goedenacht", pron: "khoo-duh-nakht" }
  },
  "Hi": {
    hi: { text: "नमस्ते", pron: "na-mas-tey" },
    sa: { text: "नमस्ते", pron: "na-mas-tey" },
    kn: { text: "ನಮಸ್ಕಾರ", pron: "na-mas-kaa-ra" },
    ta: { text: "வணக்கம்", pron: "va-nak-kam" },
    nl: { text: "Hoi", pron: "hoy" }
  },
  "Bye": {
    hi: { text: "अलविदा", pron: "al-vi-daa" },
    sa: { text: "पुनर्मिलामः", pron: "pu-nar-mi-laa-mah" },
    kn: { text: "ವಿದಾಯ", pron: "vi-daa-ya" },
    ta: { text: "போய் வருகிறேன்", pron: "po-y va-ru-gi-ren" },
    nl: { text: "Doei", pron: "doo-ee" }
  },
  "See you later": {
    hi: { text: "फिर मिलेंगे", pron: "phir mi-len-gey" },
    sa: { text: "पुनः मिलामः", pron: "pu-nah mi-laa-mah" },
    kn: { text: "ಮತ್ತೆ ಸಿಗೋಣ", pron: "mat-te si-go-na" },
    ta: { text: "பிறகு சந்திக்கலாம்", pron: "pi-ra-gu san-di-kka-laam" },
    nl: { text: "Tot ziens", pron: "tot zeens" }
  },
  "See you soon": {
    hi: { text: "जल्दी मिलेंगे", pron: "jal-dee mi-len-gey" },
    sa: { text: "अचिरात् मिलामः", pron: "a-chi-raat mi-laa-mah" },
    kn: { text: "ಬೇಗ ಸಿಗೋಣ", pron: "be-ga si-go-na" },
    ta: { text: "விரைவில் சந்திப்போம்", pron: "vi-rai-vil san-dip-pom" },
    nl: { text: "Tot binnenkort", pron: "tot bin-nen-kort" }
  },
  "Nice to meet you": {
    hi: { text: "आपसे मिलकर खुशी हुई", pron: "aap-se mil-kar khu-shi hu-ee" },
    sa: { text: "भवता मिलित्वा प्रसन्नोऽस्मि", pron: "bha-va-taa mi-lit-vaa pra-san-no-smi" },
    kn: { text: "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು", pron: "nim-man-nu bhe-ti-yaa-gi san-to-sha-vaa-yi-tu" },
    ta: { text: "உங்களை சந்தித்ததில் மகிழ்ச்சி", pron: "un-ga-lai san-di-ttha-dil ma-gil-chi" },
    nl: { text: "Leuk je te ontmoeten", pron: "lurk yuh tuh ont-moo-ten" }
  },
  "Who are you?": {
    hi: { text: "आप कौन हैं?", pron: "aap kaun hain?" },
    sa: { text: "भवान् कः?", pron: "bha-vaan kah?" },
    kn: { text: "ನೀವು ಯಾರು?", pron: "nee-vu yaa-ru?" },
    ta: { text: "நீங்கள் யார்?", pron: "neen-gal yaar?" },
    nl: { text: "Wie ben je?", pron: "wee ben yuh?" }
  },
  "I am Govind": {
    hi: { text: "मैं गोविंद हूँ", pron: "main go-vind hoon" },
    sa: { text: "अहं गोविन्दः अस्मि", pron: "a-ham go-vin-dah as-mi" },
    kn: { text: "ನಾನು ಗೋವಿಂದ", pron: "naa-nu go-vin-da" },
    ta: { text: "நான் கோவிந்த்", pron: "naan ko-vint" },
    nl: { text: "Ik ben Govind", pron: "ik ben go-vint" }
  },
  "How are you?": {
    hi: { text: "आप कैसे हैं?", pron: "aap kai-se hain?" },
    sa: { text: "कुशलं वर्तते?", pron: "ku-sha-lam var-ta-te?" },
    kn: { text: "ಹೇಗಿದ್ದೀರಾ?", pron: "he-gid-dee-raa?" },
    ta: { text: "எப்படி இருக்கிறீர்கள்?", pron: "e-ppa-di i-ruk-ki-ri-ga-ga?" },
    nl: { text: "Hoe gaat het?", pron: "hoo khaat het?" }
  },
  "You are Govind. Aren't you?": {
    hi: { text: "आप गोविंद हैं, है ना?", pron: "aap go-vind hain, hai naa?" },
    sa: { text: "भवान् गोविन्दः, ननु?", pron: "bha-vaan go-vin-dah, na-nu?" },
    kn: { text: "ನೀವು ಗೋವಿಂದ, ಅಲ್ಲವೇ?", pron: "nee-vu go-vin-da, al-la-ve?" },
    ta: { text: "நீங்கள் கோவிந்த், இல்லையா?", pron: "neen-gal ko-vint, il-lai-yaa?" },
    nl: { text: "Jij bent Govind, toch?", pron: "yay bent go-vint, tokht?" }
  },
  "How are you doing?": {
    hi: { text: "कैसे चल रहे हैं?", pron: "kai-se chal ra-he hain?" },
    sa: { text: "भवान् कथं वर्तते?", pron: "bha-vaan ka-tham var-ta-te?" },
    kn: { text: "ನೀವು ಹೇಗಿದ್ದೀರಿ?", pron: "nee-vu he-gid-dee-ri?" },
    ta: { text: "என்ன செய்து கொண்டிருக்கிறீர்கள்?", pron: "en-na sey-thu kon-dru-ruk-ki-reer-ga?" },
    nl: { text: "Hoe gaat het met je?", pron: "hoo khaat het met yuh?" }
  },
  "What do you do?": {
    hi: { text: "आप क्या करते हैं?", pron: "aap kyaa kar-te hain?" },
    sa: { text: "भवान् किं करोति?", pron: "bha-vaan kim ka-ro-ti?" },
    kn: { text: "ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?", pron: "nee-vu e-nu maa-du-ttee-ri?" },
    ta: { text: "நீங்கள் என்ன செய்கிறீர்கள்?", pron: "neen-gal en-na sey-ki-reer-ga?" },
    nl: { text: "Wat doe je?", pron: "vaht doo yuh?" }
  },
  "I am not Govind": {
    hi: { text: "मैं गोविंद नहीं हूँ", pron: "main go-vind na-heen hoon" },
    sa: { text: "अहं गोविन्दः नास्मि", pron: "a-ham go-vin-dah naa-smi" },
    kn: { text: "ನಾನು ಗೋವಿಂದ ಅಲ್ಲ", pron: "naa-nu go-vin-da al-la" },
    ta: { text: "நான் கோவிந்த் இல்லை", pron: "naan ko-vint il-lai" },
    nl: { text: "Ik ben niet Govind", pron: "ik ben neet go-vint" }
  }
};
