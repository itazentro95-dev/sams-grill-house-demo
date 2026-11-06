/* ============================================================
   Sam's Grill House — language toggle (FR default / EN),
   rotating headline word, scroll reveals, hero parallax.
   Motion is transform/opacity only and fully disabled under
   prefers-reduced-motion. Without JS the page renders the
   complete French site.
   ============================================================ */
(function () {
  "use strict";

  var DICT = {
    fr: {
      title: "Sam's Grill House : Grillades turques à Genève",
      skip: "Aller directement à la carte",
      wordmarkSub: "Grillades turques · Genève",
      navSig: "Signatures",
      navMenu: "La carte",
      navStory: "La maison",
      navLate: "À emporter",
      navVisit: "Visite",
      badgeRating: "4.7 · 410 avis Google",
      badgeCuisine: "Cuisine turque, grillades",
      h1a: "Grillades turques",
      h1b: "à Genève",
      heroRotatePrefix: "Le goût du grill :",
      heroLede: "À quelques minutes de la gare Cornavin, sur la Rue du Mont-Blanc, un grill turc comme on les aime : viandes marinées passées à la flamme, poulet, plats végétariens et desserts, sur place, en terrasse ou à emporter.",
      ctaMenu: "Voir la carte",
      ctaReserve: "Réserver une table",
      ctaCall: "Appeler",
      heroNote: "Ouvert tard : jusqu'à minuit, et jusqu'à 2h du matin le vendredi et le samedi.",
      heroFactHours: "Lun à jeu 7h à 0h, ven et sam 7h à 2h, dim 10h à 0h",
      sigTitle: "Ce qui sort du grill",
      sigSub: "Le cœur de la maison : le grill, la marinade et la flamme. Voici ce que la carte et les avis retiennent chez Sam's.",
      tagGrill: "Le grill",
      tagReviews: "Cité dans les avis",
      tagVeg: "Végétarien",
      tagSweet: "Douceur",
      sig1Name: "Brochettes marinées",
      sig1Desc: "Le cœur de la maison : des viandes marinées, grillées jusqu'à la marque du feu. Les avis les décrivent juteuses et pleines de goût.",
      sig2Name: "Poulet aux champignons",
      sig2Desc: "L'association que les avis sur la maison retiennent nommément : le poulet, servi avec des champignons.",
      sig3Name: "Le grill végétarien",
      sig3Desc: "La cuisine turque de la maison pense aussi aux végétariens : légumes et spécialités sans viande passent eux aussi à la flamme.",
      sig4Name: "Desserts",
      sig4Desc: "La touche sucrée pour finir le repas : les desserts font partie de ce que les avis sur la maison retiennent.",
      sigMoreTitle: "Et aussi, chez Sam's",
      sl1Name: "Viandes marinées",
      sl1Desc: "Marinées avant de passer au grill : c'est le goût fumé et la tendreté que les avis soulignent le plus.",
      sl2Name: "Déjeuner et dîner",
      sl2Desc: "Deux services, sept jours sur sept selon les horaires de la fiche Google : le midi comme le soir.",
      sl3Name: "En terrasse ou à l'intérieur",
      sl3Desc: "Deux façons de s'installer : la salle, ou les tables dehors, côté Rue du Mont-Blanc.",
      sl4Name: "À emporter",
      sl4Desc: "Tout le grill à emporter : un appel, et votre commande vous attend au comptoir.",
      menuTitle: "La carte du grill",
      menuSub: "Une carte centrée sur le grill et la cuisine turque, midi et soir. Pour toute question sur les ingrédients, un appel suffit.",
      catGrill: "Du grill",
      mMarinatedName: "Viandes marinées grillées",
      mMarinated: "Le cœur de la carte : des viandes marinées, grillées à la commande, que les avis décrivent juteuses et pleines de goût.",
      mSkewersName: "Brochettes",
      mSkewers: "En brochettes sur le grill, passées à la flamme dans la pure tradition des grillades turques.",
      mChickenName: "Poulet aux champignons",
      mChicken: "Le poulet de la maison, servi avec des champignons : l'assiette que les avis citent nommément.",
      catVeg: "Côté végétarien",
      mVegGrillName: "Grillades végétariennes",
      mVegGrill: "Légumes et spécialités végétariennes passés au grill, dans l'esprit de la cuisine turque.",
      mVegPlateName: "Assiettes végétariennes",
      mVegPlate: "Des assiettes complètes sans viande, fraîches et grillées, pour manger au grill sans compromis.",
      menuNote: "Les prix et la carte détaillée seront ajoutés dès leur confirmation par la maison. En attendant, appelez-nous : nous vous dirons tout, y compris les plats du moment.",
      menuCta: "Commander par téléphone",
      catSweet: "Douceurs",
      mDessertName: "Desserts",
      mDessert: "La fin douce du repas : les desserts de la maison font partie des plaisirs que les avis retiennent.",
      catService: "Sur place & à emporter",
      mTakeName: "À emporter",
      mTake: "Commandez par téléphone et passez chercher votre grillade, chaude et prête, au 16 Rue du Mont-Blanc.",
      mResaName: "Réservations",
      mResa: "Une table pour le déjeuner ou le soir ? Les réservations se font simplement, par téléphone.",
      mTerraceName: "Terrasse",
      mTerrace: "Quand Genève le permet, installez-vous dehors : la terrasse donne sur la Rue du Mont-Blanc.",
      factAddrLbl: "Adresse",
      factAreaLbl: "Quartier",
      factAreaVal: "Pâquis, Cornavin",
      factRatingLbl: "Note Google",
      factRatingVal: "4.7 · 410 avis",
      factServiceLbl: "Service",
      factServiceVal: "Sur place, terrasse et à emporter",
      storyCardNote: "Un grill de quartier, entre la gare et le lac.",
      storyTitle: "Un grill turc entre la gare et le lac",
      storyP1: "Sam's Grill House se trouve au 16 de la Rue du Mont-Blanc, la rue qui relie la gare Cornavin au lac. C'est l'adresse que les voyageurs comme les gens du quartier croisent tous les jours.",
      storyP2: "Ici, tout tourne autour du grill : une cuisine turque simple et directe, des viandes marinées, du poulet, des options végétariennes et des desserts pour finir.",
      storyP3: "Les avis retiennent l'accueil : une équipe chaleureuse, un patron dont on loue le sens du service, et une porte ouverte même à celles et ceux qui ne parlent pas français.",
      chip1: "Cuisine turque",
      chip2: "Viandes marinées",
      chip3: "Options végétariennes",
      chip4: "Ouvert tard le week-end",
      storyRating: "étoiles sur 410 avis Google. Les avis soulignent les viandes marinées, l'accueil et l'emplacement, entre la gare et le lac.",
      trustTitle: "Bon à savoir avant de venir",
      trust1Title: "Noté 4.7 étoiles",
      trust1Desc: "410 avis Google pour cette adresse de la Rue du Mont-Blanc : une valeur sûre du quartier Cornavin.",
      trust2Title: "Végétarien aussi",
      trust2Desc: "La cuisine turque de la maison prévoit de vraies options végétariennes, du grill comme du reste de la carte.",
      trust3Title: "Sur place, terrasse, à emporter",
      trust3Desc: "Mangez dans la salle, dehors sur la Rue du Mont-Blanc, ou emportez votre grillade : les trois sont possibles.",
      trust4Title: "Ouvert tard",
      trust4Desc: "Jusqu'à minuit la plupart des soirs, et jusqu'à 2h le vendredi et le samedi, selon la fiche Google.",
      lateTitle: "Le grill, même tard",
      lateSub: "À deux pas de Cornavin, Sam's sert au déjeuner comme au dîner, et le grill reste chaud tard le week-end.",
      ccTitle: "À emporter, sans attendre",
      cc1Title: "Choisissez",
      cc1Desc: "Parcourez la carte ci-dessus et faites votre choix.",
      cc2Title: "Appelez",
      cc2Desc: "Un coup de fil, et le grill s'occupe de votre commande.",
      cc3Title: "Passez chercher",
      cc3Desc: "Votre commande vous attend au 16, Rue du Mont-Blanc.",
      ccCta: "Appeler maintenant",
      socTitle: "Suivez la maison",
      socDesc: "La maison vit sur Instagram et TikTok : grillades, coulisses du grill et actualités de la Rue du Mont-Blanc, c'est là que ça se passe. Et sur Facebook, pour les habitués du quartier.",
      visitTitle: "Rue du Mont-Blanc, entre Cornavin et le lac",
      visitAddrTitle: "Adresse et contact",
      visitPhoneLabel: "Téléphone :",
      visitDirections: "Itinéraire",
      visitHoursTitle: "Heures d'ouverture",
      dMonThu: "Lundi à jeudi",
      hMonThu: "7h00 à 0h00",
      dFriSat: "Vendredi et samedi",
      hFriSat: "7h00 à 2h00",
      dSun: "Dimanche",
      hSun: "10h00 à 0h00",
      hoursNote: "Horaires selon la fiche Google de l'établissement. Sous réserve de modification.",
      visitService: "Sur place, en terrasse ou à emporter. Paiement par carte accepté.",
      visitTravelTitle: "Accès",
      travelStation: "la gare centrale est à quelques minutes à pied, parfait en arrivant à Genève ou avant un train.",
      travelStopsLbl: "Arrêts proches",
      travelStops: "Mont-Blanc à 126 m, Alpes à 142 m et Chantepoulet à 175 m, selon la fiche de l'établissement.",
      travelLakeLbl: "Le lac",
      travelLake: "les quais et le Jet d'Eau sont au bout de la rue, côté lac Léman.",
      footerSub: "Grillades turques, Rue du Mont-Blanc 16, 1201 Genève",
      footerTop: "Haut de page",
      footerNote: "Noté 4.7 étoiles sur 410 avis Google · Ouvert jusqu'à 2h le vendredi et le samedi",
      barCall: "Appeler",
      barReserve: "Réserver",
      barDir: "Itinéraire",
      barMenu: "La carte",
      rotWords: ["les viandes marinées", "les brochettes", "le poulet aux champignons", "les desserts"]
    },
    en: {
      title: "Sam's Grill House: Turkish Grill in Geneva",
      skip: "Skip to the menu",
      wordmarkSub: "Turkish grill · Geneva",
      navSig: "Signatures",
      navMenu: "Menu",
      navStory: "The house",
      navLate: "Takeaway",
      navVisit: "Visit",
      badgeRating: "4.7 · 410 Google reviews",
      badgeCuisine: "Turkish cuisine, from the grill",
      h1a: "Turkish grills",
      h1b: "in Geneva",
      heroRotatePrefix: "The taste of the grill:",
      heroLede: "A few minutes from Cornavin station, on Rue du Mont-Blanc, a Turkish grill as it should be: marinated meats over the flame, chicken, vegetarian dishes and desserts — dine in, on the terrace or to take away.",
      ctaMenu: "See the menu",
      ctaReserve: "Book a table",
      ctaCall: "Call",
      heroNote: "Open late: until midnight, and until 2 am on Friday and Saturday.",
      heroFactHours: "Mon to Thu 7:00 to 24:00, Fri and Sat 7:00 to 2:00, Sun 10:00 to 24:00",
      sigTitle: "Fresh off the grill",
      sigSub: "The heart of the house: the grill, the marinade and the flame. Here is what the menu and the reviews remember at Sam's.",
      tagGrill: "The grill",
      tagReviews: "Named in reviews",
      tagVeg: "Vegetarian",
      tagSweet: "Sweet",
      sig1Name: "Marinated skewers",
      sig1Desc: "The heart of the house: marinated meats grilled until they carry the mark of the fire. Reviews describe them as juicy and full of flavour.",
      sig2Name: "Chicken with mushrooms",
      sig2Desc: "The pairing the house's reviews name outright: the chicken, served with mushrooms.",
      sig3Name: "The vegetarian grill",
      sig3Desc: "The house's Turkish kitchen thinks of vegetarians too: vegetables and meat-free specialities go over the flame as well.",
      sig4Name: "Desserts",
      sig4Desc: "The sweet note to finish the meal: the desserts are part of what reviews of the house remember.",
      sigMoreTitle: "And also, at Sam's",
      sl1Name: "Marinated meats",
      sl1Desc: "Marinated before they hit the grill: the smoky flavour and tenderness the reviews praise most.",
      sl2Name: "Lunch and dinner",
      sl2Desc: "Two services, seven days a week per the Google listing: at midday and in the evening.",
      sl3Name: "Terrace or inside",
      sl3Desc: "Two ways to settle in: the dining room, or the tables outside on Rue du Mont-Blanc.",
      sl4Name: "To take away",
      sl4Desc: "The whole grill to take away: one call, and your order is waiting at the counter.",
      menuTitle: "The grill menu",
      menuSub: "A menu centred on the grill and Turkish cuisine, at lunch and dinner. For any question about ingredients, one call is enough.",
      catGrill: "From the grill",
      mMarinatedName: "Grilled marinated meats",
      mMarinated: "The heart of the menu: marinated meats, grilled to order, which reviews describe as juicy and full of flavour.",
      mSkewersName: "Skewers",
      mSkewers: "On skewers over the grill, passed through the flame in the true tradition of Turkish grills.",
      mChickenName: "Chicken with mushrooms",
      mChicken: "The house chicken, served with mushrooms: the plate the reviews name outright.",
      catVeg: "The vegetarian side",
      mVegGrillName: "Vegetarian grills",
      mVegGrill: "Vegetables and vegetarian specialities over the grill, in the spirit of Turkish cuisine.",
      mVegPlateName: "Vegetarian plates",
      mVegPlate: "Complete meat-free plates, fresh and grilled, for eating at the grill without compromise.",
      menuNote: "Prices and the detailed menu will be added as soon as the house confirms them. In the meantime, call us: we will tell you everything, including today's dishes.",
      menuCta: "Order by phone",
      catSweet: "Sweet things",
      mDessertName: "Desserts",
      mDessert: "The sweet end of the meal: the house desserts are among the pleasures the reviews remember.",
      catService: "Dine in & take away",
      mTakeName: "To take away",
      mTake: "Order by phone and pick up your grill, hot and ready, at 16 Rue du Mont-Blanc.",
      mResaName: "Reservations",
      mResa: "A table for lunch or the evening? Reservations are simple: by phone.",
      mTerraceName: "Terrace",
      mTerrace: "When Geneva allows it, settle outside: the terrace looks onto Rue du Mont-Blanc.",
      factAddrLbl: "Address",
      factAreaLbl: "Quarter",
      factAreaVal: "Pâquis, Cornavin",
      factRatingLbl: "Google rating",
      factRatingVal: "4.7 · 410 reviews",
      factServiceLbl: "Service",
      factServiceVal: "Dine-in, terrace and takeaway",
      storyCardNote: "A neighbourhood grill, between the station and the lake.",
      storyTitle: "A Turkish grill between the station and the lake",
      storyP1: "Sam's Grill House stands at 16 Rue du Mont-Blanc, the street that links Cornavin station to the lake. It is the address travellers and locals alike pass every day.",
      storyP2: "Here, everything revolves around the grill: a simple, direct Turkish cuisine — marinated meats, chicken, vegetarian options and desserts to finish.",
      storyP3: "Reviews remember the welcome: a warm team, an owner praised for his sense of service, and a door open even to those who do not speak French.",
      chip1: "Turkish cuisine",
      chip2: "Marinated meats",
      chip3: "Vegetarian options",
      chip4: "Open late at weekends",
      storyRating: "stars from 410 Google reviews. The reviews praise the marinated meats, the welcome and the location, between the station and the lake.",
      trustTitle: "Good to know before you come",
      trust1Title: "Rated 4.7 stars",
      trust1Desc: "410 Google reviews for this Rue du Mont-Blanc address: a safe bet in the Cornavin quarter.",
      trust2Title: "Vegetarian too",
      trust2Desc: "The house's Turkish kitchen provides real vegetarian options, from the grill and the rest of the menu alike.",
      trust3Title: "Dine in, terrace, takeaway",
      trust3Desc: "Eat in the dining room, outside on Rue du Mont-Blanc, or take your grill away: all three are possible.",
      trust4Title: "Open late",
      trust4Desc: "Until midnight most evenings, and until 2 am on Friday and Saturday, per the Google listing.",
      lateTitle: "The grill, even late",
      lateSub: "Two steps from Cornavin, Sam's serves lunch and dinner, and the grill stays hot late at the weekend.",
      ccTitle: "Takeaway, without the wait",
      cc1Title: "Choose",
      cc1Desc: "Browse the menu above and make your choice.",
      cc2Title: "Call",
      cc2Desc: "One phone call, and the grill takes care of your order.",
      cc3Title: "Pick up",
      cc3Desc: "Your order is waiting for you at 16 Rue du Mont-Blanc.",
      ccCta: "Call now",
      socTitle: "Follow the house",
      socDesc: "The house lives on Instagram and TikTok: grills, behind the scenes at the grill and news from Rue du Mont-Blanc — that is where it happens. And on Facebook, for the neighbourhood regulars.",
      visitTitle: "Rue du Mont-Blanc, between Cornavin and the lake",
      visitAddrTitle: "Address and contact",
      visitPhoneLabel: "Phone:",
      visitDirections: "Directions",
      visitHoursTitle: "Opening hours",
      dMonThu: "Monday to Thursday",
      hMonThu: "7:00 to 24:00",
      dFriSat: "Friday and Saturday",
      hFriSat: "7:00 to 2:00",
      dSun: "Sunday",
      hSun: "10:00 to 24:00",
      hoursNote: "Hours per the establishment's Google listing. Subject to change.",
      visitService: "Dine in, on the terrace or to take away. Card payment accepted.",
      visitTravelTitle: "Getting here",
      travelStation: "the central station is a few minutes' walk away — perfect when arriving in Geneva or before a train.",
      travelStopsLbl: "Nearby stops",
      travelStops: "Mont-Blanc 126 m away, Alpes 142 m and Chantepoulet 175 m, per the establishment's listing.",
      travelLakeLbl: "The lake",
      travelLake: "the quays and the Jet d'Eau are at the end of the street, on the Lake Geneva side.",
      footerSub: "Turkish grill, Rue du Mont-Blanc 16, 1201 Geneva",
      footerTop: "Back to top",
      footerNote: "Rated 4.7 stars from 410 Google reviews · Open until 2 am on Friday and Saturday",
      barCall: "Call",
      barReserve: "Book",
      barDir: "Directions",
      barMenu: "Menu",
      rotWords: ["marinated meats", "the skewers", "chicken with mushrooms", "the desserts"]
    }
  };

  var STORAGE_KEY = "sams-lang";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rotateEl = document.getElementById("rotateWord");
  var rotateTimer = null;
  var rotateIndex = 0;
  var currentLang = "fr";

  function applyLang(lang) {
    var dict = DICT[lang];
    if (!dict) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = dict.title;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }
    var buttons = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < buttons.length; j++) {
      var active = buttons[j].getAttribute("data-lang") === lang;
      buttons[j].classList.toggle("is-active", active);
      buttons[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
    startRotation();
  }

  function startRotation() {
    if (!rotateEl) return;
    var words = DICT[currentLang].rotWords;
    rotateIndex = 0;
    rotateEl.textContent = words[0];
    if (rotateTimer) { window.clearInterval(rotateTimer); rotateTimer = null; }
    if (reduceMotion || words.length < 2) return;
    rotateTimer = window.setInterval(function () {
      rotateEl.classList.add("is-out");
      window.setTimeout(function () {
        rotateIndex = (rotateIndex + 1) % words.length;
        rotateEl.textContent = words[rotateIndex];
        rotateEl.classList.remove("is-out");
      }, 460);
    }, 3400);
  }

  var langButtons = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langButtons.length; b++) {
    langButtons[b].addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }

  var saved = null;
  try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
  if (saved && DICT[saved] && saved !== "fr") {
    applyLang(saved);
  } else {
    startRotation();
  }

  /* ---------- Scroll reveals ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    for (var r = 0; r < revealEls.length; r++) revealEls[r].classList.add("is-visible");
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    for (var k = 0; k < revealEls.length; k++) observer.observe(revealEls[k]);
  }

  /* ---------- Hero parallax (transform only) ---------- */
  var heroImg = document.getElementById("heroImg");
  if (heroImg && !reduceMotion) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY || window.pageYOffset;
          if (y < window.innerHeight * 1.2) {
            heroImg.style.transform = "translateY(" + (y * 0.16) + "px) scale(1.06)";
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
