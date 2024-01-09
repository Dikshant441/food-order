//  To check online status 
// return some boolean value

import { useState , useEffect } from "react";
const useOnlineStatus = () => {
    const [onlineStatus , setOnlinestatus] = useState(true);
    
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlinestatus(false);
        });
        window.addEventListener("online", () => {
            setOnlinestatus(true);
        });
    }, [] );
  return onlineStatus;
}

export default useOnlineStatus;
