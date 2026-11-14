// Para CADA barra de abas da página (a principal e as sub-abas)...
document.querySelectorAll('nav').forEach(barra => {
  const botoes = barra.querySelectorAll('button');

  // ...e para cada botão dessa barra: quando for clicado...
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      // 1. esconde os conteúdos de TODOS os botões DESTA barra
      botoes.forEach(b => {
        b.classList.remove('ativa');
        document.getElementById(b.dataset.alvo).hidden = true;
      });

      // 2. mostra só o conteúdo do botão clicado
      botao.classList.add('ativa');
      document.getElementById(botao.dataset.alvo).hidden = false;
    });
  });
});