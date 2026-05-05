 function abrirModal(atividade, horas) {
      document.getElementById('modal-atividade').textContent = atividade;
      document.getElementById('modal-horas').textContent = horas;
      document.getElementById('modal').classList.add('aberto');
    }

    function fecharModal() {
      document.getElementById('modal').classList.remove('aberto');
    }

    document.getElementById('modal').addEventListener('click', function(e) {
      if (e.target === this) fecharModal();
    });

document.getElementById('form-solicitacao')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Solicitação enviada com sucesso! Aguarde a análise da coordenação.');
    this.reset();
});