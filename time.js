function calculateDuration() {
    const totalHours = parseFloat(document.getElementById('totalHours').value);
    const learningSpeed = parseFloat(document.getElementById('learningSpeed').value);
    const daysPerWeek = parseFloat(document.getElementById('daysPerWeek').value);
    const hoursPerDay = parseFloat(document.getElementById('hoursPerDay').value);

    if (totalHours && learningSpeed && daysPerWeek && hoursPerDay) {
        const totalLearningHours = totalHours * learningSpeed;
        const totalHoursPerWeek = daysPerWeek * hoursPerDay;

        const totalWeeks = Math.floor(totalLearningHours / totalHoursPerWeek);
        
        const years = Math.floor(totalWeeks / 52);
        const months = Math.floor((totalWeeks % 52) / 4.345);
        const remainingWeeks = Math.floor(totalWeeks % 4.345);

        let resultText = 'You will need approximately ';
        if (years > 0) resultText += `${years} year(s), `;
        if (months > 0) resultText += `${months} month(s), `;
        if (remainingWeeks > 0) resultText += `${remainingWeeks} week(s)`;
        resultText += ' to complete the course.';

        if (totalLearningHours > totalHours) {
            resultText = 'Invalid input: Total duration exceeds available hours for the course.';
        }

        document.getElementById('result').innerText = resultText.trim().replace(/,\s*$/, '');
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
}
