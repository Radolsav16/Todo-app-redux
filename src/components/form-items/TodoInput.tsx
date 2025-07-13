import React, { ReactElement } from "react";

type Props = {
  text:string,
  setText:(val:string) => void
}

const TodoInput:React.FC<Props> = ({setText,text}):ReactElement =>{

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value)


    return(
          <div data-mdb-input-init="" className="form-outline flex-fill">
                <input
                  type="text"
                  id="form3"
                  className="form-control form-control-lg"
                  onChange={onChange}
                  value={text}
                />
                <label className="form-label" htmlFor="form3">
                  What do you need to do today?
                </label>
        </div>
    )
}



export default TodoInput;
