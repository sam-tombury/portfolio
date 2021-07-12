import { ReactElement } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { LinkedIn, GitHub, Email } from 'components/SocialIcons'

export default function Home(): ReactElement {
  return (
    <div className="text-center lg:ml-8 lg:text-left max-w-md mx-auto space-y-4">
      <p className="text-gray-700 text-sm">
        Technology professional with commercial experience as a Lead Developer
        in a fast-paced startup environment. Core technical skills include
        functional Scala, AWS, SQL, and React.
      </p>
      <div>
        <h2 className="text-gray-800 text-lg">Skills</h2>
        <ul className="text-gray-700 text-sm">
          <li>Scala (functional): cats, cats effect, ZIO, doobie, http4s</li>
          <li>AWS: EC2, SES, S3, RDS, Lambda</li>
          <li>TypeScript: React, Next.js, Koa</li>
          <li>Databases: MySQL, PostgreSQL</li>
        </ul>
      </div>
      <div>
        <h2 className="text-gray-800 text-lg">Interests</h2>
        <ul className="text-gray-700 text-sm">
          <li>Functional programming</li>
          <li>Event-driven architecture</li>
          <li>Data engineering</li>
          <li>Provable correctness</li>
        </ul>
      </div>
      <div className="gap-4 flex flex-row justify-center lg:justify-start">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sgjbryan/"
          className="h-8 w-8 text-green-700 hover:text-green-600"
        >
          {LinkedIn}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sgjbryan"
          className="h-8 w-8 text-green-700 hover:text-green-600"
        >
          {GitHub}
        </a>
        <a
          href="mailto:sgjbryan@gmail.com"
          className="h-8 w-8 text-green-700 hover:text-green-600"
        >
          {Email}
        </a>
        <Link href="/hearts">
          <a
            href="https://hearts.sgjbryan.co.uk"
            className="rounded-full bg-green-700 hover:bg-green-600 px-2 inline-flex"
          >
            <p className="uppercase tracking-wide text-gray-100 my-auto text-sm ml-2">
              Hearts
            </p>
            <ChevronRightIcon className="text-gray-100 h-4 my-auto mx-1" />
          </a>
        </Link>
      </div>
    </div>
  )
}
