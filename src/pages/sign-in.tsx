
import { NavLink } from "react-router-dom";
import { EyeSlashIcon } from "@phosphor-icons/react";
//import { useState } from "react";
const style = "border-1 rounded-3xl py-0 px-4 text-center bg-white min-w-75 max-w-100 h-10";
//const emptyField = " ";
export const Sign = () => {
   /* const [isemptyField, setIsEmptyField] = useState(emptyField);

    const requiredStyle = () => {
        setIsEmptyField(emptyField ? 'border-red-700' : emptyField)
    }*/

    return (
        <>
            <div className="min-h-screen  py-20 bg-[url(./img/background.png)]  bg-black">
                <div className="w-250px h-185px  mb-10 -mt-10">
                    <img src="/img/spoti_logo.png" alt="spotdados logo" />
                </div>
                <main>
<form action="" className="flex flex-col justify-center items-center gap-10">
                    <input required className={style} type="text" placeholder="Full name"/>

                    <input className={style} type="text" placeholder="Nickname" />

                    <input required className={style} type="date" placeholder="date of birth" />

                    <input required className={style} type="text" placeholder="Country"/>

                    <input required className={style} type="password" placeholder="Password" name="password" maxLength={8} minLength={4} />

                    <NavLink type="submit" className="p-3 rounded-3xl bg-amber-400 font-bold text-center w-75 mb-15" to="/list-users"> Criar conta</NavLink>
                </form>
                <EyeSlashIcon size={18} weight="fill" className="ml-78 -mt-44" />
                
                </main>
                

            </div>
</>
    )
}
