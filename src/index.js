// console.log(data);

// WRITE YOUR CODE BELOW!

// const headerEl = document.querySelector("header");


// const sectionEl = document.querySelector("main__dog-section");

// sectionEl.append()


// const dogList = document.querySelector("dog-list");
const mainEl = document.querySelector("main");


function selectedDog(dog) {
    const sectionEl = document.querySelector("main__dog-section");

    const h2El = document.createElement("h2");
    h2El.innerText = "it's working";
    mainEl.append(h2El);



    console.log("the dogs: ", dog);
    for (let i = 0; i < dog.lenght; i++) {
        const oneDog = dog[i];
        console.log("oneDog: ", oneDog);
        const dogName = oneDog.name;
        console.log("dogName: ", dogName);
    }
    return selectedDog;
}

const renderedSelectedDog = selectedDog(data[0]);
// console.log("renderedSelectedDog 🐶 : ", renderedSelectedDog);


dogList.append(renderedSelectedDog);