# ngx-alias

Alias the result of expensive expressions in your Angular templates without using `ngIf`.

[![Build Status](https://travis-ci.org/euangoddard/ngx-alias.svg?branch=master)](https://travis-ci.org/euangoddard/ngx-alias)

## Installation

Install `ngx-alias` using your favourite package manager, e.g.

```bash
$ npm install ngx-alias
```

Add the `NgxAliasModule` to an import in your app, e.g.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAliasModule } from 'ngx-alias';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxAliasModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

Now you can start using it in any templates used by the containing module. 

## Usage

The `ngIf` structural directive provides a handy mechanism to provide an alias for the expression in the template, e.g.

```html
<h1 *ngIf="value$ | async as value">
  {{ value }}
</h1>
```

But if you never expect the input to `ngIf` to be falsey then why use this directive? Worse still, consider what happens when the result of `value$ | async` is _0_.

This is where `ngx-alias` comes in handy. You can swap out your `ngIf` hack with the `alias` directive:

```html
<h1 *alias="value$ | async as value">
  {{ value }}
</h1>
```

Now if the result is 0 the embedded template will still display.



## Running the example app

Run `ng serve ngx-alias-example` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
