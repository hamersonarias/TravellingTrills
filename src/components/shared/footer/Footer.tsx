import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {ASSETS} from '../../../../public/Assets'
function Footer() {
  return (
   <footer className="bg-gray-100">
  <div className="max-w-screen-xl px-4 pt-8 pb-5 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <Image
        src={ASSETS.logo}
        alt="logo"
        height={120}
        width={120}
        className="mr-5" 
        />
        <p className="max-w-xs mt-4 text-sm text-gray-600">
        We help to find your dream place and turning your travel dreams into reality.
        </p>
        <div className="flex mt-8 space-x-6 text-gray-600">
          <Link href="https://www.facebook.com/profile.php?id=100086295243570" className="hover:opacity-75"  target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="https://twitter.com/saifurrehmanpro" className="hover:opacity-75" target="_blank" rel="noreferrer">
            <span className="sr-only"> Twitter </span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link href="https://github.com/Saif-Arshad" className="hover:opacity-75" target="_blank" rel="noreferrer">
            <span className="sr-only"> GitHub </span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
  
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-medium">
            Company
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link href={"/"} className="hover:opacity-75" > Home </Link>
            <Link href={"/about-us"}  className="hover:opacity-75"> About-Us </Link>
            <Link href={"/blog"} className="hover:opacity-75" > Latest Blogs </Link>
            <Link href={"/trip-planner"}  className="hover:opacity-75" > Tour Planner </Link>
          </nav>
        </div>
   
        <div>
          <p className="font-medium">
            Helpful Links
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link href={"/contact-us"}  className="hover:opacity-75" > Contact-Us </Link>
            <Link href={"/book-now"}  className="hover:opacity-75" > Booking </Link>
            <Link href={"/about-us"}  className="hover:opacity-75" >Complain</Link>
          </nav>
        </div>
        <div>
          <p className="font-medium">
            Legal
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link href={"/privacy"}  className="hover:opacity-75" > Privacy Policy </Link>
            <Link href={"/privacy"}  className="hover:opacity-75" > Terms &amp; Conditions </Link>
          </nav>
        </div>
        <div>
          <p className="font-medium">
            Contact Information
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <p className="hover:opacity-75" > JL.Cindelaras No.205A </p>
            <p className="hover:opacity-75" >Pakistan, Punjab Lahore </p>
            <p className="hover:opacity-75" >+92 3491797803</p>
            <p className="hover:opacity-75" >saifarshad3344@gmail.com </p>
          </nav>
        </div>
      </div>
    </div>
    <p className="mt-8 text-xs text-gray-800">
      © 2024 Travel Thrills
    </p>
  </div>
</footer>

  )
}

export default Footer
