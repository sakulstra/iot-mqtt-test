/**
 * Created by lukas on 03.02.16.
 */
Template.messagelist.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "messages.list",
      ...arguments,
      function (error, result) {
        Session.set('messages',result);
      }
    );
  },5000);
};

Template.messagelist.helpers({
  messages: function(){
    return Meteor.call('messages.list');
  }
});

Template.messagelist.events({
  'click #reset'(){
    Meteor.call("messages.reset");
  }
});