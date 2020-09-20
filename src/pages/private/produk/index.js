import React from 'react';

import {Switch, Route} from 'react-router-dom';
import EditProduk from './edit';

function Produk(){

    return (
        <switch>
            <Route path="/produk/edit/:produkId" component={EditProduk} />
        </switch>
    )

}

export default Produk;