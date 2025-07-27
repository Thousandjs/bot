
        var messages = document.getElementById("messages-lint")
        var container = document.getElementById("container-lint")
        var send = document.getElementById("submit-lint")
        var bol_button = document.getElementById("messages_bold")
        var close_bol = document.getElementById("x-lint")
        var messageinput = document.getElementById("message-lint")
        
        var primary = function() {
            var head = document.createElement("link")
            head.href = "https://cdn.jsdelivr.net/gh/Thousandjs/bot@74a5c47/style.css"
            head.rel = "stylesheet"
            document.head.appendChild(head)
        }
        primary();
        var sendMessage = function(font) {
            var message = document.createElement("p")
            message.className = "user-lint"
            message.textContent = font 
            messages.appendChild(message)
        }
        send.addEventListener("click", () => {
            sendMessage(messageinput.value);
        })
        messageinput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                sendMessage(messageinput.value)
                setTimeout(() => {
                    resposta(messageinput.value)
                }, 500)
            }
        })

        var resposta = function(pergunta) {
            var perguntaMinuscula = pergunta.toLowerCase();
            var p1 = ["como se cadastrar", "como fazer para se cadastrar", "cadastrar-me"]
            var p2 = ["como usar a api", "como usar o aplicativo", "como uso a thousand"]
            var p3 = ["você é uma api", "voce e uma api", "voce e uma api?", "você é uma api?"]
            var p31 = ["você é uma inteligencia artificial"]
            var p4 = ["qual é a host da thousand", "qual é a plataforma da thousand"]
            var p5 = ["qual é a impresa da thousand", "qual é a impresa thousand"]
            var p6 = ["como fazer login", "login-me", "fazer login"]
            var p7 = ["qual é sua impresa", "qual é sua empresa"]
            for(var il = 0; il < 4; il++) {
                if (perguntaMinuscula === p1[il]) {
                    messageBot("Se cadastrar, Certo, Para se cadastrar é só apertar no botão Cadastra-se")
                }
                if (perguntaMinuscula === p2[il]) {
                    messageBot("O site da thousand é feito por partes, documentação edição e etc. Para usar a api, aperte em code. Para mais ajuda entre em contato com o nosso atendimento email: ppauloa37@gmail.com. pzzaul2222@hotmail,com")
                }
                if (perguntaMinuscula === p3[il]) {
                    messageBot("Sim, sou uma api ou considerada uma inteligencia artificial 😀")
                }
                if (perguntaMinuscula === p31[il]) {
                    messageBot("Sim, sou uma inteligencia artificial considerado tambem como uma api 👨‍💻")
                }
                if (perguntaMinuscula === p4[il]) {
                    messageBot("A host da thousand é codigos 👨‍💻, e a github")
                }
                if (perguntaMinuscula === p5[il]) {
                    messageBot("É a sozeup uma desenvolvedora de navegadores 💥 Uau")
                }
                if (perguntaMinuscula === p6[il]) {
                    messageBot("Para fazer login aperte no cadeado e entrar para salvar seus dados 💫")
                }
                if (perguntaMinuscula === p7[il]) {
                    messageBot("Eu sou uma api da soze up e fui integrada 💨 nesse site web 🚇")
                }
        }
        }
        var messageBot = function(respost) {
            var message = document.createElement("p")
            message.className = "bot-lint"
            message.textContent = respost;
            messages.appendChild(message)
        }
        var hash = function() {
            if (window.location.href === "http://127.0.0.1:5500/app/app.html#") {
                container.style.display = "block";
            }
        }
        var bol = function() {
            window.location.href = "#"
            hash();
        }
        var close = function() {
            container.style.display = "none";
        }
        bol_button.addEventListener("click", () => {
            bol()
        })
        close_bol.addEventListener("click", () => {
            close()
        })
