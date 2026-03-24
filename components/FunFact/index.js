import React from 'react'

const FunFact = (props) => {

    const funFact = [
        {
            title: '95',
            subTitle: 'Kazanılan Dava',
            Symbol: '%',
        },
        {
            title: '863',
            subTitle: 'Mutlu Müvekkil',
            Symbol: '+',
        },
        {
            title: '5',
            subTitle: 'Uzman Avukat',
            Symbol: '+',
        },
        {
            title: '25',
            subTitle: 'Çözülen Uyuşmazlık',
            Symbol: '%',
        },


    ]


    return (

        <section className="relative z-1 bg-no-repeat bg-center bg-cover overflow-hidden pt-[100px] md:pt-[70px] sm:pt-[50px] col:pt-[40px] pb-[95px] md:pb-[70px] sm:pb-[50px] col:pb-[40px]" style={{ backgroundImage: `url(${'/images/counter/1.jpg'})` }}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-6 md:col-span-6 sm:col-span-12">
                        <div className="counter-grids relative overflow-hidden">
                            {funFact.map((funfact, fitem) => (
                                <div className="w-[48%] md:w-[48%] sm:w-full float-left sm:float-none pt-[40px] md:pt-[30px] sm:pt-[25px] col:pt-[20px] pb-[40px] md:pb-[30px] sm:pb-[25px] col:pb-[20px] mr-[5px] md:mr-[4px] sm:mr-0 bg-[#e5e7eb33] mb-[5px] md:mb-[4px] sm:mb-[8px] col:mb-[6px] text-center sm:flex-none col:w-full" key={fitem}>
                                    <div>
                                        <h2 className="text-[50px] md:text-[40px] sm:text-[32px] col:text-[26px] font-bold text-white">{funfact.title}{funfact.Symbol}</h2>
                                    </div>
                                    <p className="text-[18px] md:text-[16px] sm:text-[14px] col:text-[12px] fonts-normal pt-[10px] md:pt-[8px] sm:pt-[6px] col:pt-[5px] text-[#e5e7eb]">{funfact.subTitle}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;