# [Angular](https://angularjs.org/) Template

This is a test to see how WebPack works with [Angular](https://angularjs.org/) and [Redux](https://github.com/rackt/redux) using [ES2015](http://www.ecma-international.org/ecma-262/6.0/) with [Babel](https://babeljs.io/).

To make it works, just open a terminal and type `npm run dev`. We also have tests with `npm test` and documentation con `npm run docs`.

Then use this [link](http://localhost:8080) to visit your local app url.

To obtain a production app, run `npm run prod`.

To see code coverage for tests, open `coverage/lcov-report/index.html` using a browser.

## Contents

This is a very simple application that contains only one route (/) and all the elements inside its view.

It also contains three different filters:

* __l33t__: it changes vowels a, e, i and o by numbers 4, 3, 1, 0.
* __remove-vowels__: it removes vowels inside a message.
* __reversed__: it revers a given message.

Four directives. The last three (messageL33t, messageReversed and messageWithoutVowels) just show a list of messages with a filter applied, info-box, shows us a message that change with the directive attributes, and input-box, allow us to introduce a new message.

And a component that shows a message.

To communicate all this components we are using Redux ([ngRedux](https://github.com/wbuchwalter/ng-redux)). The input-box directive stores the new strings inside the store, and the other directives are subscribed to the message array and they show the new contents with every change.

There is also a counter that can be incremented or decremented and shows its value between the controls and take it from the store.

## Redux

The amazing thing here is that we can reuse the redux store structure (reducers and actions) in Angular and React. What we are going to use is [Ducks](https://github.com/erikras/ducks-modular-redux)ish paradigm resulting the structure in these files:

* __index.js__: it imports all the reducers (counter and message) and exports a reducer combination of the other two. The advantage is that you can export as default all the reducers and partially small combinations for different cases.
* __counter.js__: it declares the constant to name the action type, export partially the functions that returns the actions (that useful to implement for example asynchronous calls to the server before dispatching the action) and as default, the reducer we are going to use the combine with the others.
* __messages.js__: the actions are asynchronous too because we have a delay of three seconds.

As you can see, this is a really scalable structure and we can granulate as much as we want our reducers to define properly our application state inside the store.

## Loaders

We are using WebPack loaders to import the files we need. In this app we are working with Stylus, Jade and ES2015, so we need to use:

### Stylus

* [style-loader](https://github.com/webpack/style-loader)
* [css-loader](https://github.com/webpack/css-loader)
* [stylus-loader](https://github.com/shama/stylus-loader)

### Pug

* [pug](https://github.com/pugjs/pug)
* [pug-loader](https://github.com/pugjs/pug-loader)

### ES2015

* [babel-core](https://github.com/babel/babel)
* [babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/)
* [babel-preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)
* [babel-loader](https://github.com/babel/babel-loader)
