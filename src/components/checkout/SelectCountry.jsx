import React from 'react'

export default function SelectCountry() {
    return (
        <>
            <CountryDropdown
                defaultOptionLabel="Country"
                value={country}
                onChange={selectCountry} 
            />
            <RegionDropdown
                blankOptionLabel="No country selected, man."
                defaultOptionLabel="Now select a region, pal."
                country={country}
                value={region}
                onChange={selectRegion} 
            />
        </>
    )
}
