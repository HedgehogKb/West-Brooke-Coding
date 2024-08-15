function dialogOption(t) {
    if (!(t.dialog.getId() == 510 || t.dialog.getId() == 511)) {
        return;
    }
    if (!(t.option.getSlot() == 0 || t.option.getSlot() == 1)) {
        return;
    }

    var npcData = t.npc.getStoreddata();
    var seenPlayersList = npcData.get("seenPlayers").split(",");
    var currentLoansList = npcData.get("currentLoans").split(",");
    var currentLoanValue = npcData.get("currentLoanValue").split(",");
    var playerName = t.player.getDisplayName();


    //making sure the npc has seen the player and they've taken out a loan
    if (seenPlayersList.indexOf(playerName) != -1) {
        var loanIndex = currentLoansList.indexOf(playerName)
        if (loanIndex != -1) {
            //checking if payed back with cash or card
            if (t.option.getSlot() == 0) {
                var count = 0;
                var inventory = t.player.getInventory().getItems();
            
                for (var i = 0; i < inventory.length; i++){
                    if (inventory[i].getNbt().getByte("IsMoney") == 1){
                        count = count + inventory[i].getStackSize();
                    }
                }
                if (count >= currentLoanValue[loanIndex]) {
                    buy(currentLoanValue[loanIndex],t)
                    //removing loan value because it was payed off.
                    currentLoanValue.splice(loanIndex, 1)
                    currentLoansList.splice(loanIndex, 1)
                    npcData.put("currentLoans",currentLoansList.toString());
                    npcData.put("currentLoanValue",currentLoanValue.toString());
                    //checking of the loan was outstanding and if so giving account back
                    if (!t.npc.getTimers().has(-1 * seenPlayersList.indexOf(playerName)-1)) {
                        t.npc.sayTo(t.player, "You payed back the loan and now have access to your account again.")
                        t.player.addFactionPoints(5,1000);
                    } else {
                        t.npc.sayTo(t.player, "Thank you for paying back the loan.")

                        t.npc.getTimers().stop(-1 * seenPlayersList.indexOf(playerName)-1)
                    }
                } else {
                    buy(count,t)
                    currentLoanValue[loanIndex] = currentLoanValue[loanIndex] - count;
                    npcData.put("currentLoanValue",currentLoanValue.toString());
                    t.npc.sayTo(t.player,"The value of the loan is now: $"+ currentLoanValue[loanIndex] + ". Please pay it back.")
                }
            } else{
                var count = t.npc.getWorld().getScoreboard().getObjective("Money").getScore(playerName).getValue();
                if (count >= currentLoanValue[loanIndex]) {
                    buyCredit(currentLoanValue[loanIndex],t)

                    //removing loan value because it was payed off.
                    currentLoanValue.splice(loanIndex, 1)
                    currentLoansList.splice(loanIndex, 1)
                    npcData.put("currentLoans",currentLoansList.toString());
                    npcData.put("currentLoanValue",currentLoanValue.toString());
                    //checking of the loan was outstanding and if so giving account back
                    if (!t.npc.getTimers().has(-1 * seenPlayersList.indexOf(playerName)-1)) {
                        t.npc.sayTo(t.player, "You payed back the loan and now have access to your account again.")
                        t.player.addFactionPoints(5,1000);
                    } else {
                        t.npc.sayTo(t.player, "Thank you for paying back the loan.")
                        t.npc.getTimers().stop(-1 * seenPlayersList.indexOf(playerName)-1)
                    }
                } else {
                    buyCredit(count,t)
                    currentLoanValue[loanIndex] = currentLoanValue[loanIndex] - count;
                    npcData.put("currentLoanValue",currentLoanValue.toString());
                    t.npc.sayTo(t.player,"The value of the loan is now: $"+ currentLoanValue[loanIndex] + ". Please pay it back.")
                }
            }
        } else {
            t.npc.say("You don't have any loans out currently.");
            seenPlayersList.push(playerName);
        }
    } else {
        t.npc.say("You don't have any loans out currently.");
        seenPlayersList.push(playerName);
    }
    npcData.put("seenPlayers",seenPlayersList.toString());

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
    if (count >= cost){
        var deleted=cost;
        for (var i = 0; i < inventory.length; i++){
            if (inventory[i].getNbt().getByte("IsMoney") == 1){
                if (deleted > inventory[i].getStackSize()){
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