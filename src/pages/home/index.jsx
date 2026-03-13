
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router";

function Home () {

    const navigate = useNavigate();

    return (
     <div className= 'containerHome'>
        <div className='containerCards'>
          <h1>Aula de React com Vite JS</h1>

           <button
               onClick= {() =>navigate('/exeplo/1')}
            >
              Exemplo 1
           </button>

           <Link to= "/exemplo/2">Exemplo 2</Link>

           </div>
           
        </div>
    )
}

export default Home;
