function tick(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var world = t.block.getWorld();
    var chest = world.getBlock(975, 69, -252).getContainer();
    var gunScrapsNbt = NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:netherite_scrap\", Count: 32b, tag: {mission: \"gunrunning\", RepairCost: 0, display: {Name: \"{\\\"text\\\":\\\"Gun Parts\\\"}\"}}}");
    var gunScraps = world.createItemFromNbt(gunScrapsNbt);
    var players = world.getNearbyEntities(t.block.getPos(), 8, 1);
    for (var p = 0; p < players.length; p++) {
        var curPlayer = players[p];
        var quest = getQuest(curPlayer, 122);
        if (quest != -1) {
            var items = curPlayer.getInventory().getItems();
            print(items)
            var count = 0
            for (var i = 0; i < items.length; i++) {
                var curItem = items[i];
                if (curItem.getName() == "tac:m249" && count < 3) {
                    if (quest.getObjectives(curPlayer)[0].isCompleted()) {
                        quest.getObjectives(curPlayer)[0].setProgress(quest.getObjectives(curPlayer)[0].getProgress()+1);
                        curItem.setStackSize(0);
                        count++;
                    }
                }
            }
        }
    }

}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i];
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}