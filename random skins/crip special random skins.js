function init(t){
    var NpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance();
    var random = Math.floor(Math.random()*6);
    t.npc.getDisplay().setModel(null);
    //t.npc.say(random);
    t.npc.getDisplay().setName("Advanced Mission Helper")
    t.npc.getDisplay().setTitle("Vickson Crips");
    t.npc.getDisplay().setModel(null);
    if ( random == 0){
        t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2017/04/29/skin_20170429021730539.png?v609")
    } else if (random == 1){
        t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/06/05/kevin-wilson-grove-street-x-enderman-eye-20396586.png?v609");
    } else if (random == 2){
        t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/07/25/crips-20629899.png?v609");
    } else if (random == 3){
        t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2022/06/18/glenn-rhee-grove-street-jacket-20452403.png?v609");
    } else if (random == 4) {
        t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2023/01/08/paul-atreides-21216327.png?v612");
        t.npc.getDisplay().setName("Muad'dib");
        t.npc.getDisplay().setTitle("V.C Advanced Mission Helper");
        t.npc.getDisplay().setModel("customnpcs:customnpcalex");
    } else if (random == 5) {
        t.npc.getDisplay().setSkinUrl("https://www.minecraftskins.com/uploads/skins/2024/03/08/arthur-morgan--tb--22385546.png?v612");
        t.npc.getDisplay().setName("Arthur");
        t.npc.getDisplay().setTitle("V.C Advanced Mission Helper");
    }
    }