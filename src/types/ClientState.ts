import { GameRules } from './GameRules';

export interface ServerState {
    gameCode: string;
    hostPlayer: string;
    localPlayer: string;
    
    currentSpeaker?: string;

    team1: string[];
    team2: string[];
    playerScores: Record<string, number>;
    playerFouls: Record<string, number>;

    rules: GameRules;
}