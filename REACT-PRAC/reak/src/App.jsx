import logo from './logo.jpg';
import anopic from './anopic.jpg';
import './style.css';

function Pic({pic}){
  if(pic!=null){
    return(
      <img src={pic} className="pix" alt="piccc"/>
    )
  }else{
    return(
      <></>
    )
  }
}

function Rows({left, right, lpics, rpics}){
  return(
    <div className="row">
        <div className="col left">
          <Pic pic={lpics}/>
          <h1>
            {left}
          </h1>
        </div>
        <div className="col right">
          <Pic pic={rpics}/>
          <h1>
            {right}
          </h1>
        </div>
    </div>
  )
}

let s = ["durino", "zeus"];

function Clone(){
  return(
    <body>
      <div className="wrap">
        
          <Rows left="WADADA" right={s[1]} lpics={logo} />
          <Rows left={s[0]} right={s[1]} rpics={anopic}/>
          <Rows left="AYO" right=" OA"/>
          <Rows />
        
      </div>
    </body>
  )
}

export default Clone;
