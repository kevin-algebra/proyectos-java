
console.log("Buenas tardes , Aduana de USA");

let name="Longino";

let NIP=12345678;


let oportunidad = "No";

let ala=(`${name} , ¿Es usted ilegal?`);

console.log(ala)


let hour= "ala";



if (hour == "No") {
    console.log(`${name} , ¿Podria proporcionarme el NIP de su carnet de identidad?`);
    if (NIP<99999999 && NIP>11111111) {
        console.log(`Todo en orden ${name} , de vuelta a casa!`);
    } else {
        console.log(`Lo siento señor ${name} , tendra que acompañarme a la comisaria...`)
    }
} else if (hour == "Si") {
    console.log(`${name} , Un oficial de migracion lo acompañara al proximo camion de deportacion`);
} else {
    console.log(`${name} , responda mi pregunta por favor o sera llevado a la comisaria de
    Houston Texas , le dare una segunda oportunidad de hacer las cosas por el buen camino.`);
    
    if (oportunidad == "No") {
    console.log(`${name} , ¿Podria proporcionarme el NIP de su carnet de identidad?`);
    if (NIP<99999999 && NIP>11111111) {
        console.log(`Todo en orden ${name} , de vuelta a casa!`);
    } else {
        console.log(`Lo siento señor ${name} , tendra que acompañarme a la comisaria...`);
    }
    
    } else if (oportunidad == "Si") {
    console.log(`${name} , Un oficial de migracion lo acompañara al proximo camion de deportacion`); 
    } else {
        console.log(`${name} queda arrestado.`);
    }

}
    
    


















