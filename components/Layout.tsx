//Use img element over next/Image to allow for simple static export
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { ReactElement } from 'react'

interface Props {
  children: React.ReactNode
}

//TODO: pages for short posts on interests (type theory, provability, event-driven systems and data streaming, functional effect systems)
export default function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <Head>
        <title>Sam Bryan</title>
        <meta name="description" content="Sam Bryan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <div className="grid grid-rows-5 lg:grid-rows-none lg:grid-cols-5 min-h-screen">
          <div className="bg-green-700 row-span-2 lg:row-auto lg:col-span-2 h-full flex flex-col justify-center p-4">
            <div className="h-36 w-36 relative mx-auto rounded-full bg-gray-200 shadow">
              <div className="absolute inset-2">
                <img
                  src={'/me.jpeg'}
                  alt="A profile picture of Sam"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-gray-200 text-center mt-4">
              Sam Bryan
            </h1>
          </div>
          <div className="bg-gray-50 shadow-xl row-span-3 lg:row-auto lg:col-span-3 h-full flex flex-col lg:justify-center p-4">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
