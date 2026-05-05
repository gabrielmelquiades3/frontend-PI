
function abrirModal(atividade, horas) {
  document.getElementById('modal-atividade').textContent = atividade;
  document.getElementById('modal-horas').textContent = horas;
  document.getElementById('modal').classList.add('aberto');
}

function fecharModal() {
  document.getElementById('modal').classList.remove('aberto');
}

// Fecha modal ao clicar fora
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) fecharModal();
    });
  }
});
