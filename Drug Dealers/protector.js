function dialogOption(t){
    var job = t.npc.getJob()
    print(job.getFollowing());
    if (t.dialog.getId() == 216) {
        if (t.option.getSlot() == 0){
            job.setFollowing("Kai");
        } else {
            job.setFollowing("Arthur")
        }
    }
    t.npc.say(job.getFollowing());
}

function died(t){
    t.npc.getJob().setFollowing(null);
}