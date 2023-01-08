// La herencia soluciona el problema donde se repiten propiedades

/**
 * Producto
 * name
 * desc
 * create_at
 * creted_by
 * stock
 * sku <- identificador unico
 *
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date,
    protected created_by: number
  ) { }

  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return this.name + " - " + this.desc;
  }

  abstract guardar(): void;
}

//extends crea una nueva calse obteniendo las propiedades y metodos de
// la clase que mencionemos despues de la palabra reservada extends
class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    // super se implementa en el constructor de clases derivadas
    super(name, desc, created_at, created_by);
  }

  override get fullDesc() {
    return "Producto: " + super.fullDesc;
  }

  guardar() {
    console.log('guardando prodcuto')
  }

}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDesc() {
    return "Categoria: " + super.fullDesc;
  }

  guardar() {
    console.log('guardando categoria')
  }

}

let producto1 = new Producto(
  100,
  1,
  "chanchitophone",
  "este es un smartphone",
  new Date(),
  1
);

let categoria = new Categoria("Celulares", "", new Date(), 1);
categoria.agregarProducto(producto1);

console.log(producto1.fullDesc, categoria.fullDesc);
