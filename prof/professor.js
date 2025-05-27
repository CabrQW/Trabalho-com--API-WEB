const API_PROFESSORES = 'https://school-system-spi.onrender.com/api/professores';

// Criar Professor
async function criarProfessor(dados) {
  const response = await fetch(API_PROFESSORES, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// Listar todos os professores
async function listarProfessores() {
  const response = await fetch(API_PROFESSORES);
  return response.json();
}

// Obter professor por ID
async function obterProfessor(id) {
  const response = await fetch(`${API_PROFESSORES}/${id}`);
  return response.json();
}

// Atualizar 
async function atualizarProfessor(id, dados) {
  const response = await fetch(`${API_PROFESSORES}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// Deletar 
async function deletarProfessor(id) {
  await fetch(`${API_PROFESSORES}/${id}`, {
    method: 'DELETE'
  });
}