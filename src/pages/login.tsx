import { EyeSlashIcon, } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
const style =
  "border-1 rounded-3xl py-0 px-4 text-center min-w-75 max-w-100 h-10 m-10";

export const Login = () => {
  return (
    <>
    <body>
      <div>
      <h1 className="text-black text-center px-4 py-2 font-bold mb-10 mt-16">
        Ola, Bem Vindo(a)
      </h1>
      <div>
        <img className="mb-20" src="public/img/spoti_logo.png" alt="" />
      </div>

      <form
        action=""
        className="flex flex-col justify-center justify-items-center gap-8"
      >
        <input
          className={style}
          type="text"
          placeholder="user@gmail.com"
          required
        />
        <input
          className={style}
          type="password"
          placeholder="Password"
          required
        />
        <NavLink
          className="p-3 rounded-3xl bg-amber-400 font:bold text-center w-75 m-10"
          to="/Sign"
          type="submit"
        >
          Entrar
        </NavLink>
      </form>
      
      <EyeSlashIcon
        size={12}
        weight="regular"
        className="ms-90 -mt-56"
        color="black"
      />
    </div>
    </body>
    </>
    
  );
};
