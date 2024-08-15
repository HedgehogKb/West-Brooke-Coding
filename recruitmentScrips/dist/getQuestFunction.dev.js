"use strict";

function getQuest(t, id) {
  var quests = t.player.getActiveQuests();

  for (var i = 0; i < quests.length; i++) {
    var cQuest = quests[i];

    if (cQuest.getId() == id) {
      return cQuest;
    }
  }
}