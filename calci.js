(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('equalto');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;

            screen.value += value;
            console.log(screen.value)
        })
        console.log(screen.value);
    });

    if (screen.value === "") {
        screen.value = "Please enter";
    }
    else {
        equal.addEventListener('click', function (e) {
            let answer = eval(screen.value);
            screen.value = answer;


        })
    }


    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})()