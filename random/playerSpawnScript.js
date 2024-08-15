//for what happens when spawning the first time

function init(t) {
    var data = t.player.getStoreddata()
    if (!data.has("first")) {
        var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
        data.put("first",1);
        t.player.startQuest(131);
        NpcAPI.executeCommand(t.player.getWorld(),"/team join Citizen " + t.player.getDisplayName())

    }
}