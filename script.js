function alterarImagem(objeto, caminhoNovaImagem) {
  document.getElementById(objeto).src = 'IMG/perfil1.jpg';
  
  var titulo = document.querySelector('#texto1');
titulo.textContent = '@username';
  var paragrafo = document.querySelector('#paragrafo1');
  paragrafo.textContent = 'Usuário1';
  var paragrafo2 = document.querySelector('#paragrafo2');
  paragrafo2.textContent = 'Oi, eu sou o usuário 1';
}

function alterarImagemdois(objeto, caminhoNovaImagem) {
  document.getElementById(objeto).src =
   'IMG/perfil2.jpg';
   var titulo = document.querySelector('#texto1');
   titulo.textContent = '@username';
   var paragrafo = document.querySelector('#paragrafo1');
   paragrafo.textContent = 'Usuário2';
   var paragrafo2 = document.querySelector('#paragrafo2');
   paragrafo2.textContent = 'Oi, eu sou o usuário 2';
}