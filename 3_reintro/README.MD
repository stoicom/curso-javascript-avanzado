# Reintroducción a Javascript


### Variables

- No se pueden usar espacios
```javascript
var con espacios = 1;
```

- No usar un número delante
```javascript
var 1numero = 1;
```

- Válidos, pero no recomendado
```javascript
var con_guiones_bajos = 1;
var dame$ = 1;
```

- Válidos, es mejor usar [camelCase](https://es.wikipedia.org/wiki/CamelCase)
```javascript
var otraOpcion = 1;
var opcionCon123123 = 1;

### Tipos de variables

Operador *typeof* y su [especificación](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3)

- [x] Undefined
```javascript
typeof undefined
typeof noDefinido
typeof tampocoCreado
```

- [x] Object
```javascript
typeof null
typeof [15, 4]
typeof new Date()
typeof {a:1}
```

- [x] Boolean
```javascript
typeof false
typeof true
typeof Boolean(false)
```

- [x] Number
```javascript
typeof 3
typeof 3.14
typeof NaN
typeof Infinity
```

- [x] String
```javascript
typeof "hola"
```

- [x] Function
```javascript
typeof function(){}
```

- [x] Symbol (ECMA6)

> Ahora tenemos los símbolos, nuevo tipo de datos que sirve como identificador único para atributos de objetos

```javascript
typeof Symbol()
typeof Symbol('simbolo')
```
### Matemáticas Básicas
```javascript
var suma = 5 + 4;
var resta = 10 - 6;
var multiplicacion = 3 * 3;
var division = 6 / 2;
var modulo = 43 % 10;

function calcular (operacion) {
    console.log(operacion);
};
```

### Matemáticas Básicas (Agrupando operaciones)
```javascript
var expresion1 = (3 + 7) * 10;
var expresion2 = (-56 * 6) - 74 * -25;
var expresion3 = (3 * 3) + 10 - 12 / 2;
var expresion4 = 44 + (83 % (33 + 100));
var expresion5 = -145 + (500 / 10 - 5) + 10 * 10 ;

function calcular (operacion) {
    console.log(operacion);
};
```

### Matemáticas Básicas (crecimiento y decrecimiento)
```javascript
var numero = 5;

console.log(--numero); // 4
console.log(numero--); // 5 (luego 4)
console.log(++numero); // 6
console.log(numero++); // 5 (luego 6)
```

### Palabras reservadas
- implements
- interface
- let
- package
- private
- protected
- public
- static
- yield

### If... else

- Estructura:
    ```javascript
    /* IF ...ELSE
    if (-algo verdadero-) {
        -ejecutaremos este código-
    } else {
        -Si lo anterior no era verdadero, se ejecutara este código-
    };
    */
    ```

- Documentación:
    - [If... else en w3schools](http://www.w3schools.com/js/js_if_else.asp)
    - [If... else en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

- Ejemplo:
    ```javascript
    if (true) {
        console.log("true, por eso me ejecuto");
    } else {
        console.log("false, por eso me ejecuto");
    }
    ```


### Else if...

```javascript
function testCondiccion (condicion){
    if (condicion == 1) {
        console.log("1, por eso me ejecuto");
    } else if (condicion == 2){
        console.log("2, por eso me ejecuto");
    } else {
        console.log("no es 1 o 2, por eso me ejecuto");
    }
}
```


### Switch

- Estructura:
    ```javascript
    /* Switch
	switch(expresión) {
	    case n:
	        //Código
	        break;
	    case n:
	        //Código
	        break;
	    default:
	        //Código
	}
    */
    ```

- Documentación:
    - [Switch en w3schools](http://www.w3schools.com/js/js_switch.asp)
    - [Switch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)

### Operador Ternario (?:)

- Estructura:
    ```javascript
	    condicion ? expresion1 : expresion2 
    ```

- Ejemplo:
```javascript
	var esMiembro = true;
	console.info("El pago son  " + (esMiembro ? "20.00€" : "50.00€"));
```

### While

- Estructura:
    ```javascript
    /*  --while--
    while (-Condición-) {
        -Instrucciones-
    };
    */
    ```

- Documentación:
    - [While en w3schools](http://www.w3schools.com/js/js_loop_while.asp)
    - [While en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

- Bucle infinito:
    Este es un error muy común.

    ```javascript
    while (true) {
        console.log("Este texto se imprime hasta el infinito...");
    };
    ```

- Bucle que no se ejecutará:
    ```javascript
    while (false) {
        console.log("Este texto jamas se imprimirá...");
    };
    ```

- Ejemplo:
    ```javascript
    var control = 1;
    while (control <= 10) {
        console.log(control);
        control++;
    };
    ```


### For

- Estructura:
    ```javascript
    /*  --for--
    for (-Expresión inicial-; -Condición-; -Expresión Actualización-) {
        -Instrucciones-
    };
    */
    ```

- Documentación:
    - [For en w3schools](http://www.w3schools.com/js/js_loop_for.asp)
    - [For en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    - [Dominando el rendimiento](https://web.archive.org/web/20141205235948/https://blogs.oracle.com/greimer/entry/best_way_to_code_a)


- Ejemplo clásico:
    ```javascript
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    ```


### Do... While

- Estructura:
    ```javascript
    /* --Do...while--
    do{
       -Instrucciones-
    } while (-Condición-);
    */
    ```

- Documentación:
    - [Do... While en w3schools](http://www.w3schools.com/js/js_loop_while.asp)
    - [Do... While en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

- Ejemplo:
    ```javascript
    var i = 0;
    do {
       i++;
       console.log(i);
   } while (i < 10);
    ```

- Al menos se ejecutará una vez, aunque la premisa no sea verdadera.

    ```javascript
    do{
       console.warn("me ejecuto")
    } while (false);
    ```

### Break y Continue

- *Continue* nos permite saltar parte del bucle.
```javascript
for (var i = 0; i < 10; i++) {
    
    // Salta el 5 y sigue...
    if (i === 5) { 
    	continue; 
    }
    
    console.log("El valor de i es "+i);
}
```

- *Break* nos permite salir del bucle.
```javascript
for (var i = 0; i < 10; i++) {
    
    // Llega a 5 y sale.
    if (i === 5) { 
    	break; 
    }
    
    console.log("El valor de i es "+i);
}
```
### Números

**Propiedades**

- .MAX_VALUE() *El número más grande representable (1.7976931348623157e+308)*:
    ```javascript
       var numero1 = 1.7976931348623157e+308;
       var numero2 = 1.7976931348623157e+310;
       
       function verificarValorMaximo(num){
       
       	if (num <= Number.MAX_VALUE) {
       	  console.log("El número no es infinito");
       	} else {
       	  console.log("El número es infinito");
       	}
       	
       }
       
       verificarValorMaximo(numero1);
       verificarValorMaximo(numero2);    
    ```

- .MIN_VALUE() *El número más pequeño representable (5e-324)*:
    ```javascript
       var numero1 = 5e-323;
       var numero2 = 5e-326;
       
       function verificarValorMinimo(num){
       
       	if (num >= Number.MIN_VALUE) {
       	  console.log("El número no es infinito");
       	} else {
       	  console.log("El número es infinito");
       	}
       	
       }
       
       verificarValorMinimo(numero1);
       verificarValorMinimo(numero2);
    ```

- .NEGATIVE_INFINITY() *El valor negativo de la propiedad del objeto global Infinity*:
    ```javascript
        var numeroMinimo = (-Number.MAX_VALUE) * 2
        console.log(numeroMinimo);
        
        if (numeroMinimo === Number.NEGATIVE_INFINITY) {
         numeroMinimo = 0;
        }
        console.log(numeroMinimo);
    ```

- .NaN() *Not A Number*:
    ```javascript
        NaN === NaN;        // false
        Number.NaN === NaN; // false
        isNaN(NaN);         // true
        isNaN(Number.NaN);  // true    
    ```

- .POSITIVE_INFINITY() *Representa el infinito positivo*:
    ```javascript
        var numeroMaximo = Number.MAX_VALUE * 2
        console.log(numeroMaximo);
        
        if (numeroMaximo === Number.POSITIVE_INFINITY) {
         numeroMaximo = 0;
        }
        console.log(numeroMaximo);    
    ```


**Métodos:**

- .toExponential() *Devuelve una cadena con el valor número en formato de potencia*:
    ```javascript
        var numObj = 77.1234;
        
        console.log(numObj.toExponential());  // 7.71234e+1
        console.log(numObj.toExponential(4)); // 7.7123e+1
        console.log(numObj.toExponential(2)); // 7.71e+1
        console.log(77.1234.toExponential()); // 7.71234e+1   
    ```


- .toFixed() *Devulve un numero con decimales*:
    ```javascript
        var numObj = 12345.6789;
        
        numObj.toFixed();       //'12346' redondeo
        numObj.toFixed(1);      //'12345.7'
        numObj.toFixed(6);      //'12345.678900' Se añaden ceros en caso necesario
        (1.23e+20).toFixed(2);  //'123000000000000000000.00'
        (0).toFixed(2);         //'0.00'
        2.34.toFixed(1);        //'2.3' redondeo
        -2.34.toFixed(1);       //-2.3 Numeros negativos no son devueltos como cadenas.
        (-2.34).toFixed(1);     //'-2.3' En caso de usar paréntesis se salta la limitación 
    ```


- .toLocaleString() *Devulve una cadena con el valor numeral representado en lenguaje local*:
    ```javascript
        var numero = 3500;
        // En Local
        console.log(numero.toLocaleString()); // 3.500
        // En Árabe
        console.log(numero.toLocaleString('ar-EG')); // ٣٬٥٠٠
        // En Chino decimal
        console.log(numero.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // 三,五〇〇
    ```


- .toPrecision() *Devuelve un numero precisado*:
    ```javascript
        var numero = 5.123456;
        
        console.log(numero.toPrecision());    // 5.123456
        console.log(numero.toPrecision(5));   // 5.1235
        console.log(numero.toPrecision(2));   // 5.1
        console.log(numero.toPrecision(1));   // 5
        console.log((1234.5).toPrecision(2)); // 1.2e+3 (En ocasiones )
    ```



- .toString() *Devuelve una cadena con el número en la base que determinemos*:
    ```javascript
        console.log((17).toString());     // '17'
        console.log((17.2).toString());   // '17.2'
        console.log((-0xff).toString(2)); // '-11111111'
        console.log((254).toString(16));  // 'fe'
    ```
 
- .parseFloat() *Devuelve un número décimal partiendo de una cadena*:
    ```javascript
        Number.parseFloat("3.14"); // 3.14
        Number.parseFloat("314e-2"); // 3.14
        Number.parseFloat("0.0314E+2"); // 3.14
        Number.parseFloat("3.14textos..."); // 3.14
        Number.parseFloat("1textos..."); //1
    ```
    
- .parseInt() *Devuelve un número entero en una base especifica o en base 10 partiendo de una cadena*:
    ```javascript
        parseInt(" 0xF", 16); // 15
        parseInt(" F", 16);  // 15
        parseInt("17", 8);  // 15
        parseInt(021, 8);  // 15
        parseInt("015", 10);  // 15
        parseInt(15.99, 10);  // 15
        parseInt("15,123", 10);  // 15
        parseInt("FXX123", 16);  // 15
        parseInt("1111", 2);  // 15
        parseInt("15*3", 10);  // 15
        parseInt("15e2", 10);  // 15
        parseInt("15px", 10);  // 15
        parseInt("12", 13);  // 15
    ```

### Math

**Métodos:**

- .random() *Devuelve un número aleatorio*
    ```javascript
        // Número aleatorio entre 0 (incluido) y 1 (excluido)
        Math.random(); 
        
        // Retorna un número aleatorio entre min (incluido) y max (excluido)
        Math.random() * (max - min) + min;
        Math.random() * (11 - 0) + 0;
        
        // Retorna un entero aleatorio entre min (incluido) y max (excluido)
        Math.floor(Math.random() * (11 - 0)) + 0;
    ```

- .round() *Devuelve el valor de un número redondeado al entero más cercano*
    ```javascript
        Math.round(20.5); // 21
        Math.round(20.49); // 20
        Math.round(-20.51); // -21
    ```

- .Floor() *Devuelve el máximo entero menor o igual a un número.*
    ```javascript
        Math.floor(20.5); // 21
        Math.floor(20.49); // 20
        Math.floor(-20.51); // -21
    ```
- .max() *retorna el mayor de cero o más números*
    ```javascript
        function calcularMayor(valor1, valor2, valor3){
            return Math.max(valor1, valor2, valor3);
        }
        
        // Mejorando calcularMayor
        function calcularMayor(){
        	var args = Array.prototype.slice.call(arguments);
        	return Math.max.apply(null, args);
        }

    ```
- .min() *retorna el menor de cero o más números*
    ```javascript

        function calcularExtremos(){
        	var args = Array.prototype.slice.call(arguments);
        	return {minimo: Math.min.apply(null, args),
        			maximo: Math.max.apply(null, args)
        	};
        }
        
        
        misExtremos = calcularExtremos(1,2,4,56,-123);
        
        console.log("Mínimo: "+misExtremos.minimo+"\n"+"Máximo: "+misExtremos.maximo);
    ```    

### Dates

**Librerías:**
- [Dates.js](http://www.datejs.com/)
- [Momments.js](http://momentjs.com/timezone/)
- [JQuery timeAgo](http://timeago.yarp.com/)
- [Livestamp.js](https://mattbradley.github.io/livestampjs/)

**Metodos**

- Creando Fechas:
    - Fecha Actual:
    ```javascript
        var ahora = new Date();
        console.log(ahora);
    ```
    - Usando milisegundos (desde el 1/1/1970 00:00):
    ```javascript
        var diaDespues = new Date(3600*24*1000);
        console.log(diaDespues);
    ```
    - Usando cadenas de texto:
    ```javascript
        var newYear = new Date("January 1, 2016 00:00:00");
    ```
    - Usando números:
    ```javascript
        var newYear = new Date(2016, 1, 1); // AAAA, MM, DD
        var newYear = new Date(2016, 1, 1, 0, 0, 0); // AAAA, MM, DD, HH, MM, SS
    ```
    - Usando UTC:
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
    ```

- Getters:
    - Local
    ```javascript
        var ahora = new Date();
        console.log("La fecha es " + ahora);
        console.log("==== FECHA ====");
        console.log("El año: " + ahora.getFullYear()); // 4 digitos
        console.log("El mes: " + ahora.getMonth()); // 0 - 11
        console.log("El día de la semana: " + ahora.getDay()); // 0 - 6 (D - S)
        console.log("El día del mes: " + ahora.getDate()); // 1-31
        console.log("==== HORA ====");
        console.log("Horas: " + ahora.getHours());
        console.log("Minutos: " + ahora.getMinutes());
        console.log("Segundos: " + ahora.getSeconds());
        console.log("Milisegundos desde 1/1/1970: "+ ahora.getTime());
        console.log("milisegundos: " + ahora.getMilliseconds());
    ```
    - UTC
    ```javascript
        var ahora = new Date();
        console.log("Con UTC: ";
        console.log("==== FECHA ====");
        console.log("El año: " + ahora.getUTCFullYear()); // 4 digitos
        console.log("El mes: " + ahora.getUTCMonth()); // 0 - 11
        console.log("El día de la semana: " + ahora.getUTCDay()); // 0 - 6 (D - S)
        console.log("El día del mes: " + ahora.getUTCDate()); // 1-31
        console.log("==== HORA ====");
        console.log("Horas: " + ahora.getUTCHours());
        console.log("Minutos: " + ahora.getUTCMinutes());
        console.log("Segundos: " + ahora.getUTCSeconds());
        console.log("milisegundos: " + ahora.getUTCMilliseconds());
    ```

- Setters:
    - Local
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
        console.info("La fecha es " + newYear);
        
        newYear.setFullYear(1980); // Pasamos a 1980
        console.info("La fecha es " + newYear);
        
        newYear.setDate(56); // 1 Enero + 56 Días
        console.info("La fecha es " + newYear);
        
        newYear.setUTCMilliseconds(1500); // 1500ms en formato UTC
        console.info("La fecha es " + newYear);
        
        newYear.setUTCHours(36); // le sumamos 36 horas
        console.info("La fecha es " + newYear);
        
        newYear.setMonth(-6); // le quitamos 6 meses
        console.info("La fecha es " + newYear);
    ```

### String

**Propiedades:**
- .length() *Devuelve la longitud*:
```javascript
var cadena = "Fictizia";

console.log("Fictizia tiene " + cadena.length + " caracteres.");

console.log("Una cadena vacia tiene " + ''.length + " caracteres.");
```
  
**Métodos:**

- .fromCharCode() *Devuelve una cadena creada mediante una secuencia [Unicode](https://www.wikiwand.com/es/Unicode)*:
```javascript
	console.info("Es es el año 2016 ("+ String.fromCharCode(8559,8559,8553,8548,8544) + ")");
```


- .anchor() *Crea un ancla HTML*:
```javascript
	document.body.innerHTML = "Contenidos".anchor("contenidos"); 
	// "<a name="contenidos">Contenidos</a>"
```

- .link() *Crea un enlace*:
```javascript
var textoActivo="Nuestro Curso"
var url="http://www.fictizia.com/formacion/curso_javascript"
document.body.innerHTML = "Haga click para volver a " + textoActivo.link(url);
```

- .charAt() *Devuelve el carácter específico*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "'")
```


- .charCodeAt() *Devuelve el valor Unicode*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "', en unicode ("+cadena.charCodeAt(3)+")")
```


- .concat() *Combina el texto de dos o más cadenas*:
```javascript
var cadena1 = "Oh ";
var cadena2 = "qué maravillosa ";
var cadena3 = "mañana'.";
var combinacion = cadena1.concat(cadena2,cadena3);
console.log(combinacion); // devuelve "Oh qué maravillosa mañana'."
```


- .indexOf() *Devuelve el índice o -1*:
```javascript
"Mundo Web".indexOf("Web") // 6
"Mundo Web".indexOf("web") // -1
```


- .lastIndexOf() *Devuelve el índice de la última coincidencia o -1*:
```javascript
"Fictizia".lastIndexOf("i"); // 6
"Fictizia".lastIndexOf("f"); // -1
```

- .split() *Divide una cadena usando un separador*:
```javascript
function dividirCadena(cadenaADividir,separador) {
   var arregloDeCadenas = cadenaADividir.split(separador);
   console.log('<p>La cadena original es: "' + cadenaADividir + '"');
   console.warn('<br>El separador es: "' + separador + '"');
   console.log("<br>El arreglo tiene " + arregloDeCadenas.length + " elementos: ");

   var elementos = "";
   for (var i=0; i < arregloDeCadenas.length; i++) {
      elementos += arregloDeCadenas[i] + " / ";
   }

   console.info(elementos);

}

var cadenaVerso = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500";
var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espacio = " ";
var coma = ",";

dividirCadena(cadenaVerso, espacio);
dividirCadena(cadenaVerso);
dividirCadena(cadenaMeses, coma);
```

- [Using Slice(), Substring(), And Substr() In Javascript By Ben Nadel](https://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm)

- .slice() *Devuelve una cadena nueva con una sección de otra*:
```javascript
var cadena = "Fictizia";
console.log(cadena.slice(5)); // zia
console.log(cadena.slice(0, 5)); // Ficti
console.log(cadena.slice(3, -1)); // tizi
```

- .substr() *Devuelve los caracteres de una cadena comenzando en la localización especificada, y en el número de caracteres especificado.*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substr(0,5)); // Ficti
console.log("(5,3): "    + cadena.substr(5,3)); // zia
```

- .substring() *Devuelve un subconjunto*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substring(0,5)); // Ficti
```

- .toLocaleLowerCase() *Devuelve todo en minúsculas con las características locales*:
```javascript
console.log('FICTIZIA'.toLocaleLowerCase()); // 'fictizia'
```

- .toLocaleUpperCase(Devuelve todo en mayúsculascon las características locales) **:
```javascript
console.log('fictizia'.toLocaleUpperCase()); // 'FICTIZIA'
```

- .toLowerCase() *Devuelve todo en minúsculas*:
```javascript
console.log('FICTIZIA'.toLowerCase()); // 'fictizia'
```


- .toUpperCase() *Devuelve todo en mayúsculas*:
```javascript
console.log('fictizia'.toUpperCase()); // 'FICTIZIA'
```

- .trim() *Elimina espacios vacios al principio y final de la cadena*:
```javascript
console.log('  Fictizia '.trim()); // 'Fictizia'
```

## Ejercicios

1. Crea una función que imprima por consola (```console.log()```) un mensaje dependiendo del parametro que se le pase:
  * Si el parametro que se le pasa es mayor o igual que 18 debe imprimir **es mayor de edad**
  * Si el parametro que se le pasa es menor que 18 debe imprimir **es menor de edad**
  ```
  function isAdult(age) {
    console.log("")
  }
  ```

2. Imprimir los numeros del 1 al 10
3. Imprimir los numeros del 10 al 20 pero saltarse el 13
4. Devolver la suma de 5434.3053 + 1230.2034 sin deciamles
5. Crear la fecha de tu nacimiento y sacar un mensaje que diga **Nací el día D del mes M del año YYYY**
6. Dada una cadena de caracteres cambiar las "a" por "b" y viceversa
7. Dada una cadena de caracteres borrar el primer y el ultimo caracter.
8. El gato y el raton:
    - En una cadena de caracteres la C representa el gato y la m el raton.
    - El gato puede saltar 3 posiciones para atrapar al raton.
    - **Crea una funcion que devuelva si el gato puede atrapar al raton devolviendo true o false.**
9. Dada una cadena de caracteres borrar las palabras duplicadas y solo quedarnos con su primera aparicion
10. Dada una cadena de caracteres poner cada palabra de la cadena al revés.

### Arrays

- Creando un array:
    ```javascript
	var arreglo = [];
	arreglo = [1, "platano", "piscina", "manzana", true];
    ```

- Usando el Índice:
    ```javascript
	arreglo[1];
    ```

- Cambiar un valor del Índice:
    ```javascript
	arreglo[0] = "fresa";
	arreglo[4] = "pera";
	arreglo[2] = "limón";
    ```

- delete *sobrescribe a undefined*
    ```javascript
    delete arreglo[0];
    ```

- Elementos vacios:
    ```javascript
    arreglo[0] = undefined;
    ```

**Propiedades**

- Índice total:
    ```javascript
    	arreglo.length;
    ```

- Usando el Índice total en un bucle:
    ```javascript
	var numeros = [1, 2, 3, 4, 5];
	for (var i = 0; i < numeros.length; i++) {
	  numeros[i] *= 10;
	}
    ```

**Métodos**

- .isArray() *Confirmar que se trata de un Array*:
    ```javascript
    	var arreglo = [1,2,3]
    	
    	// true
    	Array.isArray([1]);
    	Array.isArray(arreglo);
    	
    	// false
    	Array.isArray();
	Array.isArray({});
	Array.isArray(null);
	Array.isArray(undefined);
    ```

- .toLocalString() *Retorna como string (configuración regional) todos los elementos*:
    ```javascript
	var numero = 1337.89;
	var fecha = new Date();
	var miArray = [numero, fecha, 'más datos'];
	
	var arrayConvertida = miArray.toLocaleString(); 
	console.log(arrayConvertida);     
    ```

- .toString() *Retorna una cadena de texto con todos los nombres*:
    ```javascript
	var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
	console.log(amigos.toString());
    ```

- .push() *Añadir elemento al índice*:
    ```javascript
	arreglo.push("nuevo");
    ```

- .pop() *Eliminar el último elemento del índice*:
    ```javascript
    	arreglo.pop();
    ```

- .shift() *Eliminar el primer elemento*:
    ```javascript
    	arreglo.shift();
    ```

- .unShift() *Añade nuevos elementos al principio del array y devuelve la longitud actualizada*:
    ```javascript
	var miArray = [1, 2];
	
	miArray.unshift(true, "otros datos...");
	console.log(miArray);
    ```

- .splice() *Borrar*:
    ```javascript
    	var manzana = arreglo.splice(3, 1);
    ```


- .slice() *Devuelve un nuevo Array con un segmento determinado del Array original*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	var citricos = frutas.slice(1, 3);
	console.info(citricos);
    ```

- .concat() *Retorna un nuevo Array con los Arrays especificados concatenados*:
   - Dos Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    
    	var nuevaArray = arreglo.concat(arreglo2);

	console.log(nuevaArray); 
    ```
   - Múltiples Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    	var otroArreglo = ['abc', 1, false]
    
    	var nuevaArray = arreglo.concat(arreglo2, [5.25, 100], otroArreglo);

	console.log(nuevaArray);
    ```


- .join() *Une todos los elementos en una cadena*:
    ```javascript
	var array = ['dato1', 2, , 'masDatos'];
	var datosJuntos = array.join();      // 'dato1,2,masDatos'
	var datosJuntos2 = array.join('');    // 'dato12masDatos'
	var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
    ```

- .indexOf() *Devuelve la posición donde se escuentra el elemnto o -1 si no lo encuentra*:
    ```javascript
	var array = [2, 5, 9];
	var index = array.indexOf(9); // 2
	var index = array.indexOf(12); // -1
    ```

- .lastIdexOf() *Devuelve la posición del último elemento que coincide o -1 si no lo encuentra*:
    ```javascript
	var array = [7, 1, 3, 7];
	array.lastIndexOf(7); // 3
	array.lastIndexOf(2); // -1
    ```

- .sort() *Ordenación de los elementos*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	frutas.sort(); // ["Limón", "Mango", "Manzana", "Naranja", "Platano"]
	
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.sort(); // [2, "más datos...", true, "uno"]
    ```

- .reverse() *Invierte el orden de un Array*:
    ```javascript
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.reverse(); 
	console.log(miArray) // ["más datos...", true, 2, "uno"]
    ```

- .forEach() *Se ejecuta la función por cada elemnto del array*:
    ```javascript
	function logger(element, index, array) {
	    console.log("array[" + index + "] = " + element);
	}
	[2, 5, 9].forEach(logger);
    ```

- .map():
    ```javascript
	var arreglo = ["plátano", "fresa", "lima", "manzana"];
	var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
	console.log(resultado);
    ```

- .some() *Verifica si alguno de los elementos en el arreglo pasan la prueba implementada por la función dada:*:
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].some(tamañoValido);   // true
	[12, 54, 18, 130, 44].some(tamañoValido); // true
    ```


- .every() *verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada:*
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].every(tamañoValido);   // false
	[12, 54, 18, 130, 44].every(tamañoValido); // true    
    ```

- .filter() *Crea un nuevo array con aquellos elementos que cumplan la condición*:
    ```javascript
	function tamañoValido(elemento) {
	  return elemento >= 10;
	}
	var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);
    ```

- .reduce() *Aplica una función a un acumulador y a cada valor de un vector para reducirlo a un único valor (de izquierda a derecha)*:
    - Base:
    ```javascript
	var reduce = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indiceActual, array){
	  return valorAnterior + valorActual;
	});
	console.log(reduce); // 10
    ```
    
    - Sumar los valores de un Array:
    ```javascript
    var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
    ```
    
    - Fusionar varios Arrays en uno solo:
    ```javascript
    var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
      return a.concat(b);
    });
    console.log("integrado es", integrado); //[0, 1, 2, 3, 4, 5]
    ```

### Ejercicios

```
var companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
```

1. Imprimir una lista de las compañias usando while
2. Imprimir una lista de las ciudades usando for
3. Concatenar los dos arrays
4. Imprimir una lista de **compañia - ciudad**
5. Borrar el ultimo elemento de los dos arrays
6. Imprimir una lista de las ciudades que empiecen por **A**
7. Imprimir una lista de las ciudades que tengan igual o mas de 10 caracteres
8. Dado un diccionario de lenguajes sacar un array en orden descendente que al menos tengan una puntacion de 60.
Ejemplo
{"javascript": 60, "python": 40, ruby: 80} -> ["ruby", "javascript"]
9. Tienes una aplicacion de chat pero quieres saber quien está online. Crea una función que dada una entrada similar a esta:
```
[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
```
Te devuelva quien esta online. Si su status es online pero su ultima actividad es mayor que 10 minutos su estado se considera "away".
Un ejemplo de salida de la entrada anterior sería:
```
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
```

### Objetos

- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [w3schools Objects](http://www.w3schools.com/js/js_objects.asp)

**Objetos Literales**

- Propiedades:
    ```javascript
	var miObjeto = {
	    cadena: 'esto es una cadena',
	    numero: 2,
	    booleano: false
	};
	```


- Métodos:
    ```javascript
	var miObjeto = {
	    saludar: function(){
			console.log("hola!");
		}
	};
	```
	
- Trabajando con espacios y caracteres especiales:
    ```javascript
	var miObjeto = {
		nombre: "objeto",
	    "año": 2015,
	    "estado del sistema": "correcto"
	};
	
	console.log(miObjeto["año"]);
	miObjeto["estado del sistema"] = "fuera de servicio";
	console.log(miObjeto["estado del sistema"]);
	```

- Acortar objetos:

    ```javascript
	var objetoAbreviado = objeto.muy.muy.largo.que.tiene.muchos["metodos y propiedades"];
	
	objetoAbreviado.propiedad1;
	objetoAbreviado.metodo1();

	```

**Métodos**

- .defineProperties() *Define nuevas o modifica propiedades existentes directamente en el objeto, returnando el objeto.*:
    ```javascript
    	var miObjeto = {propiedad: "Propiedad original..."}
	Object.defineProperties(miObjeto, {
	  "propiedad1": {
	    value: true,
	    writable: true
	  },
	  "propiedad2": {
	    value: "Cadena de texto",
	    writable: false
	  }
	});
	console.info(miObjeto);
	miObjeto.propiedad = "Propiedad original Modificada";
	console.info(miObjeto.propiedad);
	miObjeto.propiedad2 = "Cadena de texto... ¿modificada?";
	console.info(miObjeto.propiedad2);
    ```

- .getOwnPropertyDescriptor() *Devuelve las detalles de los objetos y métodos del objeto. Undefined en caso de no existir*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};

	console.info(Object.getOwnPropertyDescriptor(miObjeto, 'propiedad1'));
	// Object {value: "Datos", writable: true, enumerable: true, configurable: true}
	
	console.info(Object.getOwnPropertyDescriptor(miObjeto, 'inventado'));
	// undefined
    ```

- .getOwnPropertyNames() *Devuelve un array con todos los nombres de las propiedades y métodos del objeto*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log(Object.getOwnPropertyNames(miObjeto));
	// ["metodo", "propiedad1"]
    ```

- .isExtensible() *Determina si un objeto es extensible*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
	
	var sellado = Object.seal(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(sellado));
	
	var congelado = Object.freeze(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(congelado));
	
	Object.preventExtensions(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
    ```


- .hasOwnProperty() *Devuelve true o false si l apropiedad existe o no*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Tiene la propiedad \"propiedad1\"?", miObjeto.hasOwnProperty('propiedad1'));
	console.log("¿Tiene la propiedad \"propiedad2\"?", miObjeto.hasOwnProperty('propiedad2'));
    ```


- .propertyIsEnumerable() *Devuelve true o false si la propiedad es especificada es enumerable.*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Es enumerable \"propiedad1\"?", miObjeto.propertyIsEnumerable('propiedad1'));
	console.log("¿Es enumerable \"metodo\"?", miObjeto.propertyIsEnumerable('propiedad2'));
    ```

- .toLocaleString() *Retorna como string (configuración regional) todas las propiedades*:
    ```javascript
	var fecha = new Date();
	
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos",
	  fecha: fecha
	};
	
	miObjeto.toLocaleString()
	console.log("La fecha es ", miObjeto.fecha);
    ```

**For... in**

Itera sobre todas las propiedades de un objeto, en un orden arbitriario.
```javascript
	var objeto1 = {
		propiedad1: "hola",
		propiedad2: 2,
		propiedad3: false,
		propiedad4: [true,2,5, "..."],
		propiedad5: {
			dato: "más datos..."
		},
		metodo: function(){
			console.log("hola");
		}
	}
	function mostrar_propiedades(objeto, nombreObjeto) {
	   var resultado = "";
	   for (var i in objeto) {
	      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
	   }
	   return resultado;
	}
	
	mostrar_propiedades(objeto1, "objeto1");
```

### Ejercicios

1. Dado un string como este: "Sergio Zamarro, 485648, Adrian Fuentes, 904847" crear una funcion que devuelva un array de objetos como este:
```
[
    {
        name: "Sergio Zamarro",
        contact: 485648
    },
    {
        name: "Adrian Fuentes",
        contact: 904847
    }
]
```
**Puede ser que el string venga vacio y deberia devolver un array vacio**
**El contact debe ser un numero, no un string**

2. Crear una funcion que recibe un string como idioma y debe devolver el saludo en el idioma correspondiente. La lista de idiomas es esta:
```
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
```
**El lenguaje que viene siempre es uno de esos**
**Puede ser que no venga lenguaje entonces debe devolver "Welcome"**

3. Crear un objeto que tenga las siguientes propiedades y metodos:
* Name
* Saludar (método)
* Decir adios (método)
* Cambiar nombre (método)

```
let human = {name: 'Sergio', saludar: function(){}, ...}
human.name //Sergio
human.saludar() //Hi!
human.adios() //Bye
human.cambiarNombre('Alberto')
human.name //Alberto
```

4. Crea una funcion que reciba como primer parametro un array y como segundo un valor.
La funcion debe devolver true si el segundo parametro se encuentra dentro del array (primer parametro) y false si no se encuentra. Ejemplos de llamada a la funcion:
```
isInArray([1, 2, 3], false) //false
isInArray([1, 'Sergio', 3], false) //false
isInArray([1, 'Sergio', false], false) //true
```

### Funciones


- Propiedad *name*:
    ```javascript
  function miFuncion (){
    // vacia
  };

  console.log(miFuncion.name);
    ```


- **Declaración y ejecución**:
    ```javascript
  function dameTrue (){
    return true
  };

  function dameFalse () {
    return false
  };

  dameTrue();
  dameFalse();
    ```

- **this**:
  - como función (*this* contexto *window*)
    ```javascript
    function ambitoGlobal () {
      return this;
    }
    
    ambitoGlobal()
    ```
  - como método en un objeto (*this* contexto objeto al que pertenece el método)
    ```javascript
    var objeto = {};
    
    objeto.miMetodo = function () {
      return this;
    }
    
    objeto.miMetodo();
    ```   
  - como constructor de un objeto (*this* contexto objeto creado)
  - .apply() y .call() (modificación explícita de *this*)

- **Argumentos:**
  - El exceso de argumentos no es un problema
  - La falta de argumento crea un valor indefinido
    - El Objeto Arguments no es un Array, solo es similar.
    ```javascript    
  
	  function pruebaArguemntos () {
	  console.log(arguments);
	  console.info(arguments[0]);
	  console.info(arguments[1]);
	  }
	  
	  pruebaArguemntos (1, "vale", true);
	  
    ```
- [Objeto Arguments](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/arguments)


- **Retorno**
```javascript
  function sumaCuadrados (a, b) {
    return (a*a) + (b*b);
  };
```

### Scope

- Declaración y ejecución:
    ```javascript
  var numero = 450;
  var otroNumero = 23;

  function sumaCuadrados (a, b) {
    var numero = a;
    var otroNumero = b;
    var calculo = (numero*numero) + (otroNumero*otroNumero);
    console.log("\"numero\" es \""+numero+"\", local");
    console.log("\"otroNumero\" es \""+otroNumero+"\", local");
  };

  function verificarGlobales() {
    console.log("\"numero\" es \""+numero+"\", global");
    console.log("\"otroNumero\" es \""+otroNumero+"\", global");
  };
    ```

### Funciones Avanzadas

- Anónimas (expresiones):
    ```javascript
  var sumaCuadrados = function (a, b) {
    return (a*a) + (b*b);
  };
    
    console.log("El .name de sumaCuadrados es "+sumaCuadrados.name)
    ```

- Funciones como dato:
    ```javascript
  function saludo () {
    console.log("hola!");
  };

  function lanzar (funcion){
    funcion();
  };
    ```

- Funciones anónimas autoejecutables:
    ```javascript
  (function() {
    console.log("hola Amigo/a")

  }) (); //ex:Jquery
    ```


- Funciones anónimas con parámetros:
    ```javascript
  ( function(quien){
     console.log("hola " + quien);
  })("Amigo/a");
    ```


- Función que devuelve una función anónima:
  - Asignando una variable:
    ```javascript
  function saludo(quien){
          return function(){
                  alert("hola " + quien);
          }
  }
  var saluda = saludo("Amigo/a");
  saluda();
    ```

  - Sin asignar una variable:
    ```javascript
  function saludo(quien){
          return function(){
                  alert("hola " + quien);
          }
  }
  saludo("Amigo/a")();
    ```


### Funciones Avanzadas: Anidación

**Con variables**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
var saluda = saludar("Amigo/a");
saluda();
```

**Ejecución directa**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
saludar("Amigo/a")();
```
    
### Funciones Avanzadas: Recursión

- Calcular el [factorial](https://www.wikiwand.com/es/Factorial).
  
    ```javascript
    function factorial(n){
      return n <= 1 ? 1 : n * factorial(n-1);
    }
    
    factorial(0); // n! = 1
    factorial(1); // n! = 1
    factorial(2); // n! = 2
    factorial(3); // n! = 6 (3*2*1)
    factorial(4); // n! = 24 (4*3*2*1)
    factorial(5); // n! = 120 (5*4*3*2*1)
    factorial(6); // n! = 720 (...)
    // ...
    ```


### Ejercicios
1. Existe una lista de proyectos y cada proyecto tiene grupos. Estos grupos pueden tener grupos asociados. Devolver para cada
proyecto el nombre de sus grupos y los grupos de los grupos. Ejemplo de entrada:
```
let projects = [
  {
      project: 'project 1',
      groups: [
          {
              name: 'group1',
              groups: [
                  {
                      name: 'group1.1',
                      groups: []
                  },
                  {
                      name: 'group1.2',
                      groups: [
                          {
                              name: 'group1.2.1',
                              groups: []
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      project: 'project2',
      groups: []
  }
]
```

### Funciones Avanzadas: Closures

> Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.

> No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.
> [Closures MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

- Fábrica de función:
    ```javascript
  function sumador(x) {
    return function(y) {
      return x + y;
    };
  }

  var sum1 = sumador(10); //Closure
  var sum2 = sumador(30); //Closure

  console.log(sum1(2)); // Devuelve 12
  console.log(sum2(2)); // Devuelve 32
  console.log(sumador(20)(2)); //Devuelve 22
    ```

- Otro ejemplo, ahora temporizado:
    ```javascript
  function saludar(segundos){
    var hola = "Hola, Hola!";

    setTimeout(function(){
      console.info(hola);
    },segundos*1000);
  }

  saludar(2);
    ```

- Otro ejemplo... más útil:
    ```javascript
      var varGlobal = "Soy un dato Global";
      var burbuja;

      function nivel1() {
        var varInterna = "Soy un dato interno. -> nivel1";

        function nivel2() {
          console.log("Estoy dentro de la funcion -> nivel2")
          console.log("Estoy dentro de la funcion -> nivel2 y puedo acceder al nivel1: "+varInterna)
        }

        burbuja = nivel2;

      }

      nivel1();

      burbuja();
      console.log("Burbuja recuerda su contexto original")
    ```

### Funciones Avanzadas: Callbacks

> En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

- Ejemplo condensado:
    ```javascript
  var quieroCallback = function(parametro, callback){
      if ((callback) && (typeof callback === 'function')){
          callback(parametro);
      }
      else
          console.log(parametro, callback);
  }
   
  quieroCallback('a', 'b');
   
  quieroCallback('a', function(val){
      console.log(val);
  });
    ```


- Ejemplo con Jquery:
    ```javascript
    $('#elemento').fadeIn('slow', function() {
      // código del callback
  });
    ```


- Otro ejemplo:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      callback();
  }

  comerSandwich('jamón', 'queso', function() {
      console.info('Ya terminé...');
  });
    ```


- Ejemplo con Callback opcional:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback) {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```


- Sanitizar el Callback:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback && typeof(callback) === "function") {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```
