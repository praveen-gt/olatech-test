import React, { useState } from 'react'
import Styles from '../styles/Catalog.module.css'
import Modal from '../Components/Modal'
import { AiFillFormatPainter } from 'react-icons/ai'
import { GiClayBrick, GiDominoTiles, GiStoneWall } from 'react-icons/gi'
import { MdCarpenter } from 'react-icons/md'
import { HiBuildingOffice } from 'react-icons/hi2'
import Lottie from 'react-lottie';
import data from '../public/static/course-data.json'

const CourseCard = ({
    icon,
    title = "",
    modalContent,
    num,
    core,
    elective
}) => {
    const [color, setColor] = useState('#d5d5d5')

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (

        <div className={Styles.boxContainer}
            onMouseOver={() => {
                setColor('#0009')

            }}
            onMouseOut={() => {
                setColor('#d5d5d5')
            }}
        >
            <Modal
                title={title}
                width={'50vw'}
                height={'90vh'}
                overflow={'scroll'}
                content={modalContent}
                onConfirm={() => console.log('Button confirm')}
                onDiscard={() => console.log('Button discard')}
                buttons={[
                    { role: "custom", onClick: () => console.log("custom test"), toClose: true, classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200", label: "Custom" },
                    { role: "discard", toClose: true, classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200", label: "Discard" },
                    { role: "confirm", toClose: false, classes: "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200", label: "Confirm" }
                ]}

            >
                <div className={Styles.container}>
                    <span className={Styles.features__text}>{num}</span>

                    <div className="features__svg" style={{
                        marginBottom: 20
                    }}>

                        <Lottie options={defaultOptions}
                            height={180}
                            width={180}
                            style={{
                                marginLeft: 0
                            }}
                        // isStopped={this.state.isStopped}
                        // isPaused={this.state.isPaused} 
                        />
                        {/* {console.log(icon)}

                        {icon == "painting" &&
                            <AiFillFormatPainter size={80} color={color} />
                        }
                        {icon == "brick" &&
                            <GiClayBrick size={80} color={color} />
                        }
                        {icon == "carpentry" &&
                            <MdCarpenter size={80} color={color} />
                        }
                        {icon == "tile" &&
                            <GiStoneWall size={80} color={color} />
                        }
                        {icon == "building" &&
                            <HiBuildingOffice size={80} color={color} />
                        } */}

                    </div>
                    <h4 style={{
                        fontWeight: '600',
                        fontSize: 19,
                        width: '90%',
                        lineHeight: 1.4,
                        marginBottom: 12
                    }} >{title}</h4>
                    <p style={{
                        fontSize: 15
                    }}>Core Units: {core}</p>
                    <p style={{
                        fontSize: 15
                    }}>Elective Units: {elective}</p>
                    {/* <p>Click here to see units</p> */}
                </div>
            </Modal>
        </div>


    )
}

export default CourseCard;

