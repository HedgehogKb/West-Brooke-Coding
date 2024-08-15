function dialogOption(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    if (t.dialog.getId() == 103) {
        if (t.option.getSlot() == 3) {
            var world = t.player.getWorld()
            world.spawnClone(1013, 64, 220, 5, "Blue")
            var moneyString = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: 1b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}"
            var money64 = NpcAPI.stringToNbt(moneyString);
            t.player.giveItem(t.player.getWorld().createItemFromNbt(money64));
        }
    }
}