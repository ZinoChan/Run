import React from 'react'
import Filter from '../../components/ui/Filter';
import ProductsList from '../../components/shop/ProductsList';
import NewsLetter from '../../components/ui/NewsLetter';
import Banner from '../../components/ui/Banner';

export default function NewArrivals() {
    return (
        <main id="new-arrivals">
            <Banner title="New Arrivals"/>
            <Filter/>
            <ProductsList/>
            <NewsLetter/>
        </main>
    )
}
