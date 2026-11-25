import { Link } from 'react-router';

function NotFound() {
  return (
    <>
      <title>Página no encontrada | Bodega Florio</title>
      <h1>Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </>
  );
}

export default NotFound;
