//una vez teniendo la ruta y su tipo de dato podemos pasarla como argumento
function Route(ruta: string) {
  return (constructor: Function) => {
    console.log("ejecutando decorador de ruta");
    constructor.prototype.route = ruta;
  };
  //console.log('ejecutando decorador de ruta')
  //Para agregar metodos y cambiar las funcionalidades necesitamos acceder al prototipo de nuestro constructor
  //con este constructor accedemos al prototipo
  //constructor.prototype.route = '/productos'
  //esta practica no es la mejor ya que significa que se tiene que crear un decorador por cada una de estas clases
}

//estos decoradores siempre reciben 3 argumentos y siempre son los mismos
//target que hace referencia al constructor o prototipo de la clase y su valor se espera que sea de tipo any
//methodName o nombre del metodo que siempre debe ser un string
//descriptor y recive el valor de PropertyDescriptor
function Method(_method: string) {
  return (_target: any, methodName: string, descriptor: PropertyDescriptor) => {
    //por lo general target no se utiliza cuando estamos trabajando con decoradores de propiedades
    console.log(methodName, descriptor);
    const original = descriptor.value;
    //Agregando un argumento es la forma en la que podemos pasarlos a nuestra llamada del decorador
    descriptor.value = function (...args: any) {
      //cuando remplazamos la propiedad de value, estamos remplazando el metodo definido en las clases  en este caso es remplazado cuando definimois el metodo de find
      //Sin embargo esto no es lo que vamos a querer hacer la mayoria de veces. Lo que queremos es ejecutar codigo antes y/o despeus de que nosotros llamemos al metodo
      //Esto lo haremos cuando guardemos una referencia de esta funcion
      console.log("antes del método");
      //Pasamos argumento en nuestro decorador de metodo
      original.call(this, ...args);
      console.log("despues del decorador");
    };
  };
}

@Route("/productos")
class Productos {
  //Para poder decorar los métodos lo que tenemos que hacer es ponerlos antes de la definicion denu estro metodo
  @Method('get')
  //Pasamos un valor al metodo que se implementara despues del log
  find(val: string) {
    console.log("soy el eetodo find" + val);
  }
}

//creamos una nueva instancia de la clase de productos
const p = new Productos() as any;
// console.log(p.route);
p.find(" hola mundo");
