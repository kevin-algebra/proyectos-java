const n=15;

for (let i =0 ; i<=n ; i=i+1) {
    console.log(i++);
}

// Pares del 0 al 15 , la recursión se da asi : partimos del estado cero , i=0 , como 0<15 se imprimira 0 en consola (que es un par) y se sumara 1 a i , ademas 
// como cambiamos de estado se suma otro 1 a i , asi i=2 , pasamos al primer estado , i=2 , como 2<15 se imprime 2 en consola y se ejecuta el codigo que sumara
// 1 a 2 , asi i=3 , y por el cambio de estado se suma otro 1 , por lo que i=4 etc. 
// Siempre obtendremos pares por que en cada paso se suma 2 , y como partimos del 0 mas el echo de que la suma de dos pares enteros dan otro par , entonces siempre
// garantizaremos que habra siempre pares.


const n=15;

for (let i =0 ; i<=n ; i=i+1) {
    console.log((i++)+1);
}

// Impares del 0 al 15 : lo mismo que el codigo anterior , solo que sumamos un  1 extra , por lo que formamos numeros de la forma 2k+1 que son todos los impares.
