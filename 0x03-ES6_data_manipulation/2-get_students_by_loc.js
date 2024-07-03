export default function getStudentsByLocation(studentArray, city) {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  return studentArray.filter((x) => x.location === city);
}
