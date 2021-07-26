// console.log(data);

// const headerEl = document.querySelector(".header");

// this is the blue menu bar including the button
// to generate another cards for the dogs
// lists have to be generated through a for loop

const dogList = document.querySelector(".dogs-list");

function listCard (dogs) {
    // console.log('dogs: ', dogs);
    for (let i = 0; i < dogs.length; i++) {
        const dog = dogs[i];
        const dogName = dog.name;
        const listItemEl = document.createElement('li');
        listItemEl.className = 'dogs-list__button';

        listItemEl.innerText = dogName;

        listItemEl.addEventListener('click', () => { 
            console.log("inside listCard: ", dog);
            renderMainCard(dog);
        });
        console.log('listItemEl: ', listItemEl);
        dogList.append(listItemEl);
    }
}

const renderListCard = listCard(data);
console.log('renderListCard: ', renderListCard);

// console.log('dog:', dog);

// const addDogEl = document.querySelector('.dogs-list__button--add');

// const mainEl = document.querySelector(".main");

const mainDogEl = document.querySelector("section");


// below is a section containing the main card

function renderMainCard(dog) {


    h2El = document.querySelector('h2');
    h2El.innerText = dog.name;
    mainDogEl.append(h2El);

    const imgEl = document.createElement('img');
    imgEl.src = dog.image;
    imgEl.setAttribute('alt', 'picture of a dog');
    imgEl.setAttribute('height', '300');
    imgEl.setAttribute('width', '400');
    mainDogEl.append(imgEl);

    const divEl = document.createElement('div');
    divEl.setAttribute ('class', 'main__dog-section__desc');
    mainDogEl.append(divEl);

    const h3El = document.createElement('h3');
    h3El.innerText = "I am the coolest. Please chose me";
    const pEl = document.createElement('p');
    pEl.innerText = dog.bio;
    divEl.append(h3El, pEl);

    const div2El = document.createElement('div');
    div2El.className = 'main__dog-section__btn';
    mainDogEl.append(div2El);


    const p2El = document.createElement('p2');
    p2El.innerHTML = "<em>Is naughty?</em> Yes!";
    buttonEl = document.createElement('button');
    buttonEl.innerText = "Good Dog";

    div2El.append(p2El, buttonEl);


}

// console.log("mainCard 🐶 : ", mainCard);

// mainDogEl.append(mainCard);




    // maybe to use the below outside witha new
    // function and call this function to have the data displayed


    // console.log("dog: ", dog);
    // for (let i = 0; i < data.length; i++) {
    // const oneDog = data[i];
    // const dogName = oneDog.name;
    // console.log("dogName: ", dogName);
    // }
    // return dogName;







// function addDoggie(dog) {

//     const addSectionEl = document.createElement('section');

//     const addNewH2El = document.createElement('h2');
//     addNewH2El.innerText=("Add a new dog");

//     const formEl = document.createElement('form');
//     formEl.setAttribute('class', 'form');
//     formEl.innerText("Dogs Name");
    
//     const lebel1_El = document.createElement ('label');
//     lebel1_El.setAttribute('for', 'name');
//     lebel1_El.innerHTML("Dog's name");

//     const input1_El = document.createElement ('input');
//     input1_El.setAttribute('type', 'text');
//     input1_El.setAttribute('id', 'name');
//     input1_El.setAttribute('name', 'name');

//     const lebel2_El = document.createElement ('label');
//     lebel2_El.setAttribute('for', "name");
//     lebel2_El.innerText("Dog's name");  


//     const input2_El = document.createElement ('input');
//     input2_El.setAttribute('type', 'url');
//     input2_El.setAttribute('id', 'image');
//     input2_El.setAttribute('name', 'image');


//     const lebel3_El = document.createElement ('label');
//     lebel3_El.setAttribute('for', 'bio')


//     const textAreaEL = document.createElement('textarea');
//     textAreaEL.setAttribute("rows", '5');
//     textAreaEL.setAttribute('id','bio');
//     textAreaEL.setAttribute('name', 'bio');


//     const input3_El = document.createElement ('input');
//     input3_El.setAttribute("type", "submit");
//     input3_El.setAttribute("id", "submit");
//     input3_El.setAttribute("name", "submit");
//     input3_El.setAttribute("value", "Let's adda a dog");
//     input3_El.setAttribute("class", "form__button");


//     mainEl.append(addSectionEl, addNewH2El, formEl, lebel1_El. lebel2_El, lebel3_El,input1_El, input2_El, textAreaEL, input3_El);


// return addDoggie;
// }

// const renderAddDoggie = addDoggie(renderedSelectedDog);
// console.log("renderAddDoggie: ", renderAddDoggie);

// mainEl.append('renderAddDoggie');





// dog list item


// for (let i = 0; i < data.length; i++ ) {
//     const oneDog = data[i];
//     console.log("oneDog: ", oneDog);
//     const dogName = oneDog.name;
//     console.log("dogName: ", dogName);  
//     const dogListEl = document.createElement('li');
//     dogListEl.setAttribute('class', 'dogs-list__button');
//     dogListEl.innerText='${(dogName)}'; 
//     // console.();
// }