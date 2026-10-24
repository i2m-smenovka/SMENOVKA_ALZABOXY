/* ==================================================================================
   NASTAVENIA UPOZORNENÍ (Firebase) – vyplň podľa návodu, inak sa upozornenia nezapnú.
   1) Firebase → Nastavenia projektu → Všeobecné → Tvoje aplikácie → Webová aplikácia (</>) → firebaseConfig
   2) Firebase → Nastavenia projektu → Cloud Messaging → Webové push certifikáty → Pár kľúčov (Key pair)
   Tieto údaje nie sú tajné – sú určené pre webovú stránku.
   ================================================================================== */
self.FIREBASE_CONFIG = {
  apiKey: "AIzaSyACmyIA5n0ZvaDD-NW3yqkOu9sSVpqycp4",
  authDomain: "smenovka-i2m.firebaseapp.com",
  projectId: "smenovka-i2m",
  storageBucket: "smenovka-i2m.firebasestorage.app",
  messagingSenderId: "302668247046",
  appId: "1:302668247046:web:7f31d930ec3f2473129387",
  measurementId: "G-V6HJ1HQB4F"
};   // sem vlož celý objekt firebaseConfig, napr. { apiKey: "…", authDomain: "…", projectId: "…", storageBucket: "…", messagingSenderId: "…", appId: "…" }
self.VAPID_KEY = 'BKr4ZM9xqg3zANfAQBeqJszT1MutSpoWHwe3MA0Xb4kpQ2RzjRTkmSlcgInrFM_tzjFyKYL2TaK0BZqgT8eT_B4';           // sem vlož „Pár kľúčov“ (dlhý text začínajúci napr. na B…)
