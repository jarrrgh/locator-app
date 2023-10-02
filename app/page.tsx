import { Backdrop, CustomFilter, Hero, SearchBar } from '@/components'
import LocationCard from '@/components/LocationCard'
import { calculateDistance, fetchLocations } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const myLat = 0.0
  const myLon = 0.0

  let locations = await fetchLocations() || []
  console.log(locations)

  locations = locations.map((location) => {
    const distance = calculateDistance(myLat, myLon, location.lat, location.long)
    return { ...location, distance }
  })

  // Sort by distance in ascending order
  // @ts-ignore
  locations.sort((a, b) => b.distance - a.distance)

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-2">
    <main className="overflow-hidden">
      <Backdrop />

      <div className="overflow-hidden m-6 border backdrop-blur-sm border-blue-300 hover:border-amber-400 shadow rounded-2xl p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-40 w-40 -ml-16 -mt-8 -mb-8"></div>
          <div className="flex-1 space-y-8 py-1">
            <div className="h-3 bg-slate-700 rounded-full"></div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-slate-700 rounded-full col-span-2"></div>
                <div className="h-3 bg-slate-700 rounded-full col-span-1"></div>
              </div>
              <div className="h-3 bg-slate-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="distance" />
            <CustomFilter title="alphabetical" />
          </div>
        </div>
        {
          locations.length > 0 ? (
            <section>
              <div className="home__locations-wrapper">
                {locations.map((location) => <LocationCard location={location} />)}
              </div>
            </section>
          ) : (
            <div>
              <h2>Oops, could not fetch locations...</h2>
              <p></p>
            </div>
          )
        }
      </div> */}
    </main>
  )
}
