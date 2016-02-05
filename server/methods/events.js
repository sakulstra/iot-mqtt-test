/**
 * Created by lukas on 04.02.16.
 */
Meteor.methods({
  'events.reset'(){
    Events.remove({});
  },
  'events.list'(){
    return Events.find({}).fetch();
  }
});