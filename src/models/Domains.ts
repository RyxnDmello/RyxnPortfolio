import { IDomain } from "../interfaces/Domain";

import react from "../images/skills/react.svg";
import typescript from "../images/skills/typescript.svg";
import javascript from "../images/skills/javascript.svg";
import bootstrap from "../images/skills/bootstrap.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";

import node from "../images/skills/node.svg";
import express from "../images/skills/express.svg";
import sockets from "../images/skills/sockets.svg";
import mongoose from "../images/skills/mongoose.svg";
import nodemon from "../images/skills/nodemon.svg";
import dotenv from "../images/skills/dotenv.svg";

import flutter from "../images/skills/flutter.svg";
import dart from "../images/skills/dart.svg";

import mongodb from "../images/skills/mongodb.svg";
import firebase from "../images/skills/firebase.svg";

import figma from "../images/skills/figma.svg";
import dribbble from "../images/skills/dribbble.svg";
import behance from "../images/skills/behance.svg";
import unsplash from "../images/skills/unsplash.svg";
import pixels from "../images/skills/pixels.svg";

export const domains: IDomain[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
      {
        name: "Javascript",
        icon: javascript,
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Node",
        icon: node,
      },
      {
        name: "Express",
        icon: express,
      },
      {
        name: "Sockets",
        icon: sockets,
      },
      {
        name: "Mongoose",
        icon: mongoose,
      },
      {
        name: "Nodemon",
        icon: nodemon,
      },
      {
        name: "Dotenv",
        icon: dotenv,
      },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      {
        name: "Flutter",
        icon: flutter,
      },
      {
        name: "Dart",
        icon: dart,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
    ],
  },
  {
    title: "Database & Libraries",
    skills: [
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
    ],
  },
  {
    title: "Designing",
    skills: [
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "Dribbble",
        icon: dribbble,
      },
      {
        name: "Behance",
        icon: behance,
      },
      {
        name: "Pixels",
        icon: pixels,
      },
      {
        name: "Unsplash",
        icon: unsplash,
      },
    ],
  },
];
