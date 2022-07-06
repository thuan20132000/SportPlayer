
abstract class UserbaseModel {
    public username: string;
    public surname: string;
    public age: number;
    public gender: string;
    public address: string;
    public hobbies: string;

    constructor(_username: string, _age: number, _gender: string, _address: string, _hobbies: string, _surname: string) {
        this.username = _username
        this.age = _age
        this.gender = _gender
        this.address = _address
        this.hobbies = _hobbies
        this.surname = _surname
    }

    getFullname() {
        return this.surname + ' ' + this.username
    }

}