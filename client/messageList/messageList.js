/**
 * Created by lukas on 03.02.16.
 */
Template.messagelist.helpers({
  messages: function(){
    return Messages.find().fetch();
  }
});