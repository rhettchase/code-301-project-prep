# Project Prep 1 - Team Agreement

## Team Members

- Rhett Chase
- Armando Bugarin
- Ugo Obiako
- Caleb Hemphill

## Cooperation Plan

1. What are the key strengths of each person on the team? In which professional competencies do you each want to develop greater strength?

- Rhett - Strengths: project management, problem-solving, analytical, learning new concepts / researching topics to find answers; weaknesses: going down a rabbit hole when trying to debug. I would like to develop my technical skills in how to debug more efficiently. My goal is to fully understand how the entire codebase is interacting and sharing state, etc.
- Armando - strengths are open mindset, desire to learn, flexible schedule, utilizing resources; weaknesses is craft competency, as I still need to build up my coding skills and gain more confidence in coding.
- Ugo - Strengths: adaptable, attention to detail; Competencies to develop greater strength: networking
- Caleb - Strengths: organization, flexibility; Weaknesses: perfectionist, using time effectively to meet MVP

1. How can you best utilize these strengths in the execution of your project?

- Understand team member's strengths, weaknesses, and goals for growth to assign different work and support them
- Working in pairs or as a group to leverage strengths and provide learning opportunities

1. Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

- Set clear roles and responsibilities so every team member understands how their contributions align with the overall goal
- Use communication/collaboration tools to stay up-to-date on progress and staying in sync with the codebase

## Conflict Plan

1. What will be your group’s process to resolve conflict, when it arises? What will your team do if one person is taking over the project and not letting the other members contribute?

- Listening to all team members' point of views and weigh the pros and cons
- Discuss problems as a group
- Democratic system (vote on it); JB is tie-breaker

1. How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

- Be patient and work together
- Constantly communicate
- Allow each other to contribute regardless of skill level
- Evaluate/agree on if features need to be revised or moved from MVP

1. How will you raise concerns to members who are not adequately contributing?

- Constantly communicate to each other throughout each step
- Keep everyone involved and give appropriate time to work on tasks
- Get ahead of problems before they compile

1. How and when will you escalate the conflict if your resolution attempts are unsuccessful?

- If not resolved through group we will bring the conflict to JB

## Communication Plan

1. What hours will you be available to communicate?

- Rhett - 9 am - 7 pm (PT)
- Armando - available 9 am - 9 pm (pacific time)
- Ugo - available from 9am to 6pm PT
- Caleb - 8am - 10pm PT

1. What platforms will you use to communicate (ie. Slack, phone …)?

- Slack, Remo

1. How often will you take breaks?

- 10 min break every 1-1.5 hrs
- 1 hr lunch break

1. What is your plan if you start to fall behind?

- Prioritizing "must-haves" for MVP and reevaluating as necessary
- Discuss progress with team

1. How will you communicate after hours and on the weekend?

- Message through slack and utilize remo

1. What is your strategy for ensuring everyone’s voice is heard?

- Take turns discussing during meetings/syncs
-

1. How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

- Practice active listening and let everyone finish their thought/idea
- Feel free to speak up respectfully if you disagree

## Work Plan

1. How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

- Discuss/develop different features and the tasks required to get to MVP
- Discuss/align on which features/tasks members would like to work on
- Use different tasks/features as learning opportunities to improve skill set

1. What project management tool will be used?

- Trello

## Git Process

1. What components of your project will live on GitHub?

- Repositories for front end and server side

1. How will you share the repository with your teammates?

- Create an organization profile on GitHub so everyone has access to the repositories

1. What is your Git flow?

- Main Branch: The main branch should always contain production-ready code. Consider this the stable branch. `git checkout main`
- Dev Branch: The Dev branch is where active development occurs. It's a branch from which feature branches are created. `git checkout -b dev`
- Feature Branch: Each new feature or bugfix should be developed in a feature branch branching off from dev. `git checkout -b feature/new-feature develop`
- Once the feature is complete, it's merged back into dev branch. `git checkout develop git merge --no-ff feature/new-feature git branch -d feature/new-feature`

1. Will you be using a PR review workflow? If so, consider:

   - How many people must review a PR?

     - 2 people (other than the code writer)
     - Document who reviewed in the PR

   - Who merges PRs?

     - Primary person who wrote the code (once review complete)

   - How often will you merge?

     - Daily
     - Or as needed for major update

   - How will you communicate that it’s time to merge?

     - Slack or Remo
