import { ReactElement } from "react";

const RemoveItemButton:React.FC = ():ReactElement =>{
    return (
         <a className="remove-btn" title="Remove item">
                  <i className="fas fa-times text-primary" />
         </a>
    )
}


export default RemoveItemButton;