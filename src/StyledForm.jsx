import  Button  from './Button';
import { Hello, HelloWithoutJSX } from './Hello';
import {Greeting} from "./Greeting";
import {CardWrapper} from './CardWrapper';
import { UserDetails } from './UserDetails';
import {ProductList} from './ProductList';
import { NameList } from './NameList';
import "./App.css";

function App() {
  return(
    <div>
      <NameList/> 
      <ProductList
      name="Laptop"
      Price="999"
      />
      <UserDetails 
      name="Bruce Wayne" 
      isOnline={true} 
      isPremium={true}
       isNewUser={true}
        role="admin"
      />
     
      <UserDetails 
      name="Clark Kent" 
      isOnline={false} 
      hideOffline={true} 
      role="vip"
       />
      <CardWrapper title="UserProfile">
      <p>Bruce Wayne</p>
      <p>batman@jl.com</p>
      <button>Edit profile</button>
     </CardWrapper>
     
     <Greeting name="Bruce" message="Good morning"/>
     <Greeting name="Clark"/>
     <Greeting message="Welcome"/>
     <Greeting />

     
     
      <Hello />
      <HelloWithoutJSX/>
      <Button />
    </div>
  );
}

export default App
