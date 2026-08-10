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
  },
  "Yes, I am.": {
    hi: { text: "हाँ, मैं हूँ", pron: "haan, main hoon" },
    sa: { text: "आम्, अहम् अस्मि", pron: "aam, a-ham as-mi" },
    kn: { text: "ಹೌದು, ನಾನು", pron: "hau-du, naa-nu" },
    ta: { text: "ஆம், நான்", pron: "aam, naan" },
    nl: { text: "Ja, dat ben ik", pron: "yaa, dat ben ik" }
  },
  "I am a home maker": {
    hi: { text: "मैं एक गृहिणी हूँ", pron: "main ek gri-hi-nee hoon" },
    sa: { text: "अहं गृहिणी अस्मि", pron: "a-ham gri-hi-nee as-mi" },
    kn: { text: "ನಾನು ಒಬ್ಬ ಗೃಹಿಣಿ", pron: "naa-nu ob-ba gri-hi-ni" },
    ta: { text: "நான் ஒரு இல்லத்தரசி", pron: "naan o-ru il-la-ttha-ra-si" },
    nl: { text: "Ik ben huisvrouw", pron: "ik ben huys-vrau" }
  },
  "I work as an IT professional": {
    hi: { text: "मैं आईटी पेशेवर हूँ", pron: "main aa-ee-tee pe-she-var hoon" },
    sa: { text: "अहं सूचनाप्रौद्योगिकी व्यावसायिकः अस्मि", pron: "a-ham soo-cha-naa-prau-dyo-gi-kee vyaa-va-saa-yi-kah as-mi" },
    kn: { text: "ನಾನು ಐಟಿ ವೃತ್ತಿಪರ", pron: "naa-nu aa-ee-tee vrut-ti-pa-ra" },
    ta: { text: "நான் ஐடி தொழில் நிபுணர்", pron: "naan ai-ee-tee tho-zil ni-pu-nar" },
    nl: { text: "Ik werk als IT-professional", pron: "ik werk als ay-tee pro-fes-sio-nal" }
  },
  "When are you coming?": {
    hi: { text: "आप कब आ रहे हैं?", pron: "aap kab aa ra-he hain?" },
    sa: { text: "भवान् कदा आगच्छति?", pron: "bha-vaan ka-daa aa-gach-chha-ti?" },
    kn: { text: "ನೀವು ಯಾವಾಗ ಬರುತ್ತಿದ್ದೀರಿ?", pron: "nee-vu yaa-vaa-ga ba-ru-tti-ldee-ri?" },
    ta: { text: "நீங்கள் எப்போது வருகிறீர்கள்?", pron: "neen-gal ep-po-dhu va-ru-gi-ree-gal?" },
    nl: { text: "Wanneer kom je?", pron: "va-neer kom yuh?" }
  },
  "I will come at 12:30 PM": {
    hi: { text: "मैं दोपहर 12:30 बजे आऊँगा", pron: "main do-pa-har ba-rah-sa-vaa ba-je aa-oo-gaa" },
    sa: { text: "अहं द्वादशवादनस्यार्धे आगमिष्यामि", pron: "a-ham dvaa-da-sha-vaa-da-na-syaar-dhe aa-ga-mi-shyaa-mi" },
    kn: { text: "ನಾನು ಮಧ್ಯಾಹ್ನ 12:30 ಕ್ಕೆ ಬರುತ್ತೇನೆ", pron: "naa-nu ma-dhyaa-hna 12:30 ke ba-ru-tte-ne" },
    ta: { text: "நான் மதியம் 12:30 மணிக்கு வருவேன்", pron: "naan ma-di-yam 12:30 ma-nik-ku va-ru-ven" },
    nl: { text: "Ik kom om 12:30 uur", pron: "ik kom om twalf der-tich uur" }
  },
  "Which is your hometown?": {
    hi: { text: "आपका गृहनगर कौन सा है?", pron: "aap-kaa grih-na-gar kaun saa hai?" },
    sa: { text: "भवतः जन्मभूमिः का?", pron: "bha-va-tah jan-ma-bhoo-mih kaa?" },
    kn: { text: "ನಿಮ್ಮ ಊರು ಯಾವುದು?", pron: "nim-ma oo-ru yaa-va-du?" },
    ta: { text: "உங்கள் ஊர் எது?", pron: "un-gal oor e-dhu?" },
    nl: { text: "Wat is je geboortestad?", pron: "vaht is yuh khe-boor-te-stad?" }
  },
  "I am from Bangalore,India": {
    hi: { text: "मैं बेंगलुरु से हूँ", pron: "main ben-ga-lu-ru se hoon" },
    sa: { text: "अहं बेङ्गलूरुतः आगच्छामि", pron: "a-ham ben-ga-loo-ru-tah aa-gach-chhaa-mi" },
    kn: { text: "ನಾನು ಬೆಂಗಳೂರಿನವನು", pron: "naa-nu ben-ga-loo-ri-na-va-nu" },
    ta: { text: "நான் பெங்களூரைச் சேர்ந்தவன்", pron: "naan pen-ga-loo-rai ser-ntha-va-n" },
    nl: { text: "Ik kom uit Bangalore", pron: "ik kom out ban-ga-loor" }
  },
  "Why are they late?": {
    hi: { text: "वे देर से क्यों हैं?", pron: "ve der se kyon hain?" },
    sa: { text: "ते कुतः विलम्बिताः?", pron: "te ku-tah vi-lam-bi-taah?" },
    kn: { text: "ಅವರು ಯಾಕೆ ತಡ?", pron: "a-va-ru yaa-ke ta-da?" },
    ta: { text: "அவர்கள் ஏன் தாமதம்?", pron: "a-var-kal yen thaa-ma-dham?" },
    nl: { text: "Waarom zijn ze te laat?", pron: "vaa-rom zain zuh tuh laat?" }
  },
  "They had some personal emergency": {
    hi: { text: "उनकी कुछ निजी आपात स्थिति थी", pron: "un-kee kuch ni-jee aa-paath sthi-ti thee" },
    sa: { text: "तेषां किञ्चित् वैयक्तिकम् आपत्कालम् आसीत्", pron: "te-shaam kin-chit vai-yak-ti-kam aa-pat-kaa-lam aa-seet" },
    kn: { text: "ಅವರಿಗೆ ಒಂದು ವೈಯಕ್ತಿಕ ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಇತ್ತು", pron: "a-va-ri-ge on-du vai-yak-ti-ka tur-tu pa-ri-sthi-ti it-tu" },
    ta: { text: "அவர்களுக்கு ஒரு தனிப்பட்ட அவசரம்", pron: "a-var-ka-luk-ku o-ru tha-ni-p-pat-ta a-va-sa-ram" },
    nl: { text: "Ze hadden een persoonlijk noodgeval", pron: "zuh had-den un per-soon-luk noht-khe-val" }
  },
  "How does she feel now?": {
    hi: { text: "वह अब कैसा महसूस कर रही है?", pron: "vah ab kai-saa ma-ha-soos kar ra-hi hai?" },
    sa: { text: "सा इदानीं कथम् अनुभवति?", pron: "saa i-daa-neem ka-tham a-nu-bha-va-ti?" },
    kn: { text: "ಅವಳು ಈಗ ಹೇಗೆ ಭಾವಿಸುತ್ತಿದ್ದಾಳೆ?", pron: "a-va-lu ee-ga he-ge bhaa-vi-su-tti-ddaa-le?" },
    ta: { text: "அவள் இப்போது எப்படி உணர்கிறாள்?", pron: "a-val ip-po-dhu ep-pa-di u-nar-ki-raal?" },
    nl: { text: "Hoe voelt ze zich nu?", pron: "hoo voolt zuh zikh nuu?" }
  },
  "She feels a lot better": {
    hi: { text: "वह बहुत बेहतर महसूस कर रही है", pron: "vah ba-hut be-ha-tar ma-ha-soos kar ra-hi hai" },
    sa: { text: "सा बहुत् श्रेयः अनुभवति", pron: "saa ba-hut shrey-ah a-nu-bha-va-ti" },
    kn: { text: "ಅವಳು ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದಾಳೆ", pron: "a-va-lu tum-baa chen-naa-gi-ddaa-le" },
    ta: { text: "அவள் மிகவும் நன்றாக இருக்கிறாள்", pron: "a-val mi-ga-vum nan-raa-ga i-ru-kki-raal" },
    nl: { text: "Ze voelt zich veel beter", pron: "zuh voolt zikh feel be-ter" }
  },
  "More": {
    hi: { text: "अधिक", pron: "a-dhik" },
    sa: { text: "अधिकम्", pron: "a-dhi-kam" },
    kn: { text: "ಇನ್ನಷ್ಟು", pron: "in-nash-tu" },
    ta: { text: "மேலும்", pron: "me-lum" },
    nl: { text: "Meer", pron: "meer" }
  },
  "Many": {
    hi: { text: "अनेक", pron: "a-nek" },
    sa: { text: "बहवः", pron: "ba-ha-vah" },
    kn: { text: "ಅನೇಕ", pron: "a-ne-ka" },
    ta: { text: "பல", pron: "pa-la" },
    nl: { text: "Veel", pron: "feel" }
  },
  "Little": {
    hi: { text: "थोड़ा", pron: "tho-daa" },
    sa: { text: "अल्पम्", pron: "al-pam" },
    kn: { text: "ಸ್ವಲ್ಪ", pron: "sval-pa" },
    ta: { text: "சிறிது", pron: "si-ri-dhu" },
    nl: { text: "Weinig", pron: "vay-nikh" }
  },
  "Some": {
    hi: { text: "कुछ", pron: "kuch" },
    sa: { text: "किञ्चित्", pron: "kin-chit" },
    kn: { text: "ಕೆಲವು", pron: "ke-la-vu" },
    ta: { text: "சில", pron: "si-la" },
    nl: { text: "Sommige", pron: "som-mi-khe" }
  },
  "Any": {
    hi: { text: "कोई", pron: "ko-ee" },
    sa: { text: "किमपि", pron: "ki-ma-pi" },
    kn: { text: "ಯಾವುದಾದರೂ", pron: "yaa-vu-daa-da-roo" },
    ta: { text: "எதாவது", pron: "e-dhaa-vu-dhu" },
    nl: { text: "Enig", pron: "ay-nikh" }
  },
  "Always": {
    hi: { text: "हमेशा", pron: "ha-me-shaa" },
    sa: { text: "सदा", pron: "sa-daa" },
    kn: { text: "ಯಾವಾಗಲೂ", pron: "yaa-vaa-ga-loo" },
    ta: { text: "எப்போதும்", pron: "ep-po-dhum" },
    nl: { text: "Altijd", pron: "al-tayt" }
  },
  "Never": {
    hi: { text: "कभी नहीं", pron: "ka-bhee na-heen" },
    sa: { text: "न कदापि", pron: "na ka-daa-pi" },
    kn: { text: "ಎಂದಿಗೂ", pron: "en-di-goo" },
    ta: { text: "ஒருபோதும்", pron: "o-ru-po-dhum" },
    nl: { text: "Nooit", pron: "noyt" }
  },
  "Sometimes": {
    hi: { text: "कभी-कभी", pron: "ka-bhee-ka-bhee" },
    sa: { text: "कदाचित्", pron: "ka-daa-chit" },
    kn: { text: "ಕೆಲವೊಮ್ಮೆ", pron: "ke-la-vom-me" },
    ta: { text: "சில சமயம்", pron: "si-la sa-ma-yam" },
    nl: { text: "Soms", pron: "soms" }
  },
  "Usually": {
    hi: { text: "आमतौर पर", pron: "aam-ta-ur par" },
    sa: { text: "सामान्यतः", pron: "saa-maa-nya-tah" },
    kn: { text: "ಸಾಮಾನ್ಯವಾಗಿ", pron: "saa-maa-nya-vaa-gi" },
    ta: { text: "வழக்கமாக", pron: "va-zhak-ka-maa-ga" },
    nl: { text: "Meestal", pron: "mes-tal" }
  },
  "Rarely": {
    hi: { text: "शायद ही", pron: "shaa-yad hee" },
    sa: { text: "विरलतया", pron: "vi-ra-la-ta-yaa" },
    kn: { text: "ಅಪರೂಪವಾಗಿ", pron: "a-pa-roo-pa-vaa-gi" },
    ta: { text: "அரிதாக", pron: "a-ri-thaa-ga" },
    nl: { text: "Zelden", pron: "zel-den" }
  },
  "Do you drink tea?": {
    hi: { text: "क्या आप चाय पीते हैं?", pron: "kyaa aap chaay pee-te hain?" },
    sa: { text: "भवान् किं चायम् पिबति?", pron: "bha-vaan kim chaa-yam pi-ba-ti?" },
    kn: { text: "ನೀವು ಚಹಾ ಕುಡಿಯುತ್ತೀರಾ?", pron: "nee-vu cha-haa ku-di-yuu-ttee-raa?" },
    ta: { text: "நீங்கள் தேநீர் குடிக்கிறீர்களா?", pron: "neen-gal the-neer ku-di-kki-ree-ga-laa?" },
    nl: { text: "Drink je thee?", pron: "drink yuh tee?" }
  },
  "I drink tea": {
    hi: { text: "मैं चाय पीता हूँ", pron: "main chaay pee-taa hoon" },
    sa: { text: "अहं चायम् पिबामि", pron: "a-ham chaa-yam pi-baa-mi" },
    kn: { text: "ನಾನು ಚಹಾ ಕುಡಿಯುತ್ತೇನೆ", pron: "naa-nu cha-haa ku-di-yuu-tte-ne" },
    ta: { text: "நான் தேநீர் குடிக்கிறேன்", pron: "naan the-neer ku-di-kki-ren" },
    nl: { text: "Ik drink thee", pron: "ik drink tee" }
  },
  "Did you drink tea?": {
    hi: { text: "क्या आपने चाय पी?", pron: "kyaa aap-ne chaay pee?" },
    sa: { text: "भवान् किं चायम् अपिबत्?", pron: "bha-vaan kim chaa-yam a-pi-bat?" },
    kn: { text: "ನೀವು ಚಹಾ ಕುಡಿದಿದ್ದೀರಾ?", pron: "nee-vu cha-haa ku-di-di-ldee-raa?" },
    ta: { text: "நீங்கள் தேநீர் குடித்தீர்களா?", pron: "neen-gal the-neer ku-di-ttee-ga-laa?" },
    nl: { text: "Heb je thee gedronken?", pron: "hep yuh tee khe-dron-ken?" }
  },
  "I drank tea": {
    hi: { text: "मैंने चाय पी", pron: "main-ne chaay pee" },
    sa: { text: "अहं चायम् अपिबम्", pron: "a-ham chaa-yam a-pi-bam" },
    kn: { text: "ನಾನು ಚಹಾ ಕುಡಿದೆ", pron: "naa-nu cha-haa ku-di-de" },
    ta: { text: "நான் தேநீர் குடித்தேன்", pron: "naan the-neer ku-di-tten" },
    nl: { text: "Ik heb thee gedronken", pron: "ik hep tee khe-dron-ken" }
  },
  "Will you drink tea?": {
    hi: { text: "क्या आप चाय पीयेंगे?", pron: "kyaa aap chaay pee-yen-ge?" },
    sa: { text: "भवान् किं चायम् पास्यति?", pron: "bha-vaan kim chaa-yam paa-sya-ti?" },
    kn: { text: "ನೀವು ಚಹಾ ಕುಡಿಯುವಿರಾ?", pron: "nee-vu cha-haa ku-di-yu-vi-raa?" },
    ta: { text: "நீங்கள் தேநீர் குடிப்பீர்களா?", pron: "neen-gal the-neer ku-dip-pee-ga-laa?" },
    nl: { text: "Zul je thee drinken?", pron: "zul yuh tee drin-ken?" }
  },
  "I will drink tea": {
    hi: { text: "मैं चाय पीऊँगा", pron: "main chaay pee-oo-ngaa" },
    sa: { text: "अहं चायम् पास्यामि", pron: "a-ham chaa-yam paa-syaa-mi" },
    kn: { text: "ನಾನು ಚಹಾ ಕುಡಿಯುತ್ತೇನೆ", pron: "naa-nu cha-haa ku-di-yuu-tte-ne" },
    ta: { text: "நான் தேநீர் குடிப்பேன்", pron: "naan the-neer ku-dip-pen" },
    nl: { text: "Ik zal thee drinken", pron: "ik zal tee drin-ken" }
  },
  "Are you drinking tea?": {
    hi: { text: "क्या आप चाय पी रहे हैं?", pron: "kyaa aap chaay pee ra-he hain?" },
    sa: { text: "भवान् किं चायम् पिबन् अस्ति?", pron: "bha-vaan kim chaa-yam pi-ban as-ti?" },
    kn: { text: "ನೀವು ಚಹಾ ಕುಡಿಯುತ್ತಿದ್ದೀರಾ?", pron: "nee-vu cha-haa ku-di-yuu-tti-ldee-raa?" },
    ta: { text: "நீங்கள் தேநீர் குடித்துக் கொண்டிருக்கிறீர்களா?", pron: "neen-gal the-neer ku-di-ttuk kon-dru-i-ru-kki-ree-ga-laa?" },
    nl: { text: "Ben je thee aan het drinken?", pron: "ben yuh tee aan het drin-ken?" }
  },
  "I am drinking tea": {
    hi: { text: "मैं चाय पी रहा हूँ", pron: "main chaay pee ra-haa hoon" },
    sa: { text: "अहं चायम् पिबन् अस्मि", pron: "a-ham chaa-yam pi-ban as-mi" },
    kn: { text: "ನಾನು ಚಹಾ ಕುಡಿಯುತ್ತಿದ್ದೇನೆ", pron: "naa-nu cha-haa ku-di-yuu-tti-dde-ne" },
    ta: { text: "நான் தேநீர் குடித்துக் கொண்டிருக்கிறேன்", pron: "naan the-neer ku-di-ttuk kon-dru-i-ru-kki-ren" },
    nl: { text: "Ik ben thee aan het drinken", pron: "ik ben tee aan het drin-ken" }
  },
  "Is he happy?": {
    hi: { text: "क्या वह खुश है?", pron: "kyaa vah khush hai?" },
    sa: { text: "किं सः प्रसन्नः?", pron: "kim sah pra-san-nah?" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿದ್ದಾನೆಯೇ?", pron: "a-va-nu san-to-sha-vaa-gi-ddaa-ne-ye?" },
    ta: { text: "அவன் சந்தோஷமாக இருக்கிறானா?", pron: "a-van san-tho-sha-maa-ga i-ru-kki-raa-naa?" },
    nl: { text: "Is hij blij?", pron: "is hay blay?" }
  },
  "He is happy": {
    hi: { text: "वह खुश है", pron: "vah khush hai" },
    sa: { text: "सः प्रसन्नः", pron: "sah pra-san-nah" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿದ್ದಾನೆ", pron: "a-va-nu san-to-sha-vaa-gi-ddaa-ne" },
    ta: { text: "அவன் சந்தோஷமாக இருக்கிறான்", pron: "a-van san-tho-sha-maa-ga i-ru-kki-raan" },
    nl: { text: "Hij is blij", pron: "hay is blay" }
  },
  "Were they happy?": {
    hi: { text: "क्या वे खुश थे?", pron: "kyaa ve khush the?" },
    sa: { text: "किं ते प्रसन्नाः आसन्?", pron: "kim te pra-san-naah aa-san?" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿದ್ದರಾ?", pron: "a-va-ru san-to-sha-vaa-gi-dda-raa?" },
    ta: { text: "அவர்கள் சந்தோஷமாக இருந்தார்களா?", pron: "a-var-kal san-tho-sha-maa-ga i-run-dhaar-ga-laa?" },
    nl: { text: "Waren ze blij?", pron: "vaa-ren zuh blay?" }
  },
  "They were happy": {
    hi: { text: "वे खुश थे", pron: "ve khush the" },
    sa: { text: "ते प्रसन्नाः आसन्", pron: "te pra-san-naah aa-san" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿದ್ದರು", pron: "a-va-ru san-to-sha-vaa-gi-dda-ru" },
    ta: { text: "அவர்கள் சந்தோஷமாக இருந்தார்கள்", pron: "a-var-kal san-tho-sha-maa-ga i-run-dhaar-kal" },
    nl: { text: "Ze waren blij", pron: "zuh vaa-ren blay" }
  },
  "Will we be happy?": {
    hi: { text: "क्या हम खुश होंगे?", pron: "kyaa ham khush hong-ge?" },
    sa: { text: "किं वयं प्रसन्नाः भविष्यामः?", pron: "kim va-yam pra-san-naah bha-vi-shyaa-mah?" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿರುತ್ತೇವೆಯೇ?", pron: "naa-vu san-to-sha-vaa-gi-ru-tte-ve-ye?" },
    ta: { text: "நாம் சந்தோஷமாக இருப்போமா?", pron: "naam san-tho-sha-maa-ga i-rup-poo-maa?" },
    nl: { text: "Zullen we blij zijn?", pron: "zul-len wuh blay zain?" }
  },
  "We will be happy": {
    hi: { text: "हम खुश होंगे", pron: "ham khush hong-ge" },
    sa: { text: "वयं प्रसन्नाः भविष्यामः", pron: "va-yam pra-san-naah bha-vi-shyaa-mah" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿರುತ್ತೇವೆ", pron: "naa-vu san-to-sha-vaa-gi-ru-tte-ve" },
    ta: { text: "நாம் சந்தோஷமாக இருப்போம்", pron: "naam san-tho-sha-maa-ga i-rup-pom" },
    nl: { text: "We zullen blij zijn", pron: "wuh zul-len blay zain" }
  },
  "How are you feeling?": {
    hi: { text: "आप कैसा महसूस कर रहे हैं?", pron: "aap kai-saa ma-ha-soos kar ra-he hain?" },
    sa: { text: "भवान् कथम् अनुभवति?", pron: "bha-vaan ka-tham a-nu-bha-va-ti?" },
    kn: { text: "ನೀವು ಹೇಗೆ ಭಾವಿಸುತ್ತಿದ್ದೀರಿ?", pron: "nee-vu he-ge bhaa-vi-su-tti-ldee-ri?" },
    ta: { text: "நீங்கள் எப்படி உணர்கிறீர்கள்?", pron: "neen-gal ep-pa-di u-nar-kee-ree-ga-l?" },
    nl: { text: "Hoe voel je je?", pron: "hoo vool yuh yuh?" }
  },
  "You are feeling happy": {
    hi: { text: "आप खुश महसूस कर रहे हैं", pron: "aap khush ma-ha-soos kar ra-he hain" },
    sa: { text: "भवान् प्रसन्नताम् अनुभवति", pron: "bha-vaan pra-san-na-taam a-nu-bha-va-ti" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿ ಭಾವಿಸುತ್ತಿದ್ದೀರಿ", pron: "nee-vu san-to-sha-vaa-gi bhaa-vi-su-tti-ldee-ri" },
    ta: { text: "நீங்கள் சந்தோஷமாக உணர்கிறீர்கள்", pron: "neen-gal san-tho-sha-maa-ga u-nar-kee-ree-ga-l" },
    nl: { text: "Je voelt je gelukkig", pron: "yuh voolt yuh khe-luk-kikh" }
  }
};
