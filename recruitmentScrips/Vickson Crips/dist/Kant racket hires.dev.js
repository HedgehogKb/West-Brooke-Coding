"use strict";

function interact(t) {
  if (t.player.hasActiveQuest(68)) {
    if (!npcExists(t, "Ronald")) {
      var quest = getQuest(t, 68);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
    } else {
      t.player.removeQuest(68);
      t.npc.say("You were trying to hire Ronald, but he already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  } else if (t.player.hasActiveQuest(69)) {
    if (!npcExists(t, "Bericka")) {
      var quest = getQuest(t, 69);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));

      if (quest.getObjectives(t.player)[0].getProgress() >= max) {
        //t.npc.say("I'm the sus ohio gyatt")
        t.player.getStoreddata().put("BerickaQuest", 1);
      }
    } else {
      t.player.removeQuest(69);
      t.npc.say("You were trying to hire Bericka, but she already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  } else if (t.player.hasActiveQuest(70)) {
    if (!npcExists(t, "Perseus")) {
      var quest = getQuest(t, 70);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
    } else {
      t.player.removeQuest(70);
      t.npc.say("You were trying to hire Perseus, but he already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  }
}
/*function getQuest(t, id) {
    var quests = t.player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
}

function cashProgress(amount, max, t){
    var count = amount;
    var inventory = t.player.getInventory().getItems();
    for (var i = 0; i < inventory.length; i++){
        if (inventory[i].getNbt().getByte("IsMoney") == 1) {
            if (count + inventory[i].getStackSize() >= max) {
                inventory[i].setStackSize(max-count);
                return max;
            } else {
                count = count + inventory[i].getStackSize();
                inventory[i].setStackSize(0);

            }
        }
    }
    return count;
}

function npcExists(t, name){
    var world = t.player.getWorld();
    var npcs = world.getAllEntities(2);
    for (var i = 0; i < npcs.length; i++){
        if (npcs[i].getName().equals(name)) {
            return true;
        }
    }
    return false;
}*/