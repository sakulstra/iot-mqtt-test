/**
 * Created by lukas on 04.02.16.
 */
Meteor.methods({
  'messages.reset'(){
    Messages.remove({});
  },
  'messages.list'(){
    Messages.find({}).fetch();
  }
});