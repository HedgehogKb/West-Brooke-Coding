"use strict";

function tick(t) {
  if (!t.npc.getRole().isFollowing()) {
    var nearby = t.npc.getWorld().getNearbyEntities(t.npc.getPos(), 10, 1);
    var world = t.npc.getWorld();

    for (var v = 0; v < nearby.length; v++) {
      var player = nearby[v];

      if (player.hasActiveQuest(108)) {
        var quest = getQuest(player, 108);

        if (!quest.getObjectives(player)[0].getProgress() == 1) {
          t.npc.getRole().setFollowing(player);
          t.npc.sayTo(player, "I'm scared! Please bring me home!");
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