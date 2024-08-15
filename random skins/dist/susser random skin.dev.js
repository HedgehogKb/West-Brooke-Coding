"use strict";

function init(t) {
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var random = Math.floor(Math.random() * 6);
  t.npc.getDisplay().setModel(null);
  t.npc.say(random);

  if (random == 0) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2023/10/14/killua-gon----official--22041909.png?v611");
  } else if (random == 1) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2017/01/10/skin_2017011001261636788.png?v611");
  } else if (random == 2) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2023/05/19/jck-21615367.png?v611");
  } else if (random == 3) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2021/05/03/bldinn-17680018.png?v611");
  } else if (random == 4) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/05/23/blood-gangster-20347681.png?v620"); //t.npc.getDisplay().setModel("customnpcs:customnpcalex");
  } else {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2015/10/17/skin_20151017201054180440.png?v611");
  }
}