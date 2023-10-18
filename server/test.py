import pymongo
import datetime
import time

myclient = pymongo.MongoClient("mongodb://43.202.26.130:27017/")
mydb = myclient["admin"]
mycol = mydb["koreanSAT"]

pak = mycol.find({}, {'_id': 0})
# print(list(pak)[0])
pkg = list(pak)
# print(pkg)


pkg_dict = dict()
cnt = 0 
for _ in range(0 , len(pkg)):
    # print(_)
    packegs = pkg[0]
    packegs["maincategory"] = "영어"
    packegs["middlecategory"] = "수능특강"
    # print(packegs)
    
    pkg_dict[f"name{cnt}"] = packegs
    cnt += 1


myclient = pymongo.MongoClient("mongodb://43.201.216.213:27017/")
mydb = myclient["test"]
mycol = mydb["koreanSAT"]

for _ in range(0 , len(pkg)):
    print(pkg_dict[f"name{_}"])
    # time.sleep(1)

