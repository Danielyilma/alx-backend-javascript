export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((sum, curValue) => sum + curValue.id, 0);
}
