import Ember from 'ember';

export default Ember.Controller.extend({
  message: '',

  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage: function(){
      var _that = this;
      var email = this.get('emailAddress');
      var message = this.get('message');
      var newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then(function(response){
        _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
        _that.set('emailAddress', '');
        _that.set('message', '');
      });
    }
  }
});
