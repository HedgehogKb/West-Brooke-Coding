function tick(t) {
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(), 13, 1)
    for (var i = 0; i < players.length; i++) {
        var player = players[i]
        var playerQuest = getQuest(player, 114)
        if (playerQuest != -1) {
            var npcs = world.getNearbyEntities(t.block.getPos(), 20, 2)
            var count = 0
            for (var v = 0; v < npcs.length; v++) {
                if (npcs[v].getDisplay().getName() == "AngryPolice") {
                    count++
                }
            }
            count+=playerQuest.getObjectives(player)[0].getProgress()
            if (count < 3) {
                world.spawnClone(t.block.getX(), t.block.getY()+2, t.block.getZ(), 1, "AngryPolice")
            }
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}

function tick(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(), 24, 1)
    for (var i = 0; i < players.length; i++) {
        var player = players[i]
        var playerQuest = getQuest(player, 118)
        var killQuest = NpcAPI.getQuests().get(120)
        if (playerQuest != -1) {
            var npcs = world.getNearbyEntities(t.block.getPos(), 20, 2)
            var count = 0
            for (var v = 0; v < npcs.length; v++) {
                if (npcs[v].getDisplay().getName() == "Guatemalan Trader") {
                    count++
                }
            }
            if (getQuest(player,120) != -1) {
                count+=killQuest.getObjectives(player)[0].getProgress()
            }
            if (count < 3) {
                world.spawnClone(t.block.getX(), t.block.getY()+2, t.block.getZ(), 1, "Guatemalan Trader")
            }
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}

//
function tick(t) {
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(), 13, 1)
    for (var i = 0; i < players.length; i++) {
        var player = players[i]
        var playerQuest = getQuest(player, 123)
        if (playerQuest != -1) {
            var npcs = world.getNearbyEntities(t.block.getPos(), 20, 2)
            var count = 0
            for (var v = 0; v < npcs.length; v++) {
                if (npcs[v].getDisplay().getName() == "Weird Old Man") {
                    count++
                }
            }
            if (count < 1) {
                world.spawnClone(t.block.getX(), t.block.getY()+2, t.block.getZ(), 1, "Weird Old Man")
            }
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}

//INTERPOL quest first wave
function tick(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(), 35, 1)
    for (var i = 0; i < players.length; i++) {
        var player = players[i]
        var playerQuest = getQuest(player, 126)
        var killQuest = NpcAPI.getQuests().get(126)
        if (playerQuest != -1) {
            var npcs = world.getNearbyEntities(t.block.getPos(), 30, 2)
            var count = 0
            for (var v = 0; v < npcs.length; v++) {
                if (npcs[v].getDisplay().getName() == "INTERPOL Agent") {
                    count++
                }
            }
            if (getQuest(player,120) != -1) {
                count+=killQuest.getObjectives(player)[0].getProgress()
            }
            if (count < 3) {
                world.spawnClone(t.block.getX(), t.block.getY()+2, t.block.getZ(), 1, "INTERPOL Agent")
            }
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}

//INTERPOL quest second wave group 1
function tick(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(), 35, 1)
    for (var i = 0; i < players.length; i++) {
        var player = players[i]
        var playerQuest = getQuest(player, 127)
        var killQuest = NpcAPI.getQuests().get(127)
        if (playerQuest != -1) {
            var npcs = world.getNearbyEntities(t.block.getPos(), 30, 2)
            var count = 0
            for (var v = 0; v < npcs.length; v++) {
                if (npcs[v].getDisplay().getName() == "INTERPOL Agent") {
                    count++
                }
            }
            if (getQuest(player,120) != -1) {
                count+=killQuest.getObjectives(player)[0].getProgress()
            }
            if (count < 3) {
                world.spawnClone(t.block.getX(), t.block.getY()+2, t.block.getZ(), 1, "INTERPOL Agent")
            }
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}
//INTERPOl quest second wave group 2
function tick(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(), 24, 1)
    for (var i = 0; i < players.length; i++) {
        var player = players[i]
        var playerQuest = getQuest(player, 127)
        var killQuest = NpcAPI.getQuests().get(127)
        if (playerQuest != -1) {
            var npcs = world.getNearbyEntities(t.block.getPos(), 30, 2)
            var count = 0
            for (var v = 0; v < npcs.length; v++) {
                if (npcs[v].getDisplay().getName() == "INTERPOL Advanced Agent") {
                    count++
                }
            }
            if (getQuest(player,120) != -1) {
                count+=killQuest.getObjectives(player)[0].getProgress()
            }
            if (count < 2) {
                world.spawnClone(t.block.getX(), t.block.getY()+2, t.block.getZ(), 1, "INTERPOL Advanced Agent")
            }
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}
//INTERPOL quest final wave
function tick(t) {
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var world = t.block.getWorld()
    var players = world.getNearbyEntities(t.block.getPos(), 24, 1)
    for (var i = 0; i < players.length; i++) {
        var player = players[i]
        var playerQuest = getQuest(player, 128)
        var killQuest = NpcAPI.getQuests().get(128)
        if (playerQuest != -1) {
            var npcs = world.getNearbyEntities(t.block.getPos(), 35, 2)
            var count = 0
            for (var v = 0; v < npcs.length; v++) {
                if (npcs[v].getDisplay().getName() == "INTERPOL Experienced Agent") {
                    count++
                }
            }
            if (count < 7) {
                world.spawnClone(t.block.getX(), t.block.getY()+2, t.block.getZ(), 1, "INTERPOL Experienced Agent")
            }
        }
    }
}

function getQuest(player, id) {
    var quests = player.getActiveQuests();
    for (var i = 0; i < quests.length; i++) {
        var cQuest = quests[i]
        if (cQuest.getId() == id) {
            return cQuest;
        }
    }
    return -1
}