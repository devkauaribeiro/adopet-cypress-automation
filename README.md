# 🐾 Adopet Cypress Automation

Projeto de automação de testes E2E para o site [Adopet](https://adopet-tau.vercel.app/), desenvolvido com **Cypress**. Cobre fluxos críticos da aplicação como cadastro, login e envio de mensagens via API.

---

## 🛠️ Tecnologias e Técnicas Utilizadas

- **Cypress** — automação de testes E2E
- **Fixtures** — massa de dados externa para testes de cadastro
- **Comandos Personalizados** — `cy.commands` reutilizáveis para ações repetidas
- **Mochawesome** — geração de relatório visual dos testes
- **cy.request** — testes de API diretamente via Cypress
- **stubPost** — interceptação e simulação de requisições HTTP

---

## 📁 Estrutura do Projeto

```
adopet-cypress-automation/
├── cypress/
│   ├── e2e/              # Arquivos de teste
│   ├── fixtures/         # Massa de dados (JSON)
│   ├── support/
│   │   ├── commands.js   # Comandos personalizados
│   │   └── e2e.js
├── cypress.config.js     # Configuração do Cypress
├── package.json
└── README.md
```

---

## ✅ Casos de Teste

### 🔐 Cadastro
| Cenário | Tipo |
|---|---|
| Cadastro com dados válidos | Positivo |
| Cadastro com dados inválidos | Negativo |
| Cadastro utilizando massa de dados via Fixtures | Data-driven |

### 🔑 Login
| Cenário | Tipo |
|---|---|
| Login com credenciais válidas | Positivo |
| Login com credenciais inválidas | Negativo |

### 📡 API
| Cenário | Tipo |
|---|---|
| Envio de mensagem via requisição (cy.request) | Integração |
| Simulação de resposta com stubPost | Mock |

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- npm instalado

### Instalação

```bash
git clone https://github.com/devkauaribeiro/adopet-cypress-automation.git
cd adopet-cypress-automation
npm install
```

### Executar testes no modo interativo

```bash
npx cypress open
```

### Executar testes no modo headless

```bash
npx cypress run
```

### Gerar relatório Mochawesome

```bash
npx cypress run --reporter mochawesome
```

---

## 📊 Relatório de Testes

Após executar `npx cypress run`, o relatório é gerado automaticamente na pasta `mochawesome-report/`. Abra o arquivo `index.html` no navegador para visualizar os resultados.

---

## 👨‍💻 Autor

**Kauã Ribeiro de Oliveira**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-kauaribeirodev-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/kauaribeirodev)
[![GitHub](https://img.shields.io/badge/GitHub-devkauaribeiro-181717?style=flat&logo=github&logoColor=white)](https://github.com/devkauaribeiro)