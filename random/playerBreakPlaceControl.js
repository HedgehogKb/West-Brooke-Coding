function interact(t) {
    if (!t.player.getGamemode() == 0) {
        //getting player states to determine action
        //I want players to interact with chests, but if they're crouching they would place a block instead which I don't want 
        var crouching = t.player.isSneaking();
        var heldItem = t.player.getMainhandItem();
        var itemName = heldItem.getName()

        if (crouching) {

            //if interact with entity
            if (t.type == 1){

                //if it's an item frame stop interaction and end script
                if (t.target.getTypeName() == "minecraft:item_frame") {
                    print("canceled");
                    t.setCanceled(true);
                    return;
                }

            //if tyring to crouch click an item from one of these mods then don't allow it
            } else if (t.type == 2){
                var mod = t.target.getName().split(":")[0]
                if (mod == "minecraft" || mod == "mcwdoors" || mod == "customnpcs") {
                    t.setCanceled(true);
                } 
            }

            //if trying to do it with one of these items then it's fine and end script
            if (itemName == "minecraft:barrel" || itemName == "minecraft:chest" || itemName == "minecraft:mycelium" || itemName == "minecraft:farmland") {
                t.setCanceled(false);
                return;   
            }

        } else {

            //if tyring to place one of these items then allow it
            if (itemName == "minecraft:barrel" || itemName == "minecraft:chest" || itemName == "minecraft:mycelium" || itemName == "minecraft:farmland") {
                return;   
            }

            //if trying to click certain blocks like chest or barrel then allow it (keep in mind the player isn't crouching right now)
            if (t.type == 2) {
                var mod = t.target.getName().split(":")[0]
                var block = t.target.getName()
                if (mod == "minecraft") {
                    t.setCanceled(true);
                    if (block == "minecraft:chest" || block == "minecraft:barrel" || block == "minecraft:mycelium" || block == "minecraft:farmland") {
                        t.setCanceled(false);
                        return;
                    }
                } else if (mod == "mcwdoors" || mod == "customnpcs") {
                    t.setCanceled(true);
                } 
            }
        }
    }
}

function broken(t) {
    if (!t.player.getGamemode() == 0) {
        var mod = t.target.getName().split(":")[0]
        if (mod == "minecraft" || mod == "mcwdoors" || mod == "customnpcs") {
            t.setCanceled(true);
            var block = t.block.getName();
            if (block == "minecraft:chest" || block == "minecraft:barrel" || block == "minecraft:mycelium" || block == "minecraft:farmland") {
                t.setCanceled(false);
                return;
            }
        }
    }
}