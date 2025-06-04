import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            <motion.div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-500 opacity-10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-400 opacity-15 blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-emerald-300 opacity-10 blur-3xl"
                animate={{
                    scale: [1.2, 0.9, 1.2],
                    x: [0, -10, 0],
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
        </div>
    );
};