/**
 * Created by lukas on 04.02.16.
 */
Meteor.methods({
  'events.reset'(){
    Events.remove({});
  }
});