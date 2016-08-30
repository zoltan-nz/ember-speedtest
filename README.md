# Ember Speed Test

Live: http://ember-speedtest.surge.sh

This is a little experiment to render 10000 lines with embedded components. Of course, this is not ideal and not the best practice, but good to know how long does it take with different versions of Ember.

Always test with production build and don't open the Developer Console / Ember Inspector.

## Build

There is one app in `app` folder. You can find the ember-cli build in separated sub-folders.

For example, you can build and launch the Ember 1.13:

```
$ cd ember-113
$ npm install && bower install
$ ember server --prod
```
