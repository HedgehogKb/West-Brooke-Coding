var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();

function dialogOption(t){
    if(!t.npc.getStoreddata().has("Houses")){
        t.npc.getStoreddata().put("Houses","")
    }
    var houses = t.npc.getStoreddata().get("Houses").split(",");
    var slot = t.option.getSlot();
    if (t.dialog.getId() == 499){
        if (slot == 0){
            if (checkHouse("Building 1 Apartment 1 $400", houses,400,t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 1 Apartment 1\\\"}\"}, Lock: [I; 1607871806, 1148800153, -1374156260, -1771640090]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 1){
            if (checkHouse("Building 1 Apartment 2 $400", houses, 400, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 1 Apartment 2\\\"}\"}, Lock: [I; 820533160, -30260424, -1878699235, -596602462]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 2) {
            if (checkHouse("Building 1 Apartment 3 $400", houses, 400, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 1 Apartment 3\\\"}\"}, Lock: [I; 1191494064, 481511790, -1457469583, -680009707]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 3){
            if (checkHouse("Building 1 Apartment 4 $400", houses, 400, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 1 Apartment 4\\\"}\"}, Lock: [I; -1380708238, -1700574127, -1901289751, -687564953]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        }
    } else if (t.dialog.getId() == 500) {
        if (slot == 0) {
            if (checkHouse("Building 2 Apartment 1 $370", houses,370, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 2 Apartment 1\\\"}\"}, Lock: [I; -2071958971, 1487554660, -1561185602, 727751723]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 1) {
            if (checkHouse("Building 2 Apartment 2 $370", houses,370, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 2 Apartment 2\\\"}\"}, Lock: [I; 59718598, -1461499134, -1399795820, 1023266250]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 2) {
            if (checkHouse("Building 2 Apartment 3 $370", houses,370, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 2 Apartment 3\\\"}\"}, Lock: [I; -968585716, -81312603, -1949714911, 540766782]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 3) {
            if (checkHouse("Building 2 Apartment 4 $370", houses,370, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 2 Apartment 4\\\"}\"}, Lock: [I; -1639553406, 1033063727, -2115535413, -1030128717]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        }
    } else if (t.dialog.getId() == 501) {
        if (slot == 0) {
            if (checkHouse("Buliding 4 Apartment 1 $340", houses,340, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 4 Apartment 1\\\"}\"}, Lock: [I; 287094556, -313898948, -1096041290, -705101625]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 1) {
            if (checkHouse("Building 4 Apartment 2 $340", houses,340, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Building 4 Apartment 2\\\"}\"}, Lock: [I; -553735088, 1216760427, -1595250181, -1381478604]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 2) {
            if (checkHouse("Hole at the edge of town $260", houses,260, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Weird hole at the edge of town\\\"}\"}, Lock: [I; 389251186, -60862489, -2032074995, -638205655]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        } else if (slot == 3) {
            if (checkHouse("Sus shack in the woods $260", houses,260, t)) {
                var item = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"locksmith:key\", Count: 1b, tag: {RepairCost: 0, Original: 1b, display: {Name: \"{\\\"text\\\":\\\"Sus shack in the woods.\\\"}\"}, Lock: [I; 126736347, 38292786, -1901891847, 1914358313]}}"
                t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(NpcAPI.stringToNbt(item)));
            }
        }
    }
    t.npc.getStoreddata().put("Houses",houses.toString());
}

function includes(value,checkArray){
    print(checkArray);
    for (var i = 0; i < checkArray.length; i++){
        if (value.equals(checkArray[i])){
            return true;
        }
    }
    return false;
}

function checkHouse(name, hList, price, t){
    if (!includes(name, hList)){
        if (buy(price,t)){
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