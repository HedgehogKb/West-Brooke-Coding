function init(t) {
    t.block.setBlockModel("minecraft:dark_oak_door")
}

function interact(t) {
    print("testing 11")
    var world = t.block.getWorld();
    var time = world.getTime();
    print(time%24000);
    if (!(time%24000 < 12500)) {
        t.setCanceled(true);
        t.block.setOpen(false)
    }
}

function redstone(t) {
    var timers = t.block.getTimers()
    if (!timers.has(1)) {
        t.block.getTimers().start(1,48,false);
    }
}

function timer(t) {
  if (t.id == 1) {
      t.block.setOpen(false);
  }  
}