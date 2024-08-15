"use strict";

function tick(t) {
  var world = t.block.getWorld();
  var playerHasQuest = false;
  var livExists = false;
  var players = world.getNearbyEntities(t.block.getPos(), 15, 1);
  var hasquest = false;

  for (var i = 0; i < players.length; i++) {
    if (hasDateQuest(t, players[i], 79)) {
      hasquest = true;
    }
  }

  var liv = livNearby(t);

  if (liv != null) {
    if (!hasquest) {
      liv.despawn();
    }
  } else if (hasquest) {
    world.spawnClone(1002, 64, 72, 3, "Liv Date");
  }
}

function hasDateQuest(t, player, number) {
  var hasQuest = false;
  var quests = player.getActiveQuests();

  for (var i = 0; i < quests.length; i++) {
    if (quests[i].getId() == number) {
      return true;
    }
  }

  return false;
}

function livNearby(t) {
  var world = t.block.getWorld();
  var npcs = world.getNearbyEntities(t.block.getPos(), 15, 2);

  for (var i = 0; i < npcs.length; i++) {
    if (npcs[i].getName() == "Liv Date") {
      return npcs[i];
    }
  }

  return null;
}