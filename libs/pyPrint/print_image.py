#!/usr/bin/python
from Adafruit_Thermal import *
from PIL import Image
from datetime import datetime
import sys


def print_image( imagePath = "/home/pi/misyu/files/test.jpg" ):


    printer = Adafruit_Thermal("/dev/serial0", 19200)
    printer.wake()

    BASE_WIDTH = 384
    img = Image.open(imagePath)
    wpercent = (BASE_WIDTH / float(img.size[0]))
    hsize = int((float(img.size[1]) * float(wpercent)))
    img = img.resize((BASE_WIDTH, hsize))

    printer.printImage(img)

    printer.feed(1)
    printer.setSize('S')
    printer.println(datetime.now().strftime('%Y-%m-%d %H:%M'))
    printer.feed(1)
    printer.println("_______________________________")
    printer.feed(5)
    printer.sleep()
    printer.setDefault()

if __name__ == "__main__":
    print_image(sys.argv[1])
