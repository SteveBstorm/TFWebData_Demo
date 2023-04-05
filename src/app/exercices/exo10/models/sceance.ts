import { ISceance } from "./isceance";

export class Sceance implements ISceance{
    private _num_room!: number;
    private _date!: Date;
    private _nb_seats!: number;

    get is_complete() : boolean{
        return this.nb_seats <= 0;
    }

    set date(value: Date){
        if(value <= new Date()) throw new Error('La date est antérieur aux dates autorisées.')
        this._date = value;
    }

    get date(): Date{
        return this._date;
    }

    get num_room() : number{
        return this._num_room;
    }

    private set num_room(value : number){
        if(value < 1) throw new Error('La numérotation des salles commence à 1')
        this._num_room = value;
    }

    get nb_seats() : number{
        return this._nb_seats;
    }

    set nb_seats(value : number){
        if(value < 0 ) throw new Error('Une salle ne peut avoir un nombre siège restant en négatif.')
        this._nb_seats = value;
    }

    constructor(num_room : number, date : Date, nb_seats: number){
        this.num_room = num_room;
        this.date = date;
        this.nb_seats = nb_seats;
    }
}
