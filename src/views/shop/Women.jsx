import React from 'react'
import Banner from '../../components/ui/Banner'
import Filter from '../../components/ui/Filter'
import NewsLetter from '../../components/ui/NewsLetter'
import ProductsList from '../../components/shop/ProductsList'

export default function Women() {
    return (
       <main className="women-collection">
           <Banner title="Women Collection"/>
           <Filter/>
           <ProductsList/>
           <NewsLetter/>
       </main>
    )
}


