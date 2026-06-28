# Hyprchungus

A clean, beginner-friendly Hyprland rice for Arch Linux with a green/teal Nordic-Solarized aesthetic.

Built for people who want a polished daily-driver setup without spending weeks configuring everything from scratch.

---

## Preview

### Showcase Video


```md


https://github.com/user-attachments/assets/28caa3a4-5ea2-4f52-aa57-cf83b7ef1e4f


```

### Screenshots

<img width="1916" height="1079" alt="2026-06-29_04-41" src="https://github.com/user-attachments/assets/685bcd28-9792-4e80-808a-6246728eb6c7" />
<img width="1919" height="1079" alt="2026-06-29_04-40_1" src="https://github.com/user-attachments/assets/27bc5915-e6aa-4598-95a0-af001efad2dc" />
<img width="1919" height="1079" alt="2026-06-24_20-53" src="https://github.com/user-attachments/assets/76df6488-d037-4ab7-85f1-7719e7fbddd8" />

---

## Features

* Green / teal Nordic-Solarized inspired theme
* Beginner-friendly Hyprland rice
* Clean and minimal workflow
* Custom Waybar modules
* Weather integration in Waybar
* Cava visualizer integrated into Waybar
* Keyboard-driven workflow
* Smooth Arch + Hyprland experience

---

## System

* **OS:** Arch Linux
* **WM:** Hyprland
* **Shell:** zsh
* **Terminal:** kitty
* **Bar:** waybar
* **Font:** GeistMono

---

## Included Configs

```text
hypr/
waybar/
kitty/
rofi/
cava/
swaync/
spotify-player/
nwg-look/
gtk-3.0/
gtk-4.0/
flameshot/
```

---

## Installation

Clone the repo:

```bash
git clone git@github.com:Vin-Petrol025/hyprchungus.git
```

Go into the directory:

```bash
cd hyprchungus
```

Copy the configs:

```bash
cp -r .config/* ~/.config/
```

---

## Dependencies

Install the main packages:

```bash
sudo pacman -S hyprland waybar kitty rofi cava zsh grim slurp wl-clipboard flameshot
```

Additional packages may be required depending on your setup.

Examples:

* swaync
* spotify-player
* nwg-look

---

## Notes

This setup was made on Arch Linux and may require adjustments for:

* monitor resolution
* workspace layout
* hardware-specific settings

Some configs are intentionally excluded from the repo for privacy and portability.

---

## Philosophy

Hyprchungus aims to be:

* Easy to install
* Good-looking out of the box
* Easy to customize
* A strong starting point for new Hyprland users

---

## License

Feel free to use, modify, and share.

