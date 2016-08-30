import Ember from 'ember';

export default Ember.ObjectProxy.extend({

  // id: as content

  title: Ember.computed('id', function () {
    return `Dummy Object Number #${this.get('id')}`;
  }),

  titleUpperCase: Ember.computed('title', function () {
    return this.get('title').toUpperCase();
  })

});
