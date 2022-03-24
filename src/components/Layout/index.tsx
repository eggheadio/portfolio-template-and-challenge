import Image from "next/image"
import Link from "next/link"

const Layout = (props: any) => {
    return (
    <div>
        <nav >
            <div className="max-w-4xl mx-auto px-4">
                <div>
                    <div className="flex justify-between space-x-7">
                        <div>
                            <Link href="/">
                                <a href="#" className="flex items-center py-4 px-2">
                                    <Image src="/assets/eggo.png" alt="an eggo" width={32} height={32}/>
                                    <span className="font-semibold text-gray-700 text-lg ml-2"
                                        >My Name</span
                                    >
                                </a>                            
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/blog">
                                <a
                                    href=""
                                    className="py-4 px-2 text-gray-700  hover:text-blue-700 font-semibold "
                                    >Blog</a
                                >
                            </Link>
                            <Link href="/projects">
                                <a
                                    href=""
                                    className="py-4 px-2 text-gray-700 font-semibold hover:text-blue-700 transition duration-300"
                                    >Projects</a
                                >
                            </Link>
                            <Link href="/about">
                                <a
                                    href=""
                                    className="py-4 px-2 text-gray-700 font-semibold hover:text-blue-700 transition duration-300"
                                    >About</a
                                >
                            </Link>
                            <Link href="/resume">
                                <a
                                    href=""
                                    className="py-4 px-2 text-gray-700 font-semibold hover:text-blue-700 transition duration-300"
                                    >Resume</a
                                >
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
            {props.children}
    </div>
    )
}

export default Layout