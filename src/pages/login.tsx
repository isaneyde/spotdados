
import { EnvelopeSimpleIcon, EyeSlashIcon, } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
const style =
  "border-1 rounded-3xl py-0 px-4 bg-white text-center min-w-75 max-w-100 h-10 m-10";

export const Login = () => {
  return (
    <>
    <div className="py-20 bg-[(public/img/background.png)] bg-black">
      <div>
      <h1 className="text-white text-center px-4 py-2 font-bold mb-10 mt-16">
        Ola, Bem Vindo(a)
      </h1>
      <div>
        <img className="mb-20" src="public/img/spoti_logo.png" alt="" />
      </div>
      <h2 className="text-amber-400 font-extrabold text-center">Login</h2>
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
        <div className="remember=forget flex flex-row justify-around">
          <label className="text-white  font-light"><input type="checkbox" />Remember me</label>
          <a href="#" className="text-white text-center font-light ">Forgot password?</a> </div>
  
     <EyeSlashIcon size={32} color="black" weight="fill" />

        <NavLink className="p-3 rounded-3xl bg-amber-400 font:bold text-center "  type="submit" to="/list-users">Entrar</NavLink>
  
        </div>
      <EnvelopeSimpleIcon size={12} weight="regular" color="black" className="ms-90 -mt-108"/>
      <EyeSlashIcon
        size={12}
        weight="regular"
        className="ms-90 mt-35"
        color="black"
      />
      </div>

    </>
    
  );
};
