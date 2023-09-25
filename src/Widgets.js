import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from '@material-ui/icons';

function Widgets() {
    const newsArticle =(heading, subtitle)=>{
      return  <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecord/>
            </div>
            <div className='widgets_article_Right'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />

        </div>
        
        {newsArticle("Fed sees more hike","2 h ago")}
        
        {newsArticle("Amazon hiring 6000","2 h ago")}
        
        {newsArticle("Cognizant hit chart","3 h ago")}
        
       
    </div>
  )
}

export default Widgets