function Story({image,userName}){
  return(
    <div className="story">
      <div className="imagem">
      <img src={`assets/img/${image}`} />
      </div>
      <div className="usuario">
      {userName}  
      </div>
    </div>

  );
}

export default function Stories(){ 
  const stories = [
    {image:"9gag.svg", userName: "9gag"},
    {image:"meowed.svg", userName:"meowed"},
    {image:"barked.svg", userName:"barked"},
    {image:"nathanwpylestrangeplanet.svg", userName:"nathanwpylestrangeplanet"},
    {image:"wawawicomics.svg", userName:"wawawicomics"},
    {image:"respondeai.svg", userName:"respondeai"},
    {image:"filomoderna.svg", userName:"filomoderna"},
    {image:"memeriagourmet.svg", userName:"memeriagourmet"},
  ];
  
    return(           
      <div className="stories">
        {stories.map((story,index)=> <Story image ={story.image}userName ={story.userName} key ={index}/> )}
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}