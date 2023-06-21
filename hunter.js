class Arme{
    constructor(type, capacite, chargeur, balle){
        this.type = type;
        this.capacite = capacite;
        this.balle = balle;
        this.charger = chargeur;
    }
}

class Ak_47 extends Arme{
    constructor(type, capacite, chargeur, balle){
        super('automatique', 30, 5, '414mm')
    }
}

class fusil_pompe extends Arme{
    constructor(type, capacite, chargeur, balle){
        super('fusil', 2, 10, 'calibre 12')
    }
}

class pistolet extends Arme{
    constructor(type, capacite, chargeur, balle){
        super('Semi automatique', 10, 5, 'calibre 12')
    }
}


class Hunter{
    constructor(arme, tirer, charger){
        this.arme = arme;
        this.tirer = tirer;
        this.charger = charger;
    }
}