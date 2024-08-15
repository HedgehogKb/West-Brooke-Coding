function tick(t) {
    var nearby = t.block.getWorld().getNearbyEntities(t.block.getPos(), 30, 1);
    var world = t.block.getWorld();
    for (var v = 0; v < nearby.length; v++) {
        var player = nearby[v]
        if (player.hasActiveQuest(34)) {
            var quest = getQuest(player, 34);
            if (!quest.getObjectives(player)[0].getProgress() == 1) {
                if (!blueExists(t)) {
                    t.block.getWorld().spawnClone(1013, 64, 220, 5, "Blue")
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
  }

function blueExists(t) {
    var npcs = t.block.getWorld().getAllEntities(2);
    for (var i = 0; i < npcs.length; i++) {
        if (npcs[i].getName() == "Blue") {
            return true;
        }
    }
}