const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami

function randomDate(start, end) {
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

function randomEyeColor() {
    const eyeColors = ["blue", "brown", "green", "gray"];
    return eyeColors[Math.floor(Math.random() * eyeColors.length)];
}

fs.readFile('./src/generators/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);

    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        const id = i + 1;
        const name = names[Math.floor(Math.random() * names.length)];
        const birth = randomDate(new Date(1970, 0, 1), new Date(2010, 11, 31));
        const eyes = randomEyeColor();
        
        content += `
  {
    id: ${id},
    name: "${name}",
    birth: "${birth}",
    eyes: "${eyes}"
  },`;
    }

    content += "\n];";

    //zapis łańcucha do pliku
    fs.writeFile('./src/generators/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
