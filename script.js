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