const Advice = document.getElementById("quote")
const adviceId = document.getElementById("advice-id")



// async function getAdvice(result) {
//     fetch("https://api.adviceslip.com/advice")


//     .then((response) => response.json())
//     .then((data) => {
//       getAdvice.innerText = `${values.fact} | ${values.length} characters`;
//     });  

// }
// console.log("https://api.adviceslip.com");

const getAdvice = () => {
    const apiurl = "https://api.adviceslip.com/advice"

    fetch(apiurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const slip= data.slip;
        quote.textContent= slip.advice;
        adviceId.textContent= slip.id


        })
}
getAdvice()
