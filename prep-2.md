# Project Prep 2

## Sports

### Overview

Football (soccer) fans can build their own dashboards to track their favorite teams. The custom dashboard displays news and statistics for the teams, players and other preferences. They can also connect with other fans of the same team.

## What problem or pain point does it solve?
<!-- Keep it high level without going into too much detail. (3-4 sentences is enough) -->
- Users want to track their favorite teams
- Interactive way to customize sports news and statistics
- Connect with other fans of the same team

## Minimum Viable Product (MVP) definition
<!-- What is the minimum required for you to present on your demo day? -->
- User can log in and create a user profile to customize their experience
  - Upload photo
  - Form to collect user information and preferences (favorite team, etc.)
  - User selects their preference in name of the sport: football, fútbol, soccer
- When the user is logged in, they can view and edit a dashboard of customizable statistics
  - Use a database to store which teams, players, or other datasets are in the user's dashboard
- Searchable/filterable list of statistics by team
- Information feed of upcoming matches sorted by location
- Users can like their favorite teams and be able to see the number of likes.
- 3rd Party API accessed to create custom database of sports information
- External server to host back-end
- External database to store user information (securely)
- Store data in cache so that 3rd party API does not have to be pinged if data is not "stale"

### Stretch

- Connect with other users who follow the same team
- Let the user follow their favorite players and teams with updated news.
- chat feature during live games to interact with other fans.
- Link to buy tickets for games (use a 3rd party API?) (SeatGeek, ticketMaster?)
- video/audio/text highlights of game
