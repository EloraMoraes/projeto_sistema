# Projeto de Prática Profissional em ADS 
# Grupo: projeto_sistema

Pré-requisitos:
Python 3.x: Verifique se o Python 3.x está instalado em seu computador. Você pode baixá-lo e instalá-lo a partir do site oficial do Python.
Ambiente Virtual (opcional): Embora não seja obrigatório, é uma prática recomendada criar e ativar um ambiente virtual para isolar as dependências do projeto do sistema global. Você pode criar um ambiente virtual usando a biblioteca venv, que geralmente está incluída na instalação padrão do Python.

Clone o Repositório:Abra o terminal ou prompt de comando e clone o repositório do projeto:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

Navegue até o Diretório do Projeto:Mude para o diretório do projeto:
cd nome-do-repositorio

Crie e Ative o Ambiente Virtual (Opcional):Se você optou por usar um ambiente virtual, crie e ative-o agora:No Linux/macOS:
python3 -m venv env
source env/bin/activate

No Windows:
python -m venv env
.\env\Scripts\activate

Instale as Dependências:Use o pip para instalar as dependências do projeto listadas no arquivo requirements.txt:
pip install -r requirements.txt

Configuração das Variáveis de Ambiente:Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente necessárias, como a URL do banco de dados e chaves de segurança.

Execute a Aplicação:Inicie a aplicação executando o seguinte comando no terminal:
flask run

Acesse a Aplicação:Abra seu navegador da web e acesse a seguinte URL:
http://localhost:5000
