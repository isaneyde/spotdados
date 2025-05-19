

export const Login = () => {
    return(
            <div>
            <h1 className="text-black text-center px-4 py-2 font-bold mb-10 mt-16">Ola, Bem Vindo(a)</h1>
            <div >
                  <img className="mb-20" src="public/img/spoti_logo.png" alt="" />
            </div>
      
      <form action="" className="flex flex-col justify-center justify-items-center gap-15">
        <input className="text-black text-center border-1 rounded-2xl"   type="text" placeholder="user@gmail.com" required />
         <Check size={32}  color="black" weight="fill" />
        <input className="tex-white text-center border-1 rounded-2xl  "    type="password" placeholder="Password" required /> 
     <Eye size={32} color="black" weight="fill" />


        <NavLink className="p-3 rounded-3xl bg-amber-400 font:bold text-center "  type="submit" to="/list-users">Entrar</NavLink>
    
      </form>
      <EnvelopeSimpleIcon size={12} weight="regular" color="black" className="ms-90 -mt-108"/>
      
      <EyeSlashIcon
        size={12}
        weight="regular"
        className="ms-90 mt-35"
        color="black"
      />
    </div>
    </body>
    </>
    
  );
};
