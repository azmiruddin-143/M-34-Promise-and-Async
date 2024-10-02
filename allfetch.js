
// first ruls//

function firstbtn() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(pev => pev.json())
        .then(data => showdata(data))
        .catch(error => console.log("Apnar kothaw bul oice", error))

}

let allbody = document.getElementById("all-body")
function showdata(data) {
    let h4 = document.createElement("h4")
    h4.innerHTML = `${data[0].name} `
    allbody.appendChild(h4)

}


// secont ruls//
async function secondbtn() {
    let pev = await fetch("https://jsonplaceholder.typicode.com/users")
    let data2 = await pev.json();
    secontshow(data2)
}

function secontshow(data2) {
    let h4 = document.createElement("h4")
    h4.innerHTML = `${data2[0].username} `
    allbody.appendChild(h4)
}
// therd ruls //

let therdbtn = async () => {
    let peb = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await peb.json()
    console.log(data[0].id);
}

// four ruls //

let fourbtn = async () => {
    try {
        let peb = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await peb.json()
        console.log(data[0].email)
    }
    catch (error) {
        console.log("bul oice");
    }
}