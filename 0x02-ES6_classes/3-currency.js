export default class Currency {
  constructor(code, name) {
    this._validateString(code, "Code");
    this._validateString(name, "Name");

    this._code = code;
    this._name = name;
  }
  // getter
  get code() {
    return this._code;
  }
  get name() {
   return this._name;
  }

  // setter
  set code(newCode) {
    this._validateString(newCode, "Code");
    this._code = newCode;
  }
  set name(newName) {
    this._validateString(newName, "Name");
    this._name = newName;
  }
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
		          }
	    }
  // static method
  displayFullCurrency() {
    return(`${this._name} (${this._code})`);
  }
}
