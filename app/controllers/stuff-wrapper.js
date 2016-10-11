import Ember from 'ember';

export default Ember.Controller.extend({
  extraStuff: Ember.computed('model.foo', function() {
    return `${this.get('model.foo')} and something extra!`;
  })
});
