import React, { ReactElement } from "react";


const NeedText:React.FC = ():ReactElement =>{
    return(
          <div data-mdb-input-init="" className="form-outline flex-fill">
                <input
                  type="text"
                  id="form3"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form3">
                  What do you need to do today?
                </label>
        </div>
    )
}



export default NeedText
