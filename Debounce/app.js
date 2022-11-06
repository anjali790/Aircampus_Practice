const input = document.getElementById("input");

const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(args), delay)
    }
};

input.addEventListener('keypress', debounce(function () {
    console.log("hello");
}, 3000));