import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  const [move, setMove] = React.useState(false);
  return (
    <div className="text-xl bg-white h-full w-full">
      <div className="w-full bg-black h-full items-center justify-center p-4 m-4 text-center">
        <Parallax
          className="bg-black animation"
          pages={2}
          style={{ top: "0", left: "0" }}
        >
          <ParallaxLayer className="z-10 fixed" offset={0} speed={1}>
            <div>
              {" "}
              <Sidebar />
            </div>{" "}
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3}>
            <div className="animation_layer parallax" id="back2"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation_layer parallax" id="plano1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.6}>
            <div className="animation_layer parallax" id="plano2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3}>
            <motion.div
              className="text-gradient font-sans contentando text-bold text-8xl"
              animate={{ y: move ? 600 : -500 }}
              transition={{ type: "tween", duration: 3 }}
            >
              Coffe Shops Tia Rosa
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <div className="animation_layer parallax" id="plano3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <div className="animation_layer parallax" id="plano4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2}>
            <motion.div
              animate={{ y: move ? 600 : -500 }}
              transition={{ type: "tween", duration: 3 }}
            >
              <div className=" -mt-20 text-white">
                O Café das montanhas da Noruega direto para a sua mesa
              </div>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2}>
            <motion.div
              animate={{ y: move ? 600 : -400 }}
              transition={{ type: "tween", duration: 3 }}
            >
              <div className=" -mt-20 text-white text-justify p-8 m-8">
                Bem-vindo à nossa loja de café premium{" "}
                <b>COFFE SHOPS TIA ROSA</b>, onde você encontrará uma
                experiência de degustação única com os melhores grãos de café
                vindos diretamente das montanhas da Noruega. Nós selecionamos
                cuidadosamente cada grão para garantir que você experimente o
                verdadeiro sabor do café de alta qualidade. Com um aroma rico e
                sabor intenso, nosso café irá satisfazer até os paladares mais
                exigentes. Aproveite a nossa atmosfera aconchegante e relaxante
                enquanto desfruta de uma xícara do nosso café exclusivo.
                Visite-nos hoje e descubra o sabor da perfeição em cada xícara.
              </div>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2}>
            <motion.div
              animate={{ y: move ? 600 : -200 }}
              transition={{ type: "tween", duration: 3 }}
            >
              <div className=" -mt-20 text-white text-justify p-8 m-8">
                Se você está procurando por uma variedade de sabores em seu café
                expresso, temos várias opções para você escolher. Desde o
                clássico espresso italiano até as últimas tendências de café,
                temos uma seleção que certamente agradará a todos os gostos. Se
                você prefere um sabor mais doce, experimente o cappuccino, com
                sua espuma cremosa e notas de baunilha. Para um sabor mais forte
                e ousado, experimente o ristretto, que é um espresso curto e
                concentrado. Se você gosta de sabores mais picantes, experimente
                o macchiato, que é um espresso com uma pequena quantidade de
                leite vaporizado. E, se você está procurando algo mais moderno,
                experimente o café expresso com sabor de caramelo ou baunilha,
                que são algumas das opções mais populares entre os amantes de
                café na internet. Venha experimentar nossas variedades de café
                expresso e descubra o seu favorito!
              </div>
            </motion.div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
