function tick(t) {
    var npcs = t.player.getWorld().getNearbyEntities(t.player.getPos(), 15, 2);
    var farNpcs = t.player.getWorld().getNearbyEntities(t.player.getPos(), 23, 2);

    for (var i = 0; i < farNpcs.length; i++) {
        var currnpc = farNpcs[i];
        var faction = currnpc.getFaction().getId();
        var showName = currnpc.getDisplay().getShowName();
        if (faction == 3 || faction == 17 || faction == 22) {
            if (t.player.factionStatus(faction) == -1) {
                if (showName != 0) {
                    currnpc.getDisplay().setShowName(2);
                }
            } else {
                currnpc.getDisplay().setShowName(1);
            }
        }
    }

    for (var i = 0; i < npcs.length; i++) {
        var currnpc = npcs[i];
        var faction = currnpc.getFaction().getId();
        var showName = currnpc.getDisplay().getShowName();
        if (faction == 3 || faction == 17 || faction == 22) {
            if (t.player.factionStatus(faction) == -1) {
                if (showName == 1) {
                    currnpc.getDisplay().setShowName(2);
                }
            } else {
                currnpc.getDisplay().setShowName(0);
            }
        }
    }
}