"use strict";

function tick(t) {
  var world = t.block.getWorld();
  var players = world.getNearbyEntities(t.block.getPos(), 20, 1);
  var npcs = world.getNearbyEntities(t.block.getPos(), 20, 2);
  var livExists = false;

  for (var i = 0; i < npcs.length; i++) {
    if (npcs[i].getName() == "Liv") {
      livExists = true;
    }
  }

  for (var i = 0; i < players.length; i++) {
    if (players[i].getStoreddata().has("LivQuest") && !livExists) {
      players[i].getStoreddata().remove("LivQuest");
      world.spawnClone(1126, 64, 245, 3, "Liv");
    }
  }
}