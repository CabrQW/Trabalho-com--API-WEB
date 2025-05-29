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
//CRIAÇÃO DE TURMA
window.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input');

  if (id) {
    const professor = await obterProfessor(id);
    inputs[0].value = professor.nome;
    inputs[1].value = professor.data_nascimento; // caso queira incluir
    inputs[2].value = professor.materia;
    inputs[3].value = professor.observacoes;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const dados = {
        nome: inputs[0].value,
        materia: inputs[2].value,
        observacoes: inputs[3].value,
        idade: calcularIdade(inputs[1].value)
      };
      await atualizarProfessor(id, dados);
      alert('Professor atualizado com sucesso!');
      window.location.href = 'prof_listar.html';
    });
  } else {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const dados = {
        nome: inputs[0].value,
        materia: inputs[2].value,
        observacoes: inputs[3].value,
        idade: calcularIdade(inputs[1].value)
      };
      await criarProfessor(dados);
      alert('Professor criado com sucesso!');
      window.location.href = 'prof_listar.html';
    });
  }
});
//CALCULO DA IDADE
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nasc = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
    idade--;
  }
  return idade;
}
//Modal e Lista
let professorEditandoId = null;

async function carregarProfessores() {
  const lista = document.getElementById('lista-professores');
  lista.innerHTML = '';
  const professores = await listarProfessores();

  professores.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `
      Nome: ${p.nome} - ID:${p.id}<br>
      Matéria: ${p.materia}<br>
      idade: ${p.idade}<br>
      Obsercações:${p.observacoes}
      <div class="butao3">
      <button class="editar" onclick="abrirModal(${p.id})">Editar</button>
      <button class="deletar" onclick="deletarProfessorHandler(${p.id})">Deletar</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

async function abrirModal(id) {
  professorEditandoId = id;
  const prof = await obterProfessor(id);
  document.getElementById('edit-nome').value = prof.nome;
  document.getElementById('edit-materia').value = prof.materia;
  document.getElementById('edit-observacoes').value = prof.observacoes;
  document.getElementById('edit-idade').value = prof.idade;

  document.getElementById('modal-editar').classList.remove('hidden');
}

function fecharModal() {
  document.getElementById('modal-editar').classList.add('hidden');
}

async function deletarProfessorHandler(id) {
  if (confirm('Deseja deletar este professor?')) {
    await deletarProfessor(id);
    carregarProfessores();
  }
}

document.getElementById('form-editar').addEventListener('submit', async function (e) {
  e.preventDefault();

  const dadosAtualizados = {
    nome: document.getElementById('edit-nome').value,
    materia: document.getElementById('edit-materia').value,
    observacoes: document.getElementById('edit-observacoes').value,
    idade: parseInt(document.getElementById('edit-idade').value)
  };

  await atualizarProfessor(professorEditandoId, dadosAtualizados);
  fecharModal();
  carregarProfessores();
});

carregarProfessores();