import React from 'react';
import { Route } from 'react-router-dom';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { identifier } from '@babel/types';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 
import CollectionPage from '../Collection/collection.component';


const ShopPage = ({ match })  => (
    
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />       
    </div>
        );
    



export default ShopPage;