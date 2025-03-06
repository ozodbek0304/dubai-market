import RootLayout from '@/components/layout/root'
import ServicesPage from '@/components/services/services'
import React from 'react'


function Services() {
  return (
    <RootLayout navbarTheme={true}>
        <ServicesPage />
    </RootLayout>
  )
}

export default Services