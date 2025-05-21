import { EyeSlashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const style =
  "border-1 rounded-3xl py-0 px-4 bg-white  text-center min-w-75 max-w-100 h-10 m-10 focus: border-amber-400";

export const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");


  function validateFields() {
    if (email.length > 0 && password.length > 0) {
      alert("login feito com sucesso");
    } 
      alert("Por favor, preencha os campos");
    }
  
  return (
    <>
       
        
        <main className="min-h-screen bg-[url(./img/bg-4.png)] bg-black">
        <div>  
          <h1 className="text-white text-center px-4 py-2 text-3xl mb-10 mt-16 font-extrabold">
          Olá, Bem-vindo(a)
        </h1>
        </div>
        <div>
          <img src="public/img/spoti_logo.png" alt="" />
        </div>
          <form className="flex flex-col justify-center items-center gap-10">
            <label htmlFor="" className="text-white text-2xl">E-mail</label>
            <input
              className={style}
              type="text"
              placeholder="user@gmail"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="" className="text-white text-2xl">Password</label>
            <input
              className={style}
              type="password"
              placeholder="password"
              id=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <NavLink
              type="submit"
              onClick={() => validateFields()}
              className="p-3 rounded-3xl bg-amber-400 font-bold text-center w-75 mb-15"
              to="/list-users"
            > Entrar
            </NavLink>
          </form>
          <EyeSlashIcon
            size={24}
            weight="regular"
            className="ms-80 -mt-55"
            color="black"
          />
        </main>
    </>
  );
}

export default Login;
