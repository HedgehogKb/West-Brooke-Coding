"use strict";

function dialogOption(t) {
  var marketRole = t.npc.getRole();

  if (t.dialog.getId() == 394) {
    if (t.option.getSlot() == 0) {
      marketRole.setMarket("drugsMachines");
    } else if (t.option.getSlot() == 1) {
      marketRole.setMarket("drugsChemicals");
    }
  }
}