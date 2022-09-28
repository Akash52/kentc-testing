export default class Model {
  constructor(data = []) {
    this.$collection = [];
    if (data.length) {
      this.record(data);
    }
  }

  record(data) {
    this.$collection.push(...data);
  }
  all() {
    return this.$collection.map((entry) => Object.assign({}, entry));
  }
  update(value) {
    const primaryKey = 'name';
    const entry = this.$collection.find((item) => item[primaryKey] === value);
    return entry ? Object.assign({}, entry) : null;
  }
  find(value) {
    const primaryKey = 'name';
    const entry = this.$collection.find((item) => item[primaryKey] === value);
    return entry ? Object.assign({}, entry) : null;
  }
}
