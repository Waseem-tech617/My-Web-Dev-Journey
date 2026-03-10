
let input = document.querySelector("input");
let cards = document.querySelector(".cards");
let h1=document.querySelector("h1");

let users = [
    {
        pic: "images/pic1.jpg",
        Name: "waseem",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic2.jpg",
        Name: "ali",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic3.jpg",
        Name: "amin",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic4.jpg",
        Name: "saleem",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic5.jpg",
        Name: "samad",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic6.jpg",
        Name: "asgar",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    }
];


function showusers(arr) {
    arr.forEach(function (user) {
        let card = document.createElement("div");
        card.classList.add("card");

        let image = document.createElement("img");
        image.classList.add("bg-img");
        image.src = user.pic;

        let blurredlayer = document.createElement("div");
        blurredlayer.classList.add("blurred-layer");

        let content = document.createElement("div");
        content.classList.add("content");

        let h3 = document.createElement("h3");
        h3.textContent = user.Name;
        let p = document.createElement("p");
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);
        card.appendChild(image);
        card.appendChild(blurredlayer);

        card.appendChild(content);
        cards.appendChild(card);
    });
}

input.addEventListener("input", function () {
     document.querySelector("h1").textContent="";
    let search = users.filter(function (user) {
            return user.Name.startsWith(input.value);
    });
    if(search.length==0){
        h1.textContent="No result";
    }
          cards.innerHTML = "";
          showusers(search);
});







