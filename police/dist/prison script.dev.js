"use strict";

function tick(t) {
  var world = t.block.getWorld();
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var nearby = world.getNearbyEntities(t.block.getPos(), 7, 1);

  for (var i = 0; i < nearby.length; i++) {
    var player = nearby[i];
    var data = player.getStoreddata();
    var prisonTimer = data.get("Prison");

    if (data.has("Prison")) {
      if (prisonTimer == 6000) {
        NpcAPI.executeCommand(t.block.getWorld(), "tellraw " + player.getName() + " {\"text\":\"<Police> You're going to be locked up here for a long time (5 minutes). Get comfortable.\"}");
      }

      if (prisonTimer > 0) {
        data.put("Prison", prisonTimer - 10);
      } else {
        data.remove("Prison");
        player.setPosition(1040, 64, 130);
        player.setSpawnpoint(1040, 64, 130);
        player.addFactionPoints(8, 910 - player.getFactionPoints(8));
        NpcAPI.executeCommand(t.block.getWorld(), "tellraw " + player.getName() + " {\"text\":\"<Police> We let you off with a slap on the wrist this time. We might not be so easy on you again boy.\"}");
      }
    }
  }
}