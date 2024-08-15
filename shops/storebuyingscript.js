function dialogOption(t) {
    if (t.dialog.getId() == 0) {
        if (t.option.getSlot() == 0) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(1000, t)) {
                t.player.giveItem("minecraft:stone",2)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 1) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(2000, t)) {
                t.player.giveItem("minecraft:stone",2)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        }
    }
}


function buyCredit(cost, t) {
    var scoreboard = t.player.getWorld().getScoreboard().getObjective("Money");
    var playerScore = scoreboard.getScore(t.player.getDisplayName());
    if (playerScore.getValue() >= cost) {
        playerScore.setValue(playerScore.getValue() - cost);
        return true;
    } else { 
        return false;
    }
}


function buy(cost, t){
    var count = 0;
    var inventory = t.player.getInventory().getItems();

    for (var i = 0; i < inventory.length; i++){
        if (inventory[i].getNbt().getByte("IsMoney") == 1){
            count = count + inventory[i].getStackSize();
        }
    }
    //print(count);
    t.npc.say(count);
    if (count >= cost){
        var deleted=cost;
        for (var i = 0; i < inventory.length; i++){
            //print(inventory[i].getNbt().getByte());
            if (inventory[i].getNbt().getByte("IsMoney") == 1){
                //print("test");
                if (deleted > inventory[i].getStackSize()){
                    //print("test");
                    deleted = deleted - inventory[i].getStackSize();
                    inventory[i].setStackSize(0);
                } else {
                    inventory[i].setStackSize(inventory[i].getStackSize()-deleted);
                    return true;
                }
            }
        }
    }
    return false;
}

