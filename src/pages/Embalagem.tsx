import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar/Sidebar";

const Embalagem = () => {
  const [move, setMove] = useState(false);
  return (
    <div className="text-black bg-blue-500 text-xl min-h-full overflow-auto">
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
        <ParallaxLayer offset={0} speed={0.8}>
          <motion.div
            animate={{ y: move ? 275 : -175 }}
            transition={{ type: "tween", duration: 3 }}
          >
            <div className="cafe_layer parallax" id="copo4"></div>
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7}>
          <motion.div
            animate={{ y: move ? 275 : -175 }}
            transition={{ type: "tween", duration: 2.5 }}
          >
            <div className="cafe_layer parallax" id="copo3"></div>
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6}>
          <motion.div
            animate={{ y: move ? 275 : -175 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <div className="cafe_layer parallax" id="copo2"></div>
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <motion.div
            animate={{ y: move ? 275 : -175 }}
            transition={{ type: "tween", duration: 1 }}
          >
            <div className="cafe_layer parallax" id="copo1"></div>
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={3}>
          <motion.div
            className="text-gradient font-sans contentando text-bold text-6xl z-1"
            animate={{ y: move ? 600 : -350 }}
            transition={{ type: "tween", duration: 3 }}
          >
            Praticidade
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <motion.div
            className=" text-white font-sans text-bold text-xl z-1"
            animate={{ y: move ? 0 : 350, x: move ? 350 : 10 }}
            transition={{ type: "tween", duration: 3 }}
          >
            <div className="text-right m-8 my-8 p-6">
              <p>Tenha seu café quentinho numa embalagem de</p>
              <p>qualidade e onde precisar 24 horas por dia.</p>
              <p>Não queime seus dedos. Nossos copos possuem</p>
              <p>proteção para seus dedos e boca em material</p>
              <p>biodegradável</p>
            </div>
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2}>
          <div className=" -mt-20 text-white text-justify p-8 m-8">
            {" "}
            <h2>A Praticidade dos produtos Tia Rosa</h2>
            <p className="py-3">
              As embalagens para café são uma parte essencial da experiência do
              café e é importante garantir que elas sejam seguras para o meio
              ambiente e também capazes de manter o sabor e a temperatura do
              café.
            </p>
            <p className="py-3">
              As embalagens biodegradáveis são uma ótima opção, pois ajudam a
              reduzir o impacto ambiental. Essas embalagens são feitas de
              materiais que se decompõem naturalmente sem causar danos ao meio
              ambiente, ajudando a reduzir a quantidade de resíduos que acabam
              em aterros sanitários. Além disso, as embalagens biodegradáveis
              ajudam a preservar o sabor do café, mantendo-o fresco e aromático
              por mais tempo.
            </p>
            <p className="py-3">
              Outra característica importante das embalagens para café é a
              capacidade de manter a temperatura do café. Embalagens térmicas
              são uma excelente opção para manter o café quente por mais tempo.
              Elas são feitas de materiais isolantes que mantêm o calor dentro
              da embalagem, preservando a temperatura do café. Essas embalagens
              são ideais para quem gosta de desfrutar de um café quente e
              fresco, mesmo quando está em movimento.
            </p>
            <p className="py-3">
              Em resumo, embalagens biodegradáveis e térmicas são uma escolha
              inteligente para quem deseja preservar o sabor e a temperatura do
              café enquanto reduz o impacto ambiental. Na nossa loja de café
              premium, nos preocupamos com a qualidade de nossas embalagens e
              escolhemos opções que são seguras para o meio ambiente e também
              mantêm a qualidade do nosso café. Venha experimentar nosso café e
              aproveite a experiência completa do café, desde o sabor até a
              embalagem.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Embalagem;
