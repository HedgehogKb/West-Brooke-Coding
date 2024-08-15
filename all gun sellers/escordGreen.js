function tick(t){
    var world = t.block.getWorld();
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var nearby = world.getNearbyEntities(t.block.getPos(), 7, 2);
    for (var i = 0; i < nearby.length; i++) {
        if (nearby[i].getName() == "Green") {
            //print("his name is green");
            for (var v = 0; v < world.getAllPlayers().length; v ++) {
                //print("test")
                if (world.getAllPlayers()[v].hasActiveQuest(34)) {
                    NpcAPI.getQuests().get(34).getObjectives(world.getAllPlayers()[v])[0].setProgress(1);
                    //print("test")
                }
            }
        }
    }
}