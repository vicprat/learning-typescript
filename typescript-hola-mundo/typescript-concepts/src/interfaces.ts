//Podemos implementar type o interface
//Por convenicon si vamos a crear una interfaz hay que utilizar interface

interface Animal {
  name: string;

  caminar(): void;
  onomatopeya(): string;
}

class Caballo implements Animal {
  name: string = "Epona";

  caminar() {
    console.log("caminando");
  }

  onomatopeya() {
    return "relinchandoando";
  }
}

class Cerdo implements Animal {
  name: string = "Chanchito Feliz";

  caminar() {
    console.log("caminando");
  }

  onomatopeya() {
    return "oinc";
  }
}

class Perro implements Animal {
  name: string = "Logan";
  caminar(): void {
    //throw new Error("Method not implemented.");
    //En el caso de no implementar los metods TS lanzará un error
    console.log("perro caminando");
  }
  onomatopeya(): string {
    //throw new Error("Method not implemented.");
    return "ladrido";
  }
}


class DiccionarioUsuarios {
    [id:string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1a']= 'usuariio 1'
diccionarioUsuarios['a1']= 'usuariio 2'

console.log(diccionarioUsuarios)