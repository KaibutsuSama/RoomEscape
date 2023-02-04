import "./style.css"
const CommonNavbar = ({imageSrc}) => {
    return (
        <div>
            <header aria-label="Site Header" className="bg-black lg:fixed-top">
                <div
                    className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
                >
                    <a className="block text-teal-300" href="/">
                        <img className="logo" src={imageSrc} alt="Logo"/>
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Site Nav" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="transition hover:text-gray-500/75 text-white hover:text-orange-300 hover:underline underline-offset-8 hover:underline-offset-8 "
                                        href="/"
                                    >
                                        主页
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition hover:text-gray-500/75 text-white hover:text-orange-300 hover:underline underline-offset-8 hover:underline-offset-8"
                                        href="/"
                                    >
                                        游玩主题
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition hover:text-gray-500/75 text-white hover:text-orange-300 hover:underline underline-offset-8 hover:underline-offset-8"
                                        href="/"
                                    >
                                        剧本评测
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition hover:text-gray-500/75 text-white hover:text-orange-300 hover:underline underline-offset-8 hover:underline-offset-8"
                                        href="/"
                                    >
                                        主题加盟
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition hover:text-gray-500/75 text-white hover:text-orange-300 hover:underline underline-offset-8 hover:underline-offset-8"
                                        href="/"
                                    >
                                        在线预定
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition bg-red-900"
                                    href="/"
                                >
                                    登录
                                </a>
                                <a
                                    className="hidden rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition bg-red-900 sm:block"
                                    href="/"
                                >
                                    注册
                                </a>
                            </div>

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default CommonNavbar;