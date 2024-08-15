"use strict";

function dialog(t) {
  if (t.dialog.getId() == 106) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var item = t.player.getWorld().createItemFromNbt(NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:iron_sword\", Count: 1b, tag: {RepairCost: 0, Damage: 0, display: {Name: \"{\\\"text\\\":\\\"Antique Sword\\\"}\"}}}"));
    t.player.giveItem(item);
  }
}

function timer(t) {
  var ndata = t.npc.getStoreddata();
  var canPayed = ndata.get("CanGetPay").split(",");
  canPayed.push(ndata.get("PlayerList").split(",")[t.id]);
  print(ndata.get("PlayerList").split(",")[t.id]);
  ndata.put("CanGetPay", canPayed.toString());
  print("this fellow can be payed: " + ndata.get("CanGetPay").toString());
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
  print("paying out: " + amount);
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var cash = amount;

  while (cash > 0) {
    print(cash);

    if (cash >= 64) {
      var moneyString = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: 64b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}";
      var money64 = NpcAPI.stringToNbt(moneyString);
      t.player.giveItem(t.player.getWorld().createItemFromNbt(money64));
      /*if(inventClear(t)){
          print("summoning")
          t.npc.executeCommand("summon minecraft:item ~ ~ ~ {Motion: [0.0d, -0.04d, 0.0d], Health: 5s, Invulnerable: 0b, Air: 300s, OnGround: 1b, PortalCooldown: 0, Rotation: [344.1453f, 0.0f], Thrower: [I; 1079640599, 550783490, -1209457026, 332286593], FallDistance: 0.0f, Item: {ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: 64b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}, CanUpdate: 1b, Pos: [545.410775312748d, 64.0d, -85.5053306060201d], PickupDelay: 0s, Fire: -1s, ForgeCaps: {\"pollen:synced_data\": {}}, UUID: [I; 2031841727, -1763422345, -1869431697, 1776762600], Lifespan: 6000, Age: 450s}")
      }*/

      cash = cash - 64;
    } else {
      var moneyOther = NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: " + cash + "b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}");
      t.player.giveItem(t.player.getWorld().createItemFromNbt(moneyOther));
      /*if(inventClear(t)){
          print("summoning2")
          t.npc.executeCommand("summon minecraft:item ~ ~ ~ {Motion: [0.0d, -0.04d, 0.0d], Health: 5s, Invulnerable: 0b, Air: 300s, OnGround: 1b, PortalCooldown: 0, Rotation: [344.1453f, 0.0f], Thrower: [I; 1079640599, 550783490, -1209457026, 332286593], FallDistance: 0.0f, Item: {ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: "+cash+"b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}, CanUpdate: 1b, Pos: [545.410775312748d, 64.0d, -85.5053306060201d], PickupDelay: 0s, Fire: -1s, ForgeCaps: {\"pollen:synced_data\": {}}, UUID: [I; 2031841727, -1763422345, -1869431697, 1776762600], Lifespan: 6000, Age: 450s}")
      }*/

      cash = 0;
    }
  }
}

function inventClear(t) {
  var items = t.player.getInventory().getItems();

  for (var i = 0; i < items.length; i++) {
    print(items[i].getItemName());

    if (items[i].getItemName() == "air") {
      return true;
    }
  }

  return false;
}

function dialogOption(t) {
  if (t.dialog.getId() == 101) {
    if (t.option.getSlot() == 2) {
      //need to put in correct id
      var data = t.player.getStoreddata();
      var ndata = t.npc.getStoreddata(); //ndata.remove("CanGetPay");
      //ndata.remove("PlayerList")
      //t.npc.getTimers().clear();

      if (!ndata.has("CanGetPay")) {
        ndata.put("CanGetPay", "");
        print("can't doens't pay doens't can't");
      }

      if (!ndata.has("PlayerList")) {
        ndata.put("PlayerList", "");
        print("doesn't have");
      } //ndata.put("PlayerList","one,two")


      var canPayed = ndata.get("CanGetPay").split(",");
      var playerList = ndata.get("PlayerList").split(",");
      print("canPayed: " + canPayed.toString());
      print("playerlist: " + playerList.toString() + " test: " + playerList.length);
      print("has timer: " + t.npc.getTimers().has(1));

      if (contains(t.player.getDisplayName(), playerList) == -1) {
        print("testing here");
        playerList.push(t.player.getDisplayName());
        ndata.put("PlayerList", playerList.toString());
        t.npc.getTimers().start(playerList.length - 1, 120000, false);
        print(playerList + " now data list: " + ndata.get("PlayerList"));
      }

      print("this test " + contains(t.player.getDisplayName(), canPayed));

      if (contains(t.player.getDisplayName(), canPayed) != -1) {
        print("ok you can get payed");
        print(canPayed.toString());
        canPayed.splice(playerList.indexOf(t.player.getDisplayName()), 1);
        print(canPayed.toString());
        var location = contains(t.player.getDisplayName(), playerList);
        print("doing long long timer!!!!!! ASLJDSAL");
        t.npc.getTimers().start(location, 120000, false);
        ndata.put("CanGetPay", canPayed.toString());
        var payOutAmount = Math.round(0.8666 * t.player.getFactionPoints(3) - 1100);
        print(payOutAmount);
        giveMoney(t, payOutAmount);
        t.npc.say("Ok I payed you now.");
      } else {
        var location = contains(t.player.getDisplayName(), playerList);
        print(location + " has? " + t.npc.getTimers().has(location));

        if (!t.npc.getTimers().has(location)) {
          t.npc.getTimers().start(location, 400, false);
          print("starting");
        }

        t.npc.sayTo(t.player, "Sorry, you can't get your paycheck right now. Come back later.");
      }
    }
  }
}