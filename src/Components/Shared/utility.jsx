import { AiOutlinePlusSquare } from "react-icons/ai"; 
import { MdSupervisorAccount } from "react-icons/md"; 
import { GrContact } from "react-icons/gr"; 
import { MdProductionQuantityLimits } from "react-icons/md"; 
import { BiHomeAlt2 } from "react-icons/bi"; 
export const sideBarItems = [
    {
      label: "Home",
      icon: <BiHomeAlt2 />,
      link: "/",
    },
    {
      label: "All Products",
      icon: <MdProductionQuantityLimits />,
      link: "/products",
    },
    { label: "Contact", icon: <GrContact /> , link: "/contact" },
    {
      label: "Sign In",
      icon: <MdSupervisorAccount />,
      link: "/signin",
    },
    {
      label: "Sign Up",
      icon: <AiOutlinePlusSquare />,
      link: "/signup",
    },
    
  ];