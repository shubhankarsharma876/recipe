import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from 'react'

function Home() {
  return (

// motion is used here for providing moving and loading motions/ animations


    <motion.div>
        <Popular/>
        <Veggie/>
    </motion.div>
  )
}

export default Home;