import { motion } from "framer-motion";
import React from "react";

const AnimateCards = ({ children, classNames = "" }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delay: 0.3,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0 },
        visible: (index) => ({
            opacity: 1,
            y: [50, -30, 0],
            transition: {
                duration: 0.8,
                delay: index * 0.2, // Har bir bola uchun kechikish
                ease: "easeInOut",
            },
        }),
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className={classNames}
            onAnimationStart={() => console.log("Animation started!")}
            onAnimationComplete={() => console.log("Animation completed!")}
        >

            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={childVariants} custom={index}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default AnimateCards;
