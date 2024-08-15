var guns = ['CZ 75', 'SCAR H', 'CZ 75 Auto', 'STI P45', 'M1A1', 'AWM .338 Lapua', 'G3 Battle Rifle', 'Type 81-1', 'RPG 7', 'FN FAL', 'RPK', 'Benelli M1014', 'M60', 'SCAR mk20', 'Glock 18', 'DP-28', 'MP5A5', 'M870 Classic'];
var medPrices = [60, 313, 77, 212, 334, 412, 260, 224, 704, 504, 228, 339, 503, 303, 160, 231, 236, 235];
// these ids are just examples. I was testing if I could a. give players items this way and b. give players modded items this way. Both work lol
var itemIds = ['tac:cz75', 'tac:scar_h', 'tac:cz75_auto', 'tac:sti2011', 'tac:m1a1_smg', 'tac:ai_awp', 'tac:hk_g3', 'tac:type81_x', 'tac:rpg7', 'tac:fn_fal', 'tac:rpk', 'tac:m1014', 'tac:m60', 'tac:scar_mk20', 'tac:glock_18', 'tac:dp28', 'tac:hk_mp5a5', 'tac:m870_classic'];
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
    var storePage = NpcAPI.getDialogs().get(251);
    var text = "I... I buy: \n \n"
    var counter = 0;
    for (var i = 0; i < 3; i++){
        var index = startIndex+i;
        deal = -0.02*(t.player.getFactionPoints(18)-1000)
        text+="Option"+ (i+1)+": "+guns[index]+", for $"+(medPrices[index]+deal)+", Will buy: "+stock[counter]+"\n";
    counter++;
    }
    storePage.setText(text);
    storePage.save();
}

function dialogOption(t){
    if (t.dialog.getId()==251){
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

function hasGun(index, t){
    var count = 0;
    var inventory = t.player.getInventory().getItems();
    for (var i = 0; i < inventory.length; i++){
        print(inventory[i].getName())
        if (inventory[i].getName() == itemIds[index]){
            inventory[i].setStackSize(inventory[i].getStackSize()-1);
            payOut(medPrices[index]-deal,t);
            return true;
        }
    }
    return false;
}

function payOut(amount,t){
    print("paying out: "+amount)
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var cash = amount;
    while (cash > 0) {
        print(cash);
        if (cash >= 64){
            var moneyString = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: 64b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}"
            var money64 = NpcAPI.stringToNbt(moneyString);
            t.player.giveItem(t.player.getWorld().createItemFromNbt(money64));
            cash = cash - 64;
    
        } else {
            var moneyOther = NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: "+cash+"b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}");
            t.player.giveItem(t.player.getWorld().createItemFromNbt(moneyOther));
            cash = 0;
        }
    }
}

function optionStuff(t,oSlot){
    var parsedCount = parseInt(stock[oSlot]);
    if (stock[oSlot] > 0) {
        if (hasGun(startIndex+oSlot,t)){
            parsedCount--;
            stock[oSlot] = parsedCount.toString();
            t.npc.say("Thank you for the purchase")
        } else {
            t.npc.sayTo(t.player, "Sorry, you don't have that gun. "+itemIds[startIndex+oSlot] )
        }
    } else {
        t.npc.say("I don't need any more of that one.");
    }
}