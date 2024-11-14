import { createContext , useContext , useEffect , useState } from "react";

const animationContext = createContext();

export const useAnimation = ()=>{
  return useContext(animationContext);
}

export const AnimationProvider = ({children})=>{
  const [animation , setAnimation] = useState(false);
  useEffect (()=>{
    setAnimation(true);
  } , []);

  return (
    <animationContext.Provider value={{animation , setAnimation}}>
      {children}
    </animationContext.Provider>
  )
}