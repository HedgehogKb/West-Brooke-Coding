function dialogOption(t){
    if(t.dialog.getId() == 264 && t.option.getSlot() == 0 ){
        if (buy(300, t)){
            t.npc.executeCommand("noppes clone spawn \"V.C. Guard\" 6 -20 68 52");
        } else {
            t.npc.say("that isn't enough");
        }
   }  
}

//needs buy function from server