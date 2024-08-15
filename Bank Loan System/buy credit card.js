function dialogOption(t){
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    if(t.dialog.getId() == 152 && t.option.getSlot() == 0 ){
        if (buy(125, t)){
            var creditCard = NpcAPI.getIWorlds()[0].createItem("minecraft:paper",1)
    //creditCard.setByte("test",1);
    var item = NpcAPI.stringToNbt("{\"ForgeCaps\":{\"customnpcs:itemscripteddata\":{}}, \"id\": \"minecraft:paper\", \"Count\": 1b, \"tag\":{ \"IsCreditCard\":1b,\"display\":{}}}")
item.getCompound("tag").getCompound("display").putString("Name", '{\"text\":\"Credit Card\"}');
    //print(item.toJsonString());
    t.player.giveItem(NpcAPI.getIWorlds()[0].createItemFromNbt(item));
        } else {
            t.npc.say("that isn't enough");
        }
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