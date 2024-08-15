"use strict";

var money = 240;

function init(t) {
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  t.item.setTexture("minecraft:flower_pot");
  t.item.setCustomName("Wallet");
  var strings = ["Right click to empty Wallet", "§6Cash in wallet:§2 " + money.toString()];
  t.item.setLore(strings);
  t.item.setMaxStackSize(1);
}

function interact(t) {
  payOut(money, t);
  t.item.setStackSize(0);
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