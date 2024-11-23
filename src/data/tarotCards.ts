import { useLocalization } from '../hooks/useLocalization';
import { 
  Sparkles, // The Fool
  Wand2 as Wand, // The Magician
  Moon, // The High Priestess
  Crown, // The Empress
  Swords, // The Emperor
  Church, // The Hierophant
  Heart, // The Lovers
  CarFront as Chariot, // The Chariot
  Flame, // Strength
  Lamp, // The Hermit
  Compass, // Wheel of Fortune
  Scale, // Justice
  TreePine, // The Hanged Man
  Skull, // Death
  Droplets, // Temperance (changed from Drop to Droplets)
  Bomb, // The Tower
  Star, // The Star
  SunMedium as Sun, // The Sun
  CloudMoon as MoonCard, // The Moon
  Sunrise as World // The World
} from 'lucide-react';

export interface TarotCard {
  id: string;
  name: string;
  icon: any;
  upright: string;
  reversed: string;
  element?: string;
  zodiac?: string;
}

export function useTarotDeck(): TarotCard[] {
  const l = useLocalization();
  
  return [
    {
      id: 'fool',
      icon: Sparkles,
      ...l.cards.fool
    },
    {
      id: 'magician',
      icon: Wand,
      ...l.cards.magician
    },
    {
      id: 'highPriestess',
      icon: Moon,
      ...l.cards.highPriestess
    },
    {
      id: 'empress',
      icon: Crown,
      ...l.cards.empress
    },
    {
      id: 'emperor',
      icon: Swords,
      ...l.cards.emperor
    },
    {
      id: 'hierophant',
      icon: Church,
      ...l.cards.hierophant
    },
    {
      id: 'lovers',
      icon: Heart,
      ...l.cards.lovers
    },
    {
      id: 'chariot',
      icon: Chariot,
      ...l.cards.chariot
    },
    {
      id: 'strength',
      icon: Flame,
      ...l.cards.strength
    },
    {
      id: 'hermit',
      icon: Lamp,
      ...l.cards.hermit
    },
    {
      id: 'wheelOfFortune',
      icon: Compass,
      ...l.cards.wheelOfFortune
    },
    {
      id: 'justice',
      icon: Scale,
      ...l.cards.justice
    },
    {
      id: 'hangedMan',
      icon: TreePine,
      ...l.cards.hangedMan
    },
    {
      id: 'death',
      icon: Skull,
      ...l.cards.death
    },
    {
      id: 'temperance',
      icon: Droplets,
      ...l.cards.temperance
    },
    {
      id: 'tower',
      icon: Bomb,
      ...l.cards.tower
    },
    {
      id: 'star',
      icon: Star,
      ...l.cards.star
    },
    {
      id: 'moon',
      icon: MoonCard,
      ...l.cards.moon
    },
    {
      id: 'sun',
      icon: Sun,
      ...l.cards.sun
    },
    {
      id: 'world',
      icon: World,
      ...l.cards.world
    }
  ];
}