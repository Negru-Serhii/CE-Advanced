const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

//First task
function getPairs(studentsArr) {
  const newPairs = [...studentsArr];
  return (resultForPair = [
    [newPairs[0], newPairs[2]],
    [newPairs[1], newPairs[5]],
    [newPairs[4], newPairs[3]],
  ]);
}
const pairs = getPairs(students);
console.log(pairs);

//Second task
function projectsForPairs(pairs, themes) {
  const pairsAndProjects = [];
  for (let i = 0; i < pairs.length; i++) {
    pairsAndProjects[i] = [pairs[i].join(" і "), themes[i]];
  }
  return pairsAndProjects;
}
const pairsWithProjects = projectsForPairs(pairs, themes);
console.log(pairsWithProjects);

//Third task
function marksAndStudents(students, marks) {
  const marksWithStudents = [];
  for (let i = 0; i < students.length; i++) {
    marksWithStudents[i] = [students[i], marks[i]];
  }
  return marksWithStudents;
}
const marksForStudents = marksAndStudents(students, marks);
console.log(marksForStudents);

//Fourth task
function marksAndProjects(projects) {
  const marksWithProjects = [];
  for (let i = 0; i < projects.length; i++) {
    marksWithProjects[i] = [
      projects[i].join(" , "),
      Math.floor(Math.random() * 5 + 1),
    ];
  }
  return marksWithProjects;
}
const randomMarksForProjects = marksAndProjects(pairsWithProjects);
console.log(randomMarksForProjects);
