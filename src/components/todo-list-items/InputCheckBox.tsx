import React, { ReactElement } from "react";

type Prop = {
    id:string,
    text:string,
    completed:boolean
}

type onChangeEvent = React.ChangeEventHandler<HTMLInputElement>



const InputCheckBox = ({text,completed}:Prop):ReactElement => {
  const onChange:onChangeEvent = () =>{
    
  }

    return(
         <div className="d-flex align-items-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    aria-label="..."
                    checked = {completed}
                    onChange={onChange}
                  />
                 {text}

        </div>
            
    )
}

export default InputCheckBox;