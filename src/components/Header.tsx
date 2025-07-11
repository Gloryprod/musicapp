import Button from "./Button";
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 w-full shadow z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <a className="block" href="#">
                <span className="">MusicPlay</span>
                
                </a>
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Accueil </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Cours </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                <Link href={`/signin`}>
                    <Button variant="primary" size="md">Se Connecter</Button>
                </Link>

                <div className="hidden sm:flex">
                <Link href={`/signup`}>
                    <Button variant="primary" size="md">S&apos;inscrire</Button>
                </Link>
                </div>
                </div>

                <div className="block md:hidden">
                <button
                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
    </header>
  );
}