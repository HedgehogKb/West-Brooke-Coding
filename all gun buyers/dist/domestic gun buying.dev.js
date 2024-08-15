"use strict";

var guns = ["SCAR mk20", "AWM .338 Lapua", "SCAR H", "STI P45", "Glock 18", "G3 Battle Rifle", "MP5A5", "Benelli M1014", "M60", "M870 Classic", "M1A1", "FN FAL", "Type 81-1", "RPK", "RPG 7", "CZ 75", "CZ 75 Auto", "DP-28"];
var medPrices = [316, 414, 315, 206, 157, 252, 241, 347, 512, 235, 329, 500, 228, 223, 697, 49, 74, 226]; // these ids are just examples. I was testing if I could a. give players items this way and b. give players modded items this way. Both work lol

var itemIds = ["tac:scar_mk20", "tac:ai_awp", "tac:scar_h", "tac:sti2011", "tac:glock_18", "tac:hk_g3", "tac:hk_mp5a5", "tac:m1014", "tac:m60", "tac:m870_classic", "tac:m1a1_smg", "tac:fn_fal", "tac:type81_x", "tac:rpk", "tac:rpg7", "tac:cz75", "tac:cz75_auto", "tac:dp28"];
var startIndex;
var stock;
var deal;

function dialog(t) {
  if (!t.npc.getStoreddata().has("Start")) {
    t.npc.getStoreddata().put("Start", 0);
  }

  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  startIndex = t.npc.getStoreddata().get("Start"); //stock = t.npc.getStoreddata("Stock").split(",");

  stock = t.npc.getStoreddata().get("Stock").split(",");
  var storePage = NpcAPI.getDialogs().get(227);
  var text = "Here's what I'm looking to buy: \n \n";
  var counter = 0;

  for (var i = 0; i < 3; i++) {
    var index = startIndex + i;
    deal = -0.02 * (t.player.getFactionPoints(19) - 1000);
    text += "Option" + (i + 1) + ": " + guns[index] + ", for $" + (medPrices[index] + deal) + ", Will buy: " + stock[counter] + "\n";
    counter++;
  }

  storePage.setText(text);
  storePage.save();
}

function dialogOption(t) {
  if (t.dialog.getId() == 227) {
    var slot = t.option.getSlot(); //var stock = t.npc.getStoreddata().get("Stock").split(",");
    //print(stock);

    if (slot == 0) {
      optionStuff(t, 0);
    } else if (slot == 1) {
      optionStuff(t, 1);
    } else if (slot == 2) {
      optionStuff(t, 2);
    }

    t.npc.getStoreddata().put("Stock", stock.toString());
  }
}

function hasGun(index, t) {
  var count = 0;
  var inventory = t.player.getInventory().getItems();

  for (var i = 0; i < inventory.length; i++) {
    print(inventory[i].getName());

    if (inventory[i].getName() == itemIds[index]) {
      inventory[i].setStackSize(inventory[i].getStackSize() - 1);
      payOut(medPrices[index] - deal, t);
      return true;
    }
  }

  return false;
}

function payOut(amount, t) {
  print("paying out: " + amount);
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var cash = amount;

  while (cash > 0) {
    print(cash);

    if (cash >= 64) {
      var moneyString = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: 64b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}";
      var money64 = NpcAPI.stringToNbt(moneyString);
      t.player.giveItem(t.player.getWorld().createItemFromNbt(money64));
      cash = cash - 64;
    } else {
      var moneyOther = NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: " + cash + "b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}");
      t.player.giveItem(t.player.getWorld().createItemFromNbt(moneyOther));
      cash = 0;
    }
  }
}

function optionStuff(t, oSlot) {
  var parsedCount = parseInt(stock[oSlot]);

  if (stock[oSlot] > 0) {
    if (hasGun(startIndex + oSlot, t)) {
      parsedCount--;
      stock[oSlot] = parsedCount.toString();
      t.npc.say("Thank you for the purchase");
    } else {
      t.npc.sayTo(t.player, "Sorry, you don't have that gun. " + itemIds[startIndex + oSlot]);
    }
  } else {
    t.npc.say("I don't need any more of that one.");
  }
}