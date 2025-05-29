const API_ALUNOS = 'https://school-system-spi.onrender.com/api/alunos';

// Criar Aluno
async function criarAluno(dados) {
  const response = await fetch(API_ALUNOS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// Listar todos os alunos
async function listarAlunos() {
  const response = await fetch(API_ALUNOS);
  return response.json();
}

// Obter aluno por ID
async function obterAluno(id) {
  const response = await fetch(`${API_ALUNOS}/${id}`);
  return response.json();
}

// Atualizar 
async function atualizarAluno(id, dados) {
  const response = await fetch(`${API_ALUNOS}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}

// Deletar 
async function deletarAluno(id) {
  await fetch(`${API_ALUNOS}/${id}`, {
    method: 'DELETE'
  });
}

//Criar Aluno e Lista
document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const inputs = e.target.elements;
  const dados = {
    nome: inputs[0].value,
    data_nascimento: inputs[1].value,
    turma_id: parseInt(inputs[2].value),
    nota_primeiro_semestre: parseFloat(inputs[3].value),
    nota_segundo_semestre: parseFloat(inputs[4].value)
  };

  await criarAluno(dados);
  alert('Aluno criado com sucesso!');
  window.location.href = "aluno_listar.html";
});

let alunoEditandoId = null;

async function carregarLista() {
  const alunos = await listarAlunos();
  const lista = document.getElementById('lista-alunos');
  lista.innerHTML = '';

  alunos.forEach(aluno => {
    const item = document.createElement('li');
    item.innerHTML = `
      Nome:${aluno.nome}<br>
      Idade:${aluno.idade}<br>
      Nota 1º semestre:${aluno.nota_primeiro_semestre}<br>
      Nota 2º semestre:${aluno.nota_segundo_semestre}<br>
      Media final:${aluno.media_final}
      <div class="butao1">
      <button class="editar" onclick="abrirModal(${aluno.id})">Editar</button>
      <button class="deletar" onclick="removerAluno(${aluno.id})">Deletar</button>
      </div>
    `;
    lista.appendChild(item);
  });
}

async function removerAluno(id) {
  if (confirm('Tem certeza que deseja excluir este aluno?')) {
    await deletarAluno(id);
    carregarLista();
  }
}
//Modal e editar
async function abrirModal(id) {
  alunoEditandoId = id;
  const respota = await obterAluno(id);
  const aluno = respota.aluno;

  document.getElementById('edit-nome').value = aluno.nome;
  document.getElementById('edit-nascimento').value = aluno.data_nascimento;
  document.getElementById('edit-turma').value = aluno.turma_id;
  document.getElementById('edit-nota1').value = aluno.nota_primeiro_semestre;
  document.getElementById('edit-nota2').value = aluno.nota_segundo_semestre;

  document.getElementById('modal-editar').classList.remove('hidden');
}

function fecharModal() {
  document.getElementById('modal-editar').classList.add('hidden');
}

document.getElementById('form-editar').addEventListener('submit', async function (e) {
  e.preventDefault();

  const dadosAtualizados = {
    nome: document.getElementById('edit-nome').value,
    data_nascimento: document.getElementById('edit-nascimento').value,
    turma_id: parseInt(document.getElementById('edit-turma').value),
    nota_primeiro_semestre: parseFloat(document.getElementById('edit-nota1').value),
    nota_segundo_semestre: parseFloat(document.getElementById('edit-nota2').value)
  };

  await atualizarAluno(alunoEditandoId, dadosAtualizados);
  fecharModal();
  carregarLista();
});

carregarLista();