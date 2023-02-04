const Content = () => {
    return (
        <div>
            <div className="bg-black">

                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-red-800 text-center text-5xl mb-"><span className="text-white">桌游</span>玩法</h2>

                    <section
                        className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center"
                    >
                        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center sm:text-left">
                                <h2 className="text-2xl font-bold text-red-800 md:text-3xl">
                                    杀人游戏 - 天黑请闭眼
                                </h2>

                                <p className="hidden text-white md:mt-4 md:block">
                                    《天黑请闭眼杀人游戏》通常分为两大阵营，好人方和杀手方；好人方以投票为手段投死杀手获取最后胜利，杀手方隐匿于好人中间，靠夜晚杀人及投票消灭好人方成员为获胜手段。杀人游戏很流行的一种游戏，《天黑请闭眼》播出引起这个游戏风潮。
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-red-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-500 focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        点击上车！
                                    </a>
                                </div>
                            </div>
                        </div>

                        <img
                            alt="Violin"
                            src="https://p1.ssl.qhimg.com/t011b3362f183a5a971.jpg"
                            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-l-[30px] md:h-[calc(100%_-_4rem)] md:rounded-l-[60px]"
                        />
                    </section>


                    <section
                        className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center"
                    >

                        <img
                            alt="Violin"
                            src="https://th.bing.com/th/id/R.0e342d055b76c8109466ce6dfa8b3220?rik=FPTHrUhryaUhKQ&pid=ImgRaw&r=0"
                            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-lg-[30px] md:h-[calc(100%_-_4rem)] md:rounded-lg-[60px]"
                        />

                        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center sm:text-left">
                                <h2 className="text-2xl font-bold text-red-800 md:text-3xl">
                                    侦探游戏 - 谁是凶手
                                </h2>

                                <p className="hidden text-white md:mt-4 md:block">
                                    和你的好朋友变成侦探，在杀人现场根据现场线索结合剧本的内中找出真相！和你的好朋友变成侦探，在杀人现场根据现场线索结合剧本的内中找出真相！和你的好朋友变成侦探，在杀人现场根据现场线索结合剧本的内中找出真相！
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-red-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-500 focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        点击上车！
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Content;