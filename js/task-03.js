const programLanguage = ["Pyton", "C++", "C#", "PHP"];
let programJS = "Java Script";

if (!programLanguage.includes(programJS)) {
    console.log(`В масиві немає ${programJS}`);
    programLanguage.push(programJS);
}
console.log(`"${programJS}" додано до масиву [${programLanguage}]`);
