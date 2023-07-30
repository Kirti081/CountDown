const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const finalResult = document.querySelector("#final-result");

function checkBirthDayIsLucky() {
    // const date = dateOfBirth.value;

    // const sum = calculateSum(date);
    // console.log(sum);
    var sum = 0;
    for (let i = 0; i < dateOfBirth.value.length; i++) {
        if (dateOfBirth.value[i] === "-") {

        }
        else {
            sum = sum + parseInt(dateOfBirth.value[i]);
        }
    }
    if (sum && luckyNumber.value) {
        if (sum % luckyNumber.value == 0) {
            finalResult.innerText = "Your Birthday is lucky";
        }
        else {
            finalResult.innerText = "Your birthday is not lucky Number";
        }
    }else{
        finalResult.innerText= "Please fill both fields";
    }

}


checkNumberButton.addEventListener("click", checkBirthDayIsLucky)