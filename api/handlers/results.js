const axios = require('axios');

module.exports = async function getResults(request, response) {
  const apiUrl = 'https://serpapi.com/search.json';

  try {
    const { q: query } = request.query;
    if (!query) {
      // Handle the case where the query parameter is missing
      throw new Error('Missing query parameter.');
    }

    const apiKey = process.env.SERP_API_KEY;

    const params = {
      q: query,
      location: 'austin, texas, united states',
      api_key: apiKey,
    };

    const resultResponse = await axios.get(apiUrl, { params });

    // Create an instance of the Results class
    const resultsInstance = new Results(resultResponse.data.sports_results);

    // Log and send the structured data in the response
    console.log(resultsInstance);
    response.status(200).json(resultsInstance);
  } catch (error) {
    console.error('Error fetching results:', error.message);
    response.status(500).send('Internal Server Error');
  }
};

// class
class Results {
  constructor(data) {
    this.title = data.title;
    this.standings = data.league.standings.map((teamData) => ({
      team_name: teamData.team.name,
      team_thumbnail: teamData.team.thumbnail,
      pos: teamData.pos,
      mp: teamData.mp,
      w: teamData.w,
      d: teamData.d,
      l: teamData.l,
      gf: teamData.gf,
      ga: teamData.ga,
      gd: teamData.gd,
      pts: teamData.pts,
      last_5: [...teamData.last_5],
    }));
  }
}
