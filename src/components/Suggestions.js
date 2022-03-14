function UserSuggestions({image,userName,followingOrNot}){
  return(
<div className="sugestao">
    <div className="usuario">
      <img src={`assets/img/${image}`}/>
      <div className="texto">
        <div className="nome">{userName}</div>
        <div className="razao">{followingOrNot}</div>
      </div>
    </div>
    <div className="seguir">Seguir</div>
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
<div className="sugestoes">
  <div className="titulo">
    Sugestões para você
    <div>Ver tudo</div>
  </div> 
  {suggestions.map((suggestion,index) => <UserSuggestions image ={suggestion.image} userName = {suggestion.userName} followingOrNot = {suggestion.followingOrNot} key={index}/>)}
</div>
);
}