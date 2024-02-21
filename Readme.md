# Sistema de Gerenciamento de Consultas Médicas e Registros Médicos

O Sistema de Gerenciamento de Consultas Médicas é uma aplicação back-end que permite agendar, gerenciar e registrar informações sobre consultas médicas. Desenvolvido para oferecer operações CRUD (criar, ler, atualizar e deletar) sobre pacientes, médicos e consultas, a API fornece endpoints que facilitam a interação com o banco de dados.

## Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

## Funcionalidades Principais

- **Gerenciamento de Pacientes**: Permite criar, editar e deletar perfis de pacientes.
- **Gerenciamento de Médicos**: Oferece operações CRUD para criar, editar e deletar perfis de médicos.
- **Agendamento e Gerenciamento de Consultas**: Permite agendar consultas médicas com médicos específicos e registrar informações relevantes sobre essas consultas.
- **Associação entre Pacientes e Médicos**: Permite associar pacientes a médicos para facilitar o gerenciamento de consultas.

## Execução Local

Para executar a aplicação localmente, siga estas etapas:

1. Clone este repositório:

```bash
git clone https://github.com/JeanSantos5580/API-REST-MedAppointments.git
```

2. Navegue até o diretório do projeto:

```bash
cd seu-repositorio
```

3. Instale as dependências do projeto:

```bash
npm i
```

4. Configure as variáveis de ambiente:

Execute o seguinte script no seu terminal:

```bash
npm run setup
```

Será criado um arquivo .env na raíz do projeto. Dentro dele você encontrará a estrutura base para que você conecte seu banco de dados.

```bash
DATABASE_URL='your_database://user:your_password@localhost:port/databaseName?schema=public
```

Abaixo estão alguns exemplos de conexão com os bancos de dados que o prisma suporta:

PostgreSQL:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome-do-banco"
```

MySQL:

```bash
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome-do-banco"
```

SQL Server:

```bash
DATABASE_URL="sqlserver://usuario:senha@localhost:1433/nome-do-banco"
```

CockroachDB:

```bash
DATABASE_URL="cockroachdb://usuario:senha@localhost:26257/nome-do-banco"
```

MongoDB:

```bash
DATABASE_URL="mongodb://usuario:senha@localhost:27017/nome-do-banco"
```

5. Em seguida, será necessário configurar o schema do prisma para indicar qual banco de dados será utilizado. Então vá para a pasta prisma, e acesse o arquivo schema.prisma. Dentro dele você encontrará as seguintes configurações:

```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

Aqui você deve substituir o provider que você estará utilizando dentre as opções que o Prisma suporta:

```bash
postgresql, mysql, sqlserver, cockroachdb e mongodb
```

6. Agora, execute o seguinte comando para que as migrations sejam executadas e o banco de dados seja criado com as estruturas definidas pelos modelos (models).

```bash
npx prisma migrate dev
```

7. A partir daqui você já estará apto a interagir com as rotas e realizar as operações existentes.

## Endpoints

### Pacientes (Patient)

- **POST /patient/add**: Cria um novo perfil de paciente.

  ```json
  {
    "name": "João",
    "birth": "1990-05-15T08:00:00Z", // Exemplo de data e hora com o formato ISO 8601
    "genre": "MALE",
    "address": "Rua A, 123",
    "phone": "(11) 99999-9999",
    "email": "joao@example.com"
  }
  ```

- **PUT /patient/edit/:pacient_id**: Edita um perfil de paciente existente.

  ```json
  {
    "name": "João Silva",
    "birth": "1990-05-15T08:00:00Z",
    "genre": "MALE",
    "address": "Rua B, 456",
    "phone": "(11) 88888-8888",
    "email": "joao.silva@example.com"
  }
  ```

- **GET /patient**: Retorna todos os perfis de pacientes cadastrados.
- **GET /patient/appointment/:pacient_id**: Retorna as consultas médicas agendadas para um paciente específico.
- **DELETE /patient/delete/:pacient_id**: Deleta um perfil de paciente pelo seu ID.

### Médicos (Doctor)

- **POST /doctor/add**: Cria um novo perfil de médico.

  ```json
  {
    "name": "Dr. Carlos",
    "specialty": "Cardiologia",
    "crm": "12345",
    "address": "Av. Principal, 789",
    "phone": "(11) 77777-7777",
    "email": "carlos@example.com",
    "bio": "Especialista em cardiologia com mais de 10 anos de experiência."
  }
  ```

- **PUT /doctor/edit/:doctor_id**: Edita um perfil de médico existente.

  ```json
  {
    "name": "Dr. Carlos Silva",
    "specialty": "Cardiologia",
    "crm": "12345",
    "address": "Av. Nova, 456",
    "phone": "(11) 88888-8888",
    "email": "carlos.silva@example.com",
    "bio": "Especialista em cardiologia com mais de 15 anos de experiência."
  }
  ```

- **GET /doctor**: Retorna todos os perfis de médicos cadastrados.
- **GET /doctor/appointment/:doctor_id**: Retorna as consultas médicas agendadas para um médico específico.
- **DELETE /doctor/delete/:doctor_id**: Deleta um perfil de médico pelo seu ID.

### Consultas (Appointment)

- **POST /appointment/add**: Agenda uma nova consulta médica.

  ```json
  {
    "appointment_time": "2024-02-21T10:00:00",
    "status": "SCHEDULED",
    "observation": "Consulta de rotina",
    "diagnostic": "",
    "patient_id": "id_do_paciente",
    "doctor_id": "id_do_medico"
  }
  ```

- **PUT /appointment/edit/:appointment_id**: Edita uma consulta médica existente.

  ```json
  {
    "appointment_time": "2024-02-21T11:00:00",
    "status": "IN_PROGRESS",
    "observation": "Consulta de rotina",
    "diagnostic": "Paciente em bom estado de saúde."
  }
  ```

- **GET /appointment**: Retorna todas as consultas médicas agendadas.
- **DELETE /appointment/delete/:appointment_id**: Cancela uma consulta médica pelo seu ID.

### Associação Paciente-Médico (PatientDoctor)

- **POST /patientDoctor/add**: Associa um paciente a um médico.

  ```json
  {
    "patient_id": "id_do_paciente",
    "doctor_id": "id_do_medico"
  }
  ```

- **DELETE /patientDoctor/:patient_id/:doctor_id**: Desassocia um paciente de um médico.
- **PUT /patientDoctor/edit/:patient_doctor_id**: Edita a associação paciente-médico existente.
- **GET /patientDoctor**: Retorna todas as associações entre pacientes e médicos cadastradas.
- **GET /patientDoctor/doctor/:patient_id**: Retorna todos os médicos associados a um paciente específico.
- **GET /patientDoctor/patient/:doctor_id**: Retorna todos os pacientes associados a um médico específico.

## Enums

### Enum de Gênero (Genre)

O enum de gênero é utilizado para representar o gênero de um paciente. Os valores possíveis são:

- **MALE**: Indica que o paciente é do sexo masculino.
- **FEMALE**: Indica que o paciente é do sexo feminino.
- **OTHER**: Indica outro gênero não especificado nos valores acima.
- **NOT_SPECIFIED**: Indica que o gênero do paciente não foi especificado.

### Enum de Status (Status)

O enum de status é utilizado para representar o status de uma consulta médica. Os valores possíveis são:

- **SCHEDULED**: Indica que a consulta está agendada para o futuro.
- **IN_PROGRESS**: Indica que a consulta está em andamento.
- **COMPLETED**: Indica que a consulta foi concluída com sucesso.
- **CANCELED**: Indica que a consulta foi cancelada.
