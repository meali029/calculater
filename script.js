let string = "";
let displaystring = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (inputField.value === '0') {
            string = "";
            displaystring = "";

        }
        inputField.classList.remove('move-error');
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                displaystring = string
                inputField.value = displaystring;

                inputField.classList.add('move-up');
                setTimeout(() => {
                    inputField.classList.remove('move-up');
                }, 300);
            } catch (error) {
                inputField.value = "Error";
                // inputField.classList.add('move-errorup');  
                string = ""
                displaystring = ""
                setTimeout(() => {
                    inputField.classList.add('move-error');
                }, 100);
                // setTimeout(() => {
                //     inputField.classList.remove('move-error');
                // }, 300);

            }
        } else if (e.target.innerHTML === 'AC') {

            string = "0"
            displaystring = "0"
            inputField.value = displaystring;

        }
        else if (e.target.innerHTML === '×') {
            string += "*";
            displaystring += "×"
            inputField.value = displaystring;
        }
        else if (e.target.innerHTML === '÷') {
            string += "/";
            displaystring += "÷"
            inputField.value = displaystring;
        }
        else if (e.target.innerHTML === '±') {

            if (string) {

                let value = parseFloat(string);
                value = -value;
                string = value.toString();
                displaystring=string;
                inputField.value = displaystring;
            }
        }
        else {
            string = string + e.target.innerHTML;
            displaystring = displaystring + e.target.innerHTML;
            inputField.value = displaystring;
        }

    })
})
