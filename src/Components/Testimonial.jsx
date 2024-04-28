
const Testimonial = () => {
    return (
        <div> 
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <section className="p-6 mx-auto">
                        <div className="container max-w-xl mx-auto">
                            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                                <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                                <blockquote className="max-w-lg text-lg italic font-medium text-center">I stumbled upon Woodle while looking for unique materials for my DIY projects, and I{`'`}m so glad I did! Their wide selection of high-quality crafting supplies never fails to inspire me.Plus, their friendly staff are always ready to offer helpful advice and creative ideas.This is now my go-to spot for all things crafty</blockquote>
                                <div className="text-center dark:text-gray-600">
                                    <p>Leroy Jenkins</p>
                                    <p>CEO of Company Co.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <section className="p-6 mx-auto">
                        <div className="container max-w-xl mx-auto">
                            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                                <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                                <blockquote className="max-w-lg text-lg italic font-medium text-center">I{`'`}ve been a loyal customer of Woodle for years, and for good reason. Not only do they carry an extensive range of products, but their prices are unbeatable. Whether I{`'`}m stocking up on basics or searching for that special embellishment, I know I can count on Woodle to have exactly what I need without breaking the bank.</blockquote>
                                <div className="text-center dark:text-gray-600">
                                    <p>Leroy Jenkins</p>
                                    <p>CEO of Company Co.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <section className="p-6 mx-auto">
                        <div className="container max-w-xl mx-auto">
                            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                                <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                                <blockquote className="max-w-lg text-lg italic font-medium text-center">As a professional crafter, I rely on Woodle to provide me with top-notch materials for my projects. From premium yarns to specialty papers, their inventory is curated with the needs of serious creators in mind. The convenience of online ordering and prompt delivery means I can spend less time shopping and more time crafting</blockquote>
                                <div className="text-center dark:text-gray-600">
                                    <p>Leroy Jenkins</p>
                                    <p>CEO of Company Co.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <section className="p-6 mx-auto">
                        <div className="container max-w-xl mx-auto">
                            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                                <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                                <blockquote className="max-w-lg text-lg italic font-medium text-center">I recently hosted a crafting party for my daughter{`'`}s birthday, and Woodle was a lifesaver. Not only did they have everything on my list, but they also offered fun project kits perfect for a group activity. The kids had a blast, and I received countless compliments on the quality of the materials. Thank you, Woodle, for helping me create lasting memories!</blockquote>
                                <div className="text-center dark:text-gray-600">
                                    <p>Leroy Jenkins</p>
                                    <p>CEO of Company Co.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;