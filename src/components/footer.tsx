import { CaretLeftIcon, CaretRightIcon, HouseIcon } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"


 export const Footer = () => {
  return (
    <footer className=" bg-black flex justify-between items-center p-4 ">
      <NavLink to="../login.tsx">
        <CaretLeftIcon className="h-6 w-6 text-white" />
      </NavLink>
      <HouseIcon className="h-6 w-6 text-white w-fill" />

      <NavLink to="../pages/list-music.tsx">
        <CaretRightIcon className="h-6 w-6 text-white" />
      </NavLink>
    </footer>
  )
}


