"use strict";

function init(t) {
  t.npc.getTimers().clear();

  if (!t.npc.getTimers().has(46)) {
    //48 lol
    t.npc.getTimers().start(46, 700, true);
  }
}

function timer(t) {
  //t.npc.say("switched")
  var start = t.npc.getStoreddata().get("Start"); //t.npc.say(start);

  var stockArr = [0, 0, 0];

  if (start >= 6) {
    //print("uh oh");
    t.npc.getStoreddata().put("Start", 0);
  } else {
    print(start + 3);
    t.npc.getStoreddata().put("Start", start + 3);
  }

  if (!t.npc.getStoreddata().has("Stock")) {
    t.npc.getStoreddata().put("Stock", "");
  }

  var stock = t.npc.getStoreddata().get("Stock"); //t.npc.say(t.npc.getStoreddata().get("Start"));

  for (var i = 0; i < 3; i++) {
    stockArr[i] = Math.round(Math.random() * 10 + 1);
  }

  t.npc.getStoreddata().put("Stock", stockArr.toString());
}