export  interface Todo {
  text: string;
  completed: boolean;
}


export type Prop = {
    id:string,
    text:string,
    completed:boolean
}


export type CheckProp = {
    id:string,
    text:string,
    isCompleted:boolean,
    setCompleted:(val:boolean) => void;
}
