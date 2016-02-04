/**
 * Created by lukas on 03.02.16.
 */
Template.eventList.helpers({
  events: function(){
    return Events.find().fetch();
  }
});

Template.eventList.events({
  'click #reset'(){
    Meteor.call("events.reset");
  }
});