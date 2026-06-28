#!/bin/bash

killall -9 waybar
killall -9 swaync
swaync & disown
waybar & disown
