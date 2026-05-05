const API_URL = 'http://localhost:8081/api';


async function request(method, endpoint, body) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(API_URL + endpoint, opts);

  if (!res.ok) {
    const erro = await res.json().catch(() => ({ mensagem: 'Erro desconhecido' }));
    throw new Error(erro.mensagem || `Erro ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}


const auth = {
  login: (email, senha) => request('POST', '/auth/login', { email, senha }),
};


const dashboard = {
  metricas: () => request('GET', '/dashboard'),
};


const alunos = {
  listar: () => request('GET', '/alunos'),
  criar:  (dados) => request('POST', '/alunos', dados),
  editar: (id, dados) => request('PUT', `/alunos/${id}`, dados),
  excluir:(id) => request('DELETE', `/alunos/${id}`),
};


const cursos = {
  listar: () => request('GET', '/cursos'),
  criar:  (dados) => request('POST', '/cursos', dados),
  editar: (id, dados) => request('PUT', `/cursos/${id}`, dados),
  excluir:(id) => request('DELETE', `/cursos/${id}`),
};

const categorias = {
  listar: () => request('GET', '/categorias'),
};


const solicitacoes = {
  listar:        (status) => request('GET', `/solicitacoes${status ? '?status=' + status : ''}`),
  listarPorAluno:(idAluno) => request('GET', `/solicitacoes/aluno/${idAluno}`),
  criar:         (dados) => request('POST', '/solicitacoes', dados),
  aprovar:       (id) => request('PUT', `/solicitacoes/${id}/aprovar`),
  rejeitar:      (id, observacao) => request('PUT', `/solicitacoes/${id}/rejeitar`, { observacao }),
};


const coordenadores = {
  criar:  (dados) => request('POST', '/coordenadores', dados),
  listar: () => request('GET', '/coordenadores'),
};
