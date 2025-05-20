
import { NavLink } from "react-router-dom";
import { EyeSlashIcon } from "@phosphor-icons/react";
import { useState } from "react";
const style = "border-1 rounded-3xl py-0 px-4 text-center bg-white min-w-75 max-w-100 h-10";
export const Sign = () => {
//States for the input fields
    const [name,setName]=useState("");
    const [nickname,setNickname]=useState("");
    const [dateBirth,setDateBirth]=useState("");
    const [country,setCountry]=useState("");
    const [password,setPassword]=useState("");

//Function to call when the submit button is clicked
    const validateFields=()=>{
if (name==="" && dateBirth==="" && country==="" && password==="") {
    alert("Please, fill these fields!");
}else{
    alert("User registered successfully");
}
    }
    return (
        <>
            <div className="min-h-screen  py-20 bg-[url(./img/background.png)] bg-black">
                <div className="w-250px h-185px  mb-10 -mt-10">
                    <img src="/img/spoti_logo.png" alt="spotdados logo" />
                </div>
                <main>
<form action="" className="flex flex-col justify-center items-center gap-10">
                    <input required className={style} type="text" placeholder="Full name" value={name} onChange={(event)=>setName(event.target.value)}/>

                    <input className={style} type="text" placeholder="Nickname" value={nickname} onChange={(event)=>setNickname(event.target.value)} />

                    <input required className={style} type="date" placeholder="date of birth" value={dateBirth} onChange={(event)=>setDateBirth(event.target.value)}/>

                    <input required className={style} type="text" placeholder="Country" value={country} onChange={(event)=>setCountry(event.target.value)}/>

                    <input required className={style} type="password" placeholder="Password" name="password" hidden maxLength={8} minLength={4} value={password} onChange={(event)=>setPassword(event.target.value)} />

                    <NavLink type="submit" onClick={validateFields} className="p-3 rounded-3xl bg-amber-400 font-bold text-center w-75 mb-15" to="/sign-in"> Sign in</NavLink>
                </form>
                <EyeSlashIcon size={18} weight="fill" className="ml-78 -mt-44" />
                </main>
                
            </div>
</>
    )
}
