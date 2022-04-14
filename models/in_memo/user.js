const users = []

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`
    }

    static insert(firstName, lastName, age) {
        const u = new User(firstName, lastName, age)
        User.users.push(u)
        return u
    }

    static getOneByName(firstName, lastName) {
        return User.users.find(u => u.firstName === firstName && u.lastName === lastName)
    }

    static list(query) {
        return User.users
    }
}

module.exports = User
