import EmberObject, { computed } from '@ember/object';
import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  data: inject(),
  newItem: '',
  id: 4,
  actions: {
    addItem() {
      const item = {
        id: this.id++,
        name: this.newItem,
        description: 'This is a description',
      };
      this.data.addItem(item);
    },
  },
});
