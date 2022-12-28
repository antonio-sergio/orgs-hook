import Produtores from './componentes/Produtores';
import Topo from './componentes/Topo';

function Home() {
  return (
    <>
    <Produtores topo={Topo}/>
    </>
  );
}


export default Home;