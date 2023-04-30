import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from 'react'

function Home() {
  alert("This website is designed to be used via desktop 💻. The mobile users are requested to enable the desktop mode on their mobile browser... Enjoy🍰!!!");
  return (

// motion is used here for providing moving and loading motions/ animations


    <motion.div>
        <Popular/>
        <Veggie/>
    </motion.div>
  )
}

export default Home;