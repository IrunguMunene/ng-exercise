# NgExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Issues encountered
Initial fork (local for the project) was in angular 9.0.6, global angular on my machine is 9.1.1. For some reason the ngFor directive wasn't working coz of the version discrepancy.
Took quite some time before I it dawned that this was causing an issue. After running ng Update @angular/cli, ng Update @angular/core and ng Update rxjs
updating angualr to 9.1.1 and rxjs to 6.5.5 the ngFor directive started working without a problem, but I had already spent lot of time on 
the issue.

Moving forward maybe include in the README that after forking to run updates to ensure both local and global angular versions match just
just incase someone else runs into the same problem. 
