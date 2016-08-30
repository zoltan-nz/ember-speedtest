import Ember from 'ember';

export default Ember.Controller.extend({

    version: Ember.libraries._registry[0].version,
    showComponent: false,

    init() {
        console.log('Controller initializing...');
        this._super();
        Ember.run.scheduleOnce('afterRender', this, 'afterRenderCall');
    },

    afterRenderCall() {
        console.log('After render call... wait a second');
        Ember.run.later(this, this.nowInsertComponent, 1000)
    },

    nowInsertComponent() {
        console.log('Inserting component...');
        this.set('showComponent', true);
    },

    actions: {
        toggleComponent() {
            this.toggleProperty('showComponent');
        }
    }

});