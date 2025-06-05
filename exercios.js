// // Variáveis e Tipos de Dados
// // 1. Declare uma variável nome e atribua seu nome a ela. Em seguida, exiba o valor no
// // console.
// let nome = "João";
// console.log(nome);

// // 2. Declare duas variáveis idade e cidade, atribua valores e imprima-os juntos em
// // uma frase.
// let idade = 25;
// let cidade = "São Paulo";
// console.log(`Tenho ${idade} anos e moro em ${cidade}.`);

// // 3. Declare uma variável anoAtual e outra anoNascimento, calcule a idade e exiba
// // no console.
// let anoAtual = 2025;
// let anoNascimento = 2000;
// let idadeCalculada = anoAtual - anoNascimento;
// console.log(`Idade: ${idadeCalculada}`);

// // 4. Crie uma variável estaChovendo e atribua true ou false, depois exiba o tipo
// // dessa variável com typeof.
// let estaChovendo = false;
// console.log(typeof estaChovendo); // boolean

// // 5. Crie três variáveis usando var, let e const, e tente modificar seus valores para
// // entender suas diferenças.
// // 5
// var variavelVar = 10;
// let variavelLet = 20;
// const variavelConst = 30;

// variavelVar = 15;
// variavelLet = 25;
// // variavelConst = 35; // ❌ Erro: const não pode ser reatribuída

// console.log(variavelVar, variavelLet, variavelConst);

// // Operadores Aritméticos
// // 6. Some dois números e exiba o resultado no console.
// console.log(5 + 3); // 8
// // 7. Subtraia dois números e exiba o resultado.
// console.log(5 - 3);
// // 8. Multiplique dois números e exiba o resultado.
// console.log(6*7);
// // 9. Divida dois números e exiba o resultado.
// console.log(5 + 3);
// // 10. Utilize o operador de módulo % para encontrar o resto da divisão de 10 por 3.
// console.log(10 % 3); 
// // 11. Eleve um número ao quadrado usando **.
// console.log(5 ** 2); 

// // 12. Crie um programa que converta temperatura de Celsius para Fahrenheit usando a
// // fórmula: F = C * 1.8 + 32.
// let celsius = 30;
// let fahrenheit = celsius * 1.8 + 32;
// console.log(`${celsius}°C = ${fahrenheit}°F`);
// // Operadores de Atribuição
// // 13. Declare uma variável contador com valor 10 e incremente seu valor usando +=.
// let contador = 10;
// contador += 1;
// console.log(contador); 
// // 14. Multiplique o valor de uma variável por 3 usando *= e exiba o resultado.
// let numero = 5;
// numero *= 3;
// console.log(numero);
// // 15. Divida uma variável por 2 usando /= e exiba o resultado.
// numero /= 2;
// console.log(numero);
// // 16. Subtraia 5 de uma variável usando -= e exiba o resultado.
// numero -= 5;
// console.log(numero);
// // 17. Atribua um novo valor a uma variável já declarada e imprima no console.
// let linguagem = "JavaScript";
// linguagem = "TypeScript";
// console.log(linguagem);
// // Operadores de Comparação
// // 18. Verifique se 10 é igual a "10" (use ==).
// console.log(10 == "10");
// // 19. Verifique se 10 é estritamente igual a "10" (use ===).
// console.log(10 === "10");
// // 20. Teste se 20 é maior que 15 e exiba o resultado no console.
// console.log(20 > 15);
// // 21. Teste se 5 é menor ou igual a 5.
// console.log(5 <= 5);
// // 22. Verifique se 10 é diferente de 5.
// console.log(10 != 5);
// // 23. Compare se 8 é estritamente diferente de "8".
// console.log(8 !== "8");
// // Operadores Lógicos
// // 24. Crie uma variável temCarteira (true/false) e idade e verifique se a pessoa pode
// // dirigir (idade >= 18 e temCarteira = true).
// let temCarteira = true;
// let idadePessoa = 20;
// let podeDirigir = idadePessoa >= 18 && temCarteira;
// console.log(podeDirigir); // true

// // 25. Verifique se um número é par e positivo ao mesmo tempo (num % 2 === 0 e num
// // > 0).
// let num = 4;
// console.log(num % 2 === 0 && num > 0); // true
// // 26. Crie uma condição que retorne true apenas se duas variáveis forem falsas (false
// // && false).
// let a = false;
// let b = false;
// console.log(a && b); // true
// // 27. Crie uma condição que retorne true se pelo menos uma das variáveis for
// // verdadeira (true || false).
// let x = true;
// let y = false;
// console.log(x || y); // true
// // 28. Teste o operador ! para inverter o valor de uma variável booleana.
// let estaLogado = false;
// console.log(!estaLogado); // true
// // 29. Escreva uma expressão lógica que valide se um usuário pode acessar um sistema
// // (idade >= 18 ou temAutorizacao = true).
// let temAutorizacao = false;
// idade = 16;
// let acesso = idade >= 18 || temAutorizacao;
// console.log(acesso); // false
// // 30. Combine operadores de comparação e lógicos para criar uma condição complexa
// // ((a > b && c < d) || e !== f).
// let varA = 10, varB = 5, varC = 3, varD = 6, varE = 7, varF = 8;
// let resultado = (varA > varB && varC < varD) || varE !== varF;
// console.log(resultado); // true

// //Lista com if,else if,else

// // 3. Determinar se um ano é bissexto
// // Desenvolva um programa que receba um ano e determine se ele é bissexto. Um ano é
// // bissexto se for múltiplo de 4, mas não de 100, a menos que seja múltiplo de 400.

// var ano = 2024

// if((ano % 4 === 0 && ano % 100 !=0) || ano % 400 === 0){
//     console.log(`O ano ${ano} é bissixto.`)
// }else{
//     console.log(`O ano ${ano} não é bissexto.`)
// }

// // 4. Classificar um número como par ou ímpar
// // Escreva um código que receba um número e informe se ele é par ou ímpar.
// // Exemplo de entrada: 7
// // Saída esperada: "O número 7 é ímpar."

// let num = 7;
// if (num % 2 === 0) {
//   console.log(`O número ${num} é par.`);
// } else {
//   console.log(`O número ${num} é ímpar.`);
// }

// 6.Encontrar o maior de três números
// javascript
// Copiar
// Editar
// let a = 5, b = 9, c = 3;
// let maior = Math.max(a, b, c);
// console.log(`O maior número é ${maior}.`);

// Determinar o preço de um produto com base na categoria
// javascript
// Copiar
// Editar
// let codigo = 2;
// let preco;
// switch (codigo) {
//   case 1:
//     preco = "R$ 10,00";
//     break;
//   case 2:
//     preco = "R$ 20,00";
//     break;
//   case 3:
//     preco = "R$ 30,00";
//     break;
//   default:
//     preco = "Categoria não encontrada.";
// }
// console.log(`O preço do produto é ${preco}`);

// Nome do mês com base no número informado
// javascript
// Copiar
// Editar
// let mes = 3;
// let nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
//                   "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
// if (mes >= 1 && mes <= 12) {
//   console.log(nomesMeses[mes - 1]);
// } else {
//   console.log("Mês inválido.");
// }

// Classificação de triângulos
// javascript
// Copiar
// Editar
// let lado1 = 5, lado2 = 5, lado3 = 5;
// if (lado1 === lado2 && lado2 === lado3) {
//   console.log("Triângulo Equilátero.");
// } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//   console.log("Triângulo Isósceles.");
// } else {
//   console.log("Triângulo Escaleno.");

// Determinar se um número é múltiplo de 3, 5 ou ambos (FizzBuzz)
// javascript
// Copiar
// Editar
// let valor = 15;
// if (valor % 3 === 0 && valor % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (valor % 3 === 0) {
//   console.log("Fizz");
// } else if (valor % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(valor);
// }

// Verificar se um nome começa com determinada letra
// javascript
// Copiar
// Editar
// let nome = "Pedro";
// let letra = "P";
// if (nome[0].toUpperCase() === letra.toUpperCase()) {
//   console.log(`O nome ${nome} começa com a letra ${letra}.`);
// } else {
//   console.log(`O nome ${nome} não começa com a letra ${letra}.`);
// }
// // 1. Escreva um loop for que imprima os números de 1 a 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // 2. Crie um loop while que imprima os números de 10 a 1.
// let j = 10;
// while (j >= 1) {
//     console.log(j);
//     j--;
// }

// // 3. Utilize um loop do...while para pedir ao usuário um número maior que 10.
// // (Simulando entrada com número inicial = 5)
// let num = 5; // Simulação de entrada
// do {
//     console.log(`Número atual: ${num}`);
//     num++; // Simula nova tentativa
// } while (num <= 10);

// // 4. Escreva um loop for que exiba apenas os números pares entre 1 e 20.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // 5. Crie um loop while que some os números de 1 a 100 e exiba o resultado.
// let sum = 0;
// let i = 1;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// console.log(`Soma de 1 a 100: ${sum}`);

// // 6. Programa que calcula o fatorial de um número.
// // (Simulando entrada com número = 5)
// let number = 5;
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }
// console.log(`Fatorial de ${number}: ${factorial}`);

// // 7. Loop for para iterar sobre uma string e exibir cada caractere.
// let str = "Exemplo";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// // 8. Programa que gera a sequência de Fibonacci até o décimo termo.
// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for (let i = 3; i <= 10; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }

// // 9. Loop que simula um jogo de adivinhação (sem prompt).
// let numeroAleatorio = 42; // Número "secreto"
// let tentativa = 35; // Simula tentativa inicial
// let tentativas = [35, 50, 42]; // Tentativas simuladas
// let index = 0;

// while (tentativa !== numeroAleatorio && index < tentativas.length) {
//     console.log(`Tentativa: ${tentativa}`);
//     tentativa = tentativas[index++];
// }
// if (tentativa === numeroAleatorio) {
//     console.log("Parabéns! Você acertou o número.");
// } else {
//     console.log("Tentativas esgotadas.");
// }

// // 1. Criação e Acesso
// const numeros = [10, 20, 30, 40, 50];
// console.log("Terceiro elemento:", numeros[2]);

// // 2. Adição e Remoção
// numeros.push(60); // Adiciona 60 no final
// numeros.shift();  // Remove o primeiro elemento
// console.log("Array após alterações:", numeros);

// // 3. Iteração com for
// const frutas = ["Maçã", "Banana", "Uva", "Manga", "Laranja"];
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// // 4. Filtrando Elementos
// const lista = [2, 5, 8, 10, 15, 21];
// const pares = lista.filter(num => num % 2 === 0);
// console.log("Números pares:", pares);

// // 5. Transformação com map / for
// const numerosOriginais = [1, 2, 3, 4, 5];
// const aoQuadrado = numerosOriginais.map(num => num ** 2);
// console.log("Ao quadrado:", aoQuadrado);

// // 6. Ordenação
// const aleatorios = [12, 5, 8, 19, 2];
// aleatorios.sort((a, b) => a - b);
// console.log("Ordenado:", aleatorios);

// // 9. Criação e Acesso
// const pessoa = {
//     nome: "João",
//     idade: 25,
//     cidade: "São Paulo"
// };
// console.log("Idade da pessoa:", pessoa.idade);

// // 10. Atualização de Propriedades
// pessoa.idade = 30;
// console.log("Pessoa atualizada:", pessoa);

// // 12. Array de Objetos
// const produtos = [
//     { nome: "Arroz", preco: 5.50, estoque: 30 },
//     { nome: "Feijão", preco: 6.20, estoque: 20 },
//     { nome: "Macarrão", preco: 3.40, estoque: 50 }
// ];
// console.log("Segundo produto:", produtos[1].nome);

// // 13. Filtrando Objetos
// const alunos = [
//     { nome: "Ana", nota: 8 },
//     { nome: "Carlos", nota: 6 },
//     { nome: "Beatriz", nota: 9 }
// ];
// const aprovados = alunos.filter(aluno => aluno.nota > 7);
// console.log("Alunos aprovados:", aprovados);

