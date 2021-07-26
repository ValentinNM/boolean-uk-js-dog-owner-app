// console.log(data);

// const headerEl = document.querySelector(".header");

// this is the blue menu bar including the button
// to generate another cards for the dogs
// lists have to be generated through a for loop
// const dogList = document.querySelector(".dogs-list"); 
// const addDogEl = document.querySelector('.dogs-list__button--add');

const mainEl = document.querySelector(".main");   // main

// below is a section containing the main card
const mainDogEl = document.querySelector("section");

function selectedDog(doggie) {
    h2El = document.querySelector('h2');
    h2El.innerText = "dog name";
    mainDogEl.append(h2El);

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src','');
    imgEl.setAttribute('alt', 'picture of a dog');
    mainDogEl.append(imgEl);

    const divEl = document.createElement('div');
    divEl.setAttribute ('class', 'main__dog-section__desc');
    mainDogEl.append(divEl);

    const h3El = document.createElement('h3');
    h3El.innerText = "I am the coolest. Please say I've been a good boy 🥺 ";
    const pEl = document.createElement('p');
    pEl.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!";
    divEl.append(h3El, pEl);

    const p2El = document.createElement('p2');
    p2El.innerText = "Is naughty?";
    buttonEl = document.createElement('button');
    buttonEl.innerText = "Good dog!";

    mainDogEl.append(p2El, buttonEl);

    let  dogName = '';
    for (let i = 0; i < data.length; i++) {
    const oneDog = data[i];
    console.log("oneDog: ", oneDog);
    const dogName = oneDog.name;
    console.log("dogName: ", dogName);
    }
    return dogName;
}

const renderedSelectedDog = selectedDog(data[0]);
console.log("renderedSelectedDog 🐶 : ", renderedSelectedDog);

mainDogEl.append(renderedSelectedDog);



function addDoggie(dog) {

    const addSectionEl = document.createElement('section');

    const addNewH2El = document.createElement('h2');
    addNewH2El.innerText=("Add a new dog");

    const formEl = document.createElement('form');
    formEl.setAttribute('class', 'form');
    formEl.innerText("Dogs Name");
    
    const lebel1_El = document.createElement ('label');
    lebel1_El.setAttribute('for', 'name');
    lebel1_El.innerHTML("Dog's name");

    const input1_El = document.createElement ('input');
    input1_El.setAttribute('type', 'text');
    input1_El.setAttribute('id', 'name');
    input1_El.setAttribute('name', 'name');

    const lebel2_El = document.createElement ('label');
    lebel2_El.setAttribute('for', "name");
    lebel2_El.innerText("Dog's name");  


    const input2_El = document.createElement ('input');
    input2_El.setAttribute('type', 'url');
    input2_El.setAttribute('id', 'image');
    input2_El.setAttribute('name', 'image');


    const lebel3_El = document.createElement ('label');
    lebel3_El.setAttribute('for', 'bio')


    const textAreaEL = document.createElement('textarea');
    textAreaEL.setAttribute("rows", '5');
    textAreaEL.setAttribute('id','bio');
    textAreaEL.setAttribute('name', 'bio');


    const input3_El = document.createElement ('input');
    input3_El.setAttribute("type", "submit");
    input3_El.setAttribute("id", "submit");
    input3_El.setAttribute("name", "submit");
    input3_El.setAttribute("value", "Let's adda a dog");
    input3_El.setAttribute("class", "form__button");


    mainEl.append(addSectionEl, addNewH2El, formEl, lebel1_El. lebel2_El, lebel3_El,input1_El, input2_El, textAreaEL, input3_El);


return addDoggie;
}

const renderAddDoggie = addDoggie(renderedSelectedDog);
console.log("renderAddDoggie: ", renderAddDoggie);

mainEl.append('renderAddDoggie');





// dog list item


for (let i = 0; i < tobeadded.lenghts; i++ ) {



    const dogListEl = document.createElement('li');
    dogListEl.setAttribute('class', 'dogs-list__button');
    dogListEl.innerText='${(dogs name to be added)}'; 


}