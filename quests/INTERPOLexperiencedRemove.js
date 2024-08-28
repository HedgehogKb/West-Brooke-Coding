function tick(t) {
    var world = t.npc.getWorld()
    var players = world.getNearbyEntities(t.npc.getPos(), 25, 1)
    var despawn = true
    for (var i = 0; i < players.length; i++) {
        if (getQuest(players[i],128)) {
            despawn = false
        }
    }
    if (despawn) {
        t.npc.despawn()
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}