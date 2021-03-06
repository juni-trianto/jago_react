import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

// komponen halaman
import Registrasi from './pages/registrasi';
import Login from  './pages/login';
import LupaPassword from './pages/lupa-password';
import NotFound from './pages/404';
import Private from './pages/private';
import PrivateRoute from './component/PrivateRoute';

//firebase provider
import FirebaseProvider from './component/FirebaseProvider';


function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Private} />
          <PrivateRoute path="/transaksi" component={Private} />
          <PrivateRoute path="/produk" component={Private} />
          <PrivateRoute path="/pengaturan" component={Private} />
          <Route path="/registrasi" component={Registrasi} />
          <Route path="/login" component={Login} />
          <Route path="/lupa-password" component={LupaPassword} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
