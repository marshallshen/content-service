import Ember from 'ember';

export default Ember.Controller.extend({
  message: '',

  isValid: Ember.computed.gte('message.length', 5),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      alert(`Thank you for sending the message ${this.get('message')}`);
      this.set('responseMessage', `Thank you for sending the message ${this.get('message')}`);
      this.set('message', '');
    }
  }
});
