import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import {AppProvider} from './context/AppContext';import {PublicLayout} from './components/layout/Layout';
import {Home,About,Services,Gallery,Offers,Contact} from './pages/public/Public';
import Login from './pages/Login';import Guard from './routes/Guard';import Admin from './pages/admin/Admin';import Client from './pages/client/Client';
export default function App(){return <AppProvider><BrowserRouter><Routes>
  <Route element={<PublicLayout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="services" element={<Services/>}/><Route path="gallery" element={<Gallery/>}/><Route path="offers" element={<Offers/>}/><Route path="contact" element={<Contact/>}/></Route>
  <Route path="/login/admin" element={<Login role="admin"/>}/><Route path="/login/client" element={<Login role="client"/>}/>
  <Route path="/admin/*" element={<Guard role="admin"><Admin/></Guard>}/><Route path="/client/*" element={<Guard role="client"><Client/></Guard>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/></Routes></BrowserRouter></AppProvider>}
