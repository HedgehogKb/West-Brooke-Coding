"use strict";

function interact(t) {
  if (t.player.hasActiveQuest(101)) {
    if (!npcExists(t, "Coen")) {
      var quest = getQuest(t, 101);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
    } else {
      t.player.removeQuest(101);
      t.npc.say("You were trying to hire Coen, but he already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  } else if (t.player.hasActiveQuest(103)) {
    if (!npcExists(t, "Liv") || t.player.getStoreddata().has("LivQuest")) {
      var quest = getQuest(t, 103);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));

      if (quest.getObjectives(t.player)[0].getProgress() >= max) {
        //t.npc.say("I'm the sus ohio gyatt")
        t.player.getStoreddata().put("LivQuest", 1);
      }
    } else {
      t.player.removeQuest(103);
      t.npc.say("You were trying to hire Liv, but she already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  } else if (t.player.hasActiveQuest(102)) {
    if (!npcExists(t, "Brycen")) {
      var quest = getQuest(t, 102);
      var max = quest.getObjectives(t.player)[0].getMaxProgress();
      var curProg = quest.getObjectives(t.player)[0].getProgress();
      quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
    } else {
      t.player.removeQuest(102);
      t.npc.say("You were trying to hire Brycen, but he already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
    }
  }
}
/*function getQuest(t, id) {
  var quests = t.player.getActiveQuests();

  for (var i = 0; i < quests.length; i++) {
    var cQuest = quests[i];

    if (cQuest.getId() == id) {
      return cQuest;
    }
  }
}

function cashProgress(amount, max, t) {
  var count = amount;
  var inventory = t.player.getInventory().getItems();

  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].getNbt().getByte("IsMoney") == 1) {
      if (count + inventory[i].getStackSize() >= max) {
        inventory[i].setStackSize(max - count);
        return max;
      } else {
        count = count + inventory[i].getStackSize();
        inventory[i].setStackSize(0);
      }
    }
  }

  return count;
}

function npcExists(t, name) {
  var world = t.player.getWorld();
  var npcs = world.getAllEntities(2);

  for (var i = 0; i < npcs.length; i++) {
    if (npcs[i].getName().equals(name)) {
      return true;
    }

  }

  return false;
}*/