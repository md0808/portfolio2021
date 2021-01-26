import {lazy, Suspense} from 'react'
import One from '../images/artwork/2011/IMG_1597.jpg'
import Two from '../images/artwork/2011/IMG_1593.jpg'
import Three from '../images/artwork/2011/B28_Dixon.jpg'
import Four from '../images/artwork/2011/3s.jpg'
import Five from '../images/artwork/2011/5.jpg'
import Six from '../images/artwork/2011/9s.jpg'
import Seven from '../images/artwork/2011/2.jpg'
import Eight from '../images/artwork/2011/1.jpg'
import Nine from '../images/artwork/2011/3.jpg'
import Ten from '../images/artwork/2011/8.jpg'
import Eleven from '../images/artwork/2011/13.jpg'


export const loadedPhotos = One && Two && Three && Four && Five && Six && Seven && Eight && Nine && Ten && Eleven ? true : false



export const photos = [

      {
        src: One,
        width: 2,
        height: 3.5,
        title: ""
      },
      {
        src: Two,
        width: 3,
        height: 2,
        title: ""
      },
      {
        src: Three,
        width: 3,
        height: 3.5,
        title: ""
      },
      {
        src: Four,
        width: 3,
        height: 5,
        title: ""
      },
 
      {
        src: Six,
        width: 3,
        height: 4,
        title: ""
      },     
      {
        src: Seven,
        width: 3.5,
        height: 5,
        title: ""
      },
      {
        src: Eight,
        width: 3.5,
        height: 4.25,
        title: ""
      },
      {
        src: Five,
        width: 3.25,
        height: 3,
        title: ""
      },
      {
        src: Nine,
        width: 3.5,
        height: 4.25,
        title: ""
      },
      {
        src: Ten,
        width: 3.5,
        height: 4.25,
        title: ""
      },
      {
        src: Eleven,
        width: 3.5,
        height: 4.25,
        title: ""
      },

  ];