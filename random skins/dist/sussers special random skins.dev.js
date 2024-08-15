"use strict";

function init(t) {
  var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
  var random = Math.floor(Math.random() * 6);
  t.npc.say(random); //t.npc.say(random);

  t.npc.getDisplay().setName("Advanced Mission Helper");
  t.npc.getDisplay().setTitle("S.S.S.");
  t.npc.getDisplay().setModel(null);

  if (random == 0) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2021/12/06/-major--mokoto-kusanagi-19474234.png?v611");
    t.npc.getDisplay().setName("Motoko");
    t.npc.getDisplay().setTitle("S.S.S. Advanced Mission Helper");
    t.npc.getDisplay().setModel("customnpcs:customnpcalex");
  } else if (random == 1) {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/01/02/kyoshi-warrior-19630447.png?v611");
    t.npc.getDisplay().setName("Suki");
    t.npc.getDisplay().setTitle("S.S.S. Advanced Mission Helper");
    t.npc.getDisplay().setModel("customnpcs:customnpcalex");
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