"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }

];

let filteredCourses = courses.filter(function (courses) {
    if(courses.Fee < 100){
    return true;
}
return false;

})

console.log(filteredCourses);

// Filter courses based on location
let filteredLocation = courses.filter(function (course) {
    return course.Location === "Classroom 1";
});


console.log("Courses in Classroom 1:",filteredLocation);

// Find the start date of the PROG200 course
let prog200StartDate = courses.filter(function (course) {
    return course.CourseId === "PROG200";
});

if (prog200StartDate.length > 0) {
    console.log("Start date of PROG200 course:", prog200StartDate[0].StartDate);
} else {
    console.log("PROG200 course not found.");
}