"use strict";

function interact(t) {
  var faction = t.npc.getFaction().getId();

  if (!(t.player.factionStatus(faction) >= 0)) {
    t.setCanceled(true);
  }
}