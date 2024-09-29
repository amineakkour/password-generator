import {slideSetting, backToDefault} from "./functions";

export default function MoreSettings(){
    return(
        <div id="moreSettings">
            <button id="settingBtn" onClick={slideSetting}>Advanced settings <i id="chevron" className="fa-solid fa-chevron-down"></i></button>

            <div className="settingsContainer">
                <div className="wrapper hide">
                    <small className="grayColor">Ensure that at least one checkbox is selected.</small>
                    <div>
                        <div className="field">
                            <input type="checkbox" id="uppercase" className="checkBox" defaultChecked/>
                            <div className="styledBox"></div>

                            <label htmlFor="uppercase">Uppercase</label>
                        </div>

                        <div className="field">
                            <input type="checkbox" id="lowercase" className="checkBox" defaultChecked/>
                            <div className="styledBox"></div>
                            <label htmlFor="lowercase">Lowercase</label>
                        </div>

                        <div className="field">
                            <input type="checkbox" id="numbers" className="checkBox" defaultChecked/>
                            <div className="styledBox"></div>
                            <label htmlFor="numbers">Numbers</label>
                        </div>

                        <div className="field">
                            <input type="checkbox" id="spch" className="checkBox"/>
                            <div className="styledBox"></div>
                            <label htmlFor="spch">Special Charchers</label>
                        </div>
                    </div>
                    <button id="defaultId" className="grayColor" onClick={backToDefault}>Back to default</button>
                </div>
            </div>

        </div>
    )
}