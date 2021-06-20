interface UserI {
  getFullName(): string;
}
class User implements UserI {
  firstName: string;
  lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  changeUnchangableName(): void {
    // this.unchangableName = 'foo'
  }
  getFullName(): string {
    return this.firstName + "" + this.lastName;
  }
}

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}

const user1 = new User("Monster", "Lessons");
console.log(user1.getFullName);
console.log(User.maxAge);

const admin = new Admin("Foo", "Bar");
console.log(admin.firstName);
