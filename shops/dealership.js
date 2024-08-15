function dialogOption(t) {
    if (t.dialog.getId() == 289) {
        if (t.option.getSlot() == 0) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(2500, t)) {
                t.player.giveItem("mts:gvp.dodge_charger_68rt",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 1) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(3000, t)) {
                t.player.giveItem("mts:gvp.dodge_charger_69rt",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 2) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(2450, t)) {
                t.player.giveItem("mts:gvp.holden_torana_lx_a9x",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 3) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(3400, t)) {
                t.player.giveItem("mts:gvp.chevrolet_camaro_ss67",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        }
    } else if (t.dialog.getId() == 290) {
        if (t.option.getSlot() == 0) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(4500, t)) {
                t.player.giveItem("mts:gvp.pontiac_gto_65",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 1) {
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(3500, t)) {
                t.player.giveItem("mts:gvp.cadillac_series62_s",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 2) {
            t.npc.say("sorry, any unu is being phased out.")
            return
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(2100, t)) {
                t.player.giveItem("mts:unucivil.unucivil_vehicle_unu_banker_sedan_ivory",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 3) {
            t.npc.say("sorry, any unu is being phased out.")
            return
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(4000, t)) {
                t.player.giveItem("mts:unucivil.unucivil_vehicle_unu_contractor_pickup_ivory",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        }
    } else if (t.dialog.getId() == 291) {
        if (t.option.getSlot() == 0) {
            t.npc.say("sorry, any unu is being phased out.")
            return
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(4200, t)) {
                t.player.giveItem("mts:unucivil.unucivil_vehicle_unu_contractor_suvshort_ivory",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 1) {
            t.npc.say("sorry, any unu is being phased out.")
            return
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(2000, t)) {
                t.player.giveItem("mts:unucivil.unucivil_vehicle_unu_750_sedan_super_ivory",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 2) {
            t.npc.say("sorry, any unu is being phased out.")
            return
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(2100, t)) {
                t.player.giveItem("mts:unucivil.unucivil_vehicle_unu_650_coupe_base_ivory",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 3) {
            t.npc.say("sorry, any unu is being phased out.")
            return
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(5000, t)) {
                t.player.giveItem("mts:unucivil.unucivil_vehicle_unu_650_convertible_deluxe_ivory",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        } else if (t.option.getSlot() == 4) {
            t.npc.say("sorry, any unu is being phased out.")
            return
            //buy credit can be replaced with the buy function in order to purchase things with cash
            //with buy credit make sure to check if the player has a credit card. This can be easily done with commands. See the first gun shop clerk
            if (buyCredit(2000, t)) {
                t.player.giveItem("mts:unucivil.unucivil_vehicle_unu_550_coupe_base_ivory",1)
                t.npc.sayTo(t.player, "Great! Thanks for your purchase.")
            } else {
                t.npc.sayTo(t.player, "Sorry, but you don't have the funds in your bank to buy that.")
            }
        }
    }
}


function buyCredit(cost, t) {
    var scoreboard = t.player.getWorld().getScoreboard().getObjective("Money");
    var playerScore = scoreboard.getScore(t.player.getName());
    print(playerScore)
    if (playerScore.getValue() >= cost) {
        playerScore.setValue(playerScore.getValue() - cost);
        return true;
    } else { 
        return false;
    }
}