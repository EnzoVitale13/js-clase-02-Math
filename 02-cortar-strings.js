const texto = "este es un texto de prueba, bla bla bla bla";

//vamos a cortar strings:
console.log("usando slice para cortar:", texto.slice(0, 26));
console.log("usando slice para cortar:", texto.slice(27, 41));
console.log("usando slice para cortar:", texto.slice(27));
console.log("usando slice para cortar:", texto.slice(-7, -1));
console.log("usando slice para cortar:", texto.slice(-6));
console.log("usando slice para cortar:", texto.slice(-13, -6));

//reemplazar palabras:
console.log(
  "reemplazar la primera occurencia:",
  texto.replace("bla", "gatitos")
);

/////  g es global (todas las ocurrencias), i es insensitive(mayus/minusc). sin la g, reemplaza solo el primero. sin la i. si hay mayusculas no las reemplaza
console.log(
  "reemplazar ltodas las occurencias:",
  texto.replace(/bla/gi, "gatitos")
);

console.log("reemplazar la primera occurencia:", texto.replace(/a/gi, "o"));

///// Mayusc, minusc /////

console.log("a minusculas:" + texto.toLowerCase());
console.log(`a mayusculas: ${texto.toUpperCase()}`);

///// No es lo mas usado, pero el locale tiene en cuenta el idioma del usuario (si les hace cosas raras con los acentos pueden usar esto)
console.log(`a mayusculas: ${texto.toLocaleUpperCase()}`);

/////convertir a array://////

////// Con esto separa a todos
console.log("a array", texto.split(""));

////// Con esto separa usando los espacios:
console.log("a array", texto.split(" "));

////// Con esto va a separar con la coma:
console.log("a array", texto.split(","));

////// Ahora quiero separar y que me traiga el segundo elemento del array, ojo con no ponerle el punto al elegir que elemento agarrar!:
console.log("a array", texto.split(",")[1]);

///Undefined no es un erroe! es el estado en que estan las cosas
console.log('a array', texto.split(',')[5]);
