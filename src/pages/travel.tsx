import RootLayout from '@/components/layout/root'
import TravelsPages from '@/components/travel/travels'
import React from 'react'

type Props = {}

function TravelPages({}: Props) {
  return (
    <RootLayout navbarTheme={true}>
        <TravelsPages />
    </RootLayout>
  )
}

export default TravelPages