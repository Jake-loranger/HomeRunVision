import mlbstatsapi
mlb = mlbstatsapi.Mlb()
test = mlb.get_people_id("Ty France")[0]
print(test)