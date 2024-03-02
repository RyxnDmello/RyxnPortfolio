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
import Explore from "../images/buttons/explore.svg";

export const webApplications: IProject[] = [
  {
    image: Codexo,
    title: "Codexo",
    about: "Get the latest insights on leading technologies and frameworks",
    explore: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-02",
        label: "Source Code",
        icon: GitHub,
      },
      {
        url: "https://codexo-v76g.onrender.com",
        platform: "website",
        icon: Explore,
      },
    ],
  },
  {
    image: TaskTonic,
    title: "TaskTonic",
    about: "Stay organized by creating and managing your tasks efficiently",
    explore: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-03",
        label: "Source Code",
        icon: GitHub,
      },
      {
        url: "https://codexo-v76g.onrender.com",
        platform: "website",
        icon: Explore,
      },
    ],
  },
  {
    image: CloudSense,
    title: "CloudSense",
    about: "Experience realtime weather forecast for your favorite cities",
    explore: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-04",
        label: "Source Code",
        icon: GitHub,
      },
      {
        url: "https://codexo-v76g.onrender.com",
        platform: "website",
        icon: Explore,
      },
    ],
  },
  {
    image: CyberVerse,
    title: "CyberVerse",
    about: "Explore, customize, and buy the latest consoles and games",
    explore: [
      {
        url: "https://github.com/RyxnDmello/WebApp-NodeJs-05",
        label: "Source Code",
        icon: GitHub,
      },
      {
        url: "https://codexo-v76g.onrender.com",
        platform: "website",
        icon: Explore,
      },
    ],
  },
];

export const mobileApplications: IProject[] = [
  {
    image: TaskFlow,
    title: "TaskFlow",
    about: "Efficiently create, manage, and analyze your tasks with ease",
    explore: [
      {
        url: "https://github.com/RyxnDmello/flutter_firebase_01",
        label: "Source Code",
        icon: GitHub,
      },
    ],
  },
  {
    image: SkySync,
    title: "SkySync",
    about: "Realtime weather forecast with precise graphical analysis",
    explore: [
      {
        url: "https://github.com/RyxnDmello/flutter_firebase_02",
        label: "Source Code",
        icon: GitHub,
      },
    ],
  },
  {
    image: PixelFlix,
    title: "PixelFlix",
    about: "Explore, save, and share your favorite movies and TV series",
    explore: [
      {
        url: "https://github.com/RyxnDmello/flutter_firebase_03",
        label: "Source Code",
        icon: GitHub,
      },
    ],
  },
];

export const videoGames: IProject[] = [
  {
    image: GeoMadness,
    title: "GeometricMadness",
    about: "Escape all kinds of obstacles in this blooming world of madness",
    explore: [
      {
        url: "https://github.com/RyxnDmello/GameDev-Unity-01",
        label: "Source Code",
        icon: GitHub,
      },
      {
        url: "https://shadowlightworld.itch.io/geometricmadness",
        platform: "desktop",
        icon: ItchIO,
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.ShadowLight.GeometricMadness&hl=en_IN&gl=US",
        platform: "android",
        icon: Android,
      },
    ],
  },
  {
    image: HyperCrash,
    title: "HyperCrash",
    about: "Destroy treacherous enemies with powerful weapons and skills",
    explore: [
      {
        url: "https://github.com/RyxnDmello/GameDev-Unity-02",
        label: "Source Code",
        icon: GitHub,
      },
      {
        url: "https://shadowlightworld.itch.io/hypercrash",
        platform: "desktop",
        icon: ItchIO,
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.ShadowLight.HyperCrash&hl=en_IN&gl=US",
        platform: "android",
        icon: Android,
      },
    ],
  },
];

export const projects: IProject[][] = [
  [...webApplications, ...mobileApplications, ...videoGames],
  [...webApplications],
  [...mobileApplications],
  [...videoGames],
];
