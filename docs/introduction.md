#Introduction
We've a bunch of beaglebones which do data evaluation on their own in java.
Currently we have to open a remote connection to every single beaglebone to get their status.
As this seems like a not really elegant solution the mentor session suggested the use of mqtt as an iot protocol which allow publish and subscribe like functionality like meteors ddp.
With this setup we could have a central server hosting an mosquitto server and the meteor application which subscribes to a few channels.
The beaglebones now only have to publish on this specified channels.

#How this actually works
I don't really want to change a lot on the beaglebone side, so the simplest approach is replacing the remote call with an mqtt publish.
As a result we get data at a 10Hz rate on the mqtt subscribe in meteor.

#Event message
```json
{
  "topic":"bb/[macaddress]",
  "message":{
    "events":{
      {"id":"0","type":"personEvent",...arguments}
      {"id":"1","type":"emergencyEvent",...arguments}
    }
  }
}
```