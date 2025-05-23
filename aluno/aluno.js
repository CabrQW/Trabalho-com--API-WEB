const API_ALUNOS = 'https://school-system-spi.onrender.com/api/alunos';

// 🔸 Criar Aluno
async function criarAluno(dados) {
  const response = await fetch(API_ALUNOS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// 🔸 Listar todos os alunos
async function listarAlunos() {
  const response = await fetch(API_ALUNOS);
  return response.json();
}

// 🔸 Obter aluno por ID
async function obterAluno(id) {
  const response = await fetch(`${API_ALUNOS}/${id}`);
  return response.json();
}

// 🔸 Atualizar aluno por ID
async function atualizarAluno(id, dados) {
  const response = await fetch(`${API_ALUNOS}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// 🔸 Deletar aluno por ID
async function deletarAluno(id) {
  await fetch(`${API_ALUNOS}/${id}`, {
    method: 'DELETE'
  });
}