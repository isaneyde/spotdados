const style = "border-1 rounded-2xl py-0 px-4 text-center";
export const Sign = () => {
    // className="bg-[url(./img/background.webp)]"
    return (
        <>
            <body>
                <div className="w-250px h-185px ">
                    <img src="./img/spoti_logo.png" alt="spotdados logo" />
                </div>
                <section className="">
                    <input className={style} type="text" placeholder="Nome completo" />
                    <input className={style} type="text" placeholder="Nickname" />
                    <input className={style} type="date" placeholder="dd/mm/yy" />
                    <input className={style} type="text" placeholder="País" />
                </section>
                <button className="p-3 rounded-3xl bg-amber-400 font-bold text-center"> Criar conta</button>
            </body>








        </>
    )
}