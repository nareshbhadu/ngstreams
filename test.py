import os
loc="/Users/nareshbhadu/Desktop/Front End/ngstreams/src/Components/"
files = os.listdir(loc)

for file in files:
    if file[-2:] == "js":
        print(file[:-2])
        os.rename(loc+file, loc+file+"x")