#!/usr/bin/python
from Adafruit_Thermal import *
from datetime import datetime
import sys

def print_message( message = "", date = datetime.now().strftime('%d-%b @ %H:%M') ):
    printer = Adafruit_Thermal("/dev/serial0", 19200)
    printer.wake()
    printer.setSize('M')

    printer.println(message)

    printer.feed(1)
    printer.setSize('S')
    printer.println(date)
    printer.feed(1)
    printer.println("_______________________________")
    printer.feed(5)
    printer.sleep()
    printer.setDefault()

if __name__ == "__main__":
    print_message(sys.argv[1])
