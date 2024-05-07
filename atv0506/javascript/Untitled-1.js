 document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário por padrão

    // Obtém os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    // Expressão regular para validar o nome (máximo 100 caracteres e não pode conter números)
    var nomeRegex = /^[^\d]{1,100}$/;

    // Expressão regular para validar o email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expressão regular para validar o telefone com DDD (formato brasileiro)
    var telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    // Verifica se os campos passam nas validações
    if (!nomeRegex.test(nome)) {
        alert("Por favor, insira um nome válido (máximo 100 caracteres e sem números).");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("Por favor, insira um telefone válido (com DDD e formato brasileiro).");
        return;
    }

    // Se todos os campos forem válidos, o formulário pode ser enviado
    alert("Formulário enviado com sucesso!");
});
