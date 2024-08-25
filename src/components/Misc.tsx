import { motion, } from "framer-motion"

export const Projects_Data = {
  BlogSite: 
  {
    name: "Blog Site",
    created: "NextJS, React, Typescript, Prisma, Postgres",
    img_url: "/moon.webp",
    url: "https://moonlite-s.com",
  },
  VertBot: {
    name: "Vert Bot",
    created:"Python",
    img_url: "/vert.webp",
    url: "https://github.com/Moonlite-S/VertBot",
  },
  YTC: {
    name: "Youtube Chat Soundboard",
    created:"Python",
    img_url: "/ytc.webp",
    url: "https://github.com/Moonlite-S/YTLivestreamChatSoundboard",
  },
  W: {
    name: "W, a Rude Voice Assistant",
    created: "Python, OpenAI, React, Flask",
    img_url: "/W.webp",
    url: "https://github.com/Moonlite-S/W",
  },
  WawaAI: {
    name: "WawaAI",
    created:"Python, OpenAI, React, Flask",
    img_url: "/wawaai.webp",
    url: "https://github.com/Moonlite-S/WawaAI",
  }
}

type BoxedDivProps = {
  children: React.ReactNode
  id?: string
}

export function BoxedDiv(
  {children, id}: BoxedDivProps
) {
  return (
    <motion.div 
      id={id}
      className=' bg-red-400/10 mx-auto rounded-md my-2 p-4 backdrop-blur-md lg:max-w-5xl md:max-w-3xl max-w-md  min-w-10' 
      initial={{ opacity: 0, y: 80}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.5 , ease: "easeInOut"}}
      viewport={{ once: true }}
      exit={{ opacity: 0 }}>
      {children}
    </motion.div>
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

