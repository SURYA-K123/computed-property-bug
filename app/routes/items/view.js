import Ember from 'ember';

export default Ember.Route.extend({
  data: Ember.inject.service(),

  model: function(params) {
    const itemId = parseInt(params.id, 10);
    const item = this.get('data.items').findBy('id', itemId);
    return item;
  }
});
