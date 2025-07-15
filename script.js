// Funções para exemplos básicos de JavaScript

// Exemplo básico
function exemploBasico() {
    let nome = "Maria";
    const idade = 28;
    
    function saudar() {
        return "Olá, " + nome + "! Você tem " + idade + " anos.";
    }
    
    document.getElementById("resultado-basico").innerHTML = saudar();
    document.getElementById("resultado-basico").style.color = "#667eea";
}

// Exemplo de variáveis
function exemploVariaveis() {
    let x = 10;
    const y = "Olá mundo!";
    var z = true;
    
    const resultado = `
        <strong>Valores das variáveis:</strong><br>
        x (let) = ${x}<br>
        y (const) = "${y}"<br>
        z (var) = ${z}
    `;
    
    document.getElementById("demo-variaveis").innerHTML = resultado;
    document.getElementById("demo-variaveis").style.marginTop = "10px";
    document.getElementById("demo-variaveis").style.fontSize = "0.9rem";
    document.getElementById("demo-variaveis").style.color = "#2c3e50";
}

// Exemplo de funções
function exemploFuncoes() {
    function somar(a, b) {
        return a + b;
    }
    
    function multiplicar(a, b) {
        return a * b;
    }
    
    const num1 = 5;
    const num2 = 3;
    
    const resultado = `
        <strong>Resultados das funções:</strong><br>
        somar(${num1}, ${num2}) = ${somar(num1, num2)}<br>
        multiplicar(${num1}, ${num2}) = ${multiplicar(num1, num2)}
    `;
    
    document.getElementById("demo-funcoes").innerHTML = resultado;
    document.getElementById("demo-funcoes").style.marginTop = "10px";
    document.getElementById("demo-funcoes").style.fontSize = "0.9rem";
    document.getElementById("demo-funcoes").style.color = "#2c3e50";
}

// Exemplo de eventos
function exemploEventos() {
    const agora = new Date();
    const horario = agora.toLocaleTimeString('pt-BR');
    
    const resultado = `
        <strong>Evento executado!</strong><br>
        Horário: ${horario}<br>
        <small>Este é um exemplo de evento onclick</small>
    `;
    
    document.getElementById("demo-eventos").innerHTML = resultado;
    document.getElementById("demo-eventos").style.marginTop = "10px";
    document.getElementById("demo-eventos").style.fontSize = "0.9rem";
    document.getElementById("demo-eventos").style.color = "#2c3e50";
}

// Exemplo de DOM
function exemploDOM() {
    const elemento = document.getElementById("demo-dom");
    
    // Mudando o conteúdo
    elemento.innerHTML = "<strong>DOM manipulado!</strong><br>Conteúdo alterado via JavaScript";
    
    // Mudando o estilo
    elemento.style.marginTop = "10px";
    elemento.style.fontSize = "0.9rem";
    elemento.style.color = "#e74c3c";
    elemento.style.backgroundColor = "#ffeaa7";
    elemento.style.padding = "10px";
    elemento.style.borderRadius = "5px";
    elemento.style.border = "2px solid #fdcb6e";
    
    // Animação simples
    setTimeout(() => {
        elemento.style.backgroundColor = "#d1f2eb";
        elemento.style.borderColor = "#00b894";
        elemento.style.color = "#00b894";
    }, 1000);
}

// Calculadora simples
function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const resultadoDiv = document.getElementById("resultado-calc");
    
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "Por favor, insira números válidos!";
        resultadoDiv.style.color = "#e74c3c";
        return;
    }
    
    let resultado;
    let simbolo;
    
    switch(operacao) {
        case '+':
            resultado = num1 + num2;
            simbolo = '+';
            break;
        case '-':
            resultado = num1 - num2;
            simbolo = '-';
            break;
        case '*':
            resultado = num1 * num2;
            simbolo = '×';
            break;
        case '/':
            if (num2 === 0) {
                resultadoDiv.innerHTML = "Erro: Divisão por zero!";
                resultadoDiv.style.color = "#e74c3c";
                return;
            }
            resultado = num1 / num2;
            simbolo = '÷';
            break;
        default:
            resultado = 0;
            simbolo = '?';
    }
    
    resultadoDiv.innerHTML = `${num1} ${simbolo} ${num2} = ${resultado}`;
    resultadoDiv.style.color = "#00b894";
}

// Mudança de cores
const cores = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];
let corAtual = 0;

function mudarCor() {
    const caixa = document.getElementById("caixa-cor");
    corAtual = (corAtual + 1) % cores.length;
    caixa.style.backgroundColor = cores[corAtual];
    
    // Efeito de rotação
    caixa.style.transform = `rotate(${corAtual * 45}deg)`;
    
    setTimeout(() => {
        caixa.style.transform = 'rotate(0deg)';
    }, 300);
}

// Lista dinâmica
let contadorItens = 0;

function adicionarItem() {
    const input = document.getElementById("item-input");
    const lista = document.getElementById("lista-dinamica");
    const texto = input.value.trim();
    
    if (texto === "") {
        alert("Por favor, digite um item!");
        return;
    }
    
    contadorItens++;
    
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${contadorItens}. ${texto}</span>
        <button onclick="removerItem(this)" style="margin-left: 10px; background: #e74c3c; color: white; border: none; padding: 2px 8px; border-radius: 3px; cursor: pointer; font-size: 0.8rem;">Remover</button>
    `;
    li.style.margin = "5px 0";
    li.style.padding = "8px";
    li.style.backgroundColor = "#f8f9fa";
    li.style.borderRadius = "5px";
    li.style.border = "1px solid #e9ecef";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    
    lista.appendChild(li);
    input.value = "";
    input.focus();
}

function removerItem(botao) {
    const li = botao.parentElement;
    li.style.opacity = "0";
    li.style.transform = "translateX(-100%)";
    li.style.transition = "all 0.3s ease";
    
    setTimeout(() => {
        li.remove();
    }, 300);
}

// Permitir adicionar item com Enter
document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById("item-input");
    if (itemInput) {
        itemInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                adicionarItem();
            }
        });
    }
    
    // Permitir calcular com Enter nos campos da calculadora
    const campos = ['num1', 'num2'];
    campos.forEach(id => {
        const campo = document.getElementById(id);
        if (campo) {
            campo.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calcular();
                }
            });
        }
    });
});

// Navegação suave
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Animações ao rolar a página
function animateOnScroll() {
    const elements = document.querySelectorAll('.section, .example-container, .element-card, .concept-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.section, .example-container, .element-card, .concept-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Executar animação inicial
    setTimeout(animateOnScroll, 100);
    
    // Executar animação ao rolar
    window.addEventListener('scroll', animateOnScroll);
});

// Função para mostrar mensagem de boas-vindas
function mostrarBoasVindas() {
    const agora = new Date();
    const hora = agora.getHours();
    let saudacao;
    
    if (hora < 12) {
        saudacao = "Bom dia";
    } else if (hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }
    
    console.log(`${saudacao}! Bem-vindo ao Resumo W3Schools!`);
    console.log("Esta página foi criada para demonstrar HTML, CSS e JavaScript de forma interativa.");
    console.log("Explore os exemplos e teste as funcionalidades!");
}

// Executar boas-vindas quando a página carregar
document.addEventListener('DOMContentLoaded', mostrarBoasVindas);

