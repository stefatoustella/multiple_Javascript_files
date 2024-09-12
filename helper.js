export function timer() {
    let date;
    setInterval(() => {
        date = new Date();
        document.querySelector('time').innerText = `Time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }, 1000)
}