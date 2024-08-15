var counter = -1;
var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();


function dialog(t){
    if (!t.npc.getStoreddata().has("Houses")) {
        t.npc.getStoreddata().put("Houses","");
    }
    var houses = t.npc.getStoreddata().get("Houses").split(",");
    //print("houses here: "+t.npc.getStoreddata().get("Houses").split(','));
    //print("test: "+houses[0])

    //this is the first store page
    var storePage1 = NpcAPI.getDialogs().get(499);
    var mText = "I've got some great bulidings for you. Lets go over the first lot of them. I've got a few fine fine buildings at the far end of Lorton at a fine complex that includes a pool. Each apartment is spacious and very simular. Which will you buy? \n \n";
    var p1Houses = ["Building 1 Apartment 1 $400","Building 1 Apartment 2 $400","Building 1 Apartment 3 $400","Building 1 Apartment 4 $400"];
    for (var i = 0; i < p1Houses.length; i++){
        if (!isBought(p1Houses[i], houses)){
            mText+=p1Houses[i] + ": Available\n";
        } else {
            mText+=p1Houses[i] + ": has been purchased" + "\n";
        }
    }
    //print(mText);
    storePage1.setText(mText);
    storePage1.save();

    //this is the second store page
    var mText = "Alrighty, already. I have four different spots in buildings in the center of the residential area of Lorton. It's great to be in the center just like you'll be the center of attention if you buy my apartment. Here are the options: \n \n";
    var storepage2 = NpcAPI.getDialogs().get(500);
    var p2Houses = ["Building 2 Apartment 1 $370","Building 2 Apartment 2 $370", "Building 2 Apartment 3 $370", "Building 2 Apartment 4 $370"];
    for (var i = 0; i < p2Houses.length; i++){
        if (!isBought(p2Houses[i],houses)){
            mText+=p2Houses[i] + ": Available\n";
        } else {
            mText+=p2Houses[i] + ": has been purchased" + "\n";
        }
    }
    storepage2.setText(mText);
    storepage2.save();
    
    //this is the third store page
    var mText = "You're a tricky buyer, huh? Well I have just the thing to soothe your poor, little wallet. These are the most dirt cheap homes you can buy anywhere. Yes! anywhere in the tri state area. Which will you buy? \n \n";
    var storepage3 = NpcAPI.getDialogs().get(501);
    var p3Houses = ["Building 4 Apartment 1 $340","Building 4 Apartment 2 $340", "Hole at the edge of town $260","Sus shack in the woods $260"];
    for (var i = 0; i < p3Houses.length; i++){
        if (!isBought(p3Houses[i],houses)){
            mText+=p3Houses[i] + ": Available\n";
        } else {
            mText+=p3Houses[i] + ": has been purchased" + "\n";
        }
    }
    storepage3.setText(mText);
    storepage3.save();
}

function isBought(house,houses){
    for (var i = 0; i < houses.length;i++){
        //print(i + ": "+house.equals(houses[i])+ ", "+house+", "+houses[i]);
        if (house.equals(houses[i])){
            //print("true")
            return true;
        }
    }
    return false;
}

