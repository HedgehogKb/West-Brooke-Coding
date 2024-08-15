var ondate = false;
var datedPlayer = "";

function dialog(t) {
    if (t.dialog.getId() == 398) {
        ondate = true;
        datedPlayer = t.player.getName();
        t.npc.getRole().setFollowing(t.player)
        t.npc.getRole().addDays(1)
    }
}

function tick(t) {
    if (ondate == true) {
        if (!hasDateQuest(t, 78)) {
            ondate = false;
            datedPlayer = ""
            t.npc.getRole().reset()
            t.npc.reset();
        }
    }
}

function hasDateQuest(t, number) {
    var world = t.npc.getWorld()
    var quests = world.getPlayer(datedPlayer).getActiveQuests();
    var hasQuest = false;
    for (var i = 0; i < quests.length; i++) {
        if (quests[i].getId() == number) {
            return true;
        }
    }
    return false;
}