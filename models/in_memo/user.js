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
        // User { firstName: 'marshall', lastName: 'mathers', age: '22' }
        User.users.push(u)
        return u
    }

    static getOneByName(firstName, lastName) {
        return User.users.find(u => u.firstName === firstName && u.lastName === lastName)
    }

    static list(query) {
        return User.users
    }

    // 访问 User.users 时可以拿到 users，相当于 User.users = []
    static get ['users'](){
        return users
    }
}

module.exports = User
