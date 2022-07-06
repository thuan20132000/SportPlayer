

export class UserModel extends UserbaseModel {
    stars: number
    constructor(_username: string, _age: number, _gender: string, _address: string, _hobbies: string, _surname: string, _stars: number) {
        super(_username, _age, _gender, _address, _hobbies, _surname)
        this.stars = _stars
    }



}