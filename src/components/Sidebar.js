import User from "./User";
import Suggestions from "./Suggestions";
import Footer from "./Footer";

export default function Sidebar(){
  const user = {

    image: "catanacomics.svg",
    
    loginUser: "catanacomics",
    
    signInName: "Catana"
    
    }
return(
<div className="sidebar">
  <User image = {user.image} loginUser = {user.loginUser} signInName = {user.signInName}/>
  <Suggestions/>
  <Footer/>
</div>
);
}