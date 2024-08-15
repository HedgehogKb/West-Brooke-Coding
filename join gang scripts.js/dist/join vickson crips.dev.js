"use strict";

function dialogOption(t) {
  if (t.dialog.getId() == 444) {
    if (!t.npc.getStoreddata().has("joinCount")) {
      t.npc.getStoreddata().put("joinCount", 0);
    }

    var joinCount = t.npc.getStoreddata().get("joinCount");

    if (t.option.getSlot() == 0) {
      if (joinCount < 3) {
        joinCount++;
        t.npc.getStoreddata().put("joinCount", joinCount);
        t.player.addFactionPoints(22, 500);
        t.player.addFactionPoints(3, -500);
        t.player.addFactionPoints(17, -500);
        t.npc.sayTo(t.player, "Welcome to the gang. We're going to go places, so get to work soon.");
      } else {
        t.npc.sayTo(t.player, "Hold on. I just took in some guys yesterday. I can't get more, sorry, but I have to turn you away.");
      }
    }
  }
}