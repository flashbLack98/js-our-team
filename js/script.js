//dichiarare il contenitoe di tutte le immagini
const containerCard = document.querySelector(".team-container");
console.log(containerCard);

function generazioneCard(nome, ruolo, immagini) {
    return `<div class="team-card">
        <div class="card-image">
            <img src="img/${immagini}" alt="${nome}" />
        </div>
        <div class="card-text">
            <h3>${nome}</h3>
            <p>${ruolo}</p>
        </div>
    </div>`;
}

// ho una lista con tutti i nomi, ruoli e immagini di un team
const memberList = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll,",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];


//ciclare le card per il numero della lunghezza dell'array
for (i = 0; i < memberList.length; i++) {

    const singleMember = memberList[i];
    console.log(singleMember);
    console.log(singleMember["name"]);

    //CAMBIARE GLI ELEMENTI DI OGNI CARD



    let card = "";

    card = generazioneCard(singleMember["name"], singleMember["role"], singleMember["image"]);
    console.log(generazioneCard(singleMember["name"], singleMember["role"], singleMember["image"]));

    //inserire ogni card dentro il contenitore da javascript
    containerCard.innerHTML += card;


}

const btnAdd = document.getElementById("addMemberButton");
console.log("questo è il bottone Add " + btnAdd);;



let nameForm = document.getElementById("name");
let roleForm = document.getElementById("role");
let imageForm = document.getElementById("image");

console.log(nameForm.value);

//quando schiaccio il bottone add devo pushare un novo elemento nell'array
btnAdd.addEventListener("click", function () {
    nameForm.value;
    roleForm.value;
    imageForm.value;

    let newCard = `<div class="team-card">
    <div class="card-image">
      <img src="img/${imageForm.value}" alt="Wayne Barnett" />
    </div>
    <div class="card-text">
      <h3>${nameForm.value}</h3>
      <p>${roleForm.value}</p>
    </div>
  </div>`;


    containerCard.innerHTML += newCard;
    console.log("ciao");
    console.log(memberList);
});



//pushare la proprietà namew , role , image




