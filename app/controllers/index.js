import Ember from 'ember';

export default Ember.Controller.extend({

  version: Ember.VERSION,
  showComponent: true,

  time: null,

  init() {
    console.log('Controller initializing...');
    this.set('time', new Date());
    this._super();

    Ember.run.scheduleOnce('afterRender', this, 'afterRenderCall');
  },

  afterRenderCall() {
    console.log('After render call... wait a second');
    let duration = new Date() - this.get('time');
    console.log('Component inserted, duration:', duration);
  },

  actions: {

    toggleComponent() {
      this.toggleProperty('showComponent');
    },

    finished(time) {
      this.set('renderingTime', time);
    }
  }
});