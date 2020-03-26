let age = parseInt(prompt("Quel est ton âge?"));

if (age < 5) {
    alert("Bouh le petit");
} else if (age < 10) {
    alert("boouuuuh le petit (mais pas trop non plus)");

} else if (age % 2 == 0) {
    alert("ton âge est pair pouet pouet camembert");
} else if (age < ((age % 10) * 15)) {
    alert("oouuhhh toi tu me prends la tête");
} else {
    alert("Bon ben c'est bien! ")
}