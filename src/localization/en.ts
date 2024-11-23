import type { Localization } from './types';

export const en: Localization = {
  app: {
    title: "Mystic Tarot",
    subtitle: "Unveil the mysteries of your journey through the ancient wisdom of the Tarot. Each card holds a unique message waiting to be discovered.",
    startButton: "Begin Your Reading",
    newReadingButton: "Start New Reading",
    languageSwitcher: "EN"
  },
  reading: {
    title: "Mystical Revelation",
    subtitle: "The cards have spoken, revealing the threads of your destiny",
    scrollPrompt: "Scroll down to reveal the mystical meanings...",
    footer: "May these revelations guide your path",
    positions: [
      {
        title: "Past",
        description: "What has led you here"
      },
      {
        title: "Present",
        description: "Your current situation"
      },
      {
        title: "Future",
        description: "What lies ahead"
      }
    ],
    cardStates: {
      upright: "Upright",
      reversed: "Reversed"
    },
    elements: {
      title: "Element",
      air: "Air",
      fire: "Fire",
      water: "Water",
      earth: "Earth"
    },
    zodiac: {
      title: "Sign"
    }
  },
  cards: {
    fool: {
      name: "The Fool",
      upright: "New beginnings, innocence, spontaneity, free spirit, adventure, optimism, trust in the universe",
      reversed: "Recklessness, risk-taking, second-guessing, naivety, foolishness, inconsideration",
      element: "Air",
      zodiac: "Uranus"
    },
    magician: {
      name: "The Magician",
      upright: "Manifestation, resourcefulness, power, inspired action, skill, ability to make things happen",
      reversed: "Manipulation, poor planning, untapped talents, trickery, wasted talent, insecurity",
      element: "Air",
      zodiac: "Mercury"
    },
    highPriestess: {
      name: "The High Priestess",
      upright: "Intuition, sacred knowledge, divine feminine, inner voice, subconscious mind, mystery",
      reversed: "Secrets, disconnection from intuition, withdrawal, repressed feelings, hidden motives",
      element: "Water",
      zodiac: "Moon"
    },
    empress: {
      name: "The Empress",
      upright: "Fertility, motherhood, abundance, creativity, natural wisdom, nurturing",
      reversed: "Creative block, dependence, emptiness, neglect, nature deficit",
      element: "Earth",
      zodiac: "Venus"
    },
    emperor: {
      name: "The Emperor",
      upright: "Authority, structure, protection, father figure, stability, leadership",
      reversed: "Domination, excessive control, lack of discipline, immaturity",
      element: "Fire",
      zodiac: "Aries"
    },
    hierophant: {
      name: "The Hierophant",
      upright: "Spiritual guidance, tradition, conformity, belief systems, education",
      reversed: "Challenge to beliefs, unconventionality, new methods, rebellion",
      element: "Earth",
      zodiac: "Taurus"
    },
    lovers: {
      name: "The Lovers",
      upright: "Love, harmony, relationships, values alignment, choices",
      reversed: "Disharmony, imbalance, misalignment of values, conflict",
      element: "Air",
      zodiac: "Gemini"
    },
    chariot: {
      name: "The Chariot",
      upright: "Direction, willpower, determination, victory, assertion",
      reversed: "Lack of direction, aggression, defeat, lack of control",
      element: "Water",
      zodiac: "Cancer"
    },
    strength: {
      name: "Strength",
      upright: "Inner strength, courage, persuasion, influence, compassion",
      reversed: "Self-doubt, weakness, insecurity, lack of self-discipline",
      element: "Fire",
      zodiac: "Leo"
    },
    hermit: {
      name: "The Hermit",
      upright: "Soul-searching, introspection, inner guidance, solitude, wisdom",
      reversed: "Isolation, loneliness, withdrawal, rejection, lost way",
      element: "Earth",
      zodiac: "Virgo"
    },
    wheelOfFortune: {
      name: "Wheel of Fortune",
      upright: "Good luck, karma, life cycles, destiny, turning point",
      reversed: "Bad luck, resistance to change, breaking cycles",
      element: "Fire",
      zodiac: "Jupiter"
    },
    justice: {
      name: "Justice",
      upright: "Justice, fairness, truth, cause and effect, law",
      reversed: "Unfairness, lack of accountability, dishonesty",
      element: "Air",
      zodiac: "Libra"
    },
    hangedMan: {
      name: "The Hanged Man",
      upright: "Surrender, letting go, new perspective, sacrifice",
      reversed: "Stalling, needless sacrifice, fear of sacrifice",
      element: "Water",
      zodiac: "Neptune"
    },
    death: {
      name: "Death",
      upright: "Endings, change, transformation, transition",
      reversed: "Resistance to change, inability to move on",
      element: "Water",
      zodiac: "Scorpio"
    },
    temperance: {
      name: "Temperance",
      upright: "Balance, moderation, patience, purpose",
      reversed: "Imbalance, excess, lack of long-term vision",
      element: "Fire",
      zodiac: "Sagittarius"
    },
    tower: {
      name: "The Tower",
      upright: "Sudden change, upheaval, chaos, revelation, awakening",
      reversed: "Fear of change, avoiding disaster, delaying the inevitable",
      element: "Fire",
      zodiac: "Mars"
    },
    star: {
      name: "The Star",
      upright: "Hope, faith, purpose, renewal, spirituality",
      reversed: "Lack of faith, despair, disconnection",
      element: "Air",
      zodiac: "Aquarius"
    },
    moon: {
      name: "The Moon",
      upright: "Illusion, fear, anxiety, subconscious, intuition",
      reversed: "Release of fear, repressed emotion, inner confusion",
      element: "Water",
      zodiac: "Pisces"
    },
    sun: {
      name: "The Sun",
      upright: "Joy, success, celebration, positivity, vitality",
      reversed: "Inner child, feeling down, overly optimistic",
      element: "Fire",
      zodiac: "Sun"
    },
    world: {
      name: "The World",
      upright: "Completion, integration, accomplishment, travel",
      reversed: "Seeking personal closure, short-cuts, delays",
      element: "Earth",
      zodiac: "Saturn"
    }
  }
};