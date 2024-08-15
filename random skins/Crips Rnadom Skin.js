function init(t){
var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
var random = Math.round(Math.random()*4);
t.npc.getDisplay().setModel(null);
//t.npc.say(random);
if ( random == 0){
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2017/04/29/skin_20170429021730539.png?v609")
} else if (random == 1){
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/06/05/kevin-wilson-grove-street-x-enderman-eye-20396586.png?v609");
} else if (random == 2){
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/07/25/crips-20629899.png?v609");
} else {
    t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/06/18/glenn-rhee-grove-street-jacket-20452403.png?v609");
} 
}