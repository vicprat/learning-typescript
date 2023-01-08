// //Para crear un generico agregamos una valor generico dentro de <> para asignar a algun dato que vayamos a utilizar
// function log<T, V>(a: T, b: V): V{
//     console.log(a,b)

//     return b
// }

// // function logN(a: string, b: number){
// //     console.log(a,b)
// // }

// log<string, number>('dato', 42)
// log<string, string>('dato', 'chanchito feliz')

// //Aqui al no asignar que tipo de dato es el genérico, el compilador infiere el tipo de dato haciendo uso de los tipoś literales.
// log(1,2)
// log('Saludo', 'Hola mundo')

async function fetchData<T>(recurso: string): Promise<T> {
  const respuesta = await fetch(`${recurso}`);
  return respuesta.json();
}

type User = {
  id: string;
  name: string;
};

async function main() {
  const user = await fetchData<User>("/usuarios");
}

type Computador = {
  encender: () => void;
  apagar: () => void;
};

class Programador<T> {
  computador: T;
  constructor(t: T) {
    this.computador = t;
  }
}

const programador = new Programador<Computador>({
  encender: () => {},
  apagar: () => {},
});
// const programador1 = new Programador<string>('Hola mundo')
// programador1.computador.slice
//en este ultimo punto esperamos que nos devuelva todos los metodos de un string
programador.computador.apagar;

interface KeyValue<T, V> {
  key: T;
  value: V;
}

interface Product {
  id: string;
}

function fetchProduct(): KeyValue<string, Product> {
  return {
    key: "id del produto",
    value: { id: "id del producto" },
  };
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: "id de producto",
    value: 500,
  };
}

// interface Usuario {
//   id: string
//   name: string
// }
class Usuario {
  constructor(public id: string) {}
}

function print<T extends Usuario>(t: T): T {
  console.log(t);

  return t;
}

print({ id: "user_id", name: "Vaca" });

class Estad<T> {
  protected data: T[] = [];

  agregar(t: T): void {
    this.data.push(t);
  }

  getEstado(): T[] {
    return this.data;
  }
}

type ObjectId = {
  id: string;
};
//Pasar geneérico
//Pasar génerico con restricciones
class EstadoEliminar<T extends ObjectId> extends Estad<T> {
  eliminar(id: string) {
    this.data = this.data.filter((x) => x.id !== id);
  }
}

//Pasar genérico fijo
class EstadoUsuarios extends Estad<Usuario> {
  resetPassword() {
    //
  }
}

type Calendar = {
  id: number,
  fuente: string,
  dueno: string
}

const calendar = {id: 1, fuente: 'Google', dueno: 'Victor'}

function getProp<T>(objeto: T, property: keyof T): unknown {
  return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
// getProp<Calendar>(calendar, 'propiedadQueNoExiste')

type Punto = {
  x: number,
  y: number,
  desc?: string,
}

// type PuntoOpcional = {
//   x?: number,
//   y?: number,
//   desc?: string,
// }

//Utility Types evita la duplicidad de codigo de la siguiente manera
//Partial nos hace opcionales todos nuestros argumentos
type PuntoOpcional = Partial<Punto>
//Required los vuelve necesrios
type PuntoRequerido = Required<Punto>
//Record
const keyVal: Record<string, number> = {
  'soiy un string': 42
}
type kv = { [key:string]: number}
//Omit
const p: Omit<Punto, 'desc'| 'y'> = {
  x:1,
  // y:2
}
//Pcik
const p1: Pick<Punto, 'x' | 'y'> = {
  x: 1,
  y: 2
}
//ReadOnly
const readOnlyP: Readonly<Punto> = {
  x: 1,
  y: 2,
  desc: 'soy una descripcion'
}

// readOnlyP.x = 42