const leagueData = [
  ['Comp-Id', 'League-Code', 'Caption', 'Country/Continent'],
  [2006, 'QCAF', 'WC Qualification CAF', 'Africa'],
  [2024, 'ASL', 'Liga Profesional', 'Argentina'],
  [2147, 'QAFC', 'WC Qualification AFC', 'Asia'],
  [2008, 'AAL', 'A League', 'Australia'],
  [2022, 'APL', 'Playoffs 1/2', 'Austria'],
  [2012, 'ABL', 'Bundesliga', 'Austria'],
  [2032, 'BJPP', 'Playoffs', 'Belgium'],
  [2009, 'BJL', 'Jupiler Pro League', 'Belgium'],
  [2029, 'BSB', 'Campeonato Brasileiro Série B', 'Brazil'],
  [2013, 'BSA', 'Campeonato Brasileiro Série A', 'Brazil'],
  [2048, 'CPD', 'Primera División', 'Chile'],
  [2044, 'CSL', 'Chinese Super League', 'China PR'],
  [2045, 'CLP', 'Liga Postobón', 'Colombia'],
  [2047, 'PRVA', 'Prva Liga', 'Croatia'],
  [2141, 'DELP', 'Euro League - Playoff', 'Denmark'],
  [2050, 'DSU', 'Superliga', 'Denmark'],
  [2016, 'ELC', 'Championship', 'England'],
  [2021, 'PL', 'Premier League', 'England'],
  [2139, 'FLC', 'Football League Cup', 'England'],
  [2030, 'EL1', 'League One', 'England'],
  [2053, 'ENL', 'National League', 'England'],
  [2054, 'EL2', 'League Two', 'England'],
  [2055, 'FAC', 'FA Cup', 'England'],
  [2056, 'COM', 'FA Community Shield', 'England'],
  [2018, 'EC', 'European Championship', 'Europe'],
  [2146, 'EL', 'UEFA Europa League', 'Europe'],
  [2154, 'UCL', 'UEFA Conference League', 'Europe'],
  [2001, 'CL', 'UEFA Champions League', 'Europe'],
  [2157, 'ESC', 'Supercup', 'Europe'],
  [2007, 'QUFA', 'WC Qualification UEFA', 'Europe'],
  [2031, 'VEI', 'Veikkausliiga', 'Finland'],
  [2142, 'FL2', 'Ligue 2', 'France'],
  [2143, 'FPL', 'Playoffs 1/2', 'France'],
  [2015, 'FL1', 'Ligue 1', 'France'],
  [2129, 'REG', 'Regionalliga', 'Germany'],
  [2134, 'GSC', 'DFL Super Cup', 'Germany'],
  [2140, 'BL3', '3. Bundesliga', 'Germany'],
  [2156, 'BLREL', 'Relegation', 'Germany'],
  [2002, 'BL1', 'Bundesliga', 'Germany'],
  [2004, 'BL2', '2. Bundesliga', 'Germany'],
  [2011, 'DFB', 'DFB-Pokal', 'Germany'],
  [2132, 'GSL', 'Super League', 'Greece'],
  [2128, 'HNB', 'NB I', 'Hungary'],
  [2125, 'ILH', 'Ligat ha’Al', 'Israel'],
  [2019, 'SA', 'Serie A', 'Italy'],
  [2121, 'SB', 'Serie B', 'Italy'],
  [2122, 'CIT', 'Coppa Italia', 'Italy'],
  [2123, 'ISC', 'Serie C', 'Italy'],
  [2158, 'IPL', 'Playoffs 1/2', 'Italy'],
  [2119, 'JJL', 'J. League', 'Japan'],
  [2113, 'LMX', 'Liga MX', 'Mexico'],
  [2109, 'KNV', 'KNVB Beker', 'Netherlands'],
  [2003, 'DED', 'Eredivisie', 'Netherlands'],
  [2005, 'DJL', 'Eerste Divisie', 'Netherlands'],
  [2106, 'TIP', 'Tippeligaen', 'Norway'],
  [2103, 'QOFC', 'WC Qualification OFC', 'Oceania'],
  [2101, 'PPD', 'Primera División', 'Peru'],
  [2017, 'PPL', 'Primeira Liga', 'Portugal'],
  [2094, 'RL1', 'Liga I', 'Romania'],
  [2137, 'RFPL', 'RFPL', 'Russia'],
  [2084, 'SPL', 'Premier League', 'Scotland'],
  [2152, 'CLI', 'Copa Libertadores', 'South America'],
  [2080, 'CA', 'Copa America', 'South America'],
  [2082, 'QCBL', 'WC Qualification CONMEBOL', 'South America'],
  [2077, 'SD', 'Segunda División', 'Spain'],
  [2079, 'CDR', 'Copa del Rey', 'Spain'],
  [2014, 'PD', 'Primera Division', 'Spain'],
  [2073, 'ALL', 'Allsvenskan', 'Sweden'],
  [2072, 'SSL', 'Super League', 'Switzerland'],
  [2070, 'TSL', 'Süper Lig', 'Turkey'],
  [2064, 'UPL', 'Premier Liha', 'Ukraine'],
  [2145, 'MLS', 'MLS', 'United States'],
  [2148, 'SUCU', 'Supercopa Uruguaya', 'Uruguay'],
  [2153, 'OLY', 'Summer Olympics', 'World'],
  [2000, 'WC', 'FIFA World Cup', 'World'],
  [2155, 'QCCF', 'WC Qualification CONCACAF', 'World'],
];

const headers = leagueData[0];

const leagues = leagueData.slice(1).reduce((obj, row) => {
  const leagueObj = row.reduce((league, value, index) => {
    league[headers[index]] = value;
    return league;
  }, {});

  obj[leagueObj['League-Code']] = leagueObj;

  return obj;
}, {});

console.log(leagues);

module.exports = leagues;
