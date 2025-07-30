
import os 

# replace with any folder
PATH = "photos/europe2024"

dir_list = os.listdir(PATH)

with open("temp.txt", "w") as f:
    for item in dir_list:
        f.write('\'' + PATH + '/' + item + '\'' + ',')
