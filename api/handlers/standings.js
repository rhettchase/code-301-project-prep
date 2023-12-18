const axios = require('axios');

module.exports = async function getStandings(request, response) {
  const leagueCode = request.params.leagueCode;
  const apiUrl = `http://api.football-data.org/v4/competitions/${leagueCode}/standings`;
  const apiKey = process.env.FB_API_KEY;

  try {
    const headers = {
      'X-Auth-Token': apiKey,
    };

    const standingsResponse = await axios.get(apiUrl, { headers });
    const standingsData = standingsResponse.data.standings;
    console.log(standingsData);

    // Map the standings data to TeamStanding instances
    const teamStandings = standingsData.map(
      (teamData) => new TeamStanding(teamData)
    );

    response.status(200).json(teamStandings);
  } catch (error) {
    console.error('Error:', error.message);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};

// class
class TeamStanding {
    constructor(teamData) {
      try {
        this.stage = teamData.stage || '';
        
        const standings = teamData.table || (teamData.standings && teamData.standings[0]?.table);
  
        if (standings && standings.length > 0) {
          this.standings = standings.map((standing) => {
            const teamInfo = standing.team || (standing.team[0] && standing.team[0]);
  
            return {
              stage: this.stage, 
              position: standing.position || 0,
              id: teamInfo?.id || 0,
              name: teamInfo?.name || '',
              tla: teamInfo?.tla || '',
              crest: teamInfo?.crestUrl || '',
              playedGames: standing.playedGames || 0,
              won: standing.won || 0,
              draw: standing.draw || 0,
              lost: standing.lost || 0,
              points: standing.points || 0,
              goalsFor: standing.goalsFor || 0,
              goalsAgainst: standing.goalsAgainst || 0,
              goalDifference: standing.goalDifference || 0,
            };
          });
        } else {
          console.error('Unexpected data structure:', teamData);
        }
      } catch (error) {
        console.error('Error in TeamStanding constructor:', error.message);
      }
    }
  }
  
