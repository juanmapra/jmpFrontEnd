export class Proyects {
    id?: number;
    nombrePryct: string;
    descPryct: string;
    imgPryct: string;
    

    constructor(nombrePryct: string, descPryct: string, imgPryct: string){
        this.nombrePryct = nombrePryct;
        this.descPryct = descPryct;
        this.imgPryct = imgPryct;
        
    }
}
