// Encontra todos os botões de aba e todas as seções
const abas = document.querySelectorAll('.aba');
const paineis = document.querySelectorAll('.painel');

// Para cada botão: quando for clicado...
abas.forEach(aba => {
  aba.addEventListener('click', () => {
    // 1. esconde todas as seções
    paineis.forEach(painel => painel.hidden = true);

    // 2. mostra só a seção que este botão aponta (o data-alvo)
    document.getElementById(aba.dataset.alvo).hidden = false;

    // 3. marca este botão como o ativo (vamos usar isso no CSS)
    abas.forEach(a => a.classList.remove('ativa'));
    aba.classList.add('ativa');
  });
});