import { CircleX } from 'lucide-react';
import {ReactNode} from "react"


// import "./index.scss";
interface IProps{
  type: string
  icon:ReactNode;
  title:string
  description:string;
}

// eslint-disable-next-line no-empty-pattern
const Alert = ({type= "alert-danger",icon,title,description }: IProps) => {
  return (
    
    <div className={type}>
      <div className='alert-header'>
     <div className='title'>
     <span>{icon}</span>
      <h4>{title}</h4>
     </div>
      <CircleX className='close' size={25} />
      </div>
    <p>{description}</p>
    </div>
    
  );
};

export default Alert ;  