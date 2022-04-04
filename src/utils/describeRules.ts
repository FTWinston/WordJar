import { GameRules } from 'src/types/GameRules';

export function describeRules(rules: GameRules) {
    const text: string[] = [
        `The speaker has ${rules.timePerPlayer}s to convey words to their teammates.`,
        'The speaker cannot say any of the word(s).',
    ];

    if (rules.wordCategory) {
        text.push(`All words must be ${rules.wordCategory}.`);
    }
    if (rules.speakerRule) {
        text.push(`Speaker must ${rules.speakerRule}.`);
    }

    if (rules.skipsPerPlayer) {
        const skipsText = rules.skipsPerPlayer > 1
            ? `up to ${rules.skipsPerPlayer} words`
            : '1 word'
        text.push(`They can skip ${skipsText} per round.`);
    }

    if (rules.rounds) {
        text.push(`Up to ${rules.rounds} rounds will be played (by each player).`);
    }

    return text;
}