import RootLayout from '@/components/layout/root'
import TravelsPages from '@/components/travel/travels'
import React from 'react'

function TravelPages() {
  return (
    <RootLayout navbarTheme={true}>
        <TravelsPages />
    </RootLayout>
  )
}

export default TravelPages