import React from 'react'
import styles from '../styles/Banner.module.css'

function Banner(props) {
  return (
    <div>
        <div className={styles.bannerSection} >
        <h1 style={{
            fontSize: 40,
            zIndex: 2,
            position: 'relative',
            width: '50%',
            margin: 'auto',
            color: '#fff'
        }}>{props.title}</h1>
        </div>

    </div>
  )
}

export default Banner