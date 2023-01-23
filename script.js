let names = []
let numbers = []
load();

function render(){
    let content = document.getElementById('content');
    content.innerHTML = ''
    content.innerHTML = `<h1>Kontakte</h1>`;
    content.innerHTML += `
    <div class="inputs">
        <input placeholder="Name" id="name">
        <input type="number" placeholder="telefonnummer" id="phone">
        <button onclick="addContact()">Hinzufügen</button>
    </div> `

    for (i = 0; i < names.length; i++){
        const name = names[i];
        const phoneNumber = numbers[i];

        content.innerHTML += `
        <div class="card">
            <b>Name: </b> ${name}<br>
            <b>Number: </b> ${phoneNumber}<br>
            <button onclick="deleteContact(${i})">Löschen</button> 
        </div>`;
        
    }

}

function addContact(){
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    names.push(name.value);
    numbers.push(phone.value);

    render();
    save();

}

function deleteContact(i){
    names.splice(i, 1);
    numbers.splice(i, 1);

    render();
    save();
}

function save(){
    let nameAsText = JSON.stringify(names);
    localStorage.setItem('names', nameAsText);

    let phoneNumberAstext = JSON.stringify(numbers);
    localStorage.setItem('numbers', phoneNumberAstext);
}

function load(){
    let nameAsText = localStorage.getItem("names");
    let phoneNumberAstext = localStorage.getItem("numbers");
    if (nameAsText && phoneNumberAstext){
        names = JSON.parse(nameAsText);
        numbers = JSON.parse(phoneNumberAstext);
    }
}