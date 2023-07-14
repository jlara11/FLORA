// Abrir o pop-up do chatbot
document.getElementById("chatButton").addEventListener("click", function() {
    document.getElementById("chatContainer").style.display = "block";
});

// Fechar o pop-up do chatbot
document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("chatContainer").style.display = "none";
});

// Enviar mensagem do usuário
function sendMessage() {
    var userInput = document.getElementById("userText").value;
    if (userInput !== "") {
        var chatMessages = document.getElementById("chatMessages");

        var userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.innerHTML = userInput;
        chatMessages.appendChild(userMessage);

        // Aqui você pode adicionar a lógica para processar a mensagem e obter a resposta do chatbot

        // Exemplo de resposta do chatbot
        var botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerHTML = "Olá! Como posso ajudar?";
        chatMessages.appendChild(botMessage);

        // Role a tela para mostrar a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Limpar o campo de entrada de texto
        document.getElementById("userText").value = "";
    }
}

// Evento de clique no botão "Enviar"
document.getElementById("sendButton").addEventListener("click", function() {
    sendMessage();
});

// Evento de pressionar Enter no campo de entrada de texto
document.getElementById("userText").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Evitar que a tecla Enter envie o formulário
        sendMessage();
    }
});
