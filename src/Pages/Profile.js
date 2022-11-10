import { useState, useEffect } from 'react';
// import Link from '../components/Link';
// import './Profile.css';

function Profile({ userName }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(
        `https://api.github.com/users/${userName}`);
      const result = await profile.json();
    // console.log(profile);
     if (result) {
    setProfile(result);
     setLoading(false);
    }
    }
    fetchData();
  }, [userName]);
  return (
    <div className='Profile-container'>
        <h2>About me</h2>
      {loading ? (
            <span>Loading...</span>
      ) : (
        
       <ul>
       <li><span>avatar_url: </span>
            {profile.avatar_url}</li>

        <li><span>name: </span> 
            {profile.login}</li>
       </ul>

        )}
      

    </div>
   );
}
export default Profile;