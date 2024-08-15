"use strict";

function buy(cost, t) {
  var count = 0;
  var inventory = t.player.getInventory().getItems();

  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].getNbt().getByte("IsMoney") == 1) {
      count = count + inventory[i].getStackSize();
    }
  } //print(count);


  t.npc.say(count);

  if (count >= cost) {
    var deleted = cost;

    for (var i = 0; i < inventory.length; i++) {
      //print(inventory[i].getNbt().getByte());
      if (inventory[i].getNbt().getByte("IsMoney") == 1) {
        //print("test");
        if (deleted > inventory[i].getStackSize()) {
          //print("test");
          deleted = deleted - inventory[i].getStackSize();
          inventory[i].setStackSize(0);
        } else {
          inventory[i].setStackSize(inventory[i].getStackSize() - deleted);
          return true;
        }
      }
    }
  }
}