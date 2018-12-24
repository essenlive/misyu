# misyu
Small device to interact with messenger.
---
The device prints pictures sent to a specific messenger bot.
Then when you press the button, the device takes a picture and answers to the chat.
---
## Setup
### Physical
Cut the cad files
Assemble
### Electronical Components
pi zero
Cut a micro usb cable
Solder the black and red cables to the power plug + and -

Pi zero Camera
Setup the camera in raspi-config
reboot and it should be ready to use

Button
Common to the 3V3
NO to your PIN
  Add a 10K PullDown resistor ( to the mass )

adafruit thermal printer
Solder the black and red cables to the power plug + and -

### Software Setup
berrylan
atom remote-ftp plugin
facebook bot
Server / ngrok
./ngrok http -region=eu -subdomain=ouistiti 3000
