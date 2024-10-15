import React from 'react'
import { appDownloadBg, appstore, googlePlay } from '../assets'

const DownloadApp = () => {
  return (
    <section className='bg-black text-white bg-center' style={{ backgroundImage: `url(${appDownloadBg})` }}>
      
      <div className='container py-8 space-y-8 flex flex-col md:flex-row justify-center items-center md:justify-between bg-black md:bg-opacity-90'>
        <h1 className='text-2xl md:text-4xl text-center'>DOWNLOAD THE APP</h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          <img src={appstore} alt="appstore" className='w-[187px] h-fit' />
          <img src={googlePlay} alt="googleplay" className='w-[187px] h-fit' />
        </div>
      </div>
    </section>
  )
}

export default DownloadApp
