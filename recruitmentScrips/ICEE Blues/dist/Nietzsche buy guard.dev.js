"use strict";

function dialogOption(t) {
  if (t.dialog.getId() == 391 && t.option.getSlot() == 0) {
    if (buy(300, t)) {
      t.npc.executeCommand("noppes clone spawn \"I.B. Guard\" 3 318 64 -160");
    } else {
      t.npc.say("that isn't enough");
    }
  }
}