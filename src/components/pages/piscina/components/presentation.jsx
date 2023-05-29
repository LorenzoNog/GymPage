import React from 'react'


function Presentation() {
  return (
    <div className='flex flex-row gap-5 mt-[5%] p-10 bg-black '>
        <div className='flex flex-col w-[50%] justify-center p-8 gap-5'>
            <span className='text-xl text-[#6DBFE2] uppercase font-semibold'>
                DISFRUTÁ DE NUESTRA EXCLUSIVA PISCINA Y SAUNA
            </span>
            <h2 className='text-white text-5xl uppercase font-extrabold italic'>
                Un verano distinto
            </h2>
            <hr className='w-[30%]'/>
            <div className='mt-[10%]'>
                <h3 className='text-2xl text-[#6DBFE2] uppercase font-extrabold'>RESERVAS: Whatsapp 3815953814</h3>
            </div>
            <div className='flex flex-col mt-[8%] gap-5 text-white'>
                <span className='uppercase text-xl font-light'>
                    HOTEL CATALINAS PARK
                </span>
                <span className='uppercase text-xl font-light'>
                    AV. SOLDATI 380 – S.M. TUCUMAN
                </span>
            </div>
        </div>
        <div>
            <img src={'/img/sedes/catalinas/piscina.png'} width={600} height={600}/>
        </div>
    </div>
  )
}

export default Presentation
