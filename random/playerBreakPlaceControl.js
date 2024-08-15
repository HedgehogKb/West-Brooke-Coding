function interact(t) {
    //1 is creative mode meaning players can interact with these in creative mode
    if (!t.player.getGamemode() == 1) {
        if (t.type == 1) {
            //var mod = t.target.getName().split(":")[0]
            if (t.target.getTypeName() == "minecraft:item_frame") {
                print("canceled");
                t.setCanceled(true);
                return;
            }
        }
    }
}

function broken(t) {
    if (!t.player.getGamemode() == 1) {

    }
}

function place(t) {
    if (!t.player.getGamemode() == 1) {
        
    }
}