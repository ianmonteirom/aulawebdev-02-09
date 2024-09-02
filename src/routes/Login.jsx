import { useRef } from 'react';
import Cliente from '../components/Cliente';

const Login = () => {

    /*Hook-useRef - ele retorna uma referencia a um elemento ou componente
    sem ser renderizado novamente */

    const usuario = useRef();
    const senha = useRef();

    // Pegando os dados de usuario e senha gravando na sessão

    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha = sessionStorage.getItem("senha");



    //criando a função handleLogin

    const handleLogin = () => {
        if (usuario.current.value == "Admin" && senha.current.value == "123456") {

            //criando um token de autenticação
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);

            sessionStorage.setItem("usuario", "Admin");
            sessionStorage.setItem("senha", token)
        }
        else {
            alert("Usuario/Senha INVÁLIDO")
        }
    }



    return (
        <>
            <section>
                {/*Usando condição ternaria para chamar o componente cliente */}

                {getUsuario && getSenha ? (
                    //componente Cliente
                    <Cliente />
                ) :
                    <form onSubmit={handleLogin}>
                        <p>
                            Usuário:
                            <input type="text" placeholder="Digite seu usuário" ref={usuario} />
                        </p>
                        <p>
                            Senha:
                            <input type="password" placeholder="Digite sua senha" ref={senha} />
                        </p>

                        <button type="submit">Entrar</button>
                    </form>
                    //Fechando a chave da condição ternária /
                }
            </section>

        </>
    )
}
export default Login