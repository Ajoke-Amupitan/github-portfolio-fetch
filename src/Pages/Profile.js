import { useState, useEffect } from 'react';
import Link from '../components/Link';
import './Profile.css';
import List from '../components/List';

function Profile({ userName }) {
  
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(
        `https://api.github.com/users/${userName}`);
      const result = await profile.json();
   console.log(result);
     if (result) {
    setProfile(result);
     setLoading(false);
    }
    }
    fetchData();
  }, [userName]);

  const items = [

    {
     field: 'Username', value: profile.login
     
    },
  
     {
       field: 'Repos',
        value: <Link url={profile.repos_url}
           title={profile.repos_url} />,
     },
  
      {
        field: 'Profile url',
       value: <Link url={profile.html_url} 
            title={profile.html_url} />,
     },
  
     {
       field: 'Date created', value: profile.created_at
      },
    ];

  return (
    <div className='Profile-container'>
        <h2>About me</h2>
      {loading ? (
            <span>Loading...</span>
      ) : (
        <div>
        <img
        className='Profile-avatar'
        src={profile.avatar_url}
        alt={profile.login}
        />
        <List items={items} />  
</div>
       

        )}
      

    </div>
   );
}
export default Profile;