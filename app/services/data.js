import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';
import Service from '@ember/service';

export default Service.extend({
  items: A([
    // { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    // { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    // { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  ]),

  length: computed('items', function () {
    return this.items.length;
  }),

  addItem(item) {
    this.items.pushObject(item);
    console.log(this.items);
  },

  removeItem(itemId) {
    const itemToRemove = this.get('items').findBy('id', parseInt(itemId));
    if (itemToRemove) {
      this.get('items').removeObject(itemToRemove);
    }
  },
});
