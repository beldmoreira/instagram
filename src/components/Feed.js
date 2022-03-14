import Stories from "./Stories";
import Posts from "./Posts";

export default function Feed(){
    return (
      <div className="esquerda">
        <Stories/>
        <Posts />
      </div>
    );
}