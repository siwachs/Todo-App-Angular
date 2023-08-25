export class Todo {
  sno: number;
  title: String;
  desc: String;
  active: Boolean;

  constructor(sno: number, title: String, desc: String, active: Boolean) {
    this.sno = sno;
    this.title = title;
    this.desc = desc;
    this.active = active;
  }
}
