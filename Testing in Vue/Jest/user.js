export default class User {
  constructor(details) {
    const { firstName, lastName } = details;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
