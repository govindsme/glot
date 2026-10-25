const TRANSLATIONS = {
  "I am happy.": {
    hi: { text: "मैं खुश हूँ", pron: "main khush hoon" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿದ್ದೇನೆ", pron: "naanu santoshavagiddene" },
    ta: { text: "நான் மகிழ்ச்சியாக இருக்கிறேன்", pron: "naan magilchchiyaaga irukkiRen" },
  },
  "You are happy.": {
    hi: { text: "तुम खुश हो", pron: "tum khush ho" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿದ್ದೀಯ", pron: "neenu santoshavagiddiya" },
    ta: { text: "நீ மகிழ்ச்சியாக இருக்கிறாய்", pron: "nee magilchchiyaaga irukkRaay" },
  },
  "You are happy. (formal)": {
    hi: { text: "आप खुश हैं", pron: "aap khush hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿದ್ದೀರಿ", pron: "neevu santoshavagiddiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்கிறீர்கள்", pron: "neengal magilchchiyaaga irukkiReergal" },
  },
  "He is happy.": {
    hi: { text: "वह खुश है", pron: "vah khush hai" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿದ್ದಾನೆ", pron: "avanu santoshavagiddaane" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருக்கிறான்", pron: "avan magilchchiyaaga irukkiRaan" },
  },
  "She is happy.": {
    hi: { text: "वह खुश है", pron: "vah khush hai" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿದ್ದಾಳೆ", pron: "avalu santoshavagiddaale" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருக்கிறாள்", pron: "aval magilchchiyaaga irukkiRaal" },
  },
  "It is happy.": {
    hi: { text: "यह खुश है", pron: "yah khush hai" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿದೆ", pron: "adu santoshavagide" },
    ta: { text: "அது மகிழ்ச்சியாக இருக்கிறது", pron: "adu magilchchiyaaga irukkiRadu" },
  },
  "We are happy.": {
    hi: { text: "हम खुश हैं", pron: "ham khush hain" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿದ್ದೇವೆ", pron: "naavu santoshavagiddeve" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருக்கிறோம்", pron: "naam magilchchiyaaga irukkiRom" },
  },
  "You are happy. (plural)": {
    hi: { text: "आप सब खुश हैं", pron: "aap sab khush hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿದ್ದೀರಿ", pron: "neevu santoshavagiddiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்கிறீர்கள்", pron: "neengal magilchchiyaaga irukkiReergal" },
  },
  "They are happy.": {
    hi: { text: "वे खुश हैं", pron: "ve khush hain" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿದ್ದಾರೆ", pron: "avaru santoshavagiddaare" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருக்கிறார்கள்", pron: "avargal magilchchiyaaga irukkiRaargal" },
  },
  "I was happy.": {
    hi: { text: "मैं खुश था", pron: "main khush thaa" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿದ್ದೆ", pron: "naanu santoshavagidde" },
    ta: { text: "நான் மகிழ்ச்சியாக இருந்தேன்", pron: "naan magilchchiyaaga irundhen" },
  },
  "You were happy.": {
    hi: { text: "तुम खुश थे", pron: "tum khush the" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿದ್ದೆ", pron: "neenu santoshavagidde" },
    ta: { text: "நீ மகிழ்ச்சியாக இருந்தாய்", pron: "nee magilchchiyaaga irunthaay" },
  },
  "You were happy. (formal)": {
    hi: { text: "आप खुश थे", pron: "aap khush the" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿದ್ದಿರಿ", pron: "neevu santoshavagiddiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருந்தீர்கள்", pron: "neengal magilchchiyaaga irundheergal" },
  },
  "He was happy.": {
    hi: { text: "वह खुश था", pron: "vah khush thaa" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿದ್ದನು", pron: "avanu santoshavagiddanu" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருந்தான்", pron: "avan magilchchiyaaga irundhaan" },
  },
  "She was happy.": {
    hi: { text: "वह खुश थी", pron: "vah khush thee" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿದ್ದಳು", pron: "avalu santoshavagiddalu" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருந்தாள்", pron: "aval magilchchiyaaga irundhaal" },
  },
  "It was happy.": {
    hi: { text: "यह खुश था", pron: "yah khush thaa" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿತ್ತು", pron: "adu santoshavagittu" },
    ta: { text: "அது மகிழ்ச்சியாக இருந்தது", pron: "adu magilchchiyaaga irundhadu" },
  },
  "We were happy.": {
    hi: { text: "हम खुश थे", pron: "ham khush the" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿದ್ದೆವು", pron: "naavu santoshavagiddevu" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருந்தோம்", pron: "naam magilchchiyaaga irundhom" },
  },
  "You were happy. (plural)": {
    hi: { text: "आप सब खुश थे", pron: "aap sab khush the" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿದ್ದಿರಿ", pron: "neevu santoshavagiddiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருந்தீர்கள்", pron: "neengal magilchchiyaaga irundheergal" },
  },
  "They were happy.": {
    hi: { text: "वे खुश थे", pron: "ve khush the" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿದ್ದರು", pron: "avaru santoshavagiddaru" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருந்தார்கள்", pron: "avargal magilchchiyaaga irundhaargal" },
  },
  "I have been happy.": {
    hi: { text: "मैं खुश रहा हूँ", pron: "main khush raha hoon" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿದ್ದೇನೆ", pron: "naanu santoshavagiddene" },
    ta: { text: "நான் மகிழ்ச்சியாக இருந்திருக்கிறேன்", pron: "naan magilchchiyaaga irundhirukkiRen" },
  },
  "You have been happy.": {
    hi: { text: "तुम खुश रहे हो", pron: "tum khush rahe ho" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿದ್ದೀಯ", pron: "neenu santoshavagiddiya" },
    ta: { text: "நீ மகிழ்ச்சியாக இருந்திருக்கிறாய்", pron: "nee magilchchiyaaga irundhirukkRaay" },
  },
  "You have been happy. (formal)": {
    hi: { text: "आप खुश रहे हैं", pron: "aap khush rahe hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿದ್ದೀರಿ", pron: "neevu santoshavagiddiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருந்திருக்கிறீர்கள்", pron: "neengal magilchchiyaaga irundhirukkiReergal" },
  },
  "He has been happy.": {
    hi: { text: "वह खुश रहा है", pron: "vah khush raha hai" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿದ್ದಾನೆ", pron: "avanu santoshavagiddaane" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருந்திருக்கிறான்", pron: "avan magilchchiyaaga irundhirukkiRaan" },
  },
  "She has been happy.": {
    hi: { text: "वह खुश रही है", pron: "vah khush rahi hai" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿದ್ದಾಳೆ", pron: "avalu santoshavagiddaale" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருந்திருக்கிறாள்", pron: "aval magilchchiyaaga irundhirukkiRaal" },
  },
  "It has been happy.": {
    hi: { text: "यह खुश रहा है", pron: "yah khush raha hai" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿದೆ", pron: "adu santoshavagide" },
    ta: { text: "அது மகிழ்ச்சியாக இருந்திருக்கிறது", pron: "adu magilchchiyaaga irundhirukkiRadu" },
  },
  "We have been happy.": {
    hi: { text: "हम खुश रहे हैं", pron: "ham khush rahe hain" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿದ್ದೇವೆ", pron: "naavu santoshavagiddeve" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருந்திருக்கிறோம்", pron: "naam magilchchiyaaga irundhirukkiRom" },
  },
  "You have been happy. (plural)": {
    hi: { text: "आप सब खुश रहे हैं", pron: "aap sab khush rahe hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿದ್ದೀರಿ", pron: "neevu santoshavagiddiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருந்திருக்கிறீர்கள்", pron: "neengal magilchchiyaaga irundhirukkiReergal" },
  },
  "They have been happy.": {
    hi: { text: "वे खुश रहे हैं", pron: "ve khush rahe hain" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿದ್ದಾರೆ", pron: "avaru santoshavagiddaare" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருந்திருக்கிறார்கள்", pron: "avargal magilchchiyaaga irundhirukkiRaargal" },
  },
  "I will be happy.": {
    hi: { text: "मैं खुश रहूँगा", pron: "main khush rahoongaa" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿರುತ್ತೇನೆ", pron: "naanu santoshavagiruttene" },
    ta: { text: "நான் மகிழ்ச்சியாக இருப்பேன்", pron: "naan magilchchiyaaga iruppen" },
  },
  "You will be happy.": {
    hi: { text: "तुम खुश रहोगे", pron: "tum khush rahoge" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿರುತ್ತೀಯ", pron: "neenu santoshavagiruttiya" },
    ta: { text: "நீ மகிழ்ச்சியாக இருப்பாய்", pron: "nee magilchchiyaaga iruppaay" },
  },
  "You will be happy. (formal)": {
    hi: { text: "आप खुश रहेंगे", pron: "aap khush rahenge" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರುತ್ತೀರಿ", pron: "neevu santoshavagiruttiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருப்பீர்கள்", pron: "neengal magilchchiyaaga iruppeergal" },
  },
  "He will be happy.": {
    hi: { text: "वह खुश रहेगा", pron: "vah khush rahegaa" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿರುತ್ತಾನೆ", pron: "avanu santoshavagiruttaane" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருப்பான்", pron: "avan magilchchiyaaga iruppaan" },
  },
  "She will be happy.": {
    hi: { text: "वह खुश रहेगी", pron: "vah khush rahegee" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿರುತ್ತಾಳೆ", pron: "avalu santoshavagiruttaale" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருப்பாள்", pron: "aval magilchchiyaaga iruppaal" },
  },
  "It will be happy.": {
    hi: { text: "यह खुश रहेगा", pron: "yah khush rahegaa" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿರುತ್ತದೆ", pron: "adu santoshavagiruttade" },
    ta: { text: "அது மகிழ்ச்சியாக இருக்கும்", pron: "adu magilchchiyaaga irukkum" },
  },
  "We will be happy.": {
    hi: { text: "हम खुश रहेंगे", pron: "ham khush rahenge" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿರುತ್ತೇವೆ", pron: "naavu santoshavagirutteve" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருப்போம்", pron: "naam magilchchiyaaga iruppom" },
  },
  "You will be happy. (plural)": {
    hi: { text: "आप सब खुश रहेंगे", pron: "aap sab khush rahenge" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರುತ್ತೀರಿ", pron: "neevu santoshavagiruttiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருப்பீர்கள்", pron: "neengal magilchchiyaaga iruppeergal" },
  },
  "They will be happy.": {
    hi: { text: "वे खुश रहेंगे", pron: "ve khush rahenge" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿರುತ್ತಾರೆ", pron: "avaru santoshavagiruttaare" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருப்பார்கள்", pron: "avargal magilchchiyaaga iruppaargal" },
  },
  "I can be happy.": {
    hi: { text: "मैं खुश रह सकता हूँ", pron: "main khush rah sakta hoon" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿರಬಲ್ಲೆ", pron: "naanu santoshavagiraballe" },
    ta: { text: "நான் மகிழ்ச்சியாக இருக்க முடியும்", pron: "naan magilchchiyaaga irukka mudiyum" },
  },
  "You can be happy.": {
    hi: { text: "तुम खुश रह सकते हो", pron: "tum khush rah sakte ho" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿರಬಲ್ಲೆ", pron: "neenu santoshavagiraballe" },
    ta: { text: "நீ மகிழ்ச்சியாக இருக்க முடியும்", pron: "nee magilchchiyaaga irukka mudiyum" },
  },
  "You can be happy. (formal)": {
    hi: { text: "आप खुश रह सकते हैं", pron: "aap khush rah sakte hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಬಲ್ಲಿರಿ", pron: "neevu santoshavagiraballiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்க முடியும்", pron: "neengal magilchchiyaaga irukka mudiyum" },
  },
  "He can be happy.": {
    hi: { text: "वह खुश रह सकता है", pron: "vah khush rah sakta hai" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿರಬಲ್ಲ", pron: "avanu santoshavagiraballa" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருக்க முடியும்", pron: "avan magilchchiyaaga irukka mudiyum" },
  },
  "She can be happy.": {
    hi: { text: "वह खुश रह सकती है", pron: "vah khush rah sakti hai" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿರಬಲ್ಲಳು", pron: "avalu santoshavagiraballalu" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருக்க முடியும்", pron: "aval magilchchiyaaga irukka mudiyum" },
  },
  "It can be happy.": {
    hi: { text: "यह खुश रह सकता है", pron: "yah khush rah sakta hai" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿರಬಲ್ಲದು", pron: "adu santoshavagiraballadu" },
    ta: { text: "அது மகிழ்ச்சியாக இருக்க முடியும்", pron: "adu magilchchiyaaga irukka mudiyum" },
  },
  "We can be happy.": {
    hi: { text: "हम खुश रह सकते हैं", pron: "ham khush rah sakte hain" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿರಬಲ್ಲೆವು", pron: "naavu santoshavagiraballeevu" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருக்க முடியும்", pron: "naam magilchchiyaaga irukka mudiyum" },
  },
  "You can be happy. (plural)": {
    hi: { text: "आप सब खुश रह सकते हैं", pron: "aap sab khush rah sakte hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಬಲ್ಲಿರಿ", pron: "neevu santoshavagiraballiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்க முடியும்", pron: "neengal magilchchiyaaga irukka mudiyum" },
  },
  "They can be happy.": {
    hi: { text: "वे खुश रह सकते हैं", pron: "ve khush rah sakte hain" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿರಬಲ್ಲರು", pron: "avaru santoshavagiraballaru" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருக்க முடியும்", pron: "avargal magilchchiyaaga irukka mudiyum" },
  },
  "I must be happy.": {
    hi: { text: "मैं खुश रहना चाहिए", pron: "main khush rahnaa chahiye" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "naanu santoshavagirabeku" },
    ta: { text: "நான் மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "naan magilchchiyaaga irukka vendum" },
  },
  "You must be happy.": {
    hi: { text: "तुम खुश रहना चाहिए", pron: "tum khush rahnaa chahiye" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "neenu santoshavagirabeku" },
    ta: { text: "நீ மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "nee magilchchiyaaga irukka vendum" },
  },
  "You must be happy. (formal)": {
    hi: { text: "आप खुश रहना चाहिए", pron: "aap khush rahnaa chahiye" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "neevu santoshavagirabeku" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "neengal magilchchiyaaga irukka vendum" },
  },
  "He must be happy.": {
    hi: { text: "वह खुश रहना चाहिए", pron: "vah khush rahnaa chahiye" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "avanu santoshavagirabeku" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "avan magilchchiyaaga irukka vendum" },
  },
  "She must be happy.": {
    hi: { text: "वह खुश रहना चाहिए", pron: "vah khush rahnaa chahiye" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "avalu santoshavagirabeku" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "aval magilchchiyaaga irukka vendum" },
  },
  "It must be happy.": {
    hi: { text: "यह खुश रहना चाहिए", pron: "yah khush rahnaa chahiye" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "adu santoshavagirabeku" },
    ta: { text: "அது மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "adu magilchchiyaaga irukka vendum" },
  },
  "We must be happy.": {
    hi: { text: "हम खुश रहना चाहिए", pron: "ham khush rahnaa chahiye" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "naavu santoshavagirabeku" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "naam magilchchiyaaga irukka vendum" },
  },
  "You must be happy. (plural)": {
    hi: { text: "आप सब खुश रहना चाहिए", pron: "aap sab khush rahnaa chahiye" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "neevu santoshavagirabeku" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "neengal magilchchiyaaga irukka vendum" },
  },
  "They must be happy.": {
    hi: { text: "वे खुश रहना चाहिए", pron: "ve khush rahnaa chahiye" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿರಬೇಕು", pron: "avaru santoshavagirabeku" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருக்க வேண்டும்", pron: "avargal magilchchiyaaga irukka vendum" },
  },
  "I may be happy.": {
    hi: { text: "मैं शायद खुश रहूँ", pron: "main shaayad khush rahoon" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "naanu santoshavagiraloo bahudu" },
    ta: { text: "நான் மகிழ்ச்சியாக இருக்கலாம்", pron: "naan magilchchiyaaga irukkalaam" },
  },
  "You may be happy.": {
    hi: { text: "तुम शायद खुश रहो", pron: "tum shaayad khush raho" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "neenu santoshavagiraloo bahudu" },
    ta: { text: "நீ மகிழ்ச்சியாக இருக்கலாம்", pron: "nee magilchchiyaaga irukkalaam" },
  },
  "You may be happy. (formal)": {
    hi: { text: "आप शायद खुश रहें", pron: "aap shaayad khush rahen" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "neevu santoshavagiraloo bahudu" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்கலாம்", pron: "neengal magilchchiyaaga irukkalaam" },
  },
  "He may be happy.": {
    hi: { text: "वह शायद खुश रहे", pron: "vah shaayad khush rahe" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "avanu santoshavagiraloo bahudu" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருக்கலாம்", pron: "avan magilchchiyaaga irukkalaam" },
  },
  "She may be happy.": {
    hi: { text: "वह शायद खुश रहे", pron: "vah shaayad khush rahe" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "avalu santoshavagiraloo bahudu" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருக்கலாம்", pron: "aval magilchchiyaaga irukkalaam" },
  },
  "It may be happy.": {
    hi: { text: "यह शायद खुश रहे", pron: "yah shaayad khush rahe" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "adu santoshavagiraloo bahudu" },
    ta: { text: "அது மகிழ்ச்சியாக இருக்கலாம்", pron: "adu magilchchiyaaga irukkalaam" },
  },
  "We may be happy.": {
    hi: { text: "हम शायद खुश रहें", pron: "ham shaayad khush rahen" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "naavu santoshavagiraloo bahudu" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருக்கலாம்", pron: "naam magilchchiyaaga irukkalaam" },
  },
  "You may be happy. (plural)": {
    hi: { text: "आप सब शायद खुश रहें", pron: "aap sab shaayad khush rahen" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "neevu santoshavagiraloo bahudu" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்கலாம்", pron: "neengal magilchchiyaaga irukkalaam" },
  },
  "They may be happy.": {
    hi: { text: "वे शायद खुश रहें", pron: "ve shaayad khush rahen" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿರಲೂಬಹುದು", pron: "avaru santoshavagiraloo bahudu" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருக்கலாம்", pron: "avargal magilchchiyaaga irukkalaam" },
  },
  "I want to be happy.": {
    hi: { text: "मैं खुश रहना चाहता हूँ", pron: "main khush rahnaa chahta hoon" },
    kn: { text: "ನಾನು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತೇನೆ", pron: "naanu santoshavagiralu bayasuttene" },
    ta: { text: "நான் மகிழ்ச்சியாக இருக்க விரும்புகிறேன்", pron: "naan magilchchiyaaga irukka virumbugiRen" },
  },
  "You want to be happy.": {
    hi: { text: "तुम खुश रहना चाहते हो", pron: "tum khush rahnaa chahte ho" },
    kn: { text: "ನೀನು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತೀಯ", pron: "neenu santoshavagiralu bayasuttiya" },
    ta: { text: "நீ மகிழ்ச்சியாக இருக்க விரும்புகிறாய்", pron: "nee magilchchiyaaga irukka virumbugiRaay" },
  },
  "You want to be happy. (formal)": {
    hi: { text: "आप खुश रहना चाहते हैं", pron: "aap khush rahnaa chahte hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತೀರಿ", pron: "neevu santoshavagiralu bayasuttiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்க விரும்புகிறீர்கள்", pron: "neengal magilchchiyaaga irukka virumbugiReergal" },
  },
  "He wants to be happy.": {
    hi: { text: "वह खुश रहना चाहता है", pron: "vah khush rahnaa chahta hai" },
    kn: { text: "ಅವನು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತಾನೆ", pron: "avanu santoshavagiralu bayasuttaane" },
    ta: { text: "அவன் மகிழ்ச்சியாக இருக்க விரும்புகிறான்", pron: "avan magilchchiyaaga irukka virumbugiRaan" },
  },
  "She wants to be happy.": {
    hi: { text: "वह खुश रहना चाहती है", pron: "vah khush rahnaa chahti hai" },
    kn: { text: "ಅವಳು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತಾಳೆ", pron: "avalu santoshavagiralu bayasuttaale" },
    ta: { text: "அவள் மகிழ்ச்சியாக இருக்க விரும்புகிறாள்", pron: "aval magilchchiyaaga irukka virumbugiRaal" },
  },
  "It wants to be happy.": {
    hi: { text: "यह खुश रहना चाहता है", pron: "yah khush rahnaa chahta hai" },
    kn: { text: "ಅದು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತದೆ", pron: "adu santoshavagiralu bayasuttade" },
    ta: { text: "அது மகிழ்ச்சியாக இருக்க விரும்புகிறது", pron: "adu magilchchiyaaga irukka virumbugiRadu" },
  },
  "We want to be happy.": {
    hi: { text: "हम खुश रहना चाहते हैं", pron: "ham khush rahnaa chahte hain" },
    kn: { text: "ನಾವು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತೇವೆ", pron: "naavu santoshavagiralu bayasutteve" },
    ta: { text: "நாம் மகிழ்ச்சியாக இருக்க விரும்புகிறோம்", pron: "naam magilchchiyaaga irukka virumbugiRom" },
  },
  "You want to be happy. (plural)": {
    hi: { text: "आप सब खुश रहना चाहते हैं", pron: "aap sab khush rahnaa chahte hain" },
    kn: { text: "ನೀವು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತೀರಿ", pron: "neevu santoshavagiralu bayasuttiri" },
    ta: { text: "நீங்கள் மகிழ்ச்சியாக இருக்க விரும்புகிறீர்கள்", pron: "neengal magilchchiyaaga irukka virumbugiReergal" },
  },
  "They want to be happy.": {
    hi: { text: "वे खुश रहना चाहते हैं", pron: "ve khush rahnaa chahte hain" },
    kn: { text: "ಅವರು ಸಂತೋಷವಾಗಿರಲು ಬಯಸುತ್ತಾರೆ", pron: "avaru santoshavagiralu bayasuttaare" },
    ta: { text: "அவர்கள் மகிழ்ச்சியாக இருக்க விரும்புகிறார்கள்", pron: "avargal magilchchiyaaga irukka virumbugiRaargal" },
  },
  "I have a car.": {
    hi: { text: "मेरे पास एक कार है", pron: "mere paas ek kaar hai" },
    kn: { text: "ನನ್ನ ಬಳಿ ಕಾರು ಇದೆ", pron: "nanna bali kaaru ide" },
    ta: { text: "என்னிடம் கார் இருக்கிறது", pron: "ennidam kaar irukkiRadu" },
  },
  "You have a car.": {
    hi: { text: "तुम्हारे पास एक कार है", pron: "tumhaare paas ek kaar hai" },
    kn: { text: "ನಿನ್ನ ಬಳಿ ಕಾರು ಇದೆ", pron: "ninna bali kaaru ide" },
    ta: { text: "உன்னிடம் கார் இருக்கிறது", pron: "unnidam kaar irukkiRadu" },
  },
  "You have a car. (formal)": {
    hi: { text: "आपके पास एक कार है", pron: "aapke paas ek kaar hai" },
    kn: { text: "ನಿಮ್ಮ ಬಳಿ ಕಾರು ಇದೆ", pron: "nimma bali kaaru ide" },
    ta: { text: "உங்களிடம் கார் இருக்கிறது", pron: "ungalidam kaar irukkiRadu" },
  },
  "He has a car.": {
    hi: { text: "उसके पास एक कार है", pron: "uske paas ek kaar hai" },
    kn: { text: "ಅವನ ಬಳಿ ಕಾರು ಇದೆ", pron: "avana bali kaaru ide" },
    ta: { text: "அவனிடம் கார் இருக்கிறது", pron: "avanidam kaar irukkiRadu" },
  },
  "She has a car.": {
    hi: { text: "उसके पास एक कार है", pron: "uske paas ek kaar hai" },
    kn: { text: "ಅವಳ ಬಳಿ ಕಾರು ಇದೆ", pron: "avala bali kaaru ide" },
    ta: { text: "அவளிடம் கார் இருக்கிறது", pron: "avalidam kaar irukkiRadu" },
  },
  "It has a car.": {
    hi: { text: "उसके पास एक कार है", pron: "uske paas ek kaar hai" },
    kn: { text: "ಅದರ ಬಳಿ ಕಾರು ಇದೆ", pron: "adara bali kaaru ide" },
    ta: { text: "அதனிடம் கார் இருக்கிறது", pron: "athanidam kaar irukkiRadu" },
  },
  "We have a car.": {
    hi: { text: "हमारे पास एक कार है", pron: "hamaare paas ek kaar hai" },
    kn: { text: "ನಮ್ಮ ಬಳಿ ಕಾರು ಇದೆ", pron: "namma bali kaaru ide" },
    ta: { text: "நம்மிடம் கார் இருக்கிறது", pron: "nammidam kaar irukkiRadu" },
  },
  "You have a car. (plural)": {
    hi: { text: "आप सबके पास एक कार है", pron: "aap sabke paas ek kaar hai" },
    kn: { text: "ನಿಮ್ಮ ಬಳಿ ಕಾರು ಇದೆ", pron: "nimma bali kaaru ide" },
    ta: { text: "உங்களிடம் கார் இருக்கிறது", pron: "ungalidam kaar irukkiRadu" },
  },
  "They have a car.": {
    hi: { text: "उनके पास एक कार है", pron: "unke paas ek kaar hai" },
    kn: { text: "ಅವರ ಬಳಿ ಕಾರು ಇದೆ", pron: "avara bali kaaru ide" },
    ta: { text: "அவர்களிடம் கார் இருக்கிறது", pron: "avargalidam kaar irukkiRadu" },
  },
  "I had a car.": {
    hi: { text: "मेरे पास एक कार थी", pron: "mere paas ek kaar thee" },
    kn: { text: "ನನ್ನ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "nanna bali kaaru ittu" },
    ta: { text: "என்னிடம் கார் இருந்தது", pron: "ennidam kaar irundhadu" },
  },
  "You had a car.": {
    hi: { text: "तुम्हारे पास एक कार थी", pron: "tumhaare paas ek kaar thee" },
    kn: { text: "ನಿನ್ನ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "ninna bali kaaru ittu" },
    ta: { text: "உன்னிடம் கார் இருந்தது", pron: "unnidam kaar irundhadu" },
  },
  "You had a car. (formal)": {
    hi: { text: "आपके पास एक कार थी", pron: "aapke paas ek kaar thee" },
    kn: { text: "ನಿಮ್ಮ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "nimma bali kaaru ittu" },
    ta: { text: "உங்களிடம் கார் இருந்தது", pron: "ungalidam kaar irundhadu" },
  },
  "He had a car.": {
    hi: { text: "उसके पास एक कार थी", pron: "uske paas ek kaar thee" },
    kn: { text: "ಅವನ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "avana bali kaaru ittu" },
    ta: { text: "அவனிடம் கார் இருந்தது", pron: "avanidam kaar irundhadu" },
  },
  "She had a car.": {
    hi: { text: "उसके पास एक कार थी", pron: "uske paas ek kaar thee" },
    kn: { text: "ಅವಳ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "avala bali kaaru ittu" },
    ta: { text: "அவளிடம் கார் இருந்தது", pron: "avalidam kaar irundhadu" },
  },
  "It had a car.": {
    hi: { text: "उसके पास एक कार थी", pron: "uske paas ek kaar thee" },
    kn: { text: "ಅದರ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "adara bali kaaru ittu" },
    ta: { text: "அதனிடம் கார் இருந்தது", pron: "athanidam kaar irundhadu" },
  },
  "We had a car.": {
    hi: { text: "हमारे पास एक कार थी", pron: "hamaare paas ek kaar thee" },
    kn: { text: "ನಮ್ಮ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "namma bali kaaru ittu" },
    ta: { text: "நம்மிடம் கார் இருந்தது", pron: "nammidam kaar irundhadu" },
  },
  "You had a car. (plural)": {
    hi: { text: "आप सबके पास एक कार थी", pron: "aap sabke paas ek kaar thee" },
    kn: { text: "ನಿಮ್ಮ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "nimma bali kaaru ittu" },
    ta: { text: "உங்களிடம் கார் இருந்தது", pron: "ungalidam kaar irundhadu" },
  },
  "They had a car.": {
    hi: { text: "उनके पास एक कार थी", pron: "unke paas ek kaar thee" },
    kn: { text: "ಅವರ ಬಳಿ ಕಾರು ಇತ್ತು", pron: "avara bali kaaru ittu" },
    ta: { text: "அவர்களிடம் கார் இருந்தது", pron: "avargalidam kaar irundhadu" },
  },
  "What do you eat? / What are you eating?": {
    hi: { text: "आप क्या खाते हैं? / आप क्या खा रहे हैं?", pron: "aap kya khaate hain? / aap kya khaa rahe hain?" },
    kn: { text: "ನೀವು ಏನು ತಿನ್ನುತ್ತೀರಿ? / ನೀವು ಏನು ತಿನ್ನುತ್ತಿದ್ದೀರಿ?", pron: "neevu enu tinnutti-ri? / neevu enu tinnut-tiddi-ri?" },
    ta: { text: "நீங்கள் என்ன சாப்பிடுகிறீர்கள்? / என்ன சாப்பிட்டுக் கொண்டிருக்கிறீர்கள்?", pron: "neengal enna saappidugiReergal? / enna saappittu kondu irukkiReergal?" },
  },
  "What did you eat?": {
    hi: { text: "आपने क्या खाया?", pron: "aapne kya khaayaa?" },
    kn: { text: "ನೀವು ಏನು ತಿಂದಿದ್ದೀರಿ?", pron: "neevu enu tindiddi-ri?" },
    ta: { text: "நீங்கள் என்ன சாப்பிட்டீர்கள்?", pron: "neengal enna saappitteergal?" },
  },
  "What will you eat?": {
    hi: { text: "आप क्या खाएँगे?", pron: "aap kya khaa-eng-e?" },
    kn: { text: "ನೀವು ಏನು ತಿನ್ನುತ್ತೀರಿ?", pron: "neevu enu tinnutti-ri?" },
    ta: { text: "நீங்கள் என்ன சாப்பிடுவீர்கள்?", pron: "neengal enna saappiduveergal?" },
  },
  "When are you coming? / When do you come?": {
    hi: { text: "आप कब आ रहे हैं? / आप कब आते हैं?", pron: "aap kab aa rahe hain? / aap kab aate hain?" },
    kn: { text: "ನೀವು ಯಾವಾಗ ಬರುತ್ತಿದ್ದೀರಿ? / ನೀವು ಯಾವಾಗ ಬರುತ್ತೀರಿ?", pron: "neevu yaavaaga barut-tiddi-ri? / neevu yaavaaga barutti-ri?" },
    ta: { text: "நீங்கள் எப்போது வருகிறீர்கள்? / எப்போது வருவீர்கள்?", pron: "neengal eppodhu varugiReergal? / eppodhu varuveergal?" },
  },
  "When did you come?": {
    hi: { text: "आप कब आए?", pron: "aap kab aaye?" },
    kn: { text: "ನೀವು ಯಾವಾಗ ಬಂದಿದ್ದೀರಿ?", pron: "neevu yaavaaga bandiddi-ri?" },
    ta: { text: "நீங்கள் எப்போது வந்தீர்கள்?", pron: "neengal eppodhu vandheergal?" },
  },
  "When will you come?": {
    hi: { text: "आप कब आएँगे?", pron: "aap kab aa-eng-e?" },
    kn: { text: "ನೀವು ಯಾವಾಗ ಬರುತ್ತೀರಿ?", pron: "neevu yaavaaga barutti-ri?" },
    ta: { text: "நீங்கள் எப்போது வருவீர்கள்?", pron: "neengal eppodhu varuveergal?" },
  },
  "Why are you late?": {
    hi: { text: "आप देर से क्यों हैं?", pron: "aap der se kyon hain?" },
    kn: { text: "ನೀವು ಯಾಕೆ ತಡವಾಗಿದ್ದೀರಿ?", pron: "neevu yaake tadavaagiddi-ri?" },
    ta: { text: "நீங்கள் ஏன் தாமதம்?", pron: "neengal yen thaa-madham?" },
  },
  "Why were you late?": {
    hi: { text: "आप देर से क्यों थे?", pron: "aap der se kyon the?" },
    kn: { text: "ನೀವು ಯಾಕೆ ತಡವಾಗಿದ್ದಿರಿ?", pron: "neevu yaake tadavaagiddi-ri?" },
    ta: { text: "நீங்கள் ஏன் தாமதமாக இருந்தீர்கள்?", pron: "neengal yen thaa-madhamaaga irundheergal?" },
  },
  "Why will you be late?": {
    hi: { text: "आप देर से क्यों होंगे?", pron: "aap der se kyon honge?" },
    kn: { text: "ನೀವು ಯಾಕೆ ತಡವಾಗಿರುತ್ತೀರಿ?", pron: "neevu yaake tadavaagirutti-ri?" },
    ta: { text: "நீங்கள் ஏன் தாமதமாக இருப்பீர்கள்?", pron: "neengal yen thaa-madhamaaga iruppeergal?" },
  },
  "How is it going? / How are you?": {
    hi: { text: "कैसे चल रहा है? / आप कैसे हैं?", pron: "kai-se chal raha hai? / aap kai-se hain?" },
    kn: { text: "ಹೇಗಿದೆ? / ನೀವು ಹೇಗಿದ್ದೀರಿ?", pron: "he-gide? / neevu he-giddi-ri?" },
    ta: { text: "எப்படி இருக்கிறது? / நீங்கள் எப்படி இருக்கிறீர்கள்?", pron: "eppadi irukkiRadu? / neengal eppadi irukkiReergal?" },
  },
  "How did it go?": {
    hi: { text: "कैसे गया?", pron: "kai-se gayaa?" },
    kn: { text: "ಅದು ಹೇಗೆ ಆಯಿತು?", pron: "adu hege aayitu?" },
    ta: { text: "அது எப்படி நடந்தது?", pron: "adhu eppadi nadandhadu?" },
  },
  "How will it go?": {
    hi: { text: "कैसे जाएगा?", pron: "kai-se jaa-egaa?" },
    kn: { text: "ಅದು ಹೇಗೆ ಆಗುತ್ತದೆ?", pron: "adu hege aaguttade?" },
    ta: { text: "அது எப்படி நடக்கும்?", pron: "adhu eppadi nadakkum?" },
  },
  "Where do you live?": {
    hi: { text: "आप कहाँ रहते हैं?", pron: "aap kahaan rahte hain?" },
    kn: { text: "ನೀವು ಎಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಿ?", pron: "neevu elli vaasisutti-ri?" },
    ta: { text: "நீங்கள் எங்கே வசிக்கிறீர்கள்?", pron: "neengal enge vasikkiReergal?" },
  },
  "Where did you live?": {
    hi: { text: "आप कहाँ रहते थे?", pron: "aap kahaan rahte the?" },
    kn: { text: "ನೀವು ಎಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದಿರಿ?", pron: "neevu elli vaasisut-tiddi-ri?" },
    ta: { text: "நீங்கள் எங்கே வசித்தீர்கள்?", pron: "neengal enge vasittheergal?" },
  },
  "Where will you live?": {
    hi: { text: "आप कहाँ रहेंगे?", pron: "aap kahaan rahenge?" },
    kn: { text: "ನೀವು ಎಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಿ?", pron: "neevu elli vaasisutti-ri?" },
    ta: { text: "நீங்கள் எங்கே வசிப்பீர்கள்?", pron: "neengal enge vasippeergal?" },
  },
  "Which language do you speak?": {
    hi: { text: "आप कौन सी भाषा बोलते हैं?", pron: "aap kaun see bhaashaa bolte hain?" },
    kn: { text: "ನೀವು ಯಾವ ಭಾಷೆ ಮಾತನಾಡುತ್ತೀರಿ?", pron: "neevu yaava bhashe maatanaadutti-ri?" },
    ta: { text: "நீங்கள் எந்த மொழி பேசுகிறீர்கள்?", pron: "neengal entha mozhi pesugiReergal?" },
  },
  "Which language did you speak?": {
    hi: { text: "आप कौन सी भाषा बोलते थे?", pron: "aap kaun see bhaashaa bolte the?" },
    kn: { text: "ನೀವು ಯಾವ ಭಾಷೆ ಮಾತನಾಡುತ್ತಿದ್ದಿರಿ?", pron: "neevu yaava bhashe maatanaadut-tiddi-ri?" },
    ta: { text: "நீங்கள் எந்த மொழி பேசினீர்கள்?", pron: "neengal entha mozhi pesineergal?" },
  },
  "Which language will you speak?": {
    hi: { text: "आप कौन सी भाषा बोलेंगे?", pron: "aap kaun see bhaashaa bolenge?" },
    kn: { text: "ನೀವು ಯಾವ ಭಾಷೆ ಮಾತನಾಡುತ್ತೀರಿ?", pron: "neevu yaava bhashe maatanaadutti-ri?" },
    ta: { text: "நீங்கள் எந்த மொழி பேசுவீர்கள்?", pron: "neengal entha mozhi pesuveergal?" },
  },
  "Who is the teacher?": {
    hi: { text: "शिक्षक कौन है?", pron: "shikshak kaun hai?" },
    kn: { text: "ಶಿಕ್ಷಕರು ಯಾರು?", pron: "shikshakaru yaaru?" },
    ta: { text: "ஆசிரியர் யார்?", pron: "aasiriyar yaar?" },
  },
  "Who was the teacher?": {
    hi: { text: "शिक्षक कौन था?", pron: "shikshak kaun thaa?" },
    kn: { text: "ಶಿಕ್ಷಕರು ಯಾರಾಗಿದ್ದರು?", pron: "shikshakaru yaaraagiddaru?" },
    ta: { text: "ஆசிரியர் யாராக இருந்தார்?", pron: "aasiriyar yaaraaga irundhaar?" },
  },
  "Who will be the teacher?": {
    hi: { text: "शिक्षक कौन होगा?", pron: "shikshak kaun hogaa?" },
    kn: { text: "ಶಿಕ್ಷಕರು ಯಾರಾಗಿರುತ್ತಾರೆ?", pron: "shikshakaru yaaraagiruttaare?" },
    ta: { text: "ஆசிரியர் யாராக இருப்பார்?", pron: "aasiriyar yaaraaga iruppaar?" },
  }
};
