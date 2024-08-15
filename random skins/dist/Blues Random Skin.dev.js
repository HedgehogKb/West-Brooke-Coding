"use strict";

function init(t) {
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var random = Math.round(Math.random() * 4);
  t.npc.getDisplay().setModel(null);

  if (random == 0) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2024/01/28/wuwa-2015-body-guard-22291393.png?v626");
  } else if (random == 1) {
    t.npc.getDisplay().setModel("customnpcs:customnpcalex");
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2024/03/15/gang-3-22404492.png?v620");
  } else if (random == 2) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2024/06/06/tommy-vercetti-22587458.png?v643");
  } else if (random == 3) {
    t.npc.getDisplay().setModel("customnpcs:customnpcalex");
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2024/03/15/gang-2-22404491.png?v620https://www.minecraftskins.com/uploads/skins/2024/03/15/gang-2-22404491.png?v620");
  } else {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2024/06/15/gangster-yuh-yuh-22611397.png?v643");
  }
}