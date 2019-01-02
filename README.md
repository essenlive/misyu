# misyu

*Small device to interact with messenger.*

The device prints pictures sent to a specific messenger bot.
Then when you press the button, the device takes a picture and answers to the chat.

---
## ✔ TO DO

- Make the pi-camera promise work in code, instead of the ugly wait function
- Simplify and clean code
- Find working node librar for the thermal printer and remove the python library.
- Auto Remove pictures from local folder
- Better error management ( especially on the printer side )
- Rework chat interface to have options ( whatsapp, slack ...)
- Rework Camera to have different possible inputs ( reflex, webcams ... )
- Rework Print module to take into account different printers.
- Rework Tunnel to have different options (reverse SSH ... )
---
## Setup
🎯 Ok now you will need to setup your hardware, that means the pi zero, the camera, the press button and the printer. I pretty much

### 👨‍🏭 Physical

[Here](https://a360.co/2ENZilE) you can view and download the 3D files.

I will export the CAM files as well later on.


### 👨‍🔧 Hardware
🎯 Ok now you will need to setup your hardware, that means the pi zero, the camera, the press button and the printer. I pretty much followed [that Adafruit project](https://learn.adafruit.com/pi-thermal-printer?view=all) so you can get inspired.

#### The Pi zero W
Get a micro SD card and etch the [BerryLan debian image](http://www.berrylan.org/).
▶ It will allow you to setup your device easily on any wifi network through its bluetooth. COOL 👌

Cut a micro usb cable and cut it to so that you can solder the black and red cables to the [power plug](https://www.amazon.fr/gp/product/B07D4F15Y4/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)'s + and -.

❗ Make sure you check which is + and which is - on you power supply.

❓ You can also power the PI through its pins, but I read that it bypasses some securities, so as I don't know much I wen through the USB.

#### Pi zero Camera
Just plug your [raspberry pi zero camera](https://www.kubii.fr/pi-zero-v13/1836-mini-camera-pour-pi-zero-kubii-3272496006874.html). Then setup the camera in through `sudo raspi-config`. Reboot and it should be ready to use, you can check through `raspistill -o test.jpg`.

#### Button
Solder a wire from the Common pin of the button to the 3V3 of the PI.
Solder a wire to the NO pin of the button to the [pin 4 or BCM 23](https://fr.pinout.xyz/pinout/pin16_gpio23) of your PI.

❗ Add a 10K PullDown resistor between your pin and the ground.

#### Adafruit thermal printer
Simply plug the data cable to the PI's serial [pins - G BCM14 BCM15 ](https://fr.pinout.xyz/pinout/pin16_gpio23).

👍 Check on adafruit's project : ![Adafruit image](https://learn.adafruit.com/assets/40995)

For the power input, solder the black and red cables to the power plug + and -, as with the pi cable.

❗ Make sure you check which is + and which is - on you power supply.



### 👩‍💻 Software
🎯 Ok now you will need to setup your hardware, that means the pi zero, the camera, the press button and the printer. I pretty much

#### Server / ngrok

#### Facebook Bot

#### Code
.env file
#### Stayup after bootup
setup pm2 for startup
