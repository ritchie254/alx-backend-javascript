export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, "Name");
    this._validateNumber(length, "Length");
    this._validateArray(students, "Student");

    this._name = name;
    this._length = length;
    this._students = students;
  }
  // getters
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }

  // setters
  set name(newName) {
    this._validateString(newName, "Name");
    this._name = newName;
  }
  set length(newLength) {
    this._validateNumber(newLength, "Length");
    this._length = newlength;
  }
  set students(newStudents) {
    this._validateArray(newStudent, "Student");
    this._students = newStudents;
  }

  // validation
  _validateString(value, attributeName) {
  if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
  }
  }
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a string`);
		          }
  }
  _validateArray(value, attributeName) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError(`${attributeName} must be an array of strings`);
    }
  }
}
