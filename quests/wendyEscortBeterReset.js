function tick(t) {
    var nearby = t.block.getWorld().getNearbyEntities(t.block.getPos(), 4, 2);
    var world = t.block.getWorld();
    for (var i = 0; i < nearby.length; i++) {
        if (nearby[i].getName() == "Beter") {
            var players = world.getAllEntities(1);
            for (var v = 0; v < players.length; v++) {
                var player = players[v]
                if (player.hasActiveQuest(108)) {
                    var quest = getQuest(player, 108);
                    quest.getObjectives(player)[0].setProgress(1);
                }
            }
            nearby[i].getRole().reset()
            nearby[i].setPosition(541, 65,-44)
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