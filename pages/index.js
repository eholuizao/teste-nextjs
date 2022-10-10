import react from "react";
import React from "react";

const users = [];

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: "", password: "" };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        const userExists = users.some((user) => {
            return (
                user.userName === this.state.user &&
                user.password === this.state.password
            );
        });

        event.preventDefault();
        userExists ? this.props.showPageMethod() : alert("Usuário não existe!");
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Usuario:
                    <input
                        name="user"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        name="password"
                        type="password"
                        value={this.state.passwordValue}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", user: "", password: "", confirmPassword: "" };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        var userNameExists = users.some((user) => {
            return user.userName === this.state.user;
        });

        if (
            !userNameExists &&
            this.state.password === this.state.confirmPassword
        ) {
            alert(`Cadastrado com sucesso ${this.state.user}!`);
            users.push({
                userName: this.state.user,
                password: this.state.password,
            });
        }

        console.log(users);
        event.preventDefault();
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome Completo:
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Usuario:
                    <input
                        name="user"
                        type="text"
                        value={this.state.user}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Confirmar senha:
                    <input
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

class FormControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showlogin: true, showsignup: false };
        this.showLogin = this.showLogin.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
    }

    showLogin() {
        this.setState(() => ({
            showlogin: true,
            showsignup: false,
        }));
    }

    showSignUp() {
        this.setState(() => ({
            showlogin: false,
            showsignup: true,
        }));
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div>
                <button onClick={this.showLogin}>Login</button>
                <button onClick={this.showSignUp}>Sign Up</button>

                <LoginForm
                    show={this.state.showlogin}
                    showPageMethod={this.props.showPageMethod}
                />
                <SignUpForm show={this.state.showsignup} />
            </div>
        );
    }
}

function Page(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div>
            <h1>Você está logado!</h1>
            <h2>Faça logout para retornar ao form.</h2>

            <button onClick={props.showFormMethod}>Logout</button>
        </div>
    );
}

class InterfaceControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showForm: true, showPage: false };
        this.showForm = this.showForm.bind(this);
        this.showPage = this.showPage.bind(this);
    }

    showForm() {
        this.setState(() => ({
            showForm: true,
            showPage: false,
        }));
    }

    showPage() {
        this.setState(() => ({
            showForm: false,
            showPage: true,
        }));
    }

    render() {
        return (
            <div>
                <h1>Página inicial do LUIZAO</h1>

                <FormControl
                    show={this.state.showForm}
                    showPageMethod={this.showPage}
                />
                <Page
                    show={this.state.showPage}
                    showFormMethod={this.showForm}
                />
            </div>
        );
    }
}

function Home() {
    return <InterfaceControl />;
}

export default Home;
