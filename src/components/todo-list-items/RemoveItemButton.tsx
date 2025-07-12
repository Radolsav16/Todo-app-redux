import { ReactElement } from "react";

const RemoveItemButton:React.FC = ():ReactElement =>{
    return (
         <a title="Remove item">
                  <i className="fas fa-times text-primary" />
         </a>
    )
}


export default RemoveItemButton;