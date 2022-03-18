export interface GameRules {
    wordsPerPlayer: number;
    timePerPlayer: number;
    rounds?: number;
    skipsPerPlayer?: number;
    wordCategory?: string;
    speakerRule?: string;
}
