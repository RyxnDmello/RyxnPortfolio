import { Project } from "@interfaces/Project";

import Codexo from "@public/projects/codexo.png";
import TaskTonic from "@public/projects/tasktonic.png";
import CloudSense from "@public/projects/cloudsense.png";
import CyberVerse from "@public/projects/cyberverse.png";

import TaskFlow from "@public/projects/taskflow.png";
import SkySync from "@public/projects/skysync.png";
import PixelFlix from "@public/projects/pixelflix.png";

import GeometricMadness from "@public/projects/geometric.png";
import HyperCrash from "@public/projects/hyper.png";

import GitHub from "@public/buttons/github.svg";
import ItchIO from "@public/skills/itch.svg";
import Website from "@public/buttons/up.svg";

export const tabs: string[] = ["Latest", "Websites", "Applications", "Games"];

export const web: Project[] = [
  {
    image: CyberVerse,
    title: "CyberVerse",
    about: "Explore, customize, and buy the latest consoles and games.",
    links: [
      {
        url: "https://github.com/RyxnDmello/CyberVerse",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "#",
        platform: "website",
        icon: Website,
      },
    ],
  },
  {
    image: TaskTonic,
    title: "TaskTonic",
    about: "Stay organized by creating and managing your tasks efficiently.",
    links: [
      {
        url: "https://github.com/RyxnDmello/TaskTonic",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "#",
        platform: "website",
        icon: Website,
      },
    ],
  },
  {
    image: Codexo,
    title: "Codexo",
    about: "Get the latest insights on leading technologies and frameworks.",
    links: [
      {
        url: "https://github.com/RyxnDmello/Codexo",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "#",
        platform: "website",
        icon: Website,
      },
    ],
  },
  {
    image: CloudSense,
    title: "CloudSense",
    about: "Experience realtime weather forecast for your favorite cities.",
    links: [
      {
        url: "https://github.com/RyxnDmello/CloudSense",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "#",
        platform: "website",
        icon: Website,
      },
    ],
  },
];

export const mobile: Project[] = [
  {
    image: TaskFlow,
    title: "TaskFlow",
    about: "Efficiently create, manage, and analyze your tasks with ease.",
    links: [
      {
        url: "https://github.com/RyxnDmello/TaskFlow",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
    ],
  },
  {
    image: PixelFlix,
    title: "PixelFlix",
    about: "Explore, save, and share your favorite movies and TV series.",
    links: [
      {
        url: "https://github.com/RyxnDmello/PixelFlix",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
    ],
  },
  {
    image: SkySync,
    title: "SkySync",
    about: "Realtime weather forecast with precise graphical analysis.",
    links: [
      {
        url: "https://github.com/RyxnDmello/SkySync",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
    ],
  },
];

export const games: Project[] = [
  {
    image: GeometricMadness,
    title: "GeometricMadness",
    about: "Escape all kinds of obstacles in this blooming world of madness.",
    links: [
      {
        url: "https://github.com/RyxnDmello/GeometricMadness",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "https://shadowlightworld.itch.io/geometricmadness",
        platform: "desktop",
        icon: ItchIO,
      },
    ],
  },
  {
    image: HyperCrash,
    title: "HyperCrash",
    about: "Destroy treacherous enemies with powerful weapons and skills.",
    links: [
      {
        url: "https://github.com/RyxnDmello/HyperCrash",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "https://shadowlightworld.itch.io/hypercrash",
        platform: "desktop",
        icon: ItchIO,
      },
    ],
  },
];

export const catalogue: Project[][] = [
  [...web, ...mobile, ...games],
  [...web],
  [...mobile],
  [...games],
];
