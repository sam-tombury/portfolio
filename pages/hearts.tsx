import { ReactElement } from 'react'
import { ChevronLeftIcon, HeartIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const playUrl = 'https://hearts.sgjbryan.co.uk'
const gitHubBaseUrl = 'https://github.com/sgjbryan'
const serverRepoUrl = `${gitHubBaseUrl}/hearts-api`
const clientRepoUrl = `${gitHubBaseUrl}/hearts-client`
const monorepoRepoUrl = `${gitHubBaseUrl}/hearts-monorepo`

export default function Home(): ReactElement {
  return (
    <div className="text-center lg:ml-8 lg:text-left max-w-md mx-auto space-y-4">
      <div>
        <h2 className="text-gray-800 text-lg lg:text-xl">Hearts</h2>
        <p className="text-gray-700 text-sm">
          An implementation of the classic card game using finite state machines
        </p>
        <a
          href={playUrl}
          className="rounded-full bg-green-700 hover:bg-green-600 px-2 inline-flex h-8 mt-2"
        >
          <p className="uppercase tracking-wide text-gray-100 my-auto text-sm ml-2">
            Play now
          </p>
          <HeartIcon className="text-gray-100 h-4 my-auto mx-1" />
        </a>
      </div>
      <div>
        <h2 className="mb-1 text-gray-800 text-lg lg:text-xl">Technologies</h2>
        <p className="text-gray-800 text-sm">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={serverRepoUrl}
            className="font-semibold text-green-700 hover:text-green-600 underline"
          >
            Server
          </a>
          : Scala, Akka, http4s, ZIO (cats interop), circe, Docker
        </p>
        <p className="text-gray-800 text-sm">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={clientRepoUrl}
            className="font-semibold text-green-700 hover:text-green-600 underline"
          >
            Client
          </a>
          : Svelte
        </p>
      </div>
      <div>
        <h2 className="mt-4 text-gray-800 text-lg lg:text-xl">Future work</h2>
        <p className="mt-2 text-sm text-gray-800">
          The project offers a familiar place to try out new frameworks and
          technologies. Most recently, I have started implementing a{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={monorepoRepoUrl}
            className="font-semibold text-green-700 hover:text-green-600 underline"
          >
            Scala monorepo
          </a>
          , giving me an opportunity to investigate the ZIO ecosystem (including
          ZIO Http) and Scala.js (including Laminar).
        </p>
      </div>
      <div className="my-4 gap-4 flex flex-row justify-center lg:justify-start">
        <Link href="/">
          <a className="rounded-full bg-green-700 hover:bg-green-600 px-2 inline-flex h-8">
            <ChevronLeftIcon className="text-gray-100 h-4 my-auto mx-1" />
            <p className="uppercase tracking-wide text-gray-100 my-auto text-sm mr-2">
              Home
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}
