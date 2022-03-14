function Story({image,userName}){
  return(
    <div class="story">
      <div class="imagem">
      <img src={`assets/img/${image}`} />
      </div>
      <div class="usuario">
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
      <div class="stories">
        {stories.map((story)=> <Story image ={story.image}userName ={story.userName}/> )}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}