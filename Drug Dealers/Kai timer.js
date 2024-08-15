function timer(t){
    var players = t.npc.getStoreddata().get("Players").split(",");
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var money64 = NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: 64b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}");
    var item = t.npc.getWorld().createItemFromNbt(money64);
    t.npc.getWorld().getPlayer(players[t.id]).giveItem(item);
    t.npc.getWorld().getPlayer(players[t.id]).giveItem(item);
    t.npc.getWorld().getPlayer(players[t.id]).giveItem(item);
    money64.setByte("Count",32);
    item = t.npc.getWorld().createItemFromNbt(money64);
    t.npc.getWorld().getPlayer(players[t.id]).giveItem(item);
    t.npc.getAi().setMovingType(0);
    t.npc.sayTo(  t.npc.getWorld().getPlayer(players[t.id]), "There's the money I collected from your drugs. Thanks.");
    t.npc.reset();
}

function died(t){
    t.npc.getTimers().clear()
    print("cleared")
    t.npc.getAi().setMovingType(0);
    t.npc.reset();
}