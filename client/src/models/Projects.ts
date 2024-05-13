import { IProject } from "../interfaces/Project";

import Codexo from "../images/projects/codexo.png";
import TaskTonic from "../images/projects/tasktonic.png";
import CloudSense from "../images/projects/cloudsense.png";
import CyberVerse from "../images/projects/cyberverse.png";

import TaskFlow from "../images/projects/taskflow.png";
import SkySync from "../images/projects/skysync.png";
import PixelFlix from "../images/projects/pixelflix.png";

import GeoMadness from "../images/projects/geomadness.png";
import HyperCrash from "../images/projects/hypercrash.png";

import GitHub from "../images/buttons/github.svg";
import ItchIO from "../images/skills/itch.svg";
import Android from "../images/skills/android.svg";
import Website from "../images/buttons/up.svg";

export const web: IProject[] = [
  {
    image: CyberVerse,
    title: "CyberVerse",
    about: "Explore, customize, and buy the latest consoles and games",
    links: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-05",
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
    about: "Stay organized by creating and managing your tasks efficiently",
    links: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-03",
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
    about: "Get the latest insights on leading technologies and frameworks",
    links: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-02",
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
    about: "Experience realtime weather forecast for your favorite cities",
    links: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-04",
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

export const mobile: IProject[] = [
  {
    image: TaskFlow,
    title: "TaskFlow",
    about: "Efficiently create, manage, and analyze your tasks with ease",
    links: [
      {
        url: "https://github.com/RyxnDmello/flutter_firebase_01",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
    ],
  },
  {
    image: PixelFlix,
    title: "PixelFlix",
    about: "Explore, save, and share your favorite movies and TV series",
    links: [
      {
        url: "https://github.com/RyxnDmello/flutter_firebase_03",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
    ],
  },
  {
    image: SkySync,
    title: "SkySync",
    about: "Realtime weather forecast with precise graphical analysis",
    links: [
      {
        url: "https://github.com/RyxnDmello/flutter_firebase_02",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
    ],
  },
];

export const games: IProject[] = [
  {
    image: GeoMadness,
    title: "GeometricMadness",
    about: "Escape all kinds of obstacles in this blooming world of madness",
    links: [
      {
        url: "https://github.com/RyxnDmello/GameDev-Unity-01",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "https://shadowlightworld.itch.io/geometricmadness",
        platform: "desktop",
        icon: ItchIO,
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.ShadowLight.GeometricMadness&hl=en_IN&gl=US",
        platform: "mobile",
        icon: Android,
      },
    ],
  },
  {
    image: HyperCrash,
    title: "HyperCrash",
    about: "Destroy treacherous enemies with powerful weapons and skills",
    links: [
      {
        url: "https://github.com/RyxnDmello/GameDev-Unity-02",
        text: "Source Code",
        platform: "source",
        icon: GitHub,
      },
      {
        url: "https://shadowlightworld.itch.io/hypercrash",
        platform: "desktop",
        icon: ItchIO,
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.ShadowLight.HyperCrash&hl=en_IN&gl=US",
        platform: "mobile",
        icon: Android,
      },
    ],
  },
];

export const catalogue: IProject[][] = [
  [...web, ...mobile, ...games],
  [...web],
  [...mobile],
  [...games],
];
