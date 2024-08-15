function damaged(t) {
    var health = t.source.getHealth()
    if (health <= 1) {
        t.source.damage(1000)
    } else {
        t.source.damage(health - 1)
    }
    t.source.setHunger(1)
}