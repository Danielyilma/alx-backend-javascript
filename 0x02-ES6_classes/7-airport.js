export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = value;
  }

  set code(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = value;
  }

  toString() {
    return this.code;
  }
}
