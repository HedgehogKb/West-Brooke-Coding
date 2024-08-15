

function dialogOption(t){
    if(!t.npc.getStoreddata().has("Houses")){
        t.npc.getStoreddata().put("Houses","")
    }
    var houses = t.npc.getStoreddata().get("Houses").split(",");
    if (t.dialog.getId() == 145){
        if (t.option.getSlot() == 0){
            if (!includes("101 Mcloven Drive", houses)){
                if (purchase(1000,t)){
                    houses.push("101 Mcloven Drive");
                    t.npc.sayTo(t.player,"Thank for the purchase");
                } else {
                    t.npc.sayTo(t.player, "You don't have enough money")
                }
            } else {
                t.npc.sayTo(t.player, "Like I said, that one is taken.");
            }
            t.player.closeGui();
            //print(houses);
        }
    }
    t.npc.getStoreddata().put("Houses",houses.toString());
}

function purchase(price, t){
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
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
    if (!includes(name, houses)){
        if (purchase(price,t)){
            houses.push(name);
            t.npc.sayTo(t.player,"Thank for the purchase");
        } else {
            t.npc.sayTo(t.player, "You don't have enough money")
        }
    } else {
        t.npc.sayTo(t.player, "Like I said, that one is taken.");
    }
    t.player.closeGui();
    //print(houses);
}

