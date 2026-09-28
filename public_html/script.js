function calcularPromedio() {

    // Obtener los datos del formulario
    
    // El let lo usamos para crear como una caja donde guardamos informacion que 
    //puede cambiar depues
    let nombre = document.getElementById("nombre").value;
    //Agregamos el valor  edad para convertirlo a entero
    let edad = parseInt (
        document.getElementById("edad").value
    );

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
    //Agregamos la 4ta calificacion
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(edad) || //valida tambien y pregunta "Es un NO numero?"
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3)
        //si esto da true entra aqui porque detecto el error
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio
    //Agregamos la 4ta cal y ahora entre 4
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado

    if (promedio >= 9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>EXELENTE¡¡";
    } else if (promedio >=8 && promedio < 9 ){
       
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>MUY BIEEN¡";
    } else if (promedio >=7 && promedio < 7.9 ){
       
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>BIEN";
    } else if (promedio >=6.5 && promedio < 6.9 ){
       
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>PIENSA EN CONTAa";
    } else if (promedio >=6 && promedio < 6.4 ){
       
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>DATE DE BAJA¡";
    
    } else if (promedio >=0 && promedio < 5.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Vente a turismo o a la voca 11";
    }
    

}
//con esta funcion nos regresa los datos vacios y se limpia el formulario
function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";

    document.getElementById("resultado").innerHTML = "";
}

//la ponemos afuera para que cualquier funcion pueda verla
let alumnos = [];//es la caja vacia que creamos donde se guardaran todos los alumnos
function agregarAlumno() {
    
    //busca, toma y guarda en la caja llamada "nombre, edad, etc." el texto que el usuario escribio
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    let calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    let calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    let calificacion4 = parseFloat(document.getElementById("calificacion4").value);
    
    //verificar que no haya faltado ningun dato
    if (
        nombre === "" ||
        isNaN(edad) ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos antes de agregar.";
        return;//hace que se detenga ahi y no continue ejecutando la funcion
    }
    //calcula el promedio
    let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    // Guardamos un objeto con los datos del alumno
    alumnos.push({//agregamos uno nuevo al final de la lista sin que se borren los que ya estaban ahi 
        nombre: nombre,
        edad: edad,
        promedio: promedio.toFixed(2)//redondea el promedio a dos decimales
    });

    document.getElementById("resultado").innerHTML =
        nombre + " fue agregado. Total de alumnos: " + alumnos.length;//cuantos alumnos llevamos guardados en total

    console.log(alumnos); //imprime la lista completa de alumnos en la consola para comprobar que si se estan guardando
}
