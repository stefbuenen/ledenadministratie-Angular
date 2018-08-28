export class Rol {
    id: number;
    naam: string;

    constructor (id? : number, naam? : string ) {
        if (id!=null) {
            this.id = id;
        }
        if (naam!=null){
            this.naam = naam;
        }

    }

    public setNaam(naam: string){
        this.naam = naam;
    }
}
