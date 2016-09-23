import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'table',

  time: null,

  init() {
    this.set('time', new Date());
    this._super();
  },

  didInsertElement() {
    let duration = new Date() - this.get('time');
    console.log('Component inserted, duration:', duration);
    this.get('finished')(duration);
  }
});
