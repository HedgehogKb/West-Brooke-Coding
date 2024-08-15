function damaged(t){
    if (t.player.getHealth() - t.damage <= 0){
        var died;
        var items;
        var itemsArr = [];
        var data = t.player.getStoreddata();
        data.put("Died",0);
        if (!data.has("Items")){
            data.put("Items","");
        }
        items = data.get("Items");
        died = data.put("Died",1);
        var inventory = t.player.getInventory()
        var items = inventory.getItems();
        for (var i = 0; i < items.length; i++){
            if (!items[i].isEmpty()) {
                if (items[i].getItemName() == "Key" || items[i].getNbt().getByte("IsCreditCard") == 1) {
                    var nbt = items[i].getItemNbt().toJsonString()
                    itemsArr.push(nbt)
                    items[i].setStackSize(0);
                } else if (items[i].getName() == "minecraft:cooked_beef" || items[i].getName() == "tac:m1911") {
                    var nbt = items[i].getItemNbt().toJsonString()
                    itemsArr.push(nbt)
                    items[i].setStackSize(0);
                }
            }
        }
        data.put("Items",toCString(itemsArr));
    }
}

function init(t){
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var data = t.player.getStoreddata();
    var died;
    if (!data.has("Died")){
        died = data.put("Died", 0);
    }
    var died = data.get("Died");
    if (!data.has("Items")){
        items = data.put("Items", "");
    }
    var items = data.get("Items").split("#");
    if (died == 1) {
        for (var i = 0; i < items.length;i++){
            if (!items[i].equals("")){
                t.player.giveItem(t.player.getWorld().createItemFromNbt(NpcAPI.stringToNbt(items[i])));
            }
            data.put("Died",false);
            data.put("Items","");  
        }
    }
}

function toCString(array){
    var resultString = "";
    for (var i = 0; i < array.length;i++){
        resultString+=array[i]+"#"
    }
    return resultString;
}