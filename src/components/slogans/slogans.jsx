const Slogans = ({slogansSrc}) =>{
    return(<div>
        <div className="bg-black">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <img className="h-30 w-full object-cover" src={slogansSrc} alt="#"/>
            </div>
        </div>
    </div>)

}

export default Slogans;