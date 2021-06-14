// This is a JavaScript file

var lado1, lado2, lado3, equilatero = "<img class='imagem' src='img/equilatero.jpg'>", isoceles = "<img id='isoceles' src='img/isosceles.jpg'>", escaleno = "<img class='imagem' src='img/escaleno.jpg'>", invalido = "<img class='imagem' src='img/invalido.jpg'>";

$(document).on("click","#verificar", function(){
  lado1 = parseInt($('#lado1').val());
  lado2 = parseInt($('#lado2').val());
  lado3 = parseInt($('#lado3').val()); 

  validarTriangulo = function(){
    var a = lado1, b = lado2, c = lado3, condicao1, condicao2, condicao3;

    condicao1 =  (Math.abs(b - c) < a) && (a < (b + c));
    condicao2 = (Math.abs(a - c) < b) && (b < (a + c));
    condicao3 = (Math.abs(a - b) < c) && (c < (a + b));

    if(condicao1 && (condicao2) && (condicao3)) {
      definirTipoTriangulo();
    } else {
      trianguloInvalido();
    }
  }

  definirTipoTriangulo = function(){
    if((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)) {
      ehEscaleno();
    } else if((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)) {
      ehEquilatero();
    } else {
      ehIsoceles();
    }
  }

  trianguloInvalido = function(){
    navigator.vibrate(300);

    $("#resultado").html("Você digitou <b>valores inválidos</b> para um triângulo, tente novamente!<br>"+ invalido);
  }

  ehEscaleno = function(){
    $("#resultado").html("Você tem um triângulo <b>Escaleno</b> (todos os lados com valores diferentes)<br>"+ escaleno);
  }

  ehEquilatero = function(){
    $("#resultado").html("Você tem um triângulo <b>Equilátero</b> (todos os lados com valores iguais)<br>"+ equilatero);
  }

  ehIsoceles = function(){
    $("#resultado").html("Você tem um triângulo <b>Isóceles</b> (dois lados com valores iguais)<br>"+ isoceles);
  }

  validarTriangulo();
});