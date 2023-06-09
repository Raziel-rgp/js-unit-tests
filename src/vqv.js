/* eslint-disable no-unused-vars */

const { array } = require('yargs');

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, age) => {
  const texto = `Oi, meu nome é ${name}!\n`;
  const texto2 = `Tenho ${age} anos,\n`;
  const texto3 = 'trabalho na Trybe e mando muito em programação!\n#VQV!';
  let textoCompleto = 0;
  if (name !== undefined && age !== undefined) {
     textoCompleto = (texto + texto2 + texto3);
  } else {
    console.log(undefined);
    return (undefined);
  }
  return (textoCompleto);
  };

module.exports = vqv;
