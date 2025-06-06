import { Route } from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';
import Registrarse from './views/Registrarse';
import Cuentas from './views/Cuentas';
import Presupuesto from './views/Presupuesto';
import Categorias from './views/Categorias';
import CategoriaBanco from './views/CategoriaBanco';

const routes = [
  { path: '/', element: <Login /> },
  { path: '/home', element: <Home /> },
  { path: '/register/:username?', element: <Registrarse /> },
  { path: '/cuentas', element: <Cuentas /> },
  { path: '/presupuesto', element: <Presupuesto /> },
  { path: '/categorias', element: <Categorias /> },
  { path: '/categoriaBanco', element: <CategoriaBanco /> }
];

export default routes;