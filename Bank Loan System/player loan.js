var data;
var amount;
var NpcWaiting;

function chat(t){
    var timers = t.player.getTimers();
    if (timers.has(46)) {
        var value = parseInt(t.message);
        if (value) {
            var data = t.player.getStoreddata()
            data.put("loanValue",value);
        }
    }
}

function timer(t){
}