import React from 'react'
import Header from '../../components/ui/Header'
import Banner from '../../components/ui/Banner'
import Filter from '../../components/ui/Filter'
import NewsLetter from '../../components/ui/NewsLetter';
import ProductsList from '../../components/shop/ProductsList'

export default function Boys() {
    return (
        <>
        <Header/>
       <main className="boys-collection">
           <Banner title="Boys Collection"/>
           <Filter/>
           <ProductsList/>
           <NewsLetter/>
       </main>
       </>
    )
}