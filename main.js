alert("El coche no arranca.")
let gasolina = prompt("Hay que poner gasolina?");

if( gasolina.toLowerCase === "si"  ){
 let dinero = prompt("Tienes dinero?");
    if( dinero.toLowerCase() === "si" ){
        console.log("Poner gasolina.");
    }else{
        console.log("Vas en metro.");
    }
}else{
    let bateria = prompt("Tiene bateria?");
    if( bateria.toLowerCase() === "si" ){
        console.log("Pasate por el mecanico.");
    }else{
        console.log("Recargar bateria.");
    }
};