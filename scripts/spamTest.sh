#!/usr/bin/env bash
echo "this script will spam the local mqtt with beaglebone/id events at ~10hz"
declare -a array=("none" "personevent" "emergencyevent")
while true
do
  sleep 0.1
  for((i=50; i>=0; i--))
  do
     mosquitto_pub -h localhost -p 1883 -t "beaglebone/$i" -m "${array[$(($RANDOM % 3))]}"
  done
done