import { AnimatePresence, motion, } from "framer-motion"

type Props = {
  children: React.ReactNode
}

/*
        Framer Motion's Variants
  visible and hidden are arbitrarily named to create the initial and animated states
  when is set to "beforeChildren" or "afterChildren" to create the staggered animation
  https://www.framer.com/motion/variants/
*/

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,

  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}

export function BoxedDiv(
  {children}: Props
) {
  return (
    <motion.div 
      className=' bg-red-400/10 mx-auto rounded-md my-2 p-4 text-xl backdrop-blur-md lg:max-w-2xl md:max-w-lg sm:max-w-md max-w-xs min-w-10' 
      variants={item}
      exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  )
}

export function BoxedDivWithDelayContainer(
  {children}: Props
) {
  return (
    <AnimatePresence>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}>
        <div>
          {children}
        </div>
      </motion.div>

    </AnimatePresence>
  )
}


export function BGSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 100 100" className="w-full h-screen absolute -z-10 bg-[#f5cbcb]/60">

      <RectGroup
        y={-50}
        delay={0} />


      <RectGroup
        y={50}
        delay={2} />

    </svg>
  );
}

type RectProps = {
  y: number,
  size?: number,
  reverse?: boolean // True: Left to Right, False: Right to Left
  delay: number
}

function RectSVG({ y, size, reverse, delay }: RectProps) {
  const rand = Math.random() * 10 + 10;

  const initialX = reverse ? 50 : -20;
  const animateX = reverse ? [50, 0, 50] : [-20, 50, -20];

  return (
    <motion.rect
      x={initialX}
      y={y}
      width={size}
      height={size}
      rx={10}
      ry={10}
      fill="#decece"
      stroke="#decece"
      strokeWidth="2"
      animate={{
        x: animateX,
        opacity: [0.5, 0.2, 0.5],
        rotate: [0, 360],
      }}
      transition={{
        duration: rand,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
}

// NOTE: y is more like an offset from the top of the screen
function RectGroup(
  {y, delay} : RectProps
) {
  return (
    <>
      <RectSVG
        y={-20 + y}
        size={40}
        reverse={false}
        delay={delay}
      />

      <RectSVG
        y={10 + y}
        size={40}
        reverse={false}
        delay={delay}
      />

      <RectSVG
        y={50 + y}
        size={30}
        reverse={false}
        delay={delay}
      />

      <RectSVG
        y={0 + y}
        size={30}
        reverse={true}
        delay={delay}
      />

      <RectSVG
        y={60 + y}
        size={30}
        reverse={true}
        delay={delay}
      />

      <RectSVG
        y={80 + y}
        size={40}
        reverse={true}
        delay={delay}
      />
    </>
  )
}