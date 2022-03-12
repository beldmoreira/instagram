import User from './User';
import Suggestions from "./Suggestions";
import Footer from "./Footer";

export default function Sidebar(){
return(
<div class="sidebar">
  <User/>
  <Suggestions/>
  <Footer/>
</div>
);
}