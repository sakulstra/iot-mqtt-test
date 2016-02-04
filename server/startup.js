/**
 * Created by lukas on 03.02.16.
 */

/**
 * ################################################################
 * Every bb can write to beaglebone/id topic and the last message will be in the collection
 * so the events database holds the current event status
 * ################################################################
 */
Events.mqttConnect('mqtt://localhost:1883', ["beaglebone/+"]);
/**
 * Timestamp the data
 */
Events.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});
Events.before.upsert(function (userId, selector, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});
/**
 * Publish everything
 */
Meteor.publish('events', function(){
  return Events.find();
});

/**
 * ################################################################
 * In this database we can hold all the info/warning/error messages
 * ################################################################
 */
Messages.mqttConnect('mqtt://localhost:1883', ["info","warning","error"], {insert: true});
/**
 * Timestamp the data
 */
Messages.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});
/**
 * Publish everything
 */
Meteor.publish('messages', function(){
  return Messages.find();
});

