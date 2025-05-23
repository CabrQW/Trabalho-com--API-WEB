const API_TURMAS = 'https://school-system-spi.onrender.com/api/turmas';

// 🔹 Criar Turma
async function criarTurma(dados) {
  const response = await fetch(API_TURMAS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// 🔹 Listar todas as turmas
async function listarTurmas() {
  const response = await fetch(API_TURMAS);
  return response.json();
}

// 🔹 Obter turma por ID
async function obterTurma(id) {
  const response = await fetch(`${API_TURMAS}/${id}`);
  return response.json();
}

// 🔹 Atualizar turma por ID
async function atualizarTurma(id, dados) {
  const response = await fetch(`${API_TURMAS}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// 🔹 Deletar turma por ID
async function deletarTurma(id) {
  await fetch(`${API_TURMAS}/${id}`, {
    method: 'DELETE'
  });
}