function init(t) {
    var npcData = t.npc.getStoreddata();
    //npcData.clear();
    //t.npc.getTimers().clear()
    //t.npc.say("restarted")
    if (!npcData.has("seenPlayers")) {
        npcData.put("seenPlayers","");
    }
    if (!npcData.has("currentLoans")) {
        npcData.put("currentLoans","");
    }
    if (!npcData.has("currentLoanValue")) {
        npcData.put("currentLoanValue","");
    }
}

function dialogOption(t) {
    if (t.dialog.getId() != 218 || t.option.getSlot() != 0) {
        return;
    }

    var npcTimers = t.npc.getTimers()
    var npcData = t.npc.getStoreddata();
    var seenPlayersList = npcData.get("seenPlayers").split(",");
    var currentLoansList = npcData.get("currentLoans").split(",");
    var playerName = t.player.getDisplayName();
    if (seenPlayersList.indexOf(playerName) != -1) {
        if (currentLoansList.indexOf(playerName) != -1 || t.npc.getTimers().has(seenPlayersList.indexOf(playerName)+1)) {
            t.npc.sayTo(t.player, "Sorry, but you can't take out a loan while you have loan out.")
            return;
        }
    } else {
        seenPlayersList.push(playerName);
    }
    t.npc.sayTo(t.player, "You have 10 seconds to type the loan value in chat.")
    t.npc.getTimers().start(seenPlayersList.indexOf(playerName)+1,24*10,false);
    t.player.getTimers().start(46, 24*10,false);
    npcData.put("seenPlayers",seenPlayersList.toString());
}

function timer(t) {
    var world = t.npc.getWorld()
    var npcData = t.npc.getStoreddata();
    var seenPlayersList = npcData.get("seenPlayers").split(",");
    var currentLoansList = npcData.get("currentLoans").split(",");
    var currentLoanValue = npcData.get("currentLoanValue").split(",");
    //there is no 0, negative numbers are for loans ending and positive numbers are for the waiting period to get the answer for amount
    if (t.id > 0) {
        //reverting changes that were put in place to remove chance of 0
        var playerLocation = t.id - 1;

        //getting the player from the timer id
        var player = world.getPlayer(seenPlayersList[playerLocation]);
        var playerData = player.getStoreddata();

        //seeing if they put in a value for the loan
        if (playerData.has("loanValue")) {
            var loanAmount = playerData.get("loanValue");
            //removing the data to store the loan value
            playerData.remove("loanValue");
            //checks to ensure that the loan value fits parameters
            if (loanAmount != 0) {
                if (loanAmount <= 1000) {
                    payOut(loanAmount,player)
                    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
                    var npcTimers = t.npc.getTimers();
                    //starting a quest that will remind the player to pay back the loan
                    //player.startQuest(142);
                    npcTimers.start(-1 * seenPlayersList.indexOf(player.getDisplayName())-1,168000,false);
                    //adding name and ammount this way the loan list player name and loan value amount will line up with each other
                    currentLoansList.push(player.getDisplayName());
                    currentLoanValue.push(parseInt(loanAmount*1.05));
                    npcData.put("currentLoans",currentLoansList.toString());
                    npcData.put("currentLoanValue",currentLoanValue.toString());
                    t.npc.sayTo(player,"The size of the loan you took out was: $" + loanAmount + ". You must pay back: $"+parseInt(loanAmount*1.05)+".");
                } else {
                    t.npc.sayTo(player,"Sorry, the max loan value is 1000 dollars.")
                }
            } else {
                t.npc.sayTo(player,"No 0 dollar loans bud.")
            }
        } else {
            t.npc.sayTo(player,"Since you didn't give a value I provided no loan.")
        }
    } else {
        //when reversing the steps it has to be -1 not +1 keep this in mind     
        var playerLocation = -1 * t.id - 1;
        var player = world.getPlayer(seenPlayersList[playerLocation]);

        //making sure the player didn't already pay back their loan
        if (currentLoansList.indexOf(player.getDisplayName()) != -1) {
            //the index of the player's infromation in value and list of loan stored data. Same as loanIndex in pay back loan script.
            var playerIndex = currentLoansList.indexOf(player.getDisplayName());
            //giving them a bad faction score to make bank members not interact with them
            player.addFactionPoints(5,-player.getFactionPoints(5))
            //getting the player bank account
            var playeraccount = t.npc.getWorld().getScoreboard().getObjective("Money").getScore(player.getDisplayName())

            //taking money out of account to pay back loan and if not enough than locking account
            var loanAmount = currentLoanValue[playerIndex];
            if (playeraccount.getValue() >= loanAmount) {
                playeraccount.setValue(playeraccount.getValue() - loanAmount);
                currentLoanValue.splice(playerIndex, 1)
                currentLoansList.splice(playerIndex, 1)
                npcData.put("currentLoans",currentLoansList.toString());
                npcData.put("currentLoanValue",currentLoanValue.toString());
                player.addFactionPoints(5,1000);
            } else {
                currentLoanValue[playerIndex] = loanAmount - playeraccount.getValue();
                playeraccount.setValue(0);
                npcData.put("currentLoanValue",currentLoanValue.toString());
            }
            //npcData.put("withHeldAccount", withheldaccount.toString());

        } else {
            t.npc.sayTo("you already payed back the loan?!???");
        }
    }
}

//function that gives the cash to the player.
function payOut(amount,player){
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var cash = amount;
    while (cash > 0) {
        if (cash >= 64){
            var moneyString = "{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: 64b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}"
            var money64 = NpcAPI.stringToNbt(moneyString);
            player.giveItem(player.getWorld().createItemFromNbt(money64));
            cash = cash - 64;
        } else {
            var moneyOther = NpcAPI.stringToNbt("{ForgeCaps: {\"customnpcs:itemscripteddata\": {}}, id: \"minecraft:paper\", Count: "+cash+"b, tag: {IsMoney: 1b, display: {Name: \"{\\\"text\\\":\\\"dollar\\\"}\"}}}");
            player.giveItem(player.getWorld().createItemFromNbt(moneyOther));
            cash = 0;
        }
    }
}