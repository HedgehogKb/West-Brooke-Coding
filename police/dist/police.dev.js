"use strict";

function kill(t) {
  if (t.entity.typeOf(1)) {
    var player = t.entity;
    player.setSpawnpoint(1048, 59, 130);
    var data = player.getStoreddata();
    data.put("Prison", 6000);
  }
}