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
                message.textContent = "Preencha todos os campos obrigatórios.";
                message.style.color = "#a82424";
                return;
            }

            const dados = Object.fromEntries(new FormData(cadastroForm).entries());

            // Simulação de cadastro local.
            localStorage.setItem("fardaNovaCadastro", JSON.stringify(dados));
            localStorage.setItem("fardaNovaCadastroRealizado", "true");

            message.textContent = "Cadastro realizado com sucesso. Redirecionando...";
            message.style.color = "#4B5320";

            setTimeout(() => {
                window.location.href = "alistamento.html";
            }, 700);
        });
    }

    // Modalidades de alistamento
    const optionCards = document.querySelectorAll("[data-option]");
    const optionResult = document.getElementById("optionResult");

    optionCards.forEach((card) => {
        card.addEventListener("click", () => {
            optionCards.forEach((item) => item.classList.remove("selected"));
            card.classList.add("selected");

            const option = card.dataset.option;

            if (optionResult) {
                optionResult.innerHTML = `
                    <h3>${option}</h3>
                    <p>
                        Modalidade selecionada na simulação.
                        Para procedimentos reais, consulte os canais oficiais
                        de alistamento militar.
                    </p>
                `;
            }
        });
    });

    // Serviços
    const serviceCards = document.querySelectorAll("[data-service]");
    const serviceResult = document.getElementById("serviceResult");

    serviceCards.forEach((card) => {
        card.addEventListener("click", () => {
            serviceCards.forEach((item) => item.classList.remove("selected"));
            card.classList.add("selected");

            const service = card.dataset.service;

            if (serviceResult) {
                serviceResult.innerHTML = `
                    <h3>${service}</h3>
                    <p>
                        Serviço selecionado na simulação.
                        Esta primeira versão apresenta apenas a interface.
                        As consultas e solicitações reais serão implementadas
                        em etapas futuras.
                    </p>
                `;
            }
        });
    });

});
