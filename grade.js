const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    var sum = 0;

    for(var mark of marks)
    sum += mark;
    var average = sum / marks.length;
    
    if (average < 60) return "F";
    
    if(average < 70) return "D";

    if(average < 80) return "C";
    
    if(average < 90) return "B";

    return "A";

}