const botaoEntrar = document.querySelector('.enterButton');

function loginBtn() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  const emailTryber = 'tryber@teste.com';
  const senhaTryber = '123456';

  if (email.value === emailTryber && senha.value === senhaTryber) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', loginBtn);

const botaoSubmit = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
botaoSubmit.disabled = true;

function ativarBotao() {
  if (checkbox.value !== null) {
    botaoSubmit.disabled = false;
  }
}
checkbox.addEventListener('click', ativarBotao);

const textArea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function contadorTextArea() {
  contador.innerText = textArea.maxLength - textArea.value.length;
  return contador.innerText;
}

textArea.addEventListener('input', contadorTextArea);

const formulario = document.querySelector('#evaluation-form');

function evitarEnvio(evento) {
  evento.preventDefault();
}

formulario.addEventListener('submit', evitarEnvio);
