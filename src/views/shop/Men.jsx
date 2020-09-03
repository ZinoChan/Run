import React from 'react'
import Header from '../../components/ui/Header'
import Banner from '../../components/ui/Banner'
import Filter from '../../components/ui/Filter'
import NewsLetter from '../../components/ui/NewsLetter'
import ProductsList from '../../components/shop/ProductsList'

export default function Men() {
    return (
        <>
        <Header/>
       <main className="men-collection">
           <Banner title="Men Collection"/>
           <Filter/>
           <ProductsList/>
           <NewsLetter/>
       </main>
       </>
    )
}
