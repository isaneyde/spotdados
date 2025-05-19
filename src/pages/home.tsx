import {NavLink } from "react-router-dom";
export const Home = () => {
    return (
        <body className="py-10 bg-black text-black font-bold">
            <div>
                <h1 className=" font-YuseiMagic text-[32px] m-15 text-2xl text-center text-white"> Ola, bem vindo(a)</h1>
                <img className="" alt="Logotipo" src="/img/spoti_logo.png" />

                <section>
                    <NavLink className="flex justify-around bg-amber-400 m-20 p-4 w-2xs rounded-full shadow-md" to="/Login">Login
                    </NavLink>
                     <NavLink className="flex justify-around bg-amber-400 m-20 p-4 w-2xs rounded-full shadow-md" to="Sign">Criar Conta
                    </NavLink>
                   
                </section>
            </div>

        </body>

    );
};


export default Home;
