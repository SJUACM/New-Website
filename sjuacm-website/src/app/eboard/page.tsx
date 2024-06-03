"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Tomas from "../../../public/images/eboard/tomas.png";
import Hinna from "../../../public/images/eboard/hinna.jpg";
import Richard from "../../../public/images/eboard/richard.png";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Eboard() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center">
      <div className="p-10">
        <h1 className="text-4xl font-bold">E-Board</h1>
        <div className="flex justify-center items-center space-x-6">
          <EboardMember
            name="Tomas Santos"
            position="President"
            image={Tomas}
            description="EY Launch Intern"
            linkedin="https://www.linkedin.com/in/tomas-j-santos-y/"
            github="https://github.com/tomassantos484"
          />
          <EboardMember
            name="Hinna Zeejah"
            position="Information Officer"
            image={Hinna}
            description="Google Summer of Code' 24"
            linkedin="https://www.linkedin.com/in/hinna-zeejah/"
            github="https://github.com/HinnaZeejah"
          />
          <EboardMember
            name="Richard Perez"
            position="Treasurer"
            image={Richard}
            description="Lead Instructor, All Star Code"
            linkedin="https://www.linkedin.com/in/richard-perez-jr/"
            github="https://github.com/richardp23"
          />
        </div>
      </div>
    </div>
  );
}

export function EboardMember({
  name,
  position,
  image,
  description,
  linkedin,
  github,
}: {
  name: string;
  position: string;
  image: StaticImageData;
  description: string;
  linkedin: string;
  github: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-8 border-2 h-[37em] max-w-[400px]`}
      >
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="min-h-[350px] max-h-[350px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-xl text-left mt-6"
        >
          {position}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-lg max-w-md mt-4 text-left"
        >
          {description}
        </CardItem>
        <div className="flex justify-start items-start pt-4 space-x-4">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-white cursor-pointer hover:text-red-500"
            />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-white cursor-pointer hover:text-red-500"
            />
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
