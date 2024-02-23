import { IDomain } from "../interfaces/Domain";

import FrontendDev from "../images/skills/domains/web.png";
import BackendDev from "../images/skills/domains/back.png";
import MobileDev from "../images/skills/domains/mobile.png";
import GameDev from "../images/skills/domains/game.png";
import Database from "../images/skills/domains/database.png";
import Designing from "../images/skills/domains/design.png";

import React from "../images/skills/react.svg";
import Typescript from "../images/skills/typescript.svg";
import Javascript from "../images/skills/javascript.svg";
import Bootstrap from "../images/skills/bootstrap.svg";
import HTML from "../images/skills/html.svg";
import CSS from "../images/skills/css.svg";

import Node from "../images/skills/node.svg";
import Express from "../images/skills/express.svg";
import Sockets from "../images/skills/sockets.svg";
import Mongoose from "../images/skills/mongoose.svg";
import Nodemon from "../images/skills/nodemon.svg";
import Dotenv from "../images/skills/dotenv.svg";

import Flutter from "../images/skills/flutter.svg";
import Dart from "../images/skills/dart.svg";

import Unity from "../images/skills/unity.svg";
import CSharp from "../images/skills/csharp.svg";
import PlayStore from "../images/skills/playstore.svg";
import ItchIO from "../images/skills/itch.svg";
import VS from "../images/skills/vs.svg";

import MongoDB from "../images/skills/mongodb.svg";
import Firebase from "../images/skills/firebase.svg";

import Figma from "../images/skills/figma.svg";
import Dribbble from "../images/skills/dribbble.svg";
import Behance from "../images/skills/behance.svg";
import Unsplash from "../images/skills/unsplash.svg";
import Pixels from "../images/skills/pixels.svg";

export const domains: IDomain[] = [
  {
    title: "Frontend Development",
    image: FrontendDev,
    skills: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Typescript",
        icon: Typescript,
      },
      {
        name: "Javascript",
        icon: Javascript,
      },
      {
        name: "HTML",
        icon: HTML,
      },
      {
        name: "CSS",
        icon: CSS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
    ],
  },
  {
    title: "Backend Development",
    image: BackendDev,
    skills: [
      {
        name: "Node",
        icon: Node,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "Sockets",
        icon: Sockets,
      },
      {
        name: "Mongoose",
        icon: Mongoose,
      },
      {
        name: "Nodemon",
        icon: Nodemon,
      },
      {
        name: "Dotenv",
        icon: Dotenv,
      },
    ],
  },
  {
    title: "Mobile Development",
    image: MobileDev,
    skills: [
      {
        name: "Flutter",
        icon: Flutter,
      },
      {
        name: "Dart",
        icon: Dart,
      },
      {
        name: "Firebase",
        icon: Firebase,
      },
    ],
  },

  {
    title: "Databases",
    image: Database,
    skills: [
      {
        name: "MongoDB",
        icon: MongoDB,
      },
      {
        name: "Firebase",
        icon: Firebase,
      },
    ],
  },
  {
    title: "Game Development",
    image: GameDev,
    skills: [
      {
        name: "Unity",
        icon: Unity,
      },
      {
        name: "CSharp",
        icon: CSharp,
      },
      {
        name: "PlayStore",
        icon: PlayStore,
      },
      {
        name: "Itch.IO",
        icon: ItchIO,
      },
      {
        name: "Visual Studio",
        icon: VS,
      },
    ],
  },
  {
    title: "Designing",
    image: Designing,
    skills: [
      {
        name: "Figma",
        icon: Figma,
      },
      {
        name: "Dribbble",
        icon: Dribbble,
      },
      {
        name: "Behance",
        icon: Behance,
      },
      {
        name: "Pixels",
        icon: Pixels,
      },
      {
        name: "Unsplash",
        icon: Unsplash,
      },
    ],
  },
];
