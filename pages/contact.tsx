// Ref: https://tailwindui.com/components/marketing/sections/contact-sections
import { Dispatch, SetStateAction, useState } from 'react'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'

const FancyDots = ({ className }: { className: string }) => (
  <svg
    className={clsx('absolute transform', className)}
    width={404}
    height={404}
    fill="none"
    viewBox="0 0 404 404"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="85737c0e-0916-41d7-917f-596dc7edfa27"
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
      </pattern>
    </defs>
    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
  </svg>
)

const RegularForm = ({
  agreed,
  setAgreed,
}: {
  agreed: boolean
  setAgreed: Dispatch<SetStateAction<boolean>>
}) => (
  <form
    action="/api/amazon/send-email"
    method="POST"
    className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
  >
    <div className="sm:col-span-2">
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
        Full name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="full-name"
          className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
        Company
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="company"
          id="company"
          autoComplete="organization"
          className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <div className="mt-1">
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          defaultValue={''}
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={clsx(
              agreed ? 'bg-primary-600' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
            )}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className={clsx(
                agreed ? 'translate-x-5' : 'translate-x-0',
                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
        </div>
        <div className="ml-3">
          <p className="text-base text-gray-500">
            By selecting this, you agree to the{' '}
            <a href="#" className="font-medium text-gray-700 underline cursor-not-allowed">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-gray-700 underline cursor-not-allowed">
              Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    <div className="sm:col-span-2">
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        Send
      </button>
    </div>
  </form>
)

const Postcard = () => (
  <form
    action="/api/amazon/send-email"
    method="POST"
    className="grid w-full grid-cols-2 grid-rows-6 p-2 border-2 border-gray-900 divide-x gap-y-6 gap-x-8 h-[26rem]"
  >
    <div className="flex flex-col col-span-1 row-span-full">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="flex-grow block w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        defaultValue={''}
      />
    </div>
    <div className="col-span-1 pl-8 row-span-full">
      <div className={clsx('relative row-span-2', 'h-28')}>
        <button
          type="submit"
          className={clsx(
            'absolute inset-y-0 right-0',
            'w-1/3 h-28',
            'inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
          )}
        >
          Send
        </button>
      </div>
      <div className="row-span-1 py-8"></div>
      <div className="row-span-1">
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
          Full name
        </label>
        <div>
          <input
            type="text"
            name="full-name"
            id="full-name"
            autoComplete="full-name"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="row-span-1">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <div>
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="row-span-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full px-2 py-1 mb-3 border-0 border-b-2 border-gray-300 border-dashed shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="row-span-1 py-4"></div>
    </div>
  </form>
)

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <main>
      <div className="relative max-w-xl mx-auto">
        <FancyDots className="translate-x-1/2 left-full" />
        <FancyDots className="bottom-0 -translate-x-1/2 right-full" />
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Send me a postcard
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            You can just say Hi, or Thanks or share an interesting opportunity.
          </p>
        </div>
        <div className="mt-12 sm:hidden">
          <RegularForm agreed={agreed} setAgreed={setAgreed} />
        </div>
        <div className="hidden mt-12 sm:block">
          <Postcard />
        </div>
      </div>
    </main>
  )
}
