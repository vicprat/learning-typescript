// let mensaje: string = "hola mundo";

// mensaje = "chanchito feliz";

// mensaje = "adios a todos";
// console.log(mensaje);

// // tipos de datos JS
// // number
// // string
// // boolean
// // null
// // undefined
// // object
// // function

// // tipos de TS
// // any <- No utilizarlo
// // unknown
// // never
// // arrays
// // tuplas
// // enum

// // tipos inferidos
// // let extincionDinosaurios = 76_000_000
// // let dinosaurioFavorito = 'T-Rex'
// // let extintos = true

// // let mivariable
// // mivariable = 'chanchito feliz'
// // mivariable = 42

// function chanchitoFeliz(config: any) {
//   return config;
// }

// let animals: string[] = ["chanchito", "feliz", "frnakie"];
// let nums: number[] = [1, 2, 3, 4];
// let nums2 = [];
// //nums2 se asigna automiaticamente con el valor any
// let checks: boolean[] = [];
// //es necesario asignar el tipo de dato para vitar tenerlo como any por defecto
// let nums3: Array<number> = [];
// //en nums3 especificamos que nuestra variable es un arreglo y después especificamos el tipo de dato

// // animals.map(x => x.includes)
// // el autocompletado sugiere métodos según el tipo de dato

// // Las tuplas son un tipo de dato que no existe en JS
// // Es un set de datos que se encuentran ordenados

// let tupla: [number, string] = [1, "logan"];
// let tupla2: [number, string[]] = [1, ["vaca", "logan", "frankie"]];

// //enum
// const chica = "s";
// const mediana = "m";
// const grande = "l";
// const extraGrande = "xl";

// //PascalCase
// enum Talla {
//   Chica = "s",
//   Mediana = "m",
//   Grande = "l",
//   ExtraGrande = "xl",
// }

// const variable1 = Talla.Grande;
// console.log(variable1);

// const enum LoadingState {
//   Idle,
//   Loading,
//   Success,
//   Error,
// }

// const estado = LoadingState.Success;

// type Direccion = {
//   numero: number;
//   calle: string;
//   pais: string;
// };

// type Persona = {
//   readonly id: number;
//   // readonly sirve para que los datos no puedan ser reasignados y solo sean de lectura evitando que escribamos sobre ella
//   nombre?: string;
//   // ? optional chaning, esto significa que no es necesario agregar ese valor a nuestro objeto
//   talla: Talla;
//   // podemos agregar datos de tipo enum
//   direccion: Direccion;
// };

// const objeto: Persona = {
//   id: 1,
//   nombre: "Hola Frankie",
//   talla: Talla.Chica,
//   direccion: {
//     numero: 1,
//     calle: "Av. Hércules",
//     pais: "México",
//   },
// };

// const arr: Persona[] = [];

// const fn: () => void = () => {
//   //void significa que la funcion no retorna ningun valor
// };

// const fn1: () => number = () => {
//   // asignando el tipo de dato es la forma que TypeScript se asegura de que las funciones van a retornar un valor
//   let x = 7;
//   if (x > 5) {
//     return 7;
//   } else {
//     return 4;
//   }
// };

// const fn2: (a: number) => string = (edad: number) => {
//   if (edad > 17) return "puedes ingresar";
//   return "no puedes ingresar";
// };

// function validaEdad(edad: number, msg = "Chanicto feliz") {
//   if (edad > 17) return `puedes ingresar ${msg}`;

//   return "no pudes pasar";
// }

// validaEdad(18, "hola mundo");

// function ErrorUsuario(): never {
//   throw new Error("error de usuario");
// }

// let puntaje: number | string = 98;

// puntaje = "hola mundo";

// type Animal = {
//   id: number;
//   estado: string;
// };

// type Usuario = {
//   id: number;
//   name: string;
// };

// let animal: Usuario | Animal = { id: 1, estado: "", name: "" };

// function sumaDos(n: number | string): number {
//   if (typeof n === "number") {
//     return n + 2;
//   }
//   return parseInt(n) + 2;
// }

// sumaDos("2");

// console.log("suma de dos mas dos", "2" + 2);

// type Audit = {
//   created_at: string;
//   modified_at: string;
// };

// type Product = {
//   name: string;
// };

// const product: Audit & Product = {
//   created_at: "",
//   modified_at: "",
//   name: "",
// };

// type Fibo = 0 | 1 | 2 | 3 | 5;

// const nDeFibo: Fibo = 3;

// function toNumber(s: string | null) {
//   if (!s) {
//     return 0;
//   }
//   return parseInt(s);
// }

// const n = toNumber(null);

// function getUser(id: number) {
//   if (id < 0) {
//     return null;
//   }
//   return {
//     id: 1,
//     name: "Felipe",
//     created_at: new Date(),
//   };
// }

// const user = getUser(5);

// console.log('usuario', user?.created_at);

// if (user && user.created_at) {
//     console.log(user.created_at)
// }

// const arr1 = null

// console.log(arr1?.[0])

// const fn5:any = null

// console.log(fn5?.())

// const difficulty: number | null = 0

// const user2 = {
//     username: 'chanchito feliz',
//     difficulty: difficulty ?? 1,
// }

// console.log(user2)
// // Operador de OR ||
// // Nullish coalising operator ??

// const elem: any = null;

// const elem1 = elem as number

// const input = document.getElementById('username') as HTMLInputElement
// const input2 = <HTMLInputElement> document.getElementById('username')

// function Lala(x: string | number) {
//     //type narrowing
//     if (typeof x === 'number'){
//         x.
//     }
//     if (typeof x === 'string'){
//         x.
//     }
// }

// function procesa(algo: unknown) {
//     if (typeof algo === 'string'){
//        return algo.toUpperCase()
//     }
//     if (typeof algo === 'number'){
//         return algo.toString()
//      }
//      if (algo instanceof String) {

//      }
//     algo.haceCosas()
//     algo.ortasCosas()
//     algo.genkidama()
// }

class Personaje {
    profesion?: string;
    private static equipo: number = 1
    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number
    ) {
    }

    subirNivel(): number {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }

    static agregarPersonaje(): void {
        Personaje.equipo++
    }

    //Metodo para cambiar hp
    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad;
        // no pasar del maximo
        return this._hp;
    }

    //Getters y setters
    get hp(): number {
        return this._hp
    }

    static getEquipo(): number {
        return Personaje.equipo
    }
    
}

//ahora podemos crear una instancia de un personaje
//es importante pasar los tipos de datos dentro de los parametros del constructor para que nosotos sepamos que argumentos pasar
const personaje = new Personaje(1, "Logan", 1, 100);
personaje.cambiarHP(-10);

const personaje1 = new Personaje(2, 'chanchito', 1, 120)
Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())

//TypeNarrowing de objetos para ser explicito al consultar si se trata de alguna clase en especifico
if (typeof personaje) {
    //debe devolver object en lugar de personaje
}

if (personaje instanceof Personaje) {
    //debe devolver un boolean
}
