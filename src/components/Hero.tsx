const Hero = () => {
    return (
        <>
            <div className="relative flex flex-row w-screen">
                <div className="w-1/2 h-96 text-white text-7xl font-bold bg-persianorange">
                    <h1 className="w-2/3 p-6">North Portland Knife Sharpening</h1>
                </div>
                {/* <div className="w-0 h-0 z-10
                    border-b-[384px] border-b-persianorange
                    border-r-[192px]"/> */}
                <div className="w-2/3 bg-background">
                    <div className="w-0 h-0 z-10
                        border-b-[384px] border-b-persianorange
                        border-r-[192px]"/>    
                    </div>
            </div>
        </>
    )
}

export default Hero;

