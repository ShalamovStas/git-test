export class Person {

    name: string;
    surName: string;

    toString() {
        return `[${this.name} - ${this.surName}]`;
    }
}
