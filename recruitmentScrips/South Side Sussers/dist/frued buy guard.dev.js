"use strict";

function dialogOption(t) {
  if (t.dialog.getId() == 117 && t.option.getSlot() == 0) {
    if (buy(300, t)) {
      t.npc.executeCommand("noppes clone spawn Guard 5 135 70 177");
    } else {
      t.npc.say("that isn't enough");
    }
  }
} //needs buy function from server