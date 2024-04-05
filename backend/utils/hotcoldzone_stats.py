import mlbstatsapi

mlb = mlbstatsapi.Mlb()

# Return player ID
def get_player_id(player_name): 
      return(mlb.get_people_id(player_name)[0])

# Return player's batting average for each zone  
def get_hotcoldzones_stats(player_id, year): 
    stats = ['hotColdZones']
    hitting_group = ['hitting']
    params = {'season': year}

    hitting_hotcoldzones = mlb.get_player_stats(player_id, stats=stats, groups=hitting_group, params=params)
    player_hotcoldzones = hitting_hotcoldzones['stats']['hotcoldzones']

    zone_data = {}

    for split in player_hotcoldzones.splits:
        if split.stat.name == 'battingAverage':
                for zone in split.stat.zones:
                    zone_data[zone.zone] = zone.value

    return(zone_data)
