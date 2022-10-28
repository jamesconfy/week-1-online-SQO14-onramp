function calculateGrade(marks) {
  let average = parseInt(marks.reduce((a, b) => a + b, 0) / marks.length);
  if (average <= 49) return "F";
  else if ((50 <= average) & (average <= 59)) return "E";
  else if ((60 <= average) & (average <= 69)) return "D";
  else if ((70 <= average) & (average <= 79)) return "C";
  else if ((80 <= average) & (average <= 89)) return "B";
  else return "A";
}
module.exports = calculateGrade;
