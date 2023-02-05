# Background
"Pokémon Trainer" is an assignment from the Accelerated Learning course in Fullstack .Net developer (Noroff). The Pokémon Trainer is an application that utilize Typescript and Angular. The project is a Single Page Application that focus on the front-end component, models and services with Angular, using observables and authGuards to protect routes with authentication, Context API and working in team on Git.  

## Description
The Pokemon Trainer application works as a Pokemon Trainer page where you as the trainer can log in, view your pokemons, go to a pokemon catalogue that pulls api data from https://pokeapi.co/ and see a list of pokemons that you can then catch. All captured pokemons are available in the trainer page where they can be released again.

On the login page the user will see a Input field where the the user must enter a username longer than 2 letters. if the username doesn't exist already it will be Stored in the Trainer API. If it exist the user will be logged in and be able to see all earlier captured pokemons awaiting in the Trainer Page.

If the user log out, the user will be redirected to the login page where the user must re-enter the username.

## Disclaimer
As the application is purely front-end, the application doesn't have the back-end like database to manage API. Therefore, the application will focus on the handling and check with username, with utilization of the browser's storage from local to session. The same for any environment variables is not generated using any secure algorithm and the user is not given an authentication token.
## Components tree
To begin the implementation of the application, there have been developed a component tree to show the pages and feature components.The component tree can be found in the ComponentTree.pdf. As the component tree is created before any code is written and will not be updated, as it will be part of the overall grade, the application will may vary some degree from the component tree.
## Status of the Project
The project is currently just begun development and should be completed the 28. January 2023.

- updated 23. January 2023

# Running The Project locally
Here is a short guide to be able to run the project locally, after having cloned the project.
## Making the API Hosting
There is many services, but most of them use similar process. Here is how it is done in Glitch.
- Login on Glitch in a browser.
- Create new project by import from GitHub.
- Use the following source: [noroff assignment API](https://github.com/dewald-els/noroff-assignment-api.git).
- Enter your own api key in the environment.ts & environment.development.ts file.
    - The value of the key variable is up to you.

there is a limited amount of hours runtime of a application on Glitch. This is the reason our URL is not publicly accessible and the same should your project unless having paid for more uptime in Glitch.

# PokemonTrainerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
