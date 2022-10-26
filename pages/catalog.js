import React from 'react'
import Link from 'next/link'
import Navbar from './navbar'
import Banner from '../Components/Banner'
import Styles from '../styles/Catalog.module.css'
import CourseCard from '../Components/CourseCard'
import CourseContent from '../Components/CourseContent'
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";


export default function catalog() {
  // const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Banner title={"Construction, Plumbing & Services Training Package"} />

      <section className="flex flex-row justify-center antialiased bg-gray-50 text-gray-600 min-h-screen"
        style={{
          flexWrap: 'wrap',
          paddingTop: 50,
          paddingBottom: 50
        }}>
        <CourseCard
          title={"CPC30620 Certificate III in Painting and Decorating"}
          icon={"painting"}
          core={16}
          elective={4}
          num={"01"}
          modalContent={
            <CourseContent />
          }
        />
        <CourseCard
          icon={"carpentry"}
          title={"CPC30220 Certificate III in Carpentry"} core={16} elective={4} num={"02"} />
        <CourseCard icon={"tile"} title={"CPC31320 Certificate III in Wall and Floor Tiling"} core={16} elective={4} num={"03"} />
        <CourseCard icon={"brick"} title={"CPC33020 Certificate III in Bricklaying and Blocklaying"} core={16} elective={4} num={"04"} />
        <CourseCard icon={"building"} title={"CPC50220 Diploma of Building and Construction"} core={16} elective={4} num={"05"} />
        <CourseCard icon={"building"} title={"CPC40120 Certificate IV in Building and Construction"} core={16} elective={4} num={"06"} />
      </section>





    </div>
  )
}

