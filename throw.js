
document.getElementById("btn").addEventListener("click", () => {
    let input = document.getElementById("input")
    let error = document.getElementById("error")
    let finalinput = parseFloat(input.value)

    try {
        if (isNaN(finalinput)) {
            throw "String dicen keno vai number den"
        }
        else if (finalinput < 18) {
            throw "Tumi to bacca polapain"
        }
        else if (finalinput > 30) {
            throw "boira damra patha cagol"
        }
        else if (finalinput !== "number") {
            error.innerText = finalinput
        }
    }

    catch (err) {
        error.innerText = "error:" + " " + err;
        input.value = ""
    }

    finally{
        console.log("defult text ");
    }

})