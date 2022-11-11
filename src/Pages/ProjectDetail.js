import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from '../components/List';
import Link from '../components/Link';
// import { Link as RouterLink} from 'react-router-dom';
function Project({ userName }) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://api.github.com/repos/${userName}/${name}`,
      );
      const result = await data.json();
            if (result) {
        setProject(result);
        setLoading(false);
      }
    }
    if (userName && name) {
      fetchData();
    }
  }, [userName, name]);

  
  const items = [
    {
        field: 'Forks', value: project.forks_count
    },

    {
        field: 'Date created',
        value: project.created_at
    },
   
  ];

  console.log(items);
  return (
    <div className='Project-container'>
      <h2>Repository: {project.name}</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
             <List items={items} /> 
        </div>
      )}
    </div>
  );
}
export default Project;