const curso_js = [
    "intro js",
    "variables y tipos",
    "conversion de tipos",
    "funciones"
];

document.write("<h1>ciclo for</h1>");

document.write(curso_js);
document.write("<br>");

for(let i=0;i<curso_js.length;i++){
    document.write(` ${i+1}. ${curso_js[i]}`);
    document.write("<br>");
}

document.write("<br>");

document.write("<h1>ciclo for decreciente</h1>");


for(let i=curso_js.length-1;i>=0;i--){
    document.write(` ${i+1}. ${curso_js[i]}`);
    document.write("<br>");

}
//ciclo for of
document.write("<h1>ciclo for of</h1>");
document.write("<h2>devuelve el valor</h2>");


for(const leccion of curso_js){
document.write(leccion);
document.write("<br>");

}

//ciclo for in
document.write("<h1>ciclo for in</h1>");
document.write("<h2>devuelve la posicion</h2>");

for(const leccion in curso_js){
    document.write(leccion);
    document.write("<br>");
}