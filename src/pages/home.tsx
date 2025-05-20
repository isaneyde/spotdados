import { NavLink } from "react-router-dom";
export const Home = () => {
    return (

        <body className="py-10 bg-[url(../img/bg-6.png)] bg-black text-black font-bold">
            <div>
                <h1 className="font-YuseiMagic text-[32px] m-20 text-2xl text-center text-white"> Ola, bem vindo(a)</h1>
                <img className="" alt="Logotipo" src="/img/spoti_logo.png" />
  <section className="">
                    <NavLink className="flex justify-around bg-amber-400 hover:bg-yellow-500 m-12 py-2 p-3 min-w-75 max-w-100 h-10 rounded-full shadow-xl" to="/Login">Login
                    </NavLink>
                    <NavLink className="flex justify-around bg-amber-400 hover:bg-yellow-500 m-12 py-2 p-3 min-w-75 max-w-100 h-10 rounded-full shadow-xl " to="/Sign-in">Sign in
                    </NavLink>

                </section>
            </div>

        </body>

    );
};


export default Home;