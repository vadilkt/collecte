import Head from "next/head"
import Logo from "./logo"
import { Breadcrumb, Avatar } from "flowbite-react";
import SearchInput from "./search-input";
import Image from "next/image";
import Link from "next/link";

type DashboardProps = {
    children: React.ReactNode,
    breadcrumb : {
        link: string,
        label: string
    }[],
}

export default ( {children, breadcrumb} :  DashboardProps) => {
  return <>
    <div className="flex bg-gray-100 min-h-screen">
        <div className="w-1/5 fixed left-0 top-0 bg-white rounded-lg  h-screen">
            <div className="">
                <Logo />
                <aside className="px-4 mt-4" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3  rounded dark:bg-gray-800">
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="shadow flex items-center p-2  font-normal text-gray-800 rounded-lg ">
                                    <svg className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    <span className="ml-3"> Actions Commerciales</span>
                                </a>
                                <ul className="py-2 space-y-2 text-gray-700 text-sm">
                                    <li>
                                        <Link href="/admin/actions/objectifs">
                                            <a href="" className="flex items-center p-2 pl-11 w-full font-normal rounded-lg transition duration-75 group hover:bg-gray-100">Les objectifs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/admin/actions/creer-objectif">
                                            <a href="" className="flex items-center p-2 pl-11 w-full font-normal rounded-lg transition duration-75 group hover:bg-gray-100">Créer un objectif</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/admin/actions/consulter-donnees">
                                            <a href="" className="flex items-center p-2 pl-11 w-full font-normal rounded-lg transition duration-75 group hover:bg-gray-100">Consulter les données</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
        <div className="w-1/5"></div>
        <div className="w-4/5 px-8 border">
            <div className="flex justify-between mt-6 text-sm items-center">
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item
                            href="/"
                        >
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </Breadcrumb.Item>
                        {
                            breadcrumb.map( item => <Breadcrumb.Item  href={item.link}> 
                                <span className="hover:underline">  {item.label}</span>
                            </Breadcrumb.Item> )
                        }
                    </Breadcrumb>
                </div>
                <div className="flex gap-4">
                    <form>   
                       <SearchInput label="Rechercher" />
                    </form>
                    <div className="rounded-full overflow-hidden">
                        <Image
                            src="/images/Logo.jpg" 
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200 mt-4" />
            {children}
        </div>
    </div>
  </>
}