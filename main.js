
//  Question 3
//  3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("\tQuestion 3:\n");
let personName = "wahaj ali";
let LowerCase = personName.toLowerCase();
let UpperCase = personName.toUpperCase();
function TitleCase(str) {
    return str.toLowerCase().split(' ').map((word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(LowerCase);
console.log(UpperCase);
console.log(TitleCase("wahaj ali is the best ACTOR"));

// Another Method for titlecase
let person_name = "wahaj ali";
const TitleCaseName = person_name.replace(/b\w/g, (char) => char.toUpperCase());
