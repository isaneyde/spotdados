import { EyeSlashIcon } from "@phosphor-icons/react";
const style = "border-1 rounded-2xl py-0 px-4 text-center bg-white min-w-50 max-w-50";
export const Sign = () => {
    // className="bg-[url(./img/background.webp)]"
    return (
        <>
            <body className=" py-20 bg-black">
                <div className="w-250px h-185px  mb-10">
                    <img src="/img/spoti_logo.png" alt="spotdados logo" />
                </div>
                <form action="" className="flex flex-col justify-center items-center gap-10">
                    <input className={style} type="text" placeholder="Nome completo" />
                    <input className={style} type="text" placeholder="Nickname" />
                    <input className={style} type="date" placeholder="dd/mm/yy" />
                    <input className={style} type="text" placeholder="País" />
                    <input className={style} type="password" placeholder="Password" />
                    <EyeSlashIcon size={24} weight="fill" className="" />

                    <button type="submit" className="p-3 rounded-3xl bg-amber-400 font-bold text-center"> Criar conta</button>
                </form>



                <p className="text-amber-500">Teste</p>
            </body>








        </>
    )
}