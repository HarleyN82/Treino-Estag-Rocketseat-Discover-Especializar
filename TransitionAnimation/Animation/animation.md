# CSS ANIMATION

CSS Animations é uma ferramenta do CSS que permite criar animações sem a interação do usuário, onde elas podem acontecer de forma autônoma.

## ANIMATION NAME E DURATION

Com CSS animation trabalhamos com uma propriedade do css chamado @keyframes, no qual é estruturado da seguinte forma:

```css
@keyframes nomeDaAnimacao{
    from {}
    to {}
}
```

- `animation-name `- é o nome da animação criada com @keyframes
- `animation-duration` - é o tempo de duração da animação em uma escala de segundos.

Dentro da keyframe é onde serão colocados os detalhes da animação como:

- `from:` indicador de aonde e como a animação vai começar. (ponto de partida)
- `to:` indicador de para onde essa animação vai. (ponto de parada)

Para iniciar a animação precisa estar no elemento, assim usamos dois parãmetros o nome da animação e o tempo de sua duração.

```html
 <div class="ball"></div>
```

```css
.ball{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: aqua;
    position: relative; /*Porque, quero trabalhar a posição da bola na tela*/
    
    animation-name: example-one;
    animation-duration: 4s;
}
@keyframes example-one{
    from{
        background-color: blueviolet;
    }
    to{
        background-color: rosybrown;
    }
}
```

## KEYFRAMES COM PORCENTAGENS

Iremos fazer o mesmo processo que foi falado anteriormente, mas ao invés de estabelecer um ponto de partida e chegada vamos usar porcentagens.

```css
@keyframes example-two{
    0%{
        background-color: blueviolet;
    }
    25%{
        background-color: rosybrown;
    }
    50%{
        background-color: blue;
    }
    100%{
        background-color: yellow;
    }
}
```
O animation-duration divide a duração de acordo com a porcentagem dada.

## EXEMPLO DE ANIMATION

Nesse exemplo vamos trabalhar as porcentagens do @keyframes para fazer a bolinha na tela se movimentar formando um quadrado.

```css
 @keyframes example-three{
    0%{
        background-color: blueviolet;
        left: 0;
        top: 0;
    }
    25%{
        background-color: rgb(255,0,234);
        left:600px;
        top:0;
    }
    50%{
        background-color: rgb(0, 247, 255);
        left:600px;
        top: 600px;
    }
    75%{
        background-color: rgb(0, 255, 187);
        left: 0;
        top: 600px;
    }
    100%{
        background-color: rgb(254, 6, 6);
        left: 0;
        top: 0;
    }
}
```

## ANIMATION DELAY

É uma propriedade CSS que permite atrasar o inicio de uma animação em uma escala de segundos.

```css
 .ball{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: aqua;
    position: relative; /*Porque, quero trabalhar a posição da bola na tela*/
    
    animation-name: example-three;
    animation-duration: 10s;
    animation-delay:2s; /*Demora 2s até a animação começar*/
}
```

## ANIMATION ITERATION COUNT

A propriedade animation-iteration-count defini quantas vezes a animação será repetida, podendo ser colocada como um numero, exemplo 3, fará a animação se repetir 3 vezes. Podemos colocar o valor como "infinite” o que vai fazer a animação se repetir sem fim.

```css
.ball{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: aqua;
    position: relative; /*Porque, quero trabalhar a posição da bola na tela*/
    
    animation-name: example-three;
    animation-duration: 10s;
    animation-delay:2s;
    animation-iteration-count: 2;
}
```

O delay não pegou na segunda vez, porque ele não irá interferi.

## ANIMATION DIRECTION

A propriedade animation-direction define a direção que a animação vai funcionar, podendo ser: normal | reverse | alternate | alternate-reverse.

- `normal: `começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será também da primeira chave do @keyframes ate a ultima.

- `reverse:` começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será também da última chave do @keyframes ate a primeira.

- `alternate: `começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será da última chave do @keyframes ate a primeira, e na próxima repetição volta a ser da primeira chave para a última e assim por diante alternando.

- `alternate-reverse:` começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será da primeira chave do @keyframes ate a última, e na próxima repetição volta a ser da última chave para a primeira e assim por diante alternando.

```css
 .ball{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: aqua;
    position: relative; /*Porque, quero trabalhar a posição da bola na tela*/
    
    animation-name: example-three;
    animation-duration: 5s;
    animation-delay:2s;
    animation-iteration-count: 2;
    animation-direction:alternate; /*reverse...*/
}
```

## ANIMATION TIMING FUNCTION

- ease - Início lento, rápido e final lento (este é o padrão)
- linear - Mesma velocidade do início ao fim
- easy-in - Início lento
- easy-out - Final lento
- easy-in-out - Início e fim lento

```html
<div class="linear">Linear</div>
<div class="ease">Ease</div>
<div class="ease-in">Ease In</div>
<div class="ease-out">Ease-Out</div>
<div class="ease-in-out">Ease-In-Out</div>
```

```css
div{
    width: 100px;
    height: 50px;
    background-color: blueviolet;
    position: relative;
    color: white;
    text-align: center;

    animation-name: example;
    animation-duration: 2s;
}
.linear{
    animation-timing-function: linear;
}
.ease{
    animation-timing-function:ease;
}
.ease-in{
    animation-timing-function:ease-in;
}
.ease-out{
    animation-timing-function:ease-out;
}
.ease-in-out{
    animation-timing-function:ease-in-out;
}
@keyframes example{
    from{
        left: 0px;
    }
    to{
        left: calc(100% - 100px)
    }
}
```

## ANIMATION FILL MODE

É uma propriedade usada para manipular as chaves da propriedade @keyframe.

- `forwards:` Permite que o elemento fique fixo na última chave.

```html
<div class="ball"></div>
```

```css
.ball{
    width: 100px;
    height: 100px;
    background-color: blueviolet;
    position: relative;
    border-radius: 100%;
    /* left: calc(100% - 100px); /*Isso permite que ela começa no final e volte para o final quando a animação começar. Porém, quando a animação começar vai do inicio da page.*/

    animation-name: example;
    animation-duration: 2s;
    animation-delay: 2s;
    
    animation-fill-mode: forwards;

}
@keyframes example{
    from{
        left: 0px;
    }
    to{
        left: calc(100% - 100px)
    }
}
```

Obs: Ele permite que as características que estiverem presentes no "to" se tornem o padrão após o final da animação. Parando a animação nesse ponto, não voltando ao ponto inicial.


- `backwards:` Permite que o elemento padrão durante o delay seja o da primeira chave.

```css
 @keyframes example{
    from{
        left: 0px;
        background-color: cyan;
    }
    to{
        left: calc(100% - 100px)
    }
}
```

Obs: O elemento vai manter os valores da primeira chave "from" antes da animação. Pelo período de atraso da animação. Ou seja, no período de delay as propriedades padrão continuam até a animação começar, para depois seguir o padrõa do from. Agora, com essa propriedade o período de delay já vai ter as características da primeira chave. Depois, a animação volta pro normal.


- `both:` Permite que as duas anteriores propriedades sejam respeitadas.

```css
@keyframes example{
    0%{
        left: 0;
        background-color: cyan;            
    }
    50%{
        left: 200px;
        background-color: yellow;
    }
    100%{
        left: calc(100% - 100px);
    }
}
```

Obs: No período de delay o que vai estar fixo são as propriedades do 0% e enquanto a animação rola o que vai estar sendo respeitado são as três porcentagens. E depois finaliza com a última (100%), ficando fixa nela.