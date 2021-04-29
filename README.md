# Frontend code exercise

Hello there!

If you're reading this, it means you're now at the coding exercise step of the engineering hiring process WOOT WOOT. We're really happy that you made it here and super appreciative of your time!

In this exercise you're asked to implement some features in an existing React app, using whatever extra tools you want.

If you have any questions, don't hesitate to reach out directly to marcelo@remote.com.

## Expectations

- It should be production-ready code - the code will show us how you ship things to production and be a mirror of your craft.
- Take whatever time you need - we won't look at start/end dates, you have a life besides this and we respect that!

## About the challenge

This challenge is divided into 2 parts:

1. **🚀 Feature implementation** in an existing React project (this one).
2. **👀 Code Review** another feature in the same project.

### 🚀 1. Feature implementation

This is a basic CRUD (without the delete) of people. You'll implement the "People list" page:

- Display a table with a list of people and their attributes.
- Searching by name.
- Filtering by employment type.
- Links to the pages to add or edit a team member. You do NOT need to implement those pages.

You can use any extra tools you need to accomplish this. We want to respect your time and there's no need to reinvent the wheel.

For further notes, follow the design specs in the Figma file shared with you by e-mail.

#### What we will look at

- How you work with HTML, CSS, and JavaScript in a React app;
- How you reproduce the provided design;
- How you structure your codebase and how well it reads;
- How well it works;
- How you write tests.

#### What you can't use

- A CSS library like Bootstrap, etc. - we're interested in how you structure your CSS code to achieve something.

#### When you're done

- Complete the "Implementation Details" section at the bottom of this README.
- Open a Pull Request in this repo and send the link to marcelo@remote.com.
- You can also send some feedback about this exercise. Was it too short/big? Boring? Let us know!

### 👀 2. Code Review

There's an open Pull Request called "Add/Edit a team member" (`to-review` branch).

This PR implements the "Add Team Member" and the "Edit Team Member" pages. Imagine that this was done by one of your teammates, who is an intern, and you were tasked with reviewing their code.

Your goal is to:
- Check if the feature is working as expected
- Point out code smells, poor practices or bugs
- Give suggestions on how to approach them differently

Note: don’t take the choices on tools/approaches used in this PR as guidance when doing the part 1 of the exercise. It’s likely, and totally okay, if the tools/approaches are different.

---

# The project

## Prerequisites

- Node >= 8.10
- NPM >= 5.6
- Git

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

### Project structure

```bash
src/
  components # Some components already built.
  server # The fake API mentioned above.
  theme # Some base styles used across the project.
  Playground.js # A simple showcase of the existing components.
```

Once again, you have **total freedom to modify** this codebase and use whatever tools you want.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm test`

Launches the test runner in the interactive watch mode.\
Read the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`

## Implementation details

This section is for you to fill in with any decisions you made that may be relevant. You can also change this README to fit your needs.
