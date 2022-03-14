export default function User({loginUser,image,signInName}){
return(
<div class="usuario">
  <img src={`assets/img/${image}`}/>
  <div class="texto">
    <strong>{loginUser}</strong>
    {signInName}
  </div>
</div>
);
}