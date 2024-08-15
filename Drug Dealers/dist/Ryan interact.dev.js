"use strict";

function interact(t) {
  if (!t.npc.getStoreddata().has("Players")) {
    t.npc.getStoreddata().put("Players", "");
  }

  var players = t.npc.getStoreddata().get("Players").split(",");
  var completed = true;

  if (t.player.hasActiveQuest(59)) {
    var quests = t.player.getActiveQuests();

    for (var i = 0; i < quests.length; i++) {
      if (quests[i].getId() == 59) {
        var objectives = quests[i].getObjectives(t.player);

        for (var v = 0; v < objectives.length; v++) {
          if (!objectives[v].isCompleted()) {
            completed = false;
          }
        }
      }
    }

    if (completed) {
      var index = includes(t.player.getDisplayName(), players);

      if (!(index > -1)) {
        index = players.length;
        players.push(t.player.getDisplayName());
      }

      if (!t.npc.getTimers().has(index)) {
        t.npc.getTimers().start(index, 5300, false);
      } else {
        t.npc.say("Don't give me drugs when I already have a drug mission. I'm just gonna take them lol.");
      }

      t.npc.getStoreddata().put("Players", players.toString());
    }
  } else {
    completed = false;
  }

  if (!completed && t.player.hasActiveQuest(60)) {
    var quests = t.player.getActiveQuests();
    var completed = true;

    for (var i = 0; i < quests.length; i++) {
      if (quests[i].getId() == 60) {
        var objectives = quests[i].getObjectives(t.player);

        for (var v = 0; v < objectives.length; v++) {
          if (!objectives[v].isCompleted()) {
            completed = false;
          }
        }
      }
    }

    if (completed) {
      var index = includes(t.player.getDisplayName(), players);

      if (!(index > -1)) {
        index = players.length;
        players.push(t.player.getDisplayName());
      }

      if (!t.npc.getTimers().has(index)) {
        t.npc.getTimers().start(index, 5300, false);
      } else {
        t.npc.say("Don't give me drugs when I already have a drug mission. I'm just gonna take them lol.");
      }

      t.npc.getStoreddata().put("Players", players.toString());
    }
  }
}

function includes(value, checkArray) {
  for (var i = 0; i < checkArray.length; i++) {
    if (value.equals(checkArray[i])) {
      return i;
    }
  }

  return -1;
}