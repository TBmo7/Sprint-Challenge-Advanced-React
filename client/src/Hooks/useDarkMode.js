import useLocalStorage from "./useLocalStorage";
import  {useEffect} from "react"

 function useDarkMode(key, initialValues){
    const[ values, setValues] = useLocalStorage( key )
   

    useEffect(()=>{
        
        const element = window.document.body;
        const card = window.document.getElementsByClassName("playerCard")
        // console.log(card);
            if(values === true){
                element.classList.add("dark-mode")
               
                // card.map(item =>  {
                //    let x = item.classList.add("dark-mode")
                //     return x;
                // })

                for(let i =0;i<card.length; i++){
                    card[i].classList.add("dark-mode");
                }
                
                // card.classList.add("dark-mode")
            }
            else{
                element.classList.remove("dark-mode")
                // card.classList.remove("dark-mode")
        }
        },[values]
    );
    return [values, setValues]   
}

export default useDarkMode;