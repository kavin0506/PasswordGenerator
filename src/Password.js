import { useState } from "react";
import "./App.css";
function Password(){
    const[length,setLength]=useState(8);
    const[uppercase,SetUppercase]=useState(true);
    const[lowercase,SetLowercase]=useState(true);
    const[number,SetNumber]=useState(true);
    const[symbol,setSymbol]=useState(true);
    const[generator,setGenerator]=useState("");

    const generate=()=>{
        let charset="";
        if(uppercase)  charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lowercase) charset+="abcdefghijklmnopqrstuvwxyz";
        if(number)charset+="1234567890";
        if(symbol)charset+="!@#$%^&*()_+=";
        // console.log(charset)
        let passwordGenerate="";
        for(let i=0;i<length;i++){
            let randomText=Math.floor(Math.random()*charset.length)
            passwordGenerate+=charset[randomText];
            setGenerator(passwordGenerate)
        }

    }

    const copyPassword=()=>{

        navigator.clipboard.writeText(generator);
        alert("password Copied")


    }
    return(
        <>
        <div className="container">
            <div className="content">
            <h1>Password Generator</h1>
            <div className="inputGroup">
                <label htmlFor="password"> Password Length:</label>
                <input type="number" id="password" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
                </div>
                    <div className="checkboxGroup">
                    <input type="checkbox" id="uppercase" checked={uppercase} onChange={(e)=>SetUppercase(e.target.checked)}/>
                        <label htmlFor="uppercase">Include Uppercase</label>

                    </div>
                    <div className="checkboxGroup">
                    <input type="checkbox" id="uplowercase" checked={lowercase} onChange={(e)=>SetLowercase(e.target.checked)}/>
                        <label htmlFor="lowercase">Include lowercase</label>

                    </div>
                    <div className="checkboxGroup">
                    <input type="checkbox" id="number" checked={number} onChange={(e)=>SetNumber(e.target.checked)}/>
                        <label htmlFor="number">Include Number</label>
                        
                       </div>
                       <div className="checkboxGroup">
                       <input type="checkbox" id="symbol " checked={symbol} onChange={(e)=>setSymbol(e.target.checked)}/>
                        <label htmlFor="symbol">Include Symbol</label>
                        
                        </div>
                        
                       
                            <div className="genBtn" >
                                <button onClick={generate}>Generator Password</button>

                            </div>
                        <div className="copyText">
                      
                            <input type="text" readOnly value={generator}/>
                            <button onClick={copyPassword}>Copy</button>

                        </div>

           



            </div>
            

        </div>
        </>
    )
}
export default Password;