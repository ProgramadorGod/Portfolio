import React, { useEffect, useState } from 'react'
import './Image.css';
import suit from '../../Media/suit.jpeg'; // Ruta correcta a tu imagen
import { motion, useDragControls } from "framer-motion"
import { useAnimationFrame } from "framer-motion"
import { useRef } from "react";
import styled from 'styled-components';
import { HomeText } from '../styled';


const Image = () => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(()=>{
        setIsVisible(true);
    },[])

    const constraintsRef = useRef(null)

    const ImgContainer = styled.div`
        width:76vw;
        display:flex;
        justify-content:flex-start;
        height:30vw;
        margin-left:14vw;
        user-select:none;
        align-content:center;
        position:relative;        
    `;

    return (
        <ImgContainer ref={constraintsRef}>

            
            <motion.img className='item'
                src={suit}
                drag
                dragConstraints={constraintsRef} // Restringe el movimiento dentro de los límites de la pantalla
                dragElastic={0.1} // Agrega elasticidad al arrastre para un efecto suave
                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }} // Transición de arrastre con efecto de rebote
                transition={{ ease: "easeOut", duration: 1 }}
                // whileTap={{ scale: 0.9 }} // Efecto al hacer clic en la imagen
                // whileHover={{ scale: 1.1, rotate: 5 }} // Efecto al pasar el mouse sobre la imagen

                // initial={{ x: "-31vw", y: 100 }} // Establece la posición inicial de la imagen
                animate={{ y: [0, -8, 0], transition: { duration: 1.5, repeat: Infinity } }} // Animación mientras está quieta
                whileTap={{ scale: 0.9 }} // Efecto al hacer clic en la imagen
                whileHover={{ scale: 1.1, rotate: 5 }} 
            />
               
                
               <HomeText className={isVisible ? "visible":""}>
                        <div id="welcome">
                            WELCOME !
                        </div>

                        <div>
                            MY NAME IS LUIS AND THIS IS MY PERSONAL PORTFOLIO
                        </div>
                </HomeText>
            
        </ImgContainer>
  )
}

export default Image
