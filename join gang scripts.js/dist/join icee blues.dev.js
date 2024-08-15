"use strict";

function dialogOption(t) {
  if (t.dialog.getId() == 446) {
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
        t.npc.sayTo(t.player, "It's great to have you in the ICEE Blues. Please get to work soon.");
      } else {
        t.npc.sayTo(t.player, "Wait, I fogot that I already took in a bunch of guys recently. It's kind of a business risk, so I'll have to turn you away.");
      }
    }
  }
}