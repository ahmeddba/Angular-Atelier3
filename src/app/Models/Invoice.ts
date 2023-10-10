export class Invoice{
    idFacture:number;
    montantFacture:number;
    montantRemise:number;
    dateFacture:string;
    active:boolean;


    constructor(idF: number,montantF: number,montantR: number,dateF: string,active: boolean){
            this.idFacture= idF
            this.montantFacture=montantF
            this.montantRemise=montantR
            this.dateFacture=dateF;
            this.active=active;
    }
}
