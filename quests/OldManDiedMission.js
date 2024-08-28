function died(t) {
    if (t.source.getType() == 1) {
        var player = t.source
        if (getQuest(player, 123) != -1) {
            player.removeQuest(123);
            player.startQuest(234);
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i];
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}