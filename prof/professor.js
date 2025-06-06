const API_PROFESSORES = 'https://school-system-spi.onrender.com/api/professores';

const API_KEY = "e4727ef041294b8393a20818250606"; 

// Obtém o clima de uma cidade informada
async function obterClima(cidade) {
  const API_TEMPO = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&aqi=no`;

  try {
    const response = await fetch(API_TEMPO);
    if (!response.ok) throw new Error("Cidade não encontrada");
    const dados = await response.json();
    return dados.current;
  } catch (error) {
    console.error("Erro ao buscar o clima:", error);
    return null;
  }
}

// Exibe o clima na tela
async function exibirClima(cidade) {
  const clima = await obterClima(cidade);
  const divClima = document.getElementById("clima");

  if (clima) {
    divClima.innerHTML = `
      <h3>Clima Atual em ${cidade}:</h3>
      <p>🌡️ Temperatura: <strong>${clima.temp_c}°C</strong></p>
      <p>💨 Vento: ${clima.wind_kph} km/h</p>
      <p>🌥️ Condição: ${clima.condition.text}</p>
    `;
  } else {
    divClima.innerHTML = `<p>❌ Não foi possível obter o clima para "${cidade}".</p>`;
  }
}

// Evento ao clicar no botão
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("buscar-btn");

  btn.addEventListener("click", () => {
    const cidade = document.getElementById("cidade-input").value.trim();
    if (cidade) {
      exibirClima(cidade);
    } else {
      alert("Digite o nome de uma cidade.");
    }
  });

  // Opcional: mostrar clima de uma cidade padrão ao carregar
  exibirClima("Santos");
});

// Seu código original para manipular professores abaixo (omitido para não duplicar)

// Exemplo de função listar professores
async function listarProfessores() {
  const response = await fetch(API_PROFESSORES);
  const professores = await response.json();
  const lista = document.getElementById('lista-professores');
  lista.innerHTML = '';

  professores.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `
      Nome: ${p.nome} - ID:${p.id}<br>
      Matéria: ${p.materia}<br>
      idade: ${p.idade}<br>
      Observações: ${p.observacoes}
      <div class="butao3">
        <button class="editar" onclick="abrirModal(${p.id})">Editar</button>
        <button class="deletar" onclick="deletarProfessorHandler(${p.id})">Deletar</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

// Chame as funções principais quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  listarProfessores();
  exibirClima();
});


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
    inputs[1].value = professor.data_nascimento;
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