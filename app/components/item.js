import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  data: inject(),
  router : inject(),
  actions: {
    deleteItem(id) {
      this.get('data').removeItem(id);
      this.get('router').transitionTo('items.index');
    }
  }
});
