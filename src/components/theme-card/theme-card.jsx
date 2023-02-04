const products = [
    {
        id: 1,
        features: '热门',
        name: '重生之我在职高女厕',
        href: '#',
        price: '$48',
        imageSrc: 'https://cdn.bg-mania.jp/images/2019/07/tbm_20190725171521.jpg',
        imageAlt: '#',
        description: '121221'
    },
    {
        id: 2,
        features: '热门',
        name: '死神的十字路口',
        href: '#',
        price: '$35',
        imageSrc: 'https://th.bing.com/th/id/R.521754c5e550cfaede9ba792f2bba4c5?rik=qS01QvYVQi%2f%2fEA&riu=http%3a%2f%2fimage.kyobobook.co.kr%2fimages%2fbook%2fxlarge%2f300%2fx480D170348300.jpg&ehk=pVmwzbsV44Q%2bBUeMeFgJmCa0TGv1mFwkuFGKgcguxKs%3d&risl=&pid=ImgRaw&r=0',
        imageAlt: '#',
        description: '12121212'
    },
    {
        id: 3,
        features: '热门',
        name: '红色恐怖血腥',
        href: '#',
        price: '$89',
        imageSrc: 'https://th.bing.com/th/id/OIP.AZgZcTEE6mGn7RNc11e21wHaLG?pid=ImgDet&rs=1',
        imageAlt: '#',
        description: '12211212'
    },
    {
        id: 4,
        features: '热门',
        name: '当你熟睡之时',
        href: '#',
        price: '$35',
        imageSrc: 'https://www.cchr.org.tw/wp-content/uploads/2016/10/2016IOD-FIX3-1000px-724x1024.png',
        imageAlt: '#',
        description: '121212121212'
    },
    {
        id: 1,
        features: '热门',
        name: '重生之我在职高女厕',
        href: '#',
        price: '$48',
        imageSrc: 'https://cdn.bg-mania.jp/images/2019/07/tbm_20190725171521.jpg',
        imageAlt: '#',
        description: '121221'
    },
    {
        id: 2,
        features: '热门',
        name: '死神的十字路口',
        href: '#',
        price: '$35',
        imageSrc: 'https://th.bing.com/th/id/R.521754c5e550cfaede9ba792f2bba4c5?rik=qS01QvYVQi%2f%2fEA&riu=http%3a%2f%2fimage.kyobobook.co.kr%2fimages%2fbook%2fxlarge%2f300%2fx480D170348300.jpg&ehk=pVmwzbsV44Q%2bBUeMeFgJmCa0TGv1mFwkuFGKgcguxKs%3d&risl=&pid=ImgRaw&r=0',
        imageAlt: '#',
        description: '12121212'
    },
    {
        id: 3,
        features: '热门',
        name: '红色恐怖血腥',
        href: '#',
        price: '$89',
        imageSrc: 'https://th.bing.com/th/id/OIP.AZgZcTEE6mGn7RNc11e21wHaLG?pid=ImgDet&rs=1',
        imageAlt: '#',
        description: '12211212'
    },
    {
        id: 4,
        features: '热门',
        name: '当你熟睡之时',
        href: '#',
        price: '$35',
        imageSrc: 'https://www.cchr.org.tw/wp-content/uploads/2016/10/2016IOD-FIX3-1000px-724x1024.png',
        imageAlt: '#',
        description: '121212121212'
    },
    {
        id: 1,
        features: '热门',
        name: '重生之我在职高女厕',
        href: '#',
        price: '$48',
        imageSrc: 'https://cdn.bg-mania.jp/images/2019/07/tbm_20190725171521.jpg',
        imageAlt: '#',
        description: '121221'
    },
    {
        id: 2,
        features: '热门',
        name: '死神的十字路口',
        href: '#',
        price: '$35',
        imageSrc: 'https://th.bing.com/th/id/R.521754c5e550cfaede9ba792f2bba4c5?rik=qS01QvYVQi%2f%2fEA&riu=http%3a%2f%2fimage.kyobobook.co.kr%2fimages%2fbook%2fxlarge%2f300%2fx480D170348300.jpg&ehk=pVmwzbsV44Q%2bBUeMeFgJmCa0TGv1mFwkuFGKgcguxKs%3d&risl=&pid=ImgRaw&r=0',
        imageAlt: '#',
        description: '12121212'
    },
    {
        id: 3,
        features: '热门',
        name: '红色恐怖血腥',
        href: '#',
        price: '$89',
        imageSrc: 'https://th.bing.com/th/id/OIP.AZgZcTEE6mGn7RNc11e21wHaLG?pid=ImgDet&rs=1',
        imageAlt: '#',
        description: '12211212'
    },
    {
        id: 4,
        features: '热门',
        name: '当你熟睡之时',
        href: '#',
        price: '$35',
        imageSrc: 'https://www.cchr.org.tw/wp-content/uploads/2016/10/2016IOD-FIX3-1000px-724x1024.png',
        imageAlt: '#',
        description: '121212121212'
    },
]

const ThemeCard = () => {
    return (
        <div>
            <div className="bg-black">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-red-800 text-center text-5xl mb-16"><span className="text-white">剧本</span>一览</h2>
                    <div
                        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {/*商品模块*/}
                        {products.map((product) => (
                            <a href="#" className="group relative block bg-black border-4 border-red-500">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-10"
                                />
                                <div className="relative p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                        {product.features}
                                    </p>

                                    <p className="text-2xl font-bold text-white">{product.name}</p>

                                    <div className="mt-64">
                                        <div
                                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                            <p className="text-sm text-white">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                        {/*商品模块*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ThemeCard;