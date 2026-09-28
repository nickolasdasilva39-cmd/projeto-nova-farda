document.addEventListener("DOMContentLoaded", () => {

    // Tela de carregamento
    const loader = document.getElementById("loader");

    if (loader) {
        window.setTimeout(() => {
            loader.classList.add("hidden");
        }, 1200);
    }

    // Cadastro
    const cadastroForm = document.getElementById("cadastroForm");

    if (cadastroForm) {
        const message = document.getElementById("formMessage");

        cadastroForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!cadastroForm.checkValidity()) {
                cadastroForm.reportValidity();
                message.textContent = "Preencha todos os campos obrigatórios do colaborador.";
                message.style.color = "#a82424";
                return;
            }

            const dados = Object.fromEntries(new FormData(cadastroForm).entries());

            // Simulação de cadastro local (Dinâmico).
            localStorage.setItem("fardaNovaColaborador", JSON.stringify(dados));
            localStorage.setItem("fardaNovaCadastroRealizado", "true");

            message.textContent = "Cadastro corporativo realizado com sucesso. Redirecionando para requisição dos kits...";
            message.style.color = "#4B5320";

            setTimeout(() => {
                window.location.href = "alistamento.html";
            }, 1000);
        });
    }

    // Modalidades de Kits (Alistamento)
    const optionCards = document.querySelectorAll("[data-option]");
    const optionResult = document.getElementById("optionResult");

    optionCards.forEach((card) => {
        card.addEventListener("click", () => {
            optionCards.forEach((item) => item.classList.remove("selected"));
            card.classList.add("selected");

            const option = card.dataset.option;

            if (optionResult) {
                optionResult.innerHTML = `
                    <h3>Kit Selecionado: ${option}</h3>
                    <p>
                        A requisição deste kit foi salva no sistema.
                        O setor de Almoxarifado será notificado para separar as peças.
                    </p>
                `;
            }
        });
    });

    // Portal do Colaborador (Serviços)
    const serviceCards = document.querySelectorAll("[data-service]");
    const serviceResult = document.getElementById("serviceResult");

    serviceCards.forEach((card) => {
        card.addEventListener("click", () => {
            serviceCards.forEach((item) => item.classList.remove("selected"));
            card.classList.add("selected");

            const service = card.dataset.service;

            if (serviceResult) {
                serviceResult.innerHTML = `
                    <h3>Serviço: ${service}</h3>
                    <p>
                        Esta funcionalidade manipula dados dinâmicos da simulação. 
                        Na versão final do projeto, os dados serão consultados no banco de dados do RH.
                    </p>
                `;
            }
        });
    });

});
