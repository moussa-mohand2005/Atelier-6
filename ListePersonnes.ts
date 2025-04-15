import { Personne } from "./Personne";

class ListePersonnes {
    private personnes: Personne[];

    constructor(personnes: Personne[]) {
        this.personnes = personnes;
    }

   getPersonnes(): Personne[] {
        return this.personnes;
    }

    setPersonnes(personnes: Personne[]): void {
        this.personnes = personnes;
    }
    findByNom(s: string): Personne | null {
        for (let personne of this.personnes) {
            if (s === personne.getNom()) {
                return personne;
            }
        }
        return null;
    }
    findByCodePostal(cp: string): boolean {
        for (let personne of this.personnes) {
            for (let adresse of personne.getAdresses()) {
                if (adresse.getcodePostal() === cp) {
                    return true;
                }
            }
        }
        return false;
    }
    countPersonneVille(ville: string): number {
        let i=0;
        for (let personne of this.personnes) {
            for (let adresse of personne.getAdresses()) {
                if (adresse.getville() === ville) {
                    i++;
                }
            }
        }
        return i;
    }
}

