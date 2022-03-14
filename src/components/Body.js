import Feed from './Feed';
import Sidebar from './Sidebar';
export default function Body(){
    return(
        <div className="corpo">
            <Feed/>
            <Sidebar/>
        </div>
    );
}