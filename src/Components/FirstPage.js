import React from 'react'
import FirstPageFirstPortion from './FirstPageFirstPortion'
import FirstPageRightAds from './FirstPageRightAds'
import FirstPageLeftAds from './FirstPagLeftAds'
import FirstPageQuestion from './FirstPageQuestion'
import FirstPageFooter from './FirstPageFooter'

function FirstPage() {
    return (
        <div>
            <FirstPageFirstPortion />

            <FirstPageRightAds title="Enjoy on your TV." paragraph="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." image="tv1.png"/>
            <FirstPageLeftAds title="Download your shows to watch offline." paragraph="Save your favourites easily and always have something to watch." image="mobile.jpg"/>
            <FirstPageRightAds title="Watch everywhere." paragraph="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." image="tv2.png"/>
            <FirstPageLeftAds title="Create profiles for children." paragraph="Send children on adventures with their favourite characters in a space made just for them—free with your membership." image="tv3.png" />
            
            <FirstPageQuestion />
            
            <FirstPageFooter />
        </div>
    )
}

export default FirstPage