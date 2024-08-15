"use strict";

function interact(t) {
  if (t.player.hasActiveQuest(61)) {
    if (!npcExists(t, "Brian")) {
      var quest = getQuest(t, 61);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
    } else {
      t.player.removeQuest(61);
      t.npc.say("You were trying to hire Brian, but he already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  } else if (t.player.hasActiveQuest(62)) {
    if (!npcExists(t, "Ryan")) {
      var quest = getQuest(t, 62);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
    } else {
      t.player.removeQuest(62);
      t.npc.say("You were trying to hire Ryan, but he already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  } else if (t.player.hasActiveQuest(63)) {
    var quest = getQuest(t, 63);
    var max = quest.getObjectives(t.player)[0].getMaxProgress();
    var curProg = quest.getObjectives(t.player)[0].getProgress();
    quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
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