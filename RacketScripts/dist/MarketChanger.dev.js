"use strict";

function dialogOption(t) {
  var marketRole = t.npc.getRole();

  if (t.dialog.getId() == 325) {
    if (t.option.getSlot() == 0) {
      marketRole.setMarket("drugsMachines");
    } else if (t.option.getSlot() == 1) {
      marketRole.setMarket("drugsChemicals");
    }
  }
}