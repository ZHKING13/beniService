import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import "./user.css";
import Rating from "../../components/Rating";
import UserListe from '../../components/userListe/UserListe';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function User() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/find/" + id);
        setUser(res.data.user)
        console.log(res.data.user)
        console.log("okay ici")

      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  }, [id])

  return (
    <div className='profils '>
      <Topbar />
      <div className="profil" id='user'>
        <div className="profil-image">
          <img src="https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k=" alt=" dado" />
          <Rating className="rating" rating={4} numReviews={2} />

        </div>
        <div className="profil-details">
          <div className="profil-info">
            <h2>{user.name}</h2>
            <h3>15$/heure</h3>

          </div>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore doloribus non pariatur praesentium nihil, neque sequi adipisci eum aspernatur sed possimus consequuntur incidunt quis eaque iste est commodi perrerendis.</p> */}
          {/* <Rating className="rating" rating={4} numReviews={2}/> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore doloribus non pariatur praesentium nihil, neque sequi adipisci eum aspernatur sed possimus consequuntur incidunt quis eaque iste est commodi perrerendis.</p>
          <div className="buton">
            <button className='btn'> Ajouter au favoris</button>
            <button className='btn'>Contacter</button>
          </div>
        </div>
      </div>
      
      <UserListe />
      <Footer />
    </div>
  )
}

export default User