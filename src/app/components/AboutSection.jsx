"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Adobe PS</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Análise e desenvolvimento de sistemas</li>
        <li>UniSantaCruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SQL</li>
        <li>Formação Front-End (React)</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Adobe PS</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/gif.gif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Conheça-me</h2>
          <p className="text-base lg:text-lg">
            Como desenvolvedora web, minha paixão pelo design de aplicações
            sempre me impulsiona a evoluir constantemente nesta área fascinante
            da programação. Embora minha habilidade no Front-End seja notável,
            descobri que meu verdadeiro dom reside no Back-End, motivando minha
            decisão de trilhar uma carreira em Cibersegurança.<br/><br/> Estou dedicada a
            aprender continuamente, e essa sede de conhecimento é evidente em
            minha busca incessante por aprimorar minhas habilidades, tanto no
            desenvolvimento Front-End quanto no Back-End. Acredito que esta
            abordagem holística é essencial para construir soluções robustas e
            inovadoras.<br/><br/> Minha capacidade de adaptação a diferentes ambientes é
            uma força que me permite colaborar efetivamente em equipes. Sou uma
            colaboradora entusiasta, sempre trazendo novas perspectivas e
            alternativas para enriquecer o processo de desenvolvimento. Encaro
            desafios como oportunidades de crescimento, e estou preparada e
            ansiosa para enfrentar qualquer desafio que se apresente em meu
            caminho.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificações{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
