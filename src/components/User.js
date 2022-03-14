export default function User({loginUser,image,signInName}){
return(
<div className="usuario">
  <img src={`assets/img/${image}`}/>
  <div className="texto">
    <strong>{loginUser}</strong>
    {signInName}
  </div>
</div>
);
}