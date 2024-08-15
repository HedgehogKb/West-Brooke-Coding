var guns = ["SCAR mk20","AWM .338 Lapua","SCAR H","STI P45","Glock 18","G3 Battle Rifle","MP5A5","Benelli M1014","M60"];
var medPrices = [300,400,300,200,150,246,230,330,500];
// these ids are just examples. I was testing if I could a. give players items this way and b. give players modded items this way. Both work lol
var itemIds = ["tac:scar_mk20","tac:ai_awp","tac:scar_h","tac:sti2011","tac:glock_18","tac:hk_g3","tac:hk_mp5a5", "tac:m1014", "tac:m60"];
var startIndex;
var stock;
var deal;

function dialog(t){
    if (!t.npc.getStoreddata().has("Start")){
        t.npc.getStoreddata().put("Start",0);
    }
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    startIndex = t.npc.getStoreddata().get("Start");
    //stock = t.npc.getStoreddata("Stock").split(",");
    stock = t.npc.getStoreddata().get("Stock").split(",")
    var storePage = NpcAPI.getDialogs().get(208);
    var text = "Here's what we've got: \n \n"
    var counter = 0;
    for (var i = 0; i < 3; i++){
        var index = startIndex+i;
        deal = -0.02*(t.player.getFactionPoints(19)-1000)
        text+="Option"+ (i+1)+": "+guns[index]+", for $"+(medPrices[index]+deal)+", Will buy: "+stock[counter]+"\n";
    counter++;
    }
    storePage.setText(text);
    storePage.save();
}

function dialogOption(t){
    if (t.dialog.getId()==208){
        var slot = t.option.getSlot();
        //var stock = t.npc.getStoreddata().get("Stock").split(",");
        //print(stock);
        if (slot == 0){
            optionStuff(t,0);
        } else if (slot == 1) {
            optionStuff(t,1);
        } else if (slot == 2){
            optionStuff(t,2);
        }
        t.npc.getStoreddata().put("Stock",stock.toString());
    }
}

function buy(cost, t){
    var count = 0;
    var inventory = t.player.getInventory().getItems();
    for (var i = 0; i < inventory.length; i++){
        if (inventory[i].getNbt().getByte("IsMoney") == 1){
            count = count + inventory[i].getStackSize();
        }
    }
    //print(count);
    //t.npc.say(count);
    if (count >= cost){
        var deleted=cost;
        for (var i = 0; i < inventory.length; i++){
            //print(inventory[i].getNbt().getByte());
            if (inventory[i].getNbt().getByte("IsMoney") == 1){
                //print("test");
                if (deleted > inventory[i].getStackSize()){
                    //print("test");
                    deleted = deleted - inventory[i].getStackSize();
                    inventory[i].setStackSize(0);
                } else {
                    inventory[i].setStackSize(inventory[i].getStackSize()-deleted);
                    return true;
                }
            }
        }
    }
}

function give(t,gun){
    t.npc.say(guns.indexOf(gun));
    t.player.giveItem(itemIds[guns.indexOf(gun)],1);
}

function optionStuff(t,oSlot){
    var parsedCount = parseInt(stock[oSlot]);
    if (stock[oSlot] > 0) {
        if (buy(medPrices[startIndex+oSlot]+deal,t)){
            parsedCount--;
            stock[oSlot] = parsedCount.toString();
            give(t,guns[startIndex+oSlot])
            t.npc.say("Thank you for the purchase")
        } else {
            t.npc.say("You don't have the cash to buy that.")
        }
    } else {
        t.npc.say("We are all out of that one.");
    }
}