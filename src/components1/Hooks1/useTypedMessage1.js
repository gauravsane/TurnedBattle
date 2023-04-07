import { useEffect, useState } from "react";
import {wait} from "../Shared1";
export const useTypedMessage1 = message =>{
    const[typedMessage,setTypedMessage] = useState('');    
    
//used IIF(immediate invoked function) function = that allows us to create a function and execute immediately.
//async makes a function return a Promise

//await makes a function wait for a Promise

    useEffect(() =>{
        setTypedMessage('');

        if (message.length) {
            (async () => {
              let visibleMessage = '';
              for (let i = 0; i < message.length; i++) {
                await wait(25);
      
                visibleMessage = visibleMessage + message[i];
      
                setTypedMessage(visibleMessage);
              }
            })();
          }
    },  [message]);

    return typedMessage;
}