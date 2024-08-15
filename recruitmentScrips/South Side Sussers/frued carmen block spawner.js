function tick(t) {
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(),20,1)
    var npcs = world.getNearbyEntities(t.block.getPos(),20,2)
    var carmenExists = false
    for (var i = 0; i < npcs.length; i++) {
        if (npcs[i].getName() == "Carmen") {
            carmenExists = true
        }
    }
    for (var i = 0; i < players.length; i++) {
        if (players[i].getStoreddata().has("CarmenQuest") && !carmenExists) {
            players[i].getStoreddata().remove("CarmenQuest")
            world.spawnClone(568, 65, -49, 5,"Carmen")
        }
    }
}