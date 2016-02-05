#This is only a proof of concept
This will only save the last message
```
mosquitto_pub -h localhost -p 1883 -t "beaglebone/1" -m "alive"
mosquitto_pub -h localhost -p 1883 -t "beaglebone/1" -m "dead"
```

This will save all messages
```
mosquitto_pub -h localhost -p 1883 -t "error" -m "kaputttschi"
```

Testing
-------
Simulating mqtt messages is as easy as calling sh ./spamTest.sh

Problems so far
---------------
* [x] The gui will probably lag because of a lot of updates in the database.
It would be okay if the view would only refresh every 2 seconds or sth.
-> solved by replacing publish/subscribe with methods and timers

Todos
-----
* [ ] Switch to mantra/react
