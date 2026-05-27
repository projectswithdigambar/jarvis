import multiprocessing
import subprocess

# To run Jarvis
def startJarvis():
    print("Process 1 is running.")
    from main import start
    start()

# To run hotword
def listenHotword():
    print("Process 2 is running.")
    from engine.features import hotword
    hotword()

# To listen for double-clap wake
def listenClap():
    print("Process 3 is running — clap detector active.")
    from engine.features import listenForClap
    listenForClap()

# Start all three processes
if __name__ == '__main__':
    p1 = multiprocessing.Process(target=startJarvis)
    p2 = multiprocessing.Process(target=listenHotword)
    p3 = multiprocessing.Process(target=listenClap)

    p1.start()
    p2.start()
    p3.start()

    p1.join()

    if p2.is_alive():
        p2.terminate()
        p2.join()

    if p3.is_alive():
        p3.terminate()
        p3.join()

    print("system stop")
