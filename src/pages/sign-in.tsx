
import {NavLink } from "react-router-dom";
import { EyeSlashIcon } from "@phosphor-icons/react";
const style = "border-1 rounded-3xl py-0 px-4 text-center bg-white min-w-75 max-w-100 h-10";
export const Sign = () => {
    // className="bg-[url(./img/background.webp)]"
    return (
        <>
            <body className=" py-20 bg-">
                <div className="w-250px h-185px  mb-10">
                    <img src="/img/spoti_logo.png" alt="spotdados logo" />
                </div>
                <form action="" className="flex flex-col justify-center items-center gap-12">
                    <input className={style} type="text" placeholder="Nome completo" required />
                    <input className={style} type="text" placeholder="Nickname" />
                    <input className={style} type="date" placeholder="dd/mm/yy" />
                    <input className={style} type="text" placeholder="País" required/>
                    <input className={style} type="password" placeholder="Password" required maxLength={8} minLength={4}/>
                 

                    <NavLink type="submit" className="p-3 rounded-3xl bg-amber-400 font-bold text-center w-75" to="/list-users"> Criar conta</NavLink>
                </form>
                   <EyeSlashIcon size={18} weight="fill" className="ml-81 -mt-31" />




            </body>








        </>
    )
}