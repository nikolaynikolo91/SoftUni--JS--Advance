class CheckingAccount {
  constructor(clientId, email, firstName, lastName) {
    (this.clientId = clientId),
      (this.email = email),
      (this.firstName = firstName),
      (this.lastName = lastName);
  }
  set clientId(clientId) {
    let patterNum = /^\d{6}$/g;
    if (!patterNum.test(clientId)) {
      throw new TypeError("Client ID must be a 6-digit number");
    } else {
      return (this._clientId = clientId);
    }
  }
  get clientId() {
    return this._clientId;
  }

  set email(email) {
    let pattern = /^[a-zA-Z]+[@][a-zA-Z]+[.]\w+/g;

    if (pattern.test(email)) {
      return (this._email = email);
    } else {
      throw new TypeError("Invalid e-mail");
    }
  }

  get email() {
    return this._email;
  }

  set firstName(firstName) {
    let patternFirst = /^[a-zA-Z]+$/g;
    if (!(firstName.length >= 3 && firstName.length <= 20)) {
      throw new TypeError(
        "First name must be between 3 and 20 characters long"
      );
    }
    if (!patternFirst.test(firstName)) {
      throw new TypeError(`First name must contain only Latin characters`);
    }
    return (this._firstName = firstName);
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(lastName) {
    let patternLast = /^[a-zA-Z]+$/g;
    //let isTrue = namePattern.test(lastName);
    if (!(lastName.length >= 3 && lastName.length <= 20)) {
      throw new TypeError("Last name must be between 3 and 20 characters long");
    }
    if (!patternLast.test(lastName)) {
      throw new TypeError(`Last name must contain only Latin characters`);
    }

    return (this._lastName = lastName);
  }

  get lastName() {
    return this._lastName;
  }
}

let acc = new CheckingAccount("1314", "ivan@some.com", "Ivan", "Petrov");

//let acc = new CheckingAccount("131455", "ivan@", "Ivan", "Petrov");
//let acc = new CheckingAccount("131455", "ivan@some.com", "I", "Petrov");
//let acc = new CheckingAccount("131455", "ivan@some.com", "I1van", "Petrov");
