import React from 'react'
import Header from '../../components/ui/Header'
import Banner from '../../components/ui/Banner'
import Filter from '../../components/ui/Filter'
import NewsLetter from '../../components/ui/NewsLetter';
import ProductsList from '../../components/shop/ProductsList'

export default function Girls() {
    return (
        <>
        <Header/>
       <main className="girls-collection">
           <Banner title="Girls Collection"/>
           <Filter/>
           <ProductsList/>
           <NewsLetter/>
       </main>
       </>
    )
}