/* Cuando usemos TypeScript, LO MEJOR es DEFINIR la VARIABLE DE TIPO EXPLICITA en vez de implicita.
    Esto lo que hace es MEJORAR un poco la LECTURA DE CODIGO y el MANTENIMIENTO en el futuro.

    ************* La VARIABLE EXPLICITA sería algo como:

    <variable> : <tipo de dato>

    ******** EJEMPLO ********

    let edad: number=22;


    EN CAMBIO...

    ************* La VARIABLE IMPLICiTA:

    let edad = 22;

*/

let a: number; //*inferencia explícita

let b: string; //*inferencia explícita

let c=101; //*inferencia implícita


c="one"