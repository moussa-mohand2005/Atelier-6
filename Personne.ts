import { Adresse } from "./Adresse";

class Personne {
    private nom: string;
    private sexe: string;
    private adresses: Adresse[];

    constructor(nom: string, sexe: string, adresses: Adresse[]) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }

    getNom(): string {
        return this.nom;
    }

    setNom(nom: string): void {
        this.nom = nom;
    }

    getSexe(): string {
        return this.sexe;
    }

    setSexe(sexe: string): void {
        this.sexe = sexe;
    }

    getAdresses(): Adresse[] {
        return this.adresses;
    }

    setAdresses(adresses: Adresse[]): void {
        this.adresses = adresses;
    }
}

export { Personne };
