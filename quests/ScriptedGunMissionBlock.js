function tick(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var world = t.block.getWorld();
    var chest = world.getBlock(1496, 71, 223).getContainer()
    var items = chest.getItems();
    var gunScrapsNbt = NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:netherite_scrap\", Count: 32b, tag: {mission: \"gunrunning\", RepairCost: 0, display: {Name: \"{\\\"text\\\":\\\"Gun Parts\\\"}\"}}}");
    var gunScraps = world.createItemFromNbt(gunScrapsNbt);
    var count = 0
    for (var i = 0; i < items.length; i++) {
        var curItem = items[i]
        if (curItem.getItemName() == "Netherite Scrap" && curItem.getDisplayName() == "Gun Parts") {
            count+= curItem.getStackSize()
        }
    }
    if (count < 32) {
        if (world.getNearbyEntities(t.block.getPos(), 15, 1).length < 1) {
            chest.setSlot(0, gunScraps)
        }
    }
}