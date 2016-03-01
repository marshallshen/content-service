import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  // isDisabled: Ember.computed('emailAddress', function(){
  //   return this.get('emailAddress') == '';
  // }),
  
  // isDisabled: Ember.computed.empty('emailAddress'),
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),


  actualEmailAddress: Ember.computed('emailAddress', function(){
    console.log('actualEmailAddress function is called', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function(){
    console.log('observer is called', this.get('emailAddress'));
  }),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
