import Electronica from '@/assets/electronica.png'
import Image from 'next/image'
const Index =()=>{
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="border border-black h-1/2 w-1/2">
                <div className='relative h-1/2 '>
                    <Image src={Electronica} className='h-screen' fill alt='imagen'/>
                </div>
                 
                <div>formulario</div>
            </div>
        </div>
    )
}

export default Index