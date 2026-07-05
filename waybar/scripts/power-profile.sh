#!/usr/bin/env bash

case "$1" in
    toggle)
        current=$(powerprofilesctl get)

        case "$current" in
            power-saver)
                powerprofilesctl set balanced
                ;;
            balanced)
                powerprofilesctl set performance
                ;;
            performance)
                powerprofilesctl set power-saver
                ;;
        esac

        pkill -RTMIN+8 waybar 2>/dev/null
        exit
        ;;
esac

profile=$(powerprofilesctl get)

case "$profile" in
    power-saver)
        icon="󰾅"
        text="Power Saver"
        class="powersave"
        ;;
    balanced)
        icon=""
        text="Balanced"
        class="balanced"
        ;;
    performance)
        icon="󰓅"
        text="Performance"
        class="performance"
        ;;
esac

printf '{"text":"%s","tooltip":"%s","class":"%s"}\n' \
    "$icon" "$text" "$class"