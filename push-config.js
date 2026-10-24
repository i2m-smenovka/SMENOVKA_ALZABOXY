/* ==================================================================================
   NASTAVENIA UPOZORNENÍ (Firebase) – vyplň podľa návodu, inak sa upozornenia nezapnú.
   1) Firebase → Nastavenia projektu → Všeobecné → Tvoje aplikácie → Webová aplikácia (</>) → firebaseConfig
   2) Firebase → Nastavenia projektu → Cloud Messaging → Webové push certifikáty → Pár kľúčov (Key pair)
   Tieto údaje nie sú tajné – sú určené pre webovú stránku.
   ================================================================================== */
self.FIREBASE_CONFIG = null;   // sem vlož celý objekt firebaseConfig, napr. { apiKey: "…", authDomain: "…", projectId: "…", storageBucket: "…", messagingSenderId: "…", appId: "…" }
self.VAPID_KEY = '';           // sem vlož „Pár kľúčov“ (dlhý text začínajúci napr. na B…)
