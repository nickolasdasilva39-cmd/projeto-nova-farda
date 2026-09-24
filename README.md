# Farda Nova — Sistema de Alistamento Militar

Projeto acadêmico de uma interface web para simulação de um sistema de alistamento militar.

## Como executar

1. Extraia o arquivo ZIP.
2. Abra a pasta `FardaNova`.
3. Entre na pasta `html`.
4. Abra `index.html` no navegador.

Também é possível abrir a pasta do projeto no Visual Studio Code e usar uma extensão como Live Server.

## Estrutura

- `html/index.html` — tela inicial.
- `html/cadastro.html` — cadastro do cidadão.
- `html/alistamento.html` — modalidades de alistamento.
- `html/servicos.html` — serviços para quem já se alistou.
- `css/style.css` — estilos e responsividade.
- `js/script.js` — navegação, loading, validação e armazenamento local.

## Fluxo

### 1. Tela inicial

Apresenta:
- importância do alistamento para o cidadão;
- relação com a sociedade e a nação;
- termos e responsabilidades;
- botão "Quero me alistar";
- botão "Já me alistei".

### 2. Quero me alistar

Abre o cadastro com:
- nome completo;
- data de nascimento;
- e-mail;
- telefone;
- sexo;
- CPF;
- RG;
- endereço;
- cidade;
- estado;
- CEP.

Após o cadastro, o sistema abre as modalidades:
- Alistamento feminino;
- Alistamento masculino;
- Moro no exterior;
- Problemas de saúde.

### 3. Já me alistei

Abre:
- Acompanhar Alistamento;
- Locais de atendimento;
- Solicitar certificado de dispensa;
- Certificados Militares;
- Validar certificado.

## Cadastro

Nesta versão, o cadastro é apenas uma simulação local. Os dados são armazenados no `localStorage` do navegador. Não há banco de dados nem envio de dados para servidor.

## Aviso

Este projeto é acadêmico. Não representa um sistema oficial do Governo Federal ou das Forças Armadas e não substitui os canais oficiais de alistamento.

## Atualização semanal / commits

Sugestão de histórico de desenvolvimento:

### Semana 1
- Estrutura inicial do projeto.
- Tela inicial.
- Identidade visual.
- Navegação principal.

### Semana 2
- Formulário de cadastro.
- Validação dos campos.
- Armazenamento local.

### Semana 3
- Modalidades de alistamento.
- Área de serviços.
- Responsividade.
- Ajustes finais de interface.

## Próximas etapas

- Banco de dados;
- autenticação;
- integração com backend;
- consultas reais;
- integração com APIs, se aplicável;
- melhoria da acessibilidade;
- testes;
- documentação técnica.
