var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();

function dialogOption(t){
    if(!t.npc.getStoreddata().has("Houses")){
        t.npc.getStoreddata().put("Houses","")
    }
    var houses = t.npc.getStoreddata().get("Houses").split(",");
    var slot = t.option.getSlot();
    if (t.dialog.getId() == 145){
        if (slot == 0){
            if (checkHouse("101 Mcloven Drive", houses,1000,t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"101 Mcloven Drive\\\"}\"}, Lock: [I; -1385851173, 1057966448, -1566462174, -2018483269]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 1){
            if (checkHouse("102 Mcloven Drive", houses, 1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"102 Mcloven Drive\\\"}\"}, Lock: [I; -143226625, -1118810260, -1957214176, 1734383635]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 2) {
            if (checkHouse("104 Mcloven Drive", houses, 1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"104 Mcloven drive\\\"}\"}, Lock: [I; 1042394139, 521881974, -1360459362, -242755576]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 3){
            if (checkHouse("107 Belfort Drive", houses, 1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"107 Belfort Drive\\\"}\"}, Lock: [I; -721107286, 1568296543, -1680481994, 1951504949]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        }
    } else if (t.dialog.getId() == 190) {
        if (slot == 0) {
            if (checkHouse("108 Corman Court", houses,1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"108 Corman Court\\\"}\"}, Lock: [I; 930736094, -593542124, -1161259024, -1714491238]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 1) {
            if (checkHouse("109 Corman Court", houses,1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"109 Corman Court\\\"}\"}, Lock: [I; 667053921, 1650803152, -2014745695, -1853032304]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 2) {
            if (checkHouse("110 First Street", houses,1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"110 First Street\\\"}\"}, Lock: [I; 1617035581, 1749174556, -1610004849, 542032951]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 3) {
            if (checkHouse("111 First Street", houses,1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"111 First Street\\\"}\"}, Lock: [I; 1923695374, 1718960657, -1576567148, -240374324]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        }
    } else if (t.dialog.getId() == 256) {
        if (slot == 0) {
            if (checkHouse("308 Loves Court", houses,1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"308 Loves Court\\\"}\"}, Lock: [I; 1482325320, 2133738910, -1343590317, 999957772]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 1) {
            if (checkHouse("310 Loves Court", houses,1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"310 Loves Court\\\"}\"}, Lock: [I; -1480469232, -2054339338, -1539552545, -2098377721]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 1) {
            if (checkHouse("316 Grove Street", houses,1000, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"316 Grove Street\\\"}\"}, Lock: [I; -17457968, 226967750, -1337570419, 372495028]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        }
    }
    t.npc.getStoreddata().put("Houses",houses.toString());
}

function purchase(price, t){
    var world = NpcAPI.getIWorlds()[0];
    //var name = world.getScoreboard().getObjectives()[0].getName()
    var score = world.getScoreboard().getObjective("Money").getScore(t.player.getName())
    print(score);
    print(score.getValue());
    if (score.getValue() >= price) {
        score.setValue(score.getValue()-price);
        return true;
    } else {
        return false;
    }
}

function includes(value,checkArray){
    print(checkArray);
    for (var i = 0; i < checkArray.length; i++){
        //print(i)
        if (value.equals(checkArray[i])){
            return true;
        }
        //print(value + ", " + checkArray[i]);
    }
    return false;
}

function checkHouse(name, hList, price, t){
    if (!includes(name, hList)){
        if (purchase(price,t)){
            hList.push(name);
            t.npc.sayTo(t.player,"Thank for the purchase");
            return true;
        } else {
            t.npc.sayTo(t.player, "You don't have enough money")
        }
    } else {
        t.npc.sayTo(t.player, "Like I said, that one is taken.");
    }
    t.player.closeGui();
    //print(houses);
}