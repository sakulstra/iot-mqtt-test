/**
 * Created by lukas on 03.02.16.
 */
Template.eventList.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.list",
      ...arguments,
      function (error, result) {
        Session.set('events',result);
      }
    );
  },1000);
};

Template.eventList.helpers({
  events: function(){
    return Session.get('events');
  }
});

Template.eventList.events({
  'click #reset'(){
    Meteor.call("events.reset");
  }
});