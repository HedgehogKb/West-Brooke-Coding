function tick(t) {
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(),20,1)
    var npcs = world.getNearbyEntities(t.block.getPos(),20,2)
    var berickaExists = false
    for (var i = 0; i < npcs.length; i++) {
        if (npcs[i].getName() == "Bericka") {
            berickaExists = true
        }
    }
    for (var i = 0; i < players.length; i++) {
        if (players[i].getStoreddata().has("BerickaQuest") && !berickaExists) {
            players[i].getStoreddata().remove("BerickaQuest")
            world.spawnClone(1059, 65, 169, 6,"Bericka")
        }
    }
}