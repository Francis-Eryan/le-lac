/**
 * Système de traduction multilingue pour "Le Lac"
 * Gère les textes dans 8 langues différentes
 */

// Structure multilingue
const translations = {
    fr: { 
        welcome: "Bienvenue", 
        enter: "ENTRER", 
        labels: ["Grimoire", "3 IA", "Chroniques"],
        descriptions: [
            "Accédez au grimoire des connaissances.",
            "Rencontrez les trois intelligences artificielles.",
            "Explorez les chroniques et histoires."
        ]
    },
    en: { 
        welcome: "Welcome", 
        enter: "ENTER", 
        labels: ["Grimoire", "3 AIs", "Chronicles"],
        descriptions: [
            "Access the grimoire of knowledge.",
            "Meet the three artificial intelligences.",
            "Explore the chronicles and stories."
        ]
    },
    de: { 
        welcome: "Willkommen", 
        enter: "EINTRETEN", 
        labels: ["Grimoire", "3 KIs", "Chroniken"],
        descriptions: [
            "Greifen Sie auf das Grimoire des Wissens zu.",
            "Treffen Sie die drei künstlichen Intelligenzen.",
            "Erkunden Sie die Chroniken und Geschichten."
        ]
    },
    es: { 
        welcome: "Bienvenido", 
        enter: "ENTRAR", 
        labels: ["Grimorio", "3 IAs", "Crónicas"],
        descriptions: [
            "Acceda al grimorio del conocimiento.",
            "Conozca las tres inteligencias artificiales.",
            "Explore las crónicas e historias."
        ]
    },
    it: { 
        welcome: "Benvenuto", 
        enter: "ENTRARE", 
        labels: ["Grimorio", "3 IA", "Cronache"],
        descriptions: [
            "Accedi al grimorio della conoscenza.",
            "Incontra le tre intelligenze artificiali.",
            "Esplora le cronache e le storie."
        ]
    },
    pl: { 
        welcome: "Witamy", 
        enter: "WEJŚĆ", 
        labels: ["Grimuar", "3 AI", "Kroniki"],
        descriptions: [
            "Uzyskaj dostęp do grimuaru wiedzy.",
            "Poznaj trzy sztuczne inteligencje.",
            "Odkryj kroniki i historie."
        ]
    },
    ru: { 
        welcome: "Добро пожаловать", 
        enter: "ВОЙТИ", 
        labels: ["Гримуар", "3 ИИ", "Хроники"],
        descriptions: [
            "Доступ к гримуару знаний.",
            "Встреча с тремя искусственными интеллектами.",
            "Исследуйте хроники и истории."
        ]
    },
    zh: { 
        welcome: "欢迎", 
        enter: "进入", 
        labels: ["魔法书", "3个人工智能", "编年史"],
        descriptions: [
            "访问知识魔法书。",
            "认识三个人工智能。",
            "探索编年史和故事。"
        ]
    }
};

// Langue par défaut
let currentLang = 'fr';

/**
 * Change la langue actuelle
 * @param {string} lang - Code de la langue (fr, en, de, etc.)
 */
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        return true;
    }
    return false;
}

/**
 * Récupère une traduction
 * @param {string} key - Clé de traduction (welcome, enter, etc.)
 * @param {number} index - Index optionnel pour les tableaux (labels, descriptions)
 * @returns {string} - Texte traduit
 */
function getText(key, index = null) {
    // Si la clé existe pour la langue actuelle
    if (translations[currentLang] && translations[currentLang][key]) {
        // Si c'est un tableau et qu'un index est fourni
        if (Array.isArray(translations[currentLang][key]) && index !== null) {
            return translations[currentLang][key][index] || '';
        }
        // Si c'est une valeur simple
        else if (!Array.isArray(translations[currentLang][key])) {
            return translations[currentLang][key];
        }
    }
    
    // Fallback au français si la traduction n'existe pas
    if (translations['fr'] && translations['fr'][key]) {
        if (Array.isArray(translations['fr'][key]) && index !== null) {
            return translations['fr'][key][index] || '';
        } else if (!Array.isArray(translations['fr'][key])) {
            return translations['fr'][key];
        }
    }
    
    return '';
}

/**
 * Obtient la langue actuelle
 * @returns {string} - Code de la langue actuelle
 */
function getCurrentLanguage() {
    return currentLang;
}

/**
 * Liste des langues disponibles
 * @returns {string[]} - Tableau des codes de langue
 */
function getAvailableLanguages() {
    return Object.keys(translations);
}