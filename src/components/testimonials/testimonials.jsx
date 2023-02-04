const consumers = [
    {
        name: "艾希",
        playedTheme: "重生之我在职高女厕所",
        comment: "玩了密室之后，哥们直接就收获10个女朋友，靠的就是胆量以及我这个让人着迷到无可自拔的颜值，颜值及正义！！！！！！！！",
        avatarSrc: "https://th.bing.com/th/id/OIP.eO-DbTnmn4HYzQsmQJEvAQAAAA?pid=ImgDet&rs=1"

    },
    {
        name: "艾希",
        playedTheme: "幽邃深处之长藤鬼校",
        comment: "\"鬼屋不恐怖，解谜不简单，操作不困难，吸鬼不一般。一个字“ 吸就完事了！ ” 游戏类型：冒险解谜 适合玩家：探索者、成就者",
        avatarSrc: "https://th.bing.com/th/id/OIP.oVDpw5pduVXkImFUOqJAkAAAAA?pid=ImgDet&rs=1"

    },
    {
        name: "艾希",
        playedTheme: "重生之我在职高女厕所",
        comment: "哇，集美们，真的是绝绝子，姐们刚刚玩就被吓死了，从密室出来了，前台小哥哥就给人家安排了一个奶茶茶，太绝绝子了吧这一家店哇❤",
        avatarSrc: "https://www.com8.cn/wp-content/uploads/2020/09/20200928082850-5f719ec23145a.jpg"
    }
]

const Testimonials = () =>{
    return(
        <div>
            <div className="bg-black">
                <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <section className="mb-20 text-gray-700">
                        <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto mb-32">
                            <h3 className="text-6xl font-bold mb-6 text-white">游玩<span className="text-red-800">体验</span></h3>
                        </div>

                        {/*我的模块*/}
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
                                {consumers.map((consumer)=>(
                                    <div className="mb-12 md:mb-0">
                                    <div className="flex justify-center mb-6">
                                        <img
                                            alt="#"
                                            src={consumer.avatarSrc}
                                            className="rounded-full shadow-lg w-32"
                                        />
                                    </div>
                                    <h5 className="text-xl font-semibold mb-4 text-white">{consumer.name}</h5>
                                    <h6 className="font-semibold text-red-800 mb-4">{consumer.playedTheme}</h6>
                                    <p className="mb-4 text-orange-500">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="quote-left"
                                            className="w-6 pr-2 inline-block"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                            ></path>
                                        </svg>
                                        {consumer.comment}
                                    </p>
                                    <ul className="flex justify-center mb-0">
                                        <li>
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="star"
                                                className="w-4 text-yellow-500"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                ></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="star"
                                                className="w-4 text-yellow-500"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                ></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="star"
                                                className="w-4 text-yellow-500"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                ></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="star"
                                                className="w-4 text-yellow-500"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                ></path>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="star-half-alt"
                                                className="w-4 text-yellow-500"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 536 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                                                ></path>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                                ))}
                            </div>
                        {/*我的模块*/}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;