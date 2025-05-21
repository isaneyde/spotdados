import { EyeSlashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
//import { loginUsers } from "../types/loginUsers";

const style =
  "border-1 rounded-3xl py-0 px-4 bg-white  text-center min-w-75 max-w-100 h-10 m-10 focus: border-amber-400";

export const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const Navigate= useNavigate()


  function validateFields() {
    if (email === "" && password ==="" ) { <p className="text-red-600 font-light">Por Favor, preencha os campos vazios</p> 
     Navigate("/login")
    } 
    else {
      Navigate('/list-users')
            
    }
    }
  return (
    <>
      <div className="min-h-screen  bg-black">
        <h1 className="text-white text-center px-4 py-2 font-extrabold mb-10  ">
          OLa, Bem-vindo(a)
        </h1>
        <div>
          <img src="public/img/spoti_logo.png" alt="" />
        </div>
        <main>
          
          <form className="flex flex-col justify-center items-center gap-10">
    
            <input
              className={style}
              type="text"
              placeholder="user@gmail"
              minLength={3}
              maxLength={16}
            
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={style}
              type="password"
              placeholder="password"
              minLength={4}
              maxLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={() => validateFields()}
              className="p-3 rounded-3xl bg-amber-400 font-bold text-center w-75 mb-15"
            > Entrar
            </button>

            <NavLink to={"/sign-in"} className="text-amber-400 font-bold">Não tem conta? Faça o sign-in</NavLink>



          </form>
          <EyeSlashIcon
            size={24}
            weight="regular"
            className="ms-80 -mt-55"
            color="black"
          />
        </main>
      </div>
    </>
  );
}

export default Login;