const CommonFooter = ({erweimaSrc}) => {
    return (
        <div>
            <footer aria-label="Site Footer" className="bg-black">
                <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-600 sm:justify-start">
                            </div>
                            <span className="flex justify-center ">
                                <img className="w-52" src={erweimaSrc}/>
                            </span>
                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">

                            </ul>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
                        >
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">关于我们</p>

                                <nav aria-label="Footer About Nav" className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                游玩主题
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                认识团队
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                加入我们
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                全球加盟
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">服务提供</p>

                                <nav aria-label="Footer Services Nav" className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                密室逃脱
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                杀人游戏
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                娱乐桌游
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                预约拼车
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">帮助链接</p>

                                <nav aria-label="Footer Helpful Nav" className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                常见问题
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-white"
                                                href="/"
                                            >
                                                建议反馈
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="group flex justify-center gap-1.5 sm:justify-start"
                                                href="/"
                                            >
                  <span
                      className="text-white"
                  >
                    在线客服
                  </span>

                                                <span className="relative -mr-2 flex h-2 w-2">
                    <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                    ></span>
                    <span
                        className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"
                    ></span>
                  </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">联系我们</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 sm:justify-start"
                                            href="/"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 shrink-0 text-gray-900"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>

                                            <span className="text-white">Kaibutsusama@gmail.com</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 sm:justify-start"
                                            href="/"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 shrink-0 text-gray-900"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>

                                            <span className="text-white">929-204-8077</span>
                                        </a>
                                    </li>

                                    <li
                                        className="flex items-start justify-center gap-1.5 sm:justify-start"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>

                                        <address className="-mt-0.5 not-italic text-white">
                                            142-01 41st ave Flushing NewYork City 11355
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-6">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-500">
                                <span className="block sm:inline">版权所有.</span>

                                <a
                                    className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                                    href="/"
                                >
                                    条款与隐私
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                                    href="/"
                                >
                                    隐私政策
                                </a>
                            </p>

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                                &copy; 2023 怪物大人有限公司
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default CommonFooter;