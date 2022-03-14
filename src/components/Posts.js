function UserPosts({postPhoto, user:{userImage,userName}, followersInteractions:{followerImage,followerUserName, numberOfLikes}}){
  return(
    <div className="post">
    <div className="topo">
      <div className="usuario">
        <img src={`assets/img/${userImage}`}/>
        {userName}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div className="conteudo">
      <img src={`assets/img/${postPhoto}`}/>
    </div>

    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img src={`assets/img/${followerImage}`} />
        <div className="texto">
          Curtido por <strong>{followerUserName}</strong> e <strong>outras{numberOfLikes} pessoas</strong>
        </div>
      </div>
    </div>
  </div>         

  );
}

export default function Posts(){
  const posts  = [
    {
      user: {
        userName: "meowed",
        userImage: "meowed.svg",
      },
      postPhoto: "gato-telefone.svg",
      followersInteractions: {
        followerUserName: "respondeai",
        followerImage: "respondeai.svg",
        numberOfLikes: "101.523"
      }
    },
    {
      user: {
        userName: "barked",
        userImage: "barked.svg",
      },
      postPhoto: "dog.svg",
      followersInteractions: {
        followerUserName: "adorable_animals",
        followerImage: "adorable_animals.svg",
        numberOfLikes: "99.159"
      }
    },
  ]
    return(
        <div className="posts">
          {posts.map((post,index)=> <UserPosts user={post.user} postPhoto={post.postPhoto} followersInteractions ={post.followersInteractions} key = {index}/>)}
        </div>
      );
}