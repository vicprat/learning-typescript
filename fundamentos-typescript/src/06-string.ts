(() => {
  let produtTitle: string = 'My amazing product';
  produtTitle = 'My product changed';

  console.log('productTitle', produtTitle);

  const productDescription = `Soy un 'nuevo' producto que cambiara tu vida`;
  console.log('productDescription', productDescription);

  const sumary = `
  title: ${produtTitle}
  description: ${productDescription}
  `;
  console.log('sumary', sumary);
})();
