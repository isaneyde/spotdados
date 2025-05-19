import { Footer } from "../components/footer";
export const Home = () => {
    return (
        <body className="py-10 bg-black text-black font-bold">
        <div>
            <h1 className="text-2xl text-center text-white"> Ola, bem vindo(a)</h1>
           <img className="" alt="Logotipo"src="public/img/spoti_logo.png" />
        
<section>
    <button className="bg-amber-400 m-10 p-4 w-2xs rounded-full shadow-md">Login</button>
    <button className="bg-amber-400 m-10 p-4 w-2xs rounded-full shadow-md">Criar Conta</button>
</section> 
        </div>

         </body>
    
    );
};


export default Home;
