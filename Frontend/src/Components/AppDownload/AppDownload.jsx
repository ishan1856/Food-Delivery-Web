import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download <br />Flavor Dash App</p>
        <div className="app_download_platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />

        </div>
      
        
    </div>
  )
}

export default AppDownload