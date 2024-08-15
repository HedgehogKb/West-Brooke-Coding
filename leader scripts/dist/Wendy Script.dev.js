"use strict";

function timer(t) {
  var ndata = t.npc.getStoreddata();
  var canPayed = ndata.get("CanGetPay").split(",");
  canPayed.push(ndata.get("PlayerList").split(",")[t.id]);
  ndata.put("CanGetPay", canPayed.toString());
  t.npc.say(ndata.get("CanGetPay").toString());
}

function contains(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }

  return -1;
}

function giveMoney(t, amount) {
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var cash = amount;

  while (cash > 0) {
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

function inventClear(t) {
  var items = t.player.getInventory().getItems();

  for (var i = 0; i < items.length; i++) {
    if (items[i].getItemName() == "air") {
      return true;
    }
  }

  return false;
}

function dialogOption(t) {
  if (t.dialog.getId() == 209) {
    if (t.option.getSlot() == 3) {
      //need to put in correct id
      var data = t.player.getStoreddata();
      var ndata = t.npc.getStoreddata();

      if (!ndata.has("CanGetPay")) {
        ndata.put("CanGetPay", "");
      }

      if (!ndata.has("PlayerList")) {
        ndata.put("PlayerList", "");
      }

      var canPayed = ndata.get("CanGetPay").split(",");
      var playerList = ndata.get("PlayerList").split(",");

      if (contains(t.player.getDisplayName(), playerList) == -1) {
        playerList.push(t.player.getDisplayName());
        ndata.put("PlayerList", playerList.toString());
        t.npc.getTimers().start(playerList.length - 1, 120000, false);
      }

      if (contains(t.player.getDisplayName(), canPayed) != -1) {
        canPayed.splice(canPayed.indexOf(t.player.getDisplayName()), 1);
        var location = contains(t.player.getDisplayName(), playerList);
        t.npc.getTimers().start(location, 120000, false);
        ndata.put("CanGetPay", canPayed.toString());
        var payOutAmount = Math.round(0.8666 * t.player.getFactionPoints(17) - 1100);
        giveMoney(t, payOutAmount);
        t.npc.say("Ok I payed you now.");
      } else {
        var location = contains(t.player.getDisplayName(), playerList);

        if (!t.npc.getTimers().has(location)) {
          t.npc.getTimers().start(location, 10, false);
        }

        t.npc.sayTo(t.player, "Sorry, you can't get your paycheck right now. Come back later.");
      }
    }
  }
}