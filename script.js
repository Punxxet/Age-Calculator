const calcButton = document.querySelector('.calculate');
const input = document.getElementById('birth-date');
const ageOutput = document.querySelector('.age-output');
const result = document.querySelector('.result');
const form = document.querySelector('form');

// function definitions

const calcAge = function(e){
    e.preventDefault();

    if(!input.value){
        alert('Please enter a birth Date');
        return;
    }
    const birthDate = new Date(input.value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if(months < 0){
        years--;
        months += 12;
    }
    if(today.getDate() < birthDate.getDate()){
        months--;
        if(months < 0){
            months += 12;
        }
    }

    
    ageOutput.textContent = `${years} ${years ===  (0 || 1)? 'year': 'years'} ${months} ${months === 1 ? 'month' : 'months'} old`;
    result.classList.remove('hide');
    

}
// Event Listeners
form.addEventListener('submit',calcAge);