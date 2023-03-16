# Práctica 6
###### Diego Wiederkehr Bruno, alu0101601830
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101601830/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101601830?branch=master)

La page se encuentra en: https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101601830/

## Ejercicio 1
Este ejercicio va sobre la creación de una plataforma online donde guardar colecciones de películas, series o documentales. Tal como se dice en el enunciado, hay que crear distintas clases e interfaces. Yo he separado en distintos archivos lo que quería hacer en cada parte, mi diseño es el siguiente:
* Streamable.ts: Aquí he creado la interfaz general streamable con dos funciones, `searchItemByYear` y `searchItemByName`. Lo que hace cada una es buscar el elemento de la colección que coincida con el año de lanzamiento o el nombre respectivamente.
* BasicStreamableCollection.ts: Esta parte es ya una clase abstracta que es sobre una colección en general, más tarde especificaré si es una película, un documental o una serie. Esta clase implementa la interfaz `Streamable` por lo que hereda las funciones descritas anteriormente
* Media.ts: Este archivo lo he creado para hacer tres interfaces, una para Serie con los siguientes parámetros:
```ts
    nombre: string;
    año: number;
    temporadas: number;
```
Otra interfaz para Película con los parámetros:
```ts
    nombre: string;
    año: number;
    duracion: number;
```
La última interfaz para Documental con los parámetros:
```ts
    nombre: string;
    año: number;
    duracion: number;
    topico: string;
```
* Por último, he creado tres archivos diferentes pero con la misma estructura, una para la colección de documentales, otra para la colección de series y la última para la colección de películas. Cada una de estas clases son subclases de `BasicStreamableCollection` por lo que heredan las funciones de la interfaz general `Streamable` y para cada una he creado funciones adicionales de búsqueda para otros elementos como **duración** o **tópico**.
Para realizar la búsqueda en cada función he utilizado un filtro de la siguiente forma:
`return this.collection.filter((documentales) => documentales.año === year);`. Esto es un caso de ejemplo pero en todos lo he realizado de la misma forma pero espeficicando lo que buscaba exactamente.

Para los tests en Mocha Chai, los he realizado de forma BDD y he cubierto todas las funciones necesarias de cada elemento para asegurarme al 100% que funcionaban y también hacer el coverall y que diera un resultado de 100%. Resultados de los tests:
<p align="center">
<img width="473" alt="image" src="https://user-images.githubusercontent.com/117380181/223433501-8a2293a9-d1cb-496d-83a4-ef7b11a1ec1c.png">
</p>

Para el coverage:
<p align="center">
<img width="523" alt="image" src="https://user-images.githubusercontent.com/117380181/223433605-cf0804a0-ba47-4cf1-a9cb-99fdde65e888.png">
</p>

## Ejercicio 2
En este ejercicio he creado una clase para recrear una Lista sin utilizar los métodos de Array.properties, para ello he creado una clase Lista y un atributo que es la variable `_elementos: T[]`. Esta variable es para los elementos de la lista. He creado un constructor y un get para la variable y después he ido implementando los métodos necesarios:
* **toString()**: he creado un método toString() para poder imprimir las listas de forma: `[1,2,3,4,5]`
* **get(indice:number)**: este método devuelve el elemento en el indice introducido, para hacer esto, solo he hecho un `return this.elementos[indice]`
* **append(lista: Lista<T>)**: este método anexa una lista al final de la misma lista, para ello he recorrido un for de la lista que anexar para que vaya elemento a elemento introduciendolo al final de la lista original: 
```ts
      let auxiliar = this.length()
      for (let i = 0; i < lista.length(); i++) {
        this._elementos[auxiliar + i] = lista.get(i)
      }
```
* **concatenate(listas: Lista<T>[])**: este método concatena varias listas a la vez en la original, para ello hago un for por cada lista y voy utilizando la función **append()** en cada una de ellas:
```ts
      for (const lista of listas) {
        this.append(lista);
      }
```
* **filter(predicado: (elemento: T) => boolean)**: este método aplica un predicado lógico a la lista para filtrar. Para ello recorro la lista entera y voy buscando que elementos cumplen el predicado lógico:
```ts
      for (let i = 0; i < this.length(); i++) {
        const elemento = this.get(i);
        if (predicado(elemento)) nuevaLista.append(new Lista<T>([elemento]));
      }
```
* **length()**: devuelve el tamaño de los elementos, lo que he hecho ha sido un bucle while que vaya elemento por elemento hasta que sea null y entonces deja de contar:
```ts
    let i = 0;
    while (this.get(i) != null){
        i++;
    }
    return i
```
* **map(U)(funcion: (elemento: T) => U)**: este método aplica a la lista una función en cada elemento y la devuelve. He recorrido los elementos de la lista y he ido anexando a la lista microlistas con el nuevo elemento aplicando la función:
```ts
      for (let i = 0; i < this.length(); i++) {
        nuevaLista.append(new Lista<U>([funcion(this.get(i))]));
      }
```
* **reduce(funcion: (acumulador: T, elemento: T) => T, acumulador: T)**: este método hace que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función. Para ello recorro cada elemento de la lista y voy aplicando a la variable `resultado` la función con resultado y el elemento de la iteración:
```ts
      for (let i = 0; i < this.length(); i++) {
        resultado = funcion(resultado, this.get(i));
      }
```
* **reverse()**: este método devuelve la lista revertida. He hecho un bucle for al revés que vaya desde el último elemento al primero y vaya añadiendolos en orden revertido:
```ts
      for (let i = this.length() - 1; i >= 0; i--) {
        nuevaLista.append(new Lista<T>([this.get(i)]));
      }
```
* **forEach(funcion: (elemento: T) => void)**: método que dada una lista y una función, aplica esa función para cada elemento de la lista. He hecho un bucle for para recorrer los elementos de la lista e ir aplicando la función sobre cada elemento:
```ts
    for (let i = 0; i < this.length(); i++) {
        const elemento = this.get(i);
        funcion(elemento);
    }
```

Los tests han sido realizados con Mocha Chai y con la metodología BDD, he realizado un test para cada función para comprobar todas las funcionalidades y que el coverage sea del 100%. 

Resultados de los tests:
<p align="center">
<img width="466" alt="image" src="https://user-images.githubusercontent.com/117380181/223527722-4f330856-c756-46fd-8255-bb00bdea5b2e.png">
</p>

Resultados del coverage:
<p align="center">
<img width="531" alt="image" src="https://user-images.githubusercontent.com/117380181/223528013-2b7765ec-5bc1-4548-9b50-d56c8665dd1a.png">
</p>

## Ejercicio 3
En este ejercicio debiamos ampliar el ejercicio de la Biblioteca musical de la práctica anterior. Lo que debíamos hacer era añadir *single*. Para ello, he creado una clase general Discografia y dos subclases de esta: Disco y Single. Los atributos que tiene Discografia son:
```ts
    private _nombre: string;
    private _año: number;
```
Y después lo que he hecho es que Disco tiene una variable extra: `private _canciones: Cancion[]` mientras que Single tiene el atributo `private _cancion: Cancion`. Aparte de estos cambios, he cambiado la variable discografia a Artista de forma que pueda tener tanto Singles como Discos: `private _discografia: Discografia[]`. En este ejercicio no he hecho mucho más, lo único es que he aumentado el número de tests (incluyendo setters y getters) para tener un porcentaje de coverage al 100%. Los resultados han sido los siguientes:
<p align="center">
<img width="484" alt="image" src="https://user-images.githubusercontent.com/117380181/223790497-010da0cb-594e-4978-8373-af50398cbc52.png">
</p>
Y los resultados del coverage:
<p align="center">
<img width="524" alt="image" src="https://user-images.githubusercontent.com/117380181/223790640-87a87a54-1ca7-4b11-b763-cbb526b3534d.png">
</p>

## Ejercicio PE103
En este ejercicio nos han pedido que debiamos crear dos interfaces genéricas, una `Collectable` y la otra `Searchable`. Estas dos interfaces las he creado en dos ficheros distintos y he declarado las funciones que deben realizar pero de forma genérica:
```ts
export interface Searchable<T> {
    search(item: T): T[];
}
```
Mientras que la otra interfaz es de forma:
```ts
export interface Collectable<T> {
    addItem(item: T): void;
    getItem(item: number): T | undefined;
    removeItem(item: number): T | undefined;
    getNumberOfItems(): number;
}
```
A continuación he creado una clase abtracta que se llama `SearchableCollection` que implementa estas dos interfaces y además tiene dos subclases. En esta clase he desarrollado todos los métodos de `Collectable`:

* **addItem(item: T: void):** en esta función he hecho un simple `this.collection.push(item)`
* **getItem(item:number): T | undefined:** primero compruebo que el item no esté fuera de rango con: `if (item >= this.getNumberOfItems()) return undefined` y después devuelvo el item en la posición dada: `return this.collection[item]`
* **removeItem(item:number): T | undefined:** primero hago la comprobación de que no esté fuera de rango igual que en la función anterior y despues hago un slice para eliminar el item metiendole como argumentos la posición del item y la siguiente: `this.collection.slice(item, item + 1)`, después devuelvo el propio item
* **getNumberOfItems(): number:** aquí utilizo la función `length` como `return this.collection.length;`

Ahora he creado dos subclases: `NumericSearchableCollection` y `StringSearchableCollection`, en cada uno heredo todas las funciones de la clase superior e implemento la función search:
* **Search en string:** utilizo *filter()* para poder filtrar los elementos que busco: `const found:string[] = this.collection.filter(element => element === item)`
* **Search en number:** utilizo *filter()* para poder filtrar los elementos que busco: `const found:number[] = this.collection.filter(element => element === item)`

He realizado los tests en Mocha Chai con distintos casos para probar la funcionalidad del programa y los resultados me han quedado asi:
<p align="center">
<img width="559" alt="image" src="https://user-images.githubusercontent.com/117380181/224008213-56b1147e-c7cf-409f-a0f1-ea7378ccecf7.png">
</p>

Mientras que los resultados del coverage me han quedado asi:
<p align="center">
<img width="533" alt="image" src="https://user-images.githubusercontent.com/117380181/224008322-06c659c2-ff13-439d-8d4e-a291859c0ee7.png">
</p>

## Conclusiones
En esta práctica he aprendido a utilizar mejor las clases abstractas y la implementación de interfaces, es algo que no no tenía muy claro con anterioridad pero que ahora lo entiendo bastante mejor.
