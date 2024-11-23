export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
}

export function getRandomCards(deck: any[], count: number) {
  const shuffled = shuffleArray(deck);
  return shuffled.slice(0, count).map(card => ({
    card,
    isReversed: Math.random() > 0.5
  }));
}