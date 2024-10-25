<h3>Iniciar o sistema</h3>
// Instalar as dependencias do npm
<strong>npm install</strong>
<strong>npm install -g nodemon</strong>

// Extensão
<strong>thunder client</strong>
<strong>mongodb for vscode</strong>

// Criar um arquivo <br>
<strong>.env </strong> <br>
<strong>MONGO_CS = 'mongodb://localhost:27017' </strong> mongodb compass local <br>
<strong>MONGO_CS = 'connect-string-do-atlas'</strong>mongodb atlas<br>
// Escolha um modo para conectar com o banco MONGO_CS 
<strong>MONGO_DB_NAME= 'Barber'</strong>Nome do Banco de dados<br>

<strong>npm run dev </strong> Para rodar o localhost <br>

<h3>Na extensão thunder</h3>
Cadastrar <br>
POST<strong>http://localhost:3000/auth/signup</strong><br>
 
 Visualizar <br>
GET/t <strong>http://localhost:3000/users</strong><br>

Update<br>
PUT/t <strong>http://localhost:3000/users</strong>/id-user<br>

Delete<br>
DELETE/t <strong>http://localhost:3000/users</strong>/id-user<br>

