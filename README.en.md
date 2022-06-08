# Welcome to the Playground Functions Project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   In my development team, I was responsible for implementing the code for functions that solve problems with predetermined answers. I used programming logic to help me analyze each problem and expected response, making it easier to implement the code for each of the functions. All functions are declared in the files`challenges.js`e`challenges2.js`.

# Mandatory Requirements

## 1 - Create a function using the && operator

<details>
  <summary>
    Implemente a função <code>compareTrue</code> utilizando somente o operador <code>&&</code>
  </summary> <br />

The function`compareTrue`when receiving two boolean parameters should:

-   Turn back`true`if both values ​​are true;
-   Turn back`false`if one or both parameters are false.

Example:

```javascript
const girafa = true;
const elefante = true;
const macaco = false;
```

If the function is called with the values`girafa`e`elefante`as a parameter, returns`true`, but if it is called with the parameters`macaco`e`elefante`Returns`false`.

**What will be tested:**

-   Return false when calling the compareTrue function with a parameter of value false and another of value true;

-   Return false when calling the compareTrue function with two false parameters;

-   Return true when calling the compareTrue function with two true parameters.

</details>

## 2 - Create a function that calculates the area of ​​a triangle

<details>
  <summary>
Implemente a função <code>calcArea</code> que retorna o cálculo da área total de um triângulo

  </summary> <br />

The function`calcArea`receives the base value (`base`) and another of height (`height`) of a triangle and returns the calculation of its area.

-   Calculate the total area of ​​the triangle using the formula`(base * altura) / 2`.

**What will be tested:**

-   Return the value 250 when the calcArea function is called with the base parameter set to 10 and the height parameter set to 50;

-   Return the value 5 when the function`calcArea`is called with the parameter`base`with the value 5 and the parameter`height`with the value 2;

-   Return the value 25.5 when the function`calcArea`is called with the parameter`base`with the value 51 and the parameter`height`with the value 1.

</details>

## 3 - Create a function that splits a sentence

<details>
  <summary>
Implemente a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras

  </summary> <br />
A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.
  
  Exemplo: se a função receber a string `'go Trybe'`, o retorno deverá ser `['go', 'Trybe']`.

**What will be tested:**

-   return value`['go', 'Trybe']`if the function receives the string`'go Trybe'`;

-   return value`['vamo', 'que', 'vamo']`if the function receives the string`'vamo que vamo'`;

-   return value`['foguete']`if the function receives the string`'foguete'`.

</details>

## 4 - Create a function that uses string concatenation

<details>
  <summary>
Implemente a função <code>concatName</code> que recebe um array de strings e retorna o último item na primeira posição

  </summary> <br />
A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.
  
  Exemplo:

-   If the parameter passed to the function`concatName`be the array`['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, the function should return`Paolillo, Lucas`.

**What will be tested:**

-   return`'Paolillo, Lucas'`when the parameter passed in the concat Name function is`['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`;

-   return`'ré, foguete'`when the parameter passed in the concat Name function is`['foguete', 'não', 'tem', 'ré']`;

-   return`'captain, captain'`when the parameter passed in the concat Name function is`['captain', 'my', 'captain']`.

</details>

## 5 - Create a function that calculates the amount of points in a football championship

<details>
  <summary>
Implemente a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates

  </summary> <br />

The function`footballPoints`receives the number of wins (`wins`) and the number of ties (`ties`) and returns the number of points the team has scored in a championship. For this, consider that:

-   `wins`: is the number of wins and is worth 3 points;
-   `ties`: is the number of ties and is worth 1 point.

**What will be tested:**

-   return`50`points when the team has 14 wins and 8 draws;

-   return`5`points when the team has 1 win and 2 draws;

-   return`0`points when the team has 0 wins and 0 draws.

</details>

## 6 - Create a function that calculates the number of repetitions of the largest number

<details>
  <summary>
Implemente a função <code>highestCount</code> que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números. 

  </summary> <br />

The function must return the number of times the**larger**number repeats within the array.

For example:

-   If the parameter is an array with values`[9, 1, 2, 3, 9, 5, 7]`, the function should return`2`, which is the number of times the number`9`(largest number in the array) is repeated.

**What will be tested:**

-   return`2`when the parameter passed in the highestCount function is`[9, 1, 2, 3, 9, 5, 7]`;

-   return`1`when the parameter passed in the highestCount function is`[0, 4, 4, 4, 9, 2, 1]`;

-   return`3`when the parameter passed in the highestCount function is`[0, 0, 0]`.

</details>

## 7 - Create a Mouse Hunt role

<details>
  <summary>
Implemente a função <code>catAndMouse</code> que verifica qual gato está mais perto do rato

  </summary> <br />
Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number` na seguinte ordem:
    
    - `mouse`: representa a posição do rato.

    - `cat1`: representa a posição de um dos gatos;

    - `cat2`: representa a posição do outro gato ;

-   Calculate the distances between the mouse and each of the cats and return which of the felines is closest to the mouse:

    -   Retorne a string`'cat2'`if the cat`cat2`is closer to the mouse;
    -   Retorne a string`'cat1'`if the cat`cat1`is closer to the mouse;
    -   Retorne a string`'os gatos trombam e o rato foge'`if the cats are at the same distance from the mouse.

Example:

-   case the cat`cat2`is 2 units away from the mouse and the`cat1`is 3 units away, your function should return`'cat2'`;

-   If the cats are at the same distance from the mouse, the function should return the string`'os gatos trombam e o rato foge'`.

**What will be tested:**

-   Retorne a string`'cat2'`case the function`catAndMouse`get the parameters where cat`cat2`is 2 units away from the mouse and`cat1`be 3 units away from the mouse;

-   Retorne a string`'cat1'`if the catAndMouse function receives the parameters where cat`cat1`is 6 units away from the mouse and`cat2`be 12 units away from the mouse;

-   Retorne a string`'os gatos trombam e o rato foge'`case the function`catAndMouse`receive the parameters where the cats are at the same distance from the mouse.

</details>

## 8 - Create a FizzBuzz function

<details>
  <summary>
Implemente a função <code>fizzBuzz</code> que recebe um array de números e retorna um array de string de acordo com o resultado

  </summary> <br />

The function`fizzBuzz`receives an array of numbers and for each number in the array, division by 3 and 5 is performed and according to the result, the function must return a string:

-   Retorne a string`'fizz`for each number in the array that is only divisible by 3;
-   Retorne a string`'buzz'`for each number in the array that is only divisible by 5;
-   Retorne a string`'fizzBuzz'`for every number in the array that is divisible by 3**e**5;
-   Retorne a string`'bug!'`for each number in the array that is not divided by 3 or 5.

Example: if the parameter is[2, 15, 7, 9, 45], your function should return`['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']`.

**What will be tested:**

-   Retorne as strings`['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']`when the parameters are passed[2, 15, 7, 9, 45]for the function`fizzBuzz`;

-   Retorne as strings`['bug!', 'fizz']`when the parameters are passed[7, 9]for the function`fizzBuzz`;

-   Retorne as strings`['fizz', 'buzz']`when the parameters are passed[9, 25]for the function`fizzBuzz`.

</details>

## 9 - Create a function that Encode and Decode

<details>
  <summary>
Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

  </summary> <br />

To encode the phrase use the function`encode`that receives a string as a parameter and must change all the**lowercase vowels by numbers**, according to the format:

a -> 1 \\
e -> 2 \\
i -> 3 \\
o -> 4 \\
u -> 5

That is, if the parameter`encode`be`'hi there!'`, the return should be`'h3 th2r2!'`.

To decode the sentence use the function`decode`that receives a string containing letters and numbers as a parameter and must change all the**lowercase vowel numbers**, according to the format:

1 -> a \\
2 -> e \\
3 -> i \\
4 -> o \\
5 -> u

For example, if the parameter`decode`be`'h3 th2r2!'`, the return should be`'hi there!'`.

**What will be tested:**

-   When using the parameter`hello`, should return as a return`h2ll4`;
-   When using the parameter`How are you today?`should bring back`H4w 1r2 y45 t4d1y?`;
-   When using the parameter`This is an encoding test.`should bring back`Th3s 3s 1n 2nc4d3ng t2st.`;
-   When using the parameter`go Trybe! `should bring back`g4 Tryb2!`.

</details>

## 10 - Create a Technology List function

<details>
  <summary>
Implemente a função <code>techList</code> que recebe um array e uma string e retorna um array de objetos.

  </summary> <br />

The function`techList`takes two parameters:

-   An array of technology names ;
-   A name referring to a person's name.

    The function should return:
-   'Empty!' if it does not receive any parameter ;
-   One object for each technology in the array, with the following structure:

```javascript
{
  tech: 'NomeTech',
  name: 'nome da pessoa'
}
```

For example, if the function takes the parameters`['React', 'Jest', 'HTML', 'CSS', 'JavaScript']`e`'Lucas'`, the return should be:

```javascript
[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

**What will be tested:**

-   Return a list of sorted objects when a list with 5 technologies is passed;

-   Return error message`'Vazio!'`when the list has no technologies.

</details>

# Bonus Requirements

## 11 - Create a phone number role

<details>
  <summary>
Implemente a função  <code>generatePhoneNumber</code> que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

  </summary> <br />

Example: if the function parameter is`[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, the function`generatePhoneNumber`should return`(12) 34567-8901`.

-   return phrase`'Array com tamanho incorreto.'`if the function receives an array with a size other than 11;

-   Retorne a string`'não é possível gerar um número de telefone com esses valores'`if any of the numbers in the array are**smaller**that 0,**larger**than 9 or is repeated 3 times or more.

**What will be tested:**

-   Return the string 'Incorrectly sized array.' if the array has a size other than 11;

-   Return the string "cannot generate a phone number with these values" if any of the numbers in the array is less than 0;

-   Return the string "cannot generate a phone number with these values" if any number in the array is greater than 9;

-   Return the string "cannot generate a phone number with these values" if any number in the array is repeated 3 times or more;

-   Return a phone number, respecting parentheses, dashes and spaces if the numbers in the array meet the specifications.

</details>

## 12 - Create a function that tests the condition of existence of a triangle

<details>
  <summary>
Implemente a função <code>triangleCheck</code> que verifica se é possível formar um triângulo analisando o comprimento de três linhas

  </summary> <br />

The function`triangleCheck`should receive the parameters`lineA`,`lineB`e`lineC`with the value of the length of three distinct lines.

-   In order to form a triangle, it is necessary that**to measure_any_one side**meets the following conditions:

    1) be**smaller**that the sum of the measures of the other two sides;

    **_E_**

    2) be**larger**than the absolute value (modulus) of the difference between the other two sides.

**Keeping an eye on the tip :eyes:**To get the absolute value of a number in JavaScript, search for the function`Math.abs`.

-   The return of your function must be a boolean.

Example: the return of`triangleCheck(10, 14, 8)`shall be`true`.

**What will be tested:**

-   return`false`when the measure of any one side is greater than the sum of the measures of the other two sides;

-   return`false`when the measure of any of the sides is less than the absolute value of the difference in the measures of the other two sides;

-   return`true`when the measure of any one side is less than the sum of the measures of the other two sides and greater than the absolute value of the difference between the other two sides.

</details>

## 13 - Create a welcome function to the Trybe Bar!

<details>
  <summary>
Implemente a função `hydrate` que recebe uma string e retorna a sugestão de quantos copos de água você deve beber.

  </summary> <br />

```javascript
// String recebida:
  '1 cerveja'

// String retornada:
  '1 copo de água'
```

    // String recebida:
      '1 cachaça, 5 cervejas e 1 copo de vinho'

    // String retornada:
      '7 copos de água'

    // String recebida:
      '1 cachaça, 5 cervejas e 1 copo de vinho'

    // String retornada:
      '7 copos de água'

-   For simplicity, consider that the string**always**will have the format_amount (in number) + type of drink_;

-   The number on the front of each drink must be between 1 and 9.

**Keeping an eye on the tip 👀:**search for something similar to`get all integers inside a string js`.

**What will be tested:**

-   Return the suggestion of how many glasses of water to drink when given a string.

</details>

</details>
