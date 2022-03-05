
console.log("Buenas tardes , Aduana de USA");

let name="Longino";

let NIP=1000;


let ala=(`${name} , ¿Es usted ilegal?`);

console.log(ala)


let hour= "baba";



if (hour == "Si") {
    console.log(`${name} , ¿Podria proporcionarme el NIP de su carnet de identidad?`);
    if (NIP.lenght== 9) {
        console.log(`Todo en orden ${name} , de vuelta a casa!`);
    } else {
        console.log(`Lo siento señor ${name} , tendra que acompañarme a la comisaria...`)
    }
} else if (hour == "No") {
    console.log(`${name} , Un oficial de migracion lo acompañara al proximo camion de deportacion`);
} else {
    console.log(`${name} , responda mi pregunta por favor o sera llevado a la comisaria de
    Houston Texas , le dare una segunda oportunidad de hacer las cosas por el buen camino.`);
    
    if (hour == "Si") {
    console.log(`${name} , ¿Podria proporcionarme el NIP de su carnet de identidad?`);
    if (name.lenght < 9 && name.lenght > 0) {
        console.log(`Todo en orden ${name} , de vuelta a casa!`);
    } else {
        console.log(`Lo siento señor ${name} , tendra que acompañarme a la comisaria...`)
    }
    
    } else if (hour == "No") {
    console.log(`${name} , Un oficial de migracion lo acompañara al proximo camion de deportacion`); 
    } else {
        console.log(`${name} queda arrestado.`)
    }

}
    
    













