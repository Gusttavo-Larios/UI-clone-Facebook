import { ExistingAccounts } from "./components/ExistingAccounts";
import "./css/Main.css";
import "./css/App.css";

function App() {
  const { innerWidth: width } = window;
  return (
    <div className="containerApp">
      {width <= 1080 ? (
        <div>
          <img src="img/facebook.svg" alt="" />
          <section>
            <input
              type="text"
              name="user"
              placeholder="Número de celular ou email"
            />
            <input type="text" name="passeord" placeholder="Senha" />
            <button>Entrar</button>
            <div className="hr"></div>
            <button type="button">Criar nova conta</button>
            <p>Esqueceu a senha?</p>
          </section>
          <footer>
            <div>
              <p>Português (Brasil)</p> <p>Español</p> <p>العربية</p>
              <p>Deutsch</p>
            </div>
            <div>
              <p>English (US)</p> <p>Français (France)</p> <p>Italiano</p>
              <img src="img/add-languages.png" alt="Add-languages" />
            </div>
          </footer>
        </div>
      ) : (
        <div className="container-content">
          <div className="containerApresentation">
            <img src="img/facebook-two.svg" alt="Logo" />
            <h2>Logins recentes</h2>
            <h3>Clique na sua foto ou adicione uma conta.</h3>

            <div className="containerAccounts">
              <ExistingAccounts
                avatar="https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                name="Teste"
              />

              <ExistingAccounts avatar="" name="Adicionar conta" />
            </div>
          </div>
          <div className="containerLogin">
            <section>
              <input type="text" name="user" placeholder="Email ou telefone" />
              <input type="password" name="passeord" placeholder="Senha" />
              <button>Entrar</button>
              <p>Esqueceu a senha?</p>
              <div className="hr"></div>
              <button type="button">Criar nova conta</button>
            </section>
            <p>
              <strong>Criar uma Página</strong> para uma celebridade, banda ou
              empresa.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
