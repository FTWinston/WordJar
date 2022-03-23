export function determineTeamScores(
    playerScores: Record<string, number>,
    playerFouls: Record<string, number>,
    team1: string[],
    team2: string[]
): [number, number] {
    let team1Score = 0;
    let team2Score = 0;
    
    for (const player in playerScores) {
        const score = playerScores[player];

        if (team1.includes(player)) {
            team1Score += score;
        }
        else if (team2.includes(player)) {
            team2Score += score;
        }
    }

    for (const player in playerFouls) {
        const score = playerFouls[player];

        if (team1.includes(player)) {
            team1Score -= score;
        }
        else if (team2.includes(player)) {
            team2Score -= score;
        }
    }

    return [team1Score, team2Score];
}

