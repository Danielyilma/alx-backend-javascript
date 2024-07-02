export default function updateStudentGradeByCity(studentArray, city, grades) {
  const students = studentArray.filter((student) => student.location === city);

  return students.map((student) => {
    const grade = grades.filter((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: grade.length === 0 ? 'N/A' : grade[0].grade,
    };
  });
}
