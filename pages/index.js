import React, { useState } from "react";

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
        alert("Logado com sucesso: " + this.state.user);
        event.preventDefault();
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
        this.state = { name: "", user: "", password: "" };

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
        alert("Cadastrado com sucesso: " + this.state.name);
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
                        name="password"
                        type="password"
                        value={this.state.password}
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
        this.setState((state) => ({
            showlogin: true,
            showsignup: false,
        }));
    }

    showSignUp() {
        this.setState((state) => ({
            showlogin: false,
            showsignup: true,
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.showLogin}>Login</button>
                <button onClick={this.showSignUp}>Sign Up</button>
                <LoginForm show={this.state.showlogin} />
                <SignUpForm show={this.state.showsignup} />
            </div>
        );
    }
}

function Home() {
    return (
        <div>
            <h1>Página inicial do LUIZAO</h1>
            <FormControl />
        </div>
    );
}

export default Home;