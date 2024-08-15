

var counter = -1;
var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();


function dialog(t){
    var houses = t.npc.getStoreddata().get("Houses").split(",");
    //print("houses here: "+t.npc.getStoreddata().get("Houses").split(','));
    //print("test: "+houses[0])

    //this is the first store page
    var storePage1 = NpcAPI.getDialogs().get(145);
    var mText = "I've got a couple houses for you to think about: \n \n";
    var p1Houses = ["101 Mcloven Drive","102 Mcloven Drive","104 Mcloven Drive","107 Belfort Drive"];
    var p1Desc = ["A grand one bedroom house with a large family room and beautiful flight of stairs up to the bedroom. It has a nice, finished basement. It has a garage fit for 2 cars.","An open flat with high ceiling providing plenty of space and comfort. There is a garage perfect for 2 cars.","A 2 bedroom, two floor house with a spacious interior and plenty of space for an office, living room, and kitchen. It has a 2 car garage.","A one bedroom house with a spacious combined kitchen and family room on the first floor. There’s plenty of space to install a second bedroom, put a walk in closet, or whatever else you want. It has a 2 car garage."];
    for (var i = 0; i < p1Houses.length; i++){
        if (!isBought(p1Houses[i], houses)){
            mText+=p1Houses[i] + ": " + p1Desc[i] + "\n";
        } else {
            mText+=p1Houses[i] + ": has been purchased" + "\n";
        }
    }
    //print(mText);
    storePage1.setText(mText);
    storePage1.save();

    //this is the second store page
    var mText = "Here are some more houses to think about: \n \n";
    var storepage2 = NpcAPI.getDialogs().get(190);
    var p2Houses = ["108 Corman Court","109 Corman Court", "110 First Street", "111 First Street"];
    var p2Desc = ["A spacious two story house with two bedrooms and plenty of room on the first floor for you to put whatever you desire. It has a 2 car garage.", "This home is perfect for families. The 1st floor is open format with plenty of space, and the 2nd story has a child, and master bedroom. It also had a 2 car Garage.", "Unfinished", "Unfinished"];
    for (var i = 0; i < p2Houses.length; i++){
        if (!isBought(p2Houses[i],houses)){
            mText+=p2Houses[i] + ": " + p2Desc[i] + "\n";
        } else {
            mText+=p2Houses[i] + ": has been purchased" + "\n";
        }
    }
    storepage2.setText(mText);
    storepage2.save();
    
    //this is the third store page
    var mText = "Here are some more houses to think about: \n \n";
    var storepage3 = NpcAPI.getDialogs().get(256);
    var p3Houses = ["308 Loves Court","310 Loves Court", "316 Grove Street"];
    var p3Desc = ["A wonderful fully furnished flat featuring a master bedroom, kitchen, and comfy family room. The house also has a garage and large backyard.", "A comfy and quietly situated flat that is fully furnished and features a master bedroom, kitchen, and comfy family room. The house has a garage and a large backyard.", "A fully furnished flat with a fenced backyard and some interesting neighbors. It comes with a large garage."];
    for (var i = 0; i < p3Houses.length; i++){
        if (!isBought(p3Houses[i],houses)){
            mText+=p3Houses[i] + ": " + p3Desc[i] + "\n";
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

