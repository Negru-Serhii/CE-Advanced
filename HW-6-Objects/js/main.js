const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1.
const getSubjects = (student) => {
  const subjectArray = Object.keys(student.subjects).map((el) => {
    return el[0].toUpperCase() + el.slice(1).toLowerCase().split("_").join(" ");
  });
  return subjectArray;
};
console.log(getSubjects(students[0]));

// 2.
const getAverageMark = (student) => {
  const subjectArray = Object.keys(student.subjects);
  const total = subjectArray.reduce((total, index) => {
    return total + getAverage(student.subjects[index]);
  }, 0);
  return Number(total / subjectArray.length).toFixed(2);
};
const getAverage = (numbers) => {
  const total = numbers.reduce((total, number) => {
    return total + number;
  }, 0);
  return total / numbers.length;
};

console.log(getAverageMark(students[0]));

// 3.
const getStudentInfo = (student) => {
  return {
    course: student.course,
    name: student.name,
    averageMark: Number(getAverageMark(student)),
  };
};
console.log(getStudentInfo(students[0]));

// 4.
const getStudentsNames = (student) =>
  student.map((student) => student.name, 0).sort();
console.log(getStudentsNames(students));

// 5.
const getBestStudent = (students) => {
  const markEachStudent = students.map((student) => [
    student.name,
    getAverageMark(student),
  ]);
  let bestOfStudents = [];
  for (let i = 0; i < markEachStudent.length; i++) {
    bestOfStudents = markEachStudent[i];
  }
  return bestOfStudents[("", 0)];
};
console.log(getBestStudent(students));

// 6.
const calculateWordLetters = (string) => {
  const stringArr = string.toLowerCase().split("");
  let resultSymbols = {};
  stringArr.forEach((char) => {
    if (resultSymbols[char]) {
      resultSymbols[char]++;
    } else {
      resultSymbols[char] = 1;
    }
  });
  return resultSymbols;
};
console.log(calculateWordLetters("Поперечина"));
