export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = value;
  }

  set length(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = value;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('students must be Array');
    }

    for (const i of value) {
      if (typeof (i) !== 'string') {
        throw new TypeError('students elements must be string');
      }
    }

    this._students = value;
  }
}
