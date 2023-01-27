# CSS TRANSITION

Quando temos alguma propriedade css que muda de valor em um hover, focus ou outro tipo de interação, podemos usar o transition para suavizar a mudança do ponto A ate o ponto B.

## PROPERTY E DURATION

- transistion-property - é a propriedade css que queremos aplicar a transição.

- transition-duration - é o tempo de duração da transição.

Somente valores quantificáveis podem ser animados. Isso quer dizer que não é possível fazer uma animação de display indo de none para block, mas sim de opacity de 0 para 1;

```html
<div class="box-red"></div>
```

```css
body{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
}
.box-red{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: red;
    transition-property: background-color;
    transition-duration: 1s;
}
.box-red:hover{
    background-color: aquamarine;
    transition-property: background-color;
    transition-duration: 1s;
}
```

## TIMING FUNCTIONS

- ease - Início lento, rápido e final lento (este é o padrão)
- linear - Mesma velocidade do início ao fim
- easy-in - Início lento
- easy-out - Final lento
- easy-in-out - Início e fim lentos
- cubic-bezier(n,n,n,n) - Permite definir seus próprios valores em uma função cubic-bezier

```html
<div class="line ease"></div>
<div class="line linear"></div>
<div class="line ease-in"></div>
<div class="line ease-out"></div>
<div class="line ease-in-out"></div>
<div class="line cubic"></div>
```

```css
 .line{
    width: 100%;
    height: 25px;
    margin-bottom: 10px;

    background-color: blue;

    transition-property: width;
    transition-duration: 1s;
}
body:hover .line{
    width: 20px;
    background-color: rgb(255,0,234);
}
.ease{
    transition-timing-function: ease;
}
.linear{
    transition-timing-function: linear;
}
.ease-in{
    transition-timing-function: ease-in;
}
.ease-out{
    transition-timing-function: ease-out;
}
.ease-in-out{
    transition-timing-function: ease-in-out;
}
.cubic{
    transition-timing-function: cubic-bezier(0.175,0.885,0.32,1.275);
}
```

## TRANSITION DELAY

É uma propriedade CSS que permite atrasar o inicio de uma transição em uma escala de segundos.

```html
<div class="box-pink"></div>
```
```css
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.box-pink{
    width: 100px;
    height: 100px;
    border-radius: 100%;
}
.box-pink{
    background-color: rgb(255,0,234);
    transition: background-color 1s ease 4s;
}
.box-pink:hover{
    background-color: rgb(174, 0, 255);
    transition-property: background-color;
    transition-duration: 1s;
    transition-delay: 4s;
}
```

## TRANSITION PROPERTY ALL

É usado para aplicar transição em todos os elementos quantificáveis disponíveis e que estejam sofrendo alteração.

```html

```

```css

```