"use strict";

function dialogOption(t) {
  if (t.dialog.getId() == 99) {
    if (!t.npc.getStoreddata().has("joinCount")) {
      t.npc.getStoreddata().put("joinCount", 0);
    }

    var joinCount = t.npc.getStoreddata().get("joinCount");

    if (t.option.getSlot() == 0) {
      t.npc.say(joinCount);

      if (joinCount < 3) {
        joinCount++;
        t.npc.getStoreddata().put("joinCount", joinCount);
        t.player.addFactionPoints(3, 500);
        t.player.addFactionPoints(17, -500);
        t.player.addFactionPoints(22, -500);
        t.npc.sayTo(t.player, "Ok, you're a member of the South Side Sussers now. It's good to have you.");
      } else {
        t.npc.sayTo(t.player, "Actually, I just remembered that we alreayd had some people join. I'm going to have to turn you away.");
      }
    }
  }
}