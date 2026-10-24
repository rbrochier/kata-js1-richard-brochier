// ════════════════════════════════════════════
//   ADAMÉTÉO — script.js
//   À toi de jouer !
//   Les fonctions ci-dessous sont vides.
//   Lis les commentaires de chaque fonction
//   pour savoir ce qu'elle doit faire.
// ════════════════════════════════════════════

// ── Sélection des éléments DOM ──────────────
// Ces lignes sont déjà écrites — ne pas modifier.

const inputTemperature = document.getElementById("temperature");
const selectConditions = document.getElementById("conditions");
const btnAnalyser = document.getElementById("btn-analyser");
const sectionResultat = document.getElementById("resultat");
const meteoEmoji = document.getElementById("meteo-emoji");
const meteoDescription = document.getElementById("meteo-description");
const meteoTemperature = document.getElementById("meteo-temperature");
const divRecommandations = document.getElementById("recommandations");

// ════════════════════════════════════════════
//   TODO — Fonctions à écrire
// ════════════════════════════════════════════

// ── TODO : choisirEmoji ──────────────────────
// Reçoit les conditions météo (string) et la température (number).
// Retourne un emoji selon les conditions :
//   "ensoleille"  et température > 25 → "🌞"
//   "ensoleille"                      → "☀️"
//   "nuageux"                         → "⛅"
//   "pluvieux"                        → "🌧️"
//   "orageux"                         → "⛈️"
//   "neige"                           → "❄️"
//   "brouillard"                      → "🌫️"
//   autre valeur                      → "🌡️"

const choisirEmoji = (conditions, temperature) => {
  if (conditions === "ensoleille" && temperature > 25) return "🌞";
  else if (conditions === "ensoleille") return "☀️";
  else if (conditions === "nuageux") return "⛅";
  else if (conditions === "pluvieux") return "🌧️";
  else if (conditions === "orageux") return "⛈️";
  else if (conditions === "neige") return "❄️";
  else if (conditions === "brouillard") return "🌫️";
  else return "🌡️";
};
let emoji = ("ensoleille", 29);
console.log(emoji);

// ── TODO : decrireMeteo ──────────────────────
// Reçoit les conditions météo (string) et la température (number).
// Retourne une description courte selon les deux :
//   Si température < 0         → "Temps glacial"
//   Si température < 10        → "Temps froid"
//   Si température < 20        → "Temps frais"
//   Si température < 30        → "Temps agréable"
//   Sinon                      → "Temps chaud"
// Ajoute ensuite les conditions :
//   "pluvieux" ou "orageux"    → ajouter " et pluvieux"
//   "neige"                    → ajouter " et enneigé"
//   "brouillard"               → ajouter " et brumeux"
// Exemple : decrireMeteo("pluvieux", 8) → "Temps froid et pluvieux"

const decrireMeteo = (conditions, temperature) => {
  let description = "";
  if (temperature < 0) {
    description = "Temps glacial";
  } else if (temperature < 10) {
    description = "Temps froid";
  } else if (temperature < 20) {
    description = "Temps frais";
  } else if (temperature < 30) {
    description = "Temps agréable";
  } else {
    description = "Temps chaud";
  }
  if (conditions === "pluvieux" || conditions === "orageux") {
    return description + " et pluvieux";
  } else if (conditions === "neige") {
    return description + " et enneigé";
  } else if (conditions === "brouillard") {
    return description + " et brumeux";
  }
  return description;
};
console.log(decrireMeteo("pluvieux", 18));
console.log(decrireMeteo("neige", -8));

// ── TODO : recommanderTenue ──────────────────
// Reçoit les conditions météo (string) et la température (number).
// Retourne un tableau de recommandations.
// Chaque recommandation est un objet avec deux clés :
//   { icone: "🧥", texte: "Prends un manteau chaud" }
//
// Règles — PARTIE 1 : selon la température (une seule s'applique, utilise if/else if)
//   température < 0            → { icone: "🧥", texte: "Manteau d'hiver indispensable" }
//   température < 10           → { icone: "🧥", texte: "Prends un manteau" }
//   température < 20           → { icone: "🧣", texte: "Une veste suffira" }
//   température >= 30          → { icone: "👕", texte: "Habits légers recommandés" }
//
// Règles — PARTIE 2 : selon les conditions (plusieurs peuvent s'appliquer en même temps !)
//   Utilise des if indépendants (pas des else if) pour pouvoir en ajouter plusieurs.
//   conditions "pluvieux"      → ajouter { icone: "☂️", texte: "N'oublie pas ton parapluie" }
//   conditions "orageux"       → ajouter { icone: "⚠️", texte: "Évite les zones exposées" }
//   conditions "neige"         → ajouter { icone: "👢", texte: "Préfère des bottes imperméables" }
//   conditions "ensoleille"
//   et température > 20        → ajouter { icone: "🕶️", texte: "Pense à la crème solaire" }

/*partie 1*/

const recommanderTenue = (conditions, temperature) => {
  let recommandations = [];
  const combi = [
    { icone: "🧥", texte: "Manteau d'hiver indispensable" },
    { icone: "🧥", texte: "Prends un manteau" },
    { icone: "🧣", texte: "Une veste suffira" },
    { icone: "👕", texte: "Habits légers recommandés" },
  ];

  if (temperature < 0) {
    recommandations.push(combi[0]);
  } else if (temperature < 10) {
    recommandations.push(combi[1]);
  } else if (temperature < 20) {
    recommandations.push(combi[2]);
  } else if (temperature >= 30) {
    recommandations.push(combi[3]);
  }

  /* partie 2*/

  const combi2 = [
    { icone: "☂️", texte: "N'oublie pas ton parapluie" },
    { icone: "⚠️", texte: "Évite les zones exposées" },
    { icone: "👢", texte: "Préfère des bottes imperméables" },
    { icone: "🕶️", texte: "Pense à la crème solaire" },
  ];

  if (conditions === "pluvieux") {
    recommandations.push(combi2[0]);
  }

  if (conditions === "orageux") {
    recommandations.push(combi2[1]);
  }

  if (conditions === "neige") {
    recommandations.push(combi2[2]);
  }

  if (conditions === "ensoleille" && temperature > 20) {
    recommandations.push(combi2[3]);
  }

  return recommandations;
};

console.log(recommanderTenue("neige", 1));

// ── Affichage du résultat ────────────────────
// Cette partie est déjà écrite — ne pas modifier.
// Elle utilise tes fonctions pour mettre à jour la page.

const afficherResultat = (temperature, conditions) => {
  const emoji = choisirEmoji(conditions, temperature);
  const description = decrireMeteo(conditions, temperature);
  const recos = recommanderTenue(conditions, temperature);

  meteoEmoji.textContent = emoji || "🌡️";
  meteoDescription.textContent = description || "—";
  meteoTemperature.textContent = temperature + "°C — " + conditions;

  divRecommandations.innerHTML = "";

  if (recos && recos.length > 0) {
    recos.forEach((reco) => {
      const div = document.createElement("div");
      div.classList.add("reco-item");
      div.innerHTML = `<span class="reco-icon">${reco.icone}</span><span>${reco.texte}</span>`;
      divRecommandations.appendChild(div);
    });
  }

  sectionResultat.classList.remove("cache");
};

// ── Écouteur d'événement ─────────────────────
// Déjà écrit — déclenche l'affichage au clic.

btnAnalyser.addEventListener("click", () => {
  const temperature = parseInt(inputTemperature.value);
  const conditions = selectConditions.value;

  if (isNaN(temperature) || conditions === "") {
    alert("Remplis les deux champs avant d'analyser !");
    return;
  }

  afficherResultat(temperature, conditions);
});


/*
Dans recommanderTenue, pourquoi utilises-tu des if séparés pour les conditions météo plutôt que des else if ?
Car plusieurs règles peuvent s'appliquer.

Que se passe-t-il si l'utilisateurice entre une température de 28°C avec des conditions "ensoleille" ? 
Il n'y a q'une seule recommandantion qui s'applique.


Quelles recommandations s'affichent et pourquoi ?
Temps agréable et pense à la crème solaire (avec emoji lunettes) , car il y'a plusieurs conditions réunies.
Et donc la première (temperature >=30(seule) ne s'applique pas et on passe à la seconde).

*/
