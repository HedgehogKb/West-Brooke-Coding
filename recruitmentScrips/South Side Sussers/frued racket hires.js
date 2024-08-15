
function interact(t) {
    if (t.player.hasActiveQuest(33)) {
      if (!npcExists(t, "Anna")) {
        var quest = getQuest(t, 33);
        var max = quest.getObjectives(t.player)[0].getMaxProgress();
        var curProg = quest.getObjectives(t.player)[0].getProgress();
        quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
      } else {
        t.player.removeQuest(33);
        t.npc.say("You were trying to hire Anna, but she already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
      }
    } else if (t.player.hasActiveQuest(35)) {
      if (!npcExists(t, "Carmen") || t.player.getStoreddata().has("CarmenQuest")) {
        var quest = getQuest(t, 35);
        var max = quest.getObjectives(t.player)[0].getMaxProgress();
        var curProg = quest.getObjectives(t.player)[0].getProgress();
        quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
        if (quest.getObjectives(t.player)[0].getProgress() >= max) {
          //t.npc.say("I'm the sus ohio gyatt")
          t.player.getStoreddata().put("CarmenQuest",1)
        }
      } else {
        t.player.removeQuest(35);
        t.npc.say("You were trying to hire Carmen, but she already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
      }
    } else if (t.player.hasActiveQuest(36)) {
      if (!npcExists(t, "Carter")) {
        var quest = getQuest(t, 36);
        var max = quest.getObjectives(t.player)[0].getMaxProgress();
        var curProg = quest.getObjectives(t.player)[0].getProgress();
        quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg, max, t));
      } else {
        t.player.removeQuest(36);
        t.npc.say("You were trying to hire Carter, but he already exists. I removed that quest. If you were tyring to completed a different quest then interact again.");
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