import Ember from 'ember';
import Dummy from '../models/dummy';

export default Ember.Route.extend({

  init() {
    console.log('Index route is initializing...');
    this._super();
  },

  model() {
    console.log('Model hook is generating the dummy data...');
    return Array.from(Array(10000).keys()).map((number) => {
      return Dummy.create({content: {id: number}});
    });
  }

});
