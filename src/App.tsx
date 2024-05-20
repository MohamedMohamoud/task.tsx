import Alert from "./components/ui/Alert/Alert";
import {MessageCircleX  } from 'lucide-react';
import "./components/ui/Alert/index.scss"

  const App = () => {

  return (
    <div style={{margin: "2rem"}}>
   
     <Alert 
     type={ "alert-error"} icon={<MessageCircleX size={19} />}title={"sometime"}
     description ="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" 
      />
     <Alert 
     type={ "alert-warning"} icon={<MessageCircleX size={19} />}title={"sometime"}
     description ="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" 
      />
     <Alert 
     type={ "alert-info"} icon={<MessageCircleX size={19} />}title={"sometime"}
     description ="lorem lorem lorem lorem lorem lorem lorem lorem lorem zlold lorem lorem" 
      />
        <Alert 
     type={ "alert-success"} icon={<MessageCircleX size={19} />}title={"sometime"}
     description ="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" 
      />
    </div>
    
    
    
  );
  
  };


export default App
