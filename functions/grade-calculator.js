const gradeStudent = function (score, possibleScore){ //const instead of let because it is referenced and not reassinged quickly.
        const percent = ( score / possibleScore ) * 100
        let gradeResult = '';

        if (percent >= 90 ){
            gradeResult = 'A';
        } else if (percent >= 80){
            gradeResult = 'B';

        } else if (percent >= 70){
            gradeResult = 'C';
        } else if (percent >= 60) {
            gradeResult = 'D';
        } else {
            gradeResult = 'E';
        }

        return `You got a ${gradeResult} for (${percent}%)!`

}

const result = gradeStudent(17, 20)
console.log(result)