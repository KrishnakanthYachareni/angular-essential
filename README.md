# Angular Essential Training

### Pre-reqs:
1. Find All the cheat sheets: http://www.developer-cheatsheets.com/
2. Java Script: https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet
3. Type Script: https://devhints.io/typescript
4. TS: https://rmolinamir.github.io/typescript-cheatsheet/

### Angular Basics
1. `{{}}` is an angular interpolation, angular evaluates the expression inside and display as a string on browser.
2. `{}` Java Script expression.
3. `[]` Angular property binding (within tags eg: <div [textContent]='expression'>) 
     Ref: https://angular.io/guide/property-binding
4. `()` Event binding in html template (<a (click) ="expression"/>)
    **Note:** `(click)` is angular native event all the DOM/JS events are start with `on` like `onClick`.
5.  `@Input` from angualr/core is used to get the data to component from view. 
    Ref: https://angular.io/guide/inputs-outputs
6. `@Output`Decorator that marks a class field as an output property and supplies configuration metadata. 
7. Angular has 2 types of directives. These directives should use using `*` asteric symbol at the start. If Astric symbol eliminate the necessity if `<ng-template [ngIf]="expression">...HTML code </ng-template>`. If we don't use that symbol we should write structural durectives inside `<ng-template>`
    1. **Structural Directives:** 
        1. `ngIf` -> `*ngIf="mediaItem`
        2. `ngFor` -> `*ngFor="let mediaItem of mediaItems"` It uses the angular micro syntax to evaluates the expression/iteration of list.

    Ref: https://angular.io/guide/structural-directives

    2. **Attribute Directives:** An Attribute directive changes the appearance or behavior of a DOM element.
        1. **Built-In:** `ngClass` Adds and removes CSS classes on an HTML element.
````html
        <section>
          <!-- For iteration of ngFor it creates the new component of <mw-media-item> & insert on browser-->
            <mw-media-item 
              [ngClass]="{'medium-movies': mediaItem.medium==='Movies', 'medium-series':mediaItem.medium==='Series'}"
              *ngFor="let mediaItem of mediaItems"
              [mediaItem]="mediaItem"
              (delete)="onMediaItemDelete($event)">
            </mw-media-item>
       </section>
````
   3. **Custom Attributes Dir:** Use `@Directive` (By using Ang CLI `ng g directive  path/directiveName) 
    Ref: https://angular.io/guide/attribute-directives

8. **Angular Pipes:** A template expression operator that takes in a value and returns a new value representation. Ref:https://angular.io/api/core/Pipe
````html
<div>Watched on {{ mediaItem.watchedOn | date: 'shortDate'}}</div>

(or)

<h2>{{ mediaItem.name | slice: '0:10' | uppercase}}</h2>
````
To create the custom pipe using Ang Cli use `ng g pipe path/pipeName`

9. **Angular Forms:** Angular provides two different approaches to handling user input through forms: *reactive/model-driven and template-driven*. Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

    1. **Template-Driven:** (Simple and Ease of Use) Uses `ngModel`, `ngForm`, `ngSubmit`
````html
media-item-form.component.html
        <header>
    <h2>Add Media to Watch</h2>
</header>
<form #mediaItemForm="ngForm" (ngSubmit)="onSubmit(mediaItemForm.value)">
    <ul>
        <li>
            <label for="medium">Medium</label>
            <select name="medium" id="medium" ngModel>
                <option value="Movies">Movies</option>
                <option value="Series">Series</option>
            </select>
        </li>
        <li>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" ngModel>
        </li>
        <li>
            <label for="category">Category</label>
            <select name="category" id="category" ngModel>
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
            </select>
        </li>
        <li>
            <label for="year">Year</label>
            <input type="text" name="year" id="year" maxlength="4" ngModel>
        </li>
    </ul>
    <button type="submit">Save</button>
</form>
````
     media-item-form.component.ts
````ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }

}
````
   2. **Reactive/Model-Driven:** (Full powered) Form field contract, Field validation rules, Change tracking, can be unit tested without any UI layer.
    It uses `FormGroup`, `FormControl`, `formControlName`.
````html
    <header>
    <h2>Add Media to Watch</h2>
  </header>
  <form
    [formGroup]="form"
    (ngSubmit)="onSubmit(form.value)">
    <ul>
      <li>
        <label for="medium">Medium</label>
        <select name="medium" id="medium" formControlName="medium">
          <option value="Movies">Movies</option>
          <option value="Series">Series</option>
        </select>
      </li>
      <li>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" formControlName="name">
      </li>
      <li>
        <label for="category">Category</label>
        <select name="category" id="category" formControlName="category">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
      </li>
      <li>
        <label for="year">Year</label>
        <input type="text" name="year" id="year" maxlength="4" formControlName="year">
      </li>
    </ul>
    <button type="submit">Save</button>
  </form>
````
    component.ts
````ts
    import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
````
  3. **Angular Built-in Validators:** Use `Validators` in component on FormGroup.
  
  Ref: https://angular.io/guide/forms-overview

## Course Description

This is the repository for my course **Angular Essential Training**  
The full course is available at [LinkedIn Learning](https://www.linkedin.com/learning) and [lynda.com](https://lynda.com).  
[LinkedIn Learning subscribers: watch here](https://www.linkedin.com/learning/angular-essential-training-2)  
[Lynda.com subscribers: watch here](https://www.lynda.com/Angular-tutorials/Angular-Essential-Training/5034181-2.html)  

Topics include:
- What is Angular?
- Working with components
- Binding events and properties
- Getting data to components
- Using directives and pipes
- Creating Angular forms
- Validating form data
- How Angular does dependency injection
- Making HTTP calls
- Routing
- Styling components

## Instructions

1. Make sure you have these installed
  - [node.js](http://nodejs.org/)
  - [git](http://git-scm.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) 

    `git clone https://github.com/KrishnakanthYachareni/angular-essential.git`
    
3. CD to the folder

    `cd angular-essential-training`

    and then fetch all of the remote branches for the repository
    
    `git fetch --all` 
    
4. Run the following to install the project dependencies:

    `npm install`
    
5. Run the ng serve command to build the code, watch for file changes, and serve up the site locally:

    `ng serve`

6. Navigate to http://localhost:4200. The app will automatically reload if you change any of the source files.

    `http://localhost:4200/`

The repository has a branch for each video starting point. For example, the branch **02-01b** is used as the starting code for the video *02-01 NgModule and the root module*. You can checkout branches using `git checkout <branchname>` and not have to re-run `npm install` each time since you will remain in the same root folder.


## Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
1. Component Generation: `ng g component path/componentName`
2. Directive Genration: `ng g directive path/directiveName`
