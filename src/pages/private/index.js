import React from 'react';
import {Switch, Route , Redirect} from 'react-router-dom';

import Pengaturan from './pengaturan';
import Produk from './produk';
import Transaksi from './transaksi' 
import Home from './home';

function Private(){

    return (
        <switch>
            <Route path="/transaksi" component={Transaksi} />
            <Route path="/produk" component={Produk} />
            <Route path="/pengaturan" component={Pengaturan} />
            <Route component={Home} />

        </switch>
    )
}

export default Private;