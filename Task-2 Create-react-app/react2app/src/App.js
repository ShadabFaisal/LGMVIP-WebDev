import React,{useState} from 'react'
import "./Components/Appstyles.css";
import Instagram from "./Components/Instagram.png"
import GitHubMark from "./Components/GitHubMark.png"
import Linkedin from "./Components/Linkedin.png"


function App() {
  const [isGetData, setisGetData] = useState(false);

  const [Users, setUsers] = useState([]);
  const [isBtnClicked, setisBtnClicked] = useState(false);

  const User_Card_Fetch = async () => {
    setisBtnClicked(true);

    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);

    setInterval(() => {
      setisGetData(true);
    }, 3000);
  };
return (
   <div className="AppDisplay">
   <div>
   <nav className="navbar-main">
        <div className="page-logo">
         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4341077849959.5c938e37081b5.png" alt="brand logo" height="80px" width="120px"/>   
        </div>
        <div className="navbar-navigate-links">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

        </div>
        <div className="button-container">
            <button className="get-user-btn" onClick={User_Card_Fetch}> Get Users</button>
        </div>
    </nav>
    <section className="hero-page-container">
    <div className="bg-img-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtVc5BvO0lmrJaCzgLC3ZiuAnBSGPPRWS_OdBqMrQs1eFHq02qa5-cgRf5uUPOtIT7qM&usqp=CAU" alt="Background "/>
    </div>
    <div className="intro-page-welcome">
        <p>Welcome to the World of<h2>React</h2><img src="https://3ulsmb4eg8vz37c0vz2si64j-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/react-native-UX-design.gif" height="100" width="160"></img></p>
        <h1>Grab the Opportunity and Learn Something New!!!!</h1>
        </div>
        </section>
      </div>
      
   
 {
   isBtnClicked ? 
   (
        isGetData ? 
        (
          <div className="User-Card-Section">
               <h2>List of React Users....</h2>
          <div className="Display_Card_grid">
            {
              Users.map (({ id, first_name, last_name, avatar, email }) => 
              {
              return (
                <div className="Card_Container">
                  <div className="Profile_Picture">
                    <img src={avatar} alt="profile"></img>
                  </div>
        
                  <div className="User_info">
                    <h3>{first_name} {last_name}</h3>
                    <p>{email}</p>
                  </div>
                  <div className="follow_text"><h5>Follow Me:</h5></div>
                  
                  <div className="Social_Media">
                  <a href="https://www.instagram.com"><img  src={Instagram} alt="instagram"></img></a>
                  <a href="https://www.linkedin.com"><img  src={Linkedin} alt="linkedin"></img></a>
                  <a href="https://www.github.com"><img  src={GitHubMark} alt="github"></img></a>
                </div>
              </div>
              );
            })}
          </div>
          </div>
        ) : 
        (
          <div className="fetch_Data">Fetching User Data for You...<br/>Wait a little!!!</div>
        )
      ) :
       (
        <> </>
      )
} 
</div>)
 
};

export default App;



