# misyu
Small device to interact with messenger.
---
The device prints pictures sent to a specific messenger bot.
Then when you press the button, the device takes a picture and answers to the chat.

##TO DO
Make the pi-camera promise work in code
Simplify and clean code
Auto Remove pictures from local folder
Better error management
Rework chat interface to have options ( whatsapp, slack ...)
Rework Camera to have different possible inputs ( reflex, webcams ... )
Rework Tunnel to have different options (reverse SSH ... )
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
setup pm2 for startup
