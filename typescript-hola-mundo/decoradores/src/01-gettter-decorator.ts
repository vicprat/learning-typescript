function Uppercase(
  _target: any,
  _methodName: string,
  propertyDescriptor: PropertyDescriptor
) {
  const orgiginal = propertyDescriptor.get;
  propertyDescriptor.get = function () {
    const r = orgiginal?.call(this);
    if (typeof r === "string") {
      return r.toUpperCase();
    }

    return r;
  };
}

class User {
  constructor(public name: string, public lastname: string) {}

  @Uppercase
  get fullName() {
    return `${this.name} ${this.lastname}`;
  }
}

const user = new User("hola", "mundo");
console.log(user.fullName);
