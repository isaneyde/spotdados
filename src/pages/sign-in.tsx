import { NavLink, useNavigate } from "react-router-dom";
import { EyeSlashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import type { userRegister } from "../types/user-register";

export const Sign = () => {
  //Style for the inputs
  const style = "border-1 rounded-3xl py-0 px-4 text-center bg-white min-w-75 max-w-100 h-10 border-amber-400";
  const Navigate = useNavigate();

  //States to change the input fields from empty to fill
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  //Function to call when the submit button is clicked
  const validateFields = () => {
    if (name === ""  && email==="" && country === "" && password === "") {
      <p className="block text-red-600 font-light size-2">Por favor, preecha os dados do formulário</p>
      Navigate("/sign-in");
    } else {
      const userData:userRegister[]=[];
      userData.push({name, nickname,email,country,password});
alert(userData);
      Navigate("/list-users");
    }
  };

  return (
    <>
      <div className="min-h-screen py-20  bg-[url(./img/background.png)]  bg-black">
        <div className="w-250px h-185px  mb-10 -mt-10">
          <img src="/img/spoti_logo.png" alt="spotdados logo" />
        </div>
        <main>
          <form
            action=""
            className="flex flex-col justify-center items-center gap-12"
          >
            <input
              required id="1"
              className={style}
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              className={style}
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
            />
            <input
              className={style}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              required
              className={style}
              type="text"
              placeholder="Country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />

            <input
              required
              className={style}
              type="password"
              placeholder="Password"
              name="password"
              maxLength={8}
              minLength={4}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              onClick={validateFields}
              className="p-3 rounded-3xl bg-amber-400 font-bold text-center w-75 mb-5"
            >
              Criar conta
            </button>
            <NavLink
              className="text-amber-400 text-center font-bold font-mono "
              to={"/login"}
            >
              Já tem conta? Clique aqui!
            </NavLink>
          </form>
        </main>
      </div>
      <EyeSlashIcon size={18} weight="fill" className="ml-76 -mt-74" />
    </>
  );
};
