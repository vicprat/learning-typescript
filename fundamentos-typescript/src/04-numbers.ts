(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'
  //output  281. Aunque es una operación que se puede realizar comunmente en JS, en TS no se permite hacerlo de este modo ya que por inferencia de datos requiere una variable de tipo number para poder ser ejecutada de manera correcta.
  console.log(`customerAge`, customerAge);

  let productStock: number;
  //cuando quieres crear una variable sin ser inicializada, en TS es necesario declar de forma explicita cual es el tipo de dato para evitar que sea inferido o asignado como any.
  console.log(`productStock`, productStock);
  if (productStock > 10) {
    console.log('El stock es mayor');
  }
  //El analisis de código éstatico de TS marca como error los valores que se ejecutan sin asignar un valor previamente.

  //lo convierten en INT si no lo lee dice NaN
  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('aplica');
  } else {
    console.log('No aplica');
  }

  //exadecimal y binarios
  //Aunque no se asigna un tipo de dato, por el valor que se inicializa TS infiere que el valor es un hexadecimal
  let hex = 0xfff;
  console.log('hex', hex);
  //Aunque no se asigna un tipo de dato, por el valor que se inicializa TS infiere que el valor es un binario
  let bin = 0b10100000000000000000000001111110000000;
  console.log('bin', bin);

  //simepre en minuscula
  //X const myNumber: Number = 10;
  const myNumber: Number = 10;
})();
