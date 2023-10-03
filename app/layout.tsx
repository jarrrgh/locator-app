import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { LocationProvider } from '@/context/LocationContext'

export const metadata: Metadata = {
    title: 'Locator',
    description: 'TODO: Description goes here...',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body>
                {/* <Navbar /> */}
                <LocationProvider>
                    {children}
                </LocationProvider>
                {/* <Footer /> */}
            </body>
        </html>
    )
}
