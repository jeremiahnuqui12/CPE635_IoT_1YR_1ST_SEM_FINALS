import RPi.GPIO as GPIO
import time

# Use BCM pin numbering
servo_pin = 27
GPIO.setmode(GPIO.BCM)
GPIO.setup(servo_pin, GPIO.OUT)

# Set up PWM at 50Hz (standard for servos)
pwm = GPIO.PWM(servo_pin, 50)
pwm.start(0)

def set_angle(angle):
    # Convert angle (0–180) to duty cycle
    duty = 2 + (angle / 18)
    pwm.ChangeDutyCycle(duty)
    time.sleep(0.5)
    pwm.ChangeDutyCycle(0)

try:
    # Move to 0 degrees
    print("Moving to 0°")
    set_angle(10)
    #time.sleep(1)

    # Move to 180 degrees
    print("Moving to 70°")
    set_angle(90)

    # Wait 5 seconds
    print("Holding for 5 seconds...")
    time.sleep(.5)

    # Return to 0 degrees
    print("Returning to 0°")
    set_angle(10)
    time.sleep(1)

except KeyboardInterrupt:
    pass

finally:
    pwm.stop()
    GPIO.cleanup()
    print("GPIO cleaned up.")
