import React from 'react';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { identifier } from '@babel/types';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 


const ShopPage = ({ collections })  => (
    
    <div className='shop-page'>
        <CollectionsOverview />        
    </div>
        );
    



export default ShopPage;