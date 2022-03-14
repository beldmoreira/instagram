function UserSuggestions({image,userName,followingOrNot}){
  return(
<div class="sugestao">
    <div class="usuario">
      <img src={`assets/img/${image}`}/>
      <div class="texto">
        <div class="nome">{userName}</div>
        <div class="razao">{followingOrNot}</div>
      </div>
    </div>
    <div class="seguir">Seguir</div>
</div>
  );
}

export default function Suggestions(){
  const suggestions = [
    {image:"bad.vibes.memes.svg",userName: "bad.vibes.memes",followingOrNot:"Segue você"},
    {image:"chibirdart.svg",userName: "chibirdart",followingOrNot:"Segue você"},
    {image:"razoesparaacreditar.svg",userName: "razoesparaacreditar",followingOrNot:"Novo no Instagram"},
    {image:"adorable_animals.svg",userName: "adorable_animals",followingOrNot:"Segue você"},
    {image:"smallcutecats.svg",userName: "smallcutecats",followingOrNot:"Segue você"},
  ]

return(
<div class="sugestoes">
  <div class="titulo">
    Sugestões para você
    <div>Ver tudo</div>
  </div> 
  {suggestions.map((suggestion) => <UserSuggestions image ={suggestion.image} userName = {suggestion.userName} followingOrNot = {suggestion.followingOrNot}/>)}
</div>
);
}