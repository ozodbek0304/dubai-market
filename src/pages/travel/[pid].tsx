import RootLayout from '@/components/layout/root'
import TravelsDetailsPages from '@/components/travel/travels-details'
import React from 'react'

function TravelDetails() {
    return (
        <RootLayout navbarTheme={true}>
            <TravelsDetailsPages />
        </RootLayout>
    )
}

export default TravelDetails