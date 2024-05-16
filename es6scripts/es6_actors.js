"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

let academyActor = academyMembers.filter((member) => {
    return member.memID === 187;
});

console.log(academyActor);

//find who has been in at least 3 films?
let moreFilms = academyMembers.filter((member) => {
    return member.films.length >= 3;

});

console.log(moreFilms);

// Find the first member whose name starts with "Bob"
let memberWithNameBob = academyMembers.find((member) => {
    return member.name.startsWith("Bob");
});

console.log(memberWithNameBob);

// Find Academy Members who have been in a film that starts with "A"
let filmStartingWithA = academyMembers.filter((member) => {
    return member.films.some((film) => {
    return film.startsWith("A");
    });
});

console.log(filmStartingWithA);