class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.isDismissed = false;
  }
  getInfo() {
    return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
  }
  get getMarks() {
    return this.isDismissed ? null : this.marks;
  }

  set setMark(mark) {
    if (!this.isDismissed) {
      this.marks = [...this.marks, mark];
    }
  }

  getAverageMark() {
    return (
      this.marks.reduce((total, number) => total + number, 0) /
      this.marks.length
    );
  }

  dismiss() {
    this.isDismissed = true;
  }

  recover() {
    this.isDismissed = false;
  }
}
const ostap = new Student(
  1,
  "Вищої Школи Психотерапії м.Одеса",
  "Остап Бендер"
);
console.log(ostap.getInfo());

const ira = new Student(
  2,
  "Національного транспортного університету у м.Києві",
  "Самойлова Ірина",
  [5, 4, 4, 5]
);
console.log(ira.getMarks);

ira.setMark = 5;
console.log(ira.getMarks);

console.log(ira.getAverageMark());

ira.dismiss();
ira.setMark = 3;
console.log(ira.getMarks);

ira.recover();
console.log(ira.getMarks);

ira.setMark = 4;
console.log(ira.getMarks);

class BudgetStudent extends Student {
  constructor(course, university, fullName, marks) {
    super(course, university, fullName, marks);
    this.scholarship = 0;

    let interval = setInterval(this.getScholarship, 30000);
    setTimeout(function () {
      clearInterval(interval);
    }, 30000);
  }

  getScholarship = () => {
    if (this.getAverageMark() >= 4 && !this.isDismissed) {
      this.scholarship = 1400;
      console.log(`Ви отримали ${this.scholarship} грн. стипендії`);
    } else
      console.log(
        "Студент не отримує стипендію через те, що середня оцінка менша за 4 або студент виключенний"
      );
  };
}
const misha = new BudgetStudent(4, "Києво-Могилянська Академія", "Михайло", [
  4,
  5,
  4,
  5,
]);
misha.getScholarship();
misha.setMark = 1;
