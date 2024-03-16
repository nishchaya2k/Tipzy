import React from 'react'
import { PiMusicNoteSimpleBold } from "react-icons/pi";


const TipzyLogo = () => {
    return (
        <div>

            <div className='absolute left-4 top-2 flex items-end'>

                <PiMusicNoteSimpleBold className='text-5xl text-white' />
                <span className='-ml-5 mb-1 text-white text-2xl' style={{ fontFamily: "Knewave, system-ui" }}>Tipzy</span>

            </div>


        </div>
    )
}

export default TipzyLogo
