const API_TURMAS = 'https://school-system-spi.onrender.com/api/turmas';
const API_PROFESSORES = 'https://school-system-spi.onrender.com/api/professores';


// Criar Turma
async function criarTurma(dados) {
  const response = await fetch(API_TURMAS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// Listar todas as turmas
async function listarTurmas() {
  const response = await fetch(API_TURMAS);
  return response.json();
}

// Obter turma por ID
async function obterTurma(id) {
  const response = await fetch(`${API_TURMAS}/${id}`);
  return response.json();
}

// Obter professor por ID
async function obterProfessor(id) {
  const response = await fetch(`${API_PROFESSORES}/${id}`);
  return response.json();
}

// Atualizar 
async function atualizarTurma(id, dados) {
  const response = await fetch(`${API_TURMAS}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// Deletar 
async function deletarTurma(id) {
  await fetch(`${API_TURMAS}/${id}`, {
    method: 'DELETE'
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('form');

  // Só executa o código se houver formulário na página
  if (form) {
    const materiaInput = document.getElementById('materia');
    const descricaoInput = document.getElementById('descricao');
    const ativoSelect = document.getElementById('ativo'); // corrigido ID
    const professorInput = document.getElementById('professor');

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // Edição
    if (id) {
      const turma = await obterTurma(id);
      materiaInput.value = turma.materia;
      descricaoInput.value = turma.descricao;
      ativoSelect.value = turma.ativo.toString();
      professorInput.value = turma.professor_id;

      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const dados = {
          materia: materiaInput.value,
          descricao: descricaoInput.value,
          ativo: parseInt(ativoSelect.value),
          professor_id: parseInt(professorInput.value)
        };
        await atualizarTurma(id, dados);
        alert('Turma atualizada com sucesso!');
        window.location.href = 'turma_listar.html';
      });

    // Criação
    } else {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const dados = {
          materia: materiaInput.value,
          descricao: descricaoInput.value,
          ativo: parseInt(ativoSelect.value),
          professor_id: parseInt(professorInput.value)
        };
        await criarTurma(dados);
        alert('Turma criada com sucesso!');
        window.location.href = 'turma_listar.html';
      });
    }
  }

  // Carrega lista de turmas
  if (document.getElementById('lista-turmas')) {
    carregarTurmas();
  }
});

// Listagem de turmas
let turmaEditandoId = null;

async function carregarTurmas() {
  const turmas = await listarTurmas();
  const lista = document.getElementById('lista-turmas');
  lista.innerHTML = '';

  turmas.forEach(async (turma) => {
    const li = document.createElement('li');
    let nomeProfessor = 'Carregando...';

    try {
      const professor = await obterProfessor(turma.professor_id);
      nomeProfessor = professor.nome || 'Professor não encontrado';
    } catch (error) {
      nomeProfessor = 'Erro ao carregar professor';
    }

    li.innerHTML = `
      Matéria: ${turma.materia} - Ativo: ${turma.ativo ? 'Sim' : 'Não'}<br>
      Professor: ${nomeProfessor}<br/>
      Descrição: ${turma.descricao}
      <div class="butao2">
        <button class="editar" onclick="abrirModal(${turma.id})">Editar</button>
        <button class="deletar" onclick="removerTurma(${turma.id})">Deletar</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

// Modal de edição
async function abrirModal(id) {
  turmaEditandoId = id;
  const turma1 = await obterTurma(id);
  const turma = turma1.turma || turma1; // compatibilidade

  document.getElementById('edit-materia').value = turma.materia;
  document.getElementById('edit-descricao').value = turma.descricao;
  document.getElementById('edit-ativo').value = turma.ativo;
  document.getElementById('edit-professor').value = turma.professor_id;

  document.getElementById('modal-editar').classList.remove('hidden');
}

function fecharModal() {
  document.getElementById('modal-editar').classList.add('hidden');
}

async function removerTurma(id) {
  if (confirm("Deseja realmente excluir esta turma?")) {
    await deletarTurma(id);
    carregarTurmas();
  }
}

document.getElementById('form-editar')?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const dadosAtualizados = {
    materia: document.getElementById('edit-materia').value,
    descricao: document.getElementById('edit-descricao').value,
    ativo: parseInt(document.getElementById('edit-ativo').value),
    professor_id: parseInt(document.getElementById('edit-professor').value),
  };

  await atualizarTurma(turmaEditandoId, dadosAtualizados);
  fecharModal();
  carregarTurmas();
});