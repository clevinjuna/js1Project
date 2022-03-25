export class Film {
    constructor(nom, saison, nbEpisodes) {
        this._name = nom;
        this._saison = saison;
        this._episodes = nbEpisodes;
    }

    get nom() {
        return this.name;
    }
    set nom(nom) {
        this.name = nom;
    }

    get saison() {
        return this.saison;
    }
    set saison(saison) {
        this.saison = saison;
    }

    get episodes() {
        return this.episodes;
    }
    set episodes(nbEpisodes) {
        this.episodes = nbEpisodes;
    }
}