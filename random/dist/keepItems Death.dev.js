"use strict";

function damaged(t) {
  if (t.player.getHealth() - t.damage <= 0) {
    var died;
    var items;
    var itemsArr = [];
    var data = t.player.getStoreddata();
    data.put("Died", 0);

    if (!data.has("Items")) {
      data.put("Items", "");
    }

    items = data.get("Items");
    died = data.put("Died", 1);
    var inventory = t.player.getInventory();
    var items = inventory.getItems();

    for (var i = 0; i < items.length; i++) {
      if (!items[i].isEmpty()) {
        if (items[i].getItemName() == "Key") {
          var nbt = items[i].getItemNbt().toJsonString();
          itemsArr.push(nbt);
          items[i].setStackSize(0);
        } else {//print(items[i].getItemName());
        }
      }
    } //print("THE ARRAY2: "+ itemsArr);


    data.put("Items", toCString(itemsArr)); //print(t.player.getStoreddata().getKeys());
    //print("items ig: "+data.get("Items"));
  }
}

function init(t) {
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var data = t.player.getStoreddata(); //print("Keys: "+data.getKeys())

  var died;

  if (!data.has("Died")) {
    died = data.put("Died", 0);
  }

  var died = data.get("Died");

  if (!data.has("Items")) {
    //print("testing items");
    items = data.put("Items", "");
  }

  var items = data.get("Items").split("#"); //print("Items lol: "+items);
  //print("TESTING items: "+data.get("Items"));

  if (died == 1) {
    //print("test");
    for (var i = 0; i < items.length; i++) {
      if (!items[i].equals("")) {
        //print("THE ITEM!!!!: "+items[i]);
        t.player.giveItem(t.player.getWorld().createItemFromNbt(NpcAPI.stringToNbt(items[i])));
      }

      data.put("Died", false);
      data.put("Items", "");
    }
  }
}

function toCString(array) {
  var resultString = "";

  for (var i = 0; i < array.length; i++) {
    resultString += array[i] + "#";
  }

  return resultString;
}