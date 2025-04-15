class Adresse{
    private rue: String;
    private ville: String;
    private codePostal: String;

    constructor(rue:String,ville: String,codePostal: String){
        this.rue=rue;
        this.codePostal=codePostal;
        this.ville=ville;
    }
    getrue():String{
        return this.rue;
    }
    setrue(rue:String):void{
        this.rue=rue;
    }
    getville():String{
        return this.ville;
    }
    setville(ville:String):void{
        this.ville=ville;
    }
    getcodePostal():String{
        return this.codePostal;
    }
    setcodePostal(codePostal:String):void{
        this.codePostal=codePostal;
    }
}
export { Adresse };
