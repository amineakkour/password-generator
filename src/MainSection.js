import  {slideSetting, backToDefault, generatePassword} from "./functions";

export default function MainSection(){
    function copyToClipBoard() {
        var passwordEl = document.querySelector("#passwordValue");
    
        if(passwordEl.placeholder.substring(0, 5) == "Error"){
            passwordEl.value = "";
            passwordEl.placeholder = "Error: The password cannot be copied due to an error."
        }
    
        
        if(passwordEl.value === ""){
            alert("Please click on Generate Button to generate a password");
        }else{
            navigator.clipboard.writeText(passwordEl.value);
            alert("Congrats! The password has been coppied");
        }
    }

    return (
        <div id="mainSection">
            <input type="text" id="passwordValue" placeholder="The password will be generated here" disabled={true}/>
            <input type="text" id="length" placeholder="Length" defaultValue={10}/>
            <input type="button" value="copy" id="coppyBtn" onClick={copyToClipBoard}/>
            <input type="submit" id="submite" value="Generate" onClick={generatePassword}/>
        </div>
    )
}

