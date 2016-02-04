/**
 * Created by lukas on 03.02.16.
 */
Events = new Meteor.Collection("events");

Events.allow({
  insert: function() {
    return true;
  }
});

Messages = new Meteor.Collection("messages");

Messages.allow({
  insert: function() {
    return true;
  }
});