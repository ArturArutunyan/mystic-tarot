export interface Localization {
  app: {
    title: string;
    subtitle: string;
    startButton: string;
    newReadingButton: string;
    languageSwitcher: string;
  };
  reading: {
    title: string;
    subtitle: string;
    scrollPrompt: string;
    footer: string;
    positions: Array<{
      title: string;
      description: string;
    }>;
    cardStates: {
      upright: string;
      reversed: string;
    };
    elements: {
      title: string;
      air: string;
      fire: string;
      water: string;
      earth: string;
    };
    zodiac: {
      title: string;
    };
  };
  cards: {
    [key: string]: {
      name: string;
      upright: string;
      reversed: string;
      element?: string;
      zodiac?: string;
    };
  };
}