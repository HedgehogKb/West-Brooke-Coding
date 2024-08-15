function interact(t) {
    
    if (t.player.hasActiveQuest(64)){
        if (!npcExists(t,"Alibi")) {
            var quest = getQuest(t, 64);
            var max = quest.getObjectives(t.player)[0].getMaxProgress();
            var curProg = quest.getObjectives(t.player)[0].getProgress()
            quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg,max,t));
        } else {
            t.player.removeQuest(64);
            t.npc.say("You were trying to hire Alibi, but she already exists. I removed that quest. If you were tyring to completed a different quest then interact again.")
        }
    } else if (t.player.hasActiveQuest(65)) {

            var quest = getQuest(t, 65);
            var max = quest.getObjectives(t.player)[0].getMaxProgress();
            var curProg = quest.getObjectives(t.player)[0].getProgress()
            quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg,max,t));
    } else if (t.player.hasActiveQuest(66)) {
       
            var quest = getQuest(t, 66);
            var max = quest.getObjectives(t.player)[0].getMaxProgress();
            var curProg = quest.getObjectives(t.player)[0].getProgress()
            quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg,max,t));
    }
    else if (t.player.hasActiveQuest(67)) {
       
            var quest = getQuest(t, 67);
            var max = quest.getObjectives(t.player)[0].getMaxProgress();
            var curProg = quest.getObjectives(t.player)[0].getProgress()
            quest.getObjectives(t.player)[0].setProgress(cashProgress(curProg,max,t));
            if (quest.getObjectives(t.player)[0].getMaxProgress() == quest.getObjectives(t.player)[0].getProgress()) {
                t.npc.executeCommand("/noppes clone spawn \"Gun Running Guard\" 6 ~ ~ ~")
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