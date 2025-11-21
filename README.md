# API-EMPRESA

API desenvolvida em **Node.js** para gerenciamento de dados corporativos.  
Projeto criado em colaboração entre os desenvolvedores: **@aleesousa, @leocsas, @gfreitaz08 e @n1ninh4**.

---

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript  
- **Express.js** – Framework para criação de APIs REST  
- **JavaScript (ES6+)** – Linguagem principal  
- **Nodemon** – Reinicia automaticamente a aplicação em alterações  
- **Yup** – Validação de dados  
- **Dotenv** – Gerenciamento de variáveis de ambiente  
- **Mongoose** – Modelagem de objetos para MongoDB  
- **Npm** – Gerenciador de pacotes  

---

## Estrutura do Projeto

API-EMPRESA/ 

│── src/ 

│ ├── docs/           (*Pasta docs contendo collection no Postman e o diagrama*)

│ ├── routes/         (*Arquivos de rotas da API*)

│ ├── controllers/    (*Lógica de negócio*)

│ ├── models/         (*Modelos de dados*) 

│ ├── config/         (*Configuração do banco de dados*)

│ ├── validators/     (*Validação de dados recebidos*) 

│ ├── middlewares/    (*Funções que interceptam requisições*) 

│ └── index.js        (*Inicialização da aplicação*) 

│── package.json 

│── package-lock.json 

│── .gitignore


---

## Instalação e Execução

1. **Clonar o repositório**

   git clone https://github.com/aleesousa/API-EMPRESA.git
   
   cd API-EMPRESA
   
3. **Instalar dependências**
  
   npm install

4. **Executar a API**
  
   npm start
   
   Por padrão, a API será executada em: http://localhost:3000

  ---
  
## Endpoints Disponíveis

**Client (clientRoutes.js)**

GET /clients → Lista todos os clientes

GET /clients/:id → Retorna um cliente específico

POST /clients → Cria um novo cliente

PUT /clients/:id → Atualiza dados de um cliente

DELETE /clients/:id → Remove um cliente

---

**Company (companyRoutes.js)**

GET /companies → Lista todas as empresas

GET /companies/:id → Retorna uma empresa específica

POST /companies → Cria uma nova empresa

PUT /companies/:id → Atualiza dados da empresa

DELETE /companies/:id → Remove uma empresa

---

**Contract (contractRoutes.js)**

GET /contracts → Lista todos os contratos

GET /contracts/:id → Retorna um contrato específico

POST /contracts → Cria um novo contrato

PUT /contracts/:id → Atualiza contrato

DELETE /contracts/:id → Remove contrato

---

**Department (departmentRoutes.js)**

GET /departments → Lista todos os departamentos

GET /departments/:id → Retorna um departamento específico

POST /departments → Cria um novo departamento

PUT /departments/:id → Atualiza departamento

DELETE /departments/:id → Remove departamento

---

**Employee (employeeRoutes.js)**

GET /employees → Lista todos os funcionários

GET /employees/:id → Retorna um funcionário específico

POST /employees → Adiciona novo funcionário

PUT /employees/:id → Atualiza dados do funcionário

DELETE /employees/:id → Remove funcionário

---

**Invoice (invoiceRoutes.js)**

GET /invoices → Lista todas as faturas

GET /invoices/:id → Retorna uma fatura específica

POST /invoices → Cria nova fatura

PUT /invoices/:id → Atualiza fatura

DELETE /invoices/:id → Remove fatura

---

**Payment (paymentRoutes.js)**

GET /payments → Lista todos os pagamentos

GET /payments/:id → Retorna um pagamento específico

POST /payments → Registra novo pagamento

PUT /payments/:id → Atualiza pagamento

DELETE /payments/:id → Remove pagamento

---

**Project (projectRoutes.js)**

GET /projects → Lista todos os projetos

GET /projects/:id → Retorna um projeto específico

POST /projects → Cria novo projeto

PUT /projects/:id → Atualiza projeto

DELETE /projects/:id → Remove projeto

---

**Service (serviceRoutes.js)**

GET /services → Lista todos os serviços

GET /services/:id → Retorna um serviço específico

POST /services → Cria novo serviço

PUT /services/:id → Atualiza serviço

DELETE /services/:id → Remove serviço

---

**Unit (unitRoutes.js)**

GET /units → Lista todas as unidades

GET /units/:id → Retorna uma unidade específica

POST /units → Cria nova unidade

PUT /units/:id → Atualiza unidade

DELETE /units/:id → Remove unidade

---

## Organização no GitHub

**Issues detalhadas para cada etapa:**

Configuração inicial do projeto

Implementação dos CRUDs

Criação da Collection no Postman

Documentação

Commits organizados e colaborativos

Branch principal (main) sempre atualizada

---

## Contribuidores

*@aleesousa*

*@leocsas*

*@gfreitaz08*

*@n1ninh4*
