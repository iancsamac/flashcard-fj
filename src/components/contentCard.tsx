import * as React from "react"
import Image from "next/image"
import cfap from '@/assets/cfap.png'
import cbmba from '@/assets/cbmba.png'

export default function ContentCard({...props}: React.ComponentProps<"div">){
    return(
    <div className="flex w-full flex-col h-full gap-2">
        <div className="flex flex-row justify-between pt-2 px-2"> 
            <Image src={cbmba} alt="cfap"  width={70}/>
            <Image src={cfap} alt="cfap" width={70}/>
        </div>
        <div className='bg-white w-full flex items-center justify-center h-12 font-extrabold'
        >
            Fundamento Jurídico
        </div>
        <div className='bg-white w-full flex items-center justify-center h-40 mt-4 font-bold text-lg'
            {...props}
        >
        </div>
    </div>
    )
  }