window.addEventListener('load', async function () {
    const loader = document.querySelector('.loader');
    await new Promise(resolve => setTimeout(resolve, 2000));
    loader.classList.add('hidden');
});


const mail = document.querySelector('#Mail')
const name = document.querySelector('#Name')
const password = document.querySelector('#Password')
const adress = document.querySelector('#Adress')
const button = document.querySelector('#Registr')


let users = {}

function makeUser(mail, name, password, adress){
    this.mail = mail;
    this.name = name;
    this.password = password;
    this.adress = adress;
}


function createID(users){
    return Object.keys(users).length
}

button.addEventListener("click", () => {
    const mailUser = mail.value;
    const nameUser = name.value;
    const passwordUser = password.value;
    const adressUser = adress.value;

    const user = new makeUser(mailUser,nameUser,passwordUser,adressUser)

    const userID = "User" + createID(users);

    users[userID] = user;

    console.log(users)
});

document.querySelector('#Registr').onclick = function(e) {
    document.getElementsByClassName("input").value = "";
}
