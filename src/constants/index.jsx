import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const navItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about-us" }, // If you have an About Us page
];





export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interactive Parking Layout Designer",
    description:
      "Design and customize parking layouts effortlessly using a simple drag-and-drop interface",
  },
  {
    icon: <GlobeLock />,
    text: "Live Parking Status",
    description:
      "Monitor real-time parking availability and vehicle movements for seamless operations.",
  },
  {
    icon: <ShieldHalf />,
    text: "Cross-Platform Accessibility",
    description:
      "Access and control your smart parking system anytime, anywhere, across multiple devices.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pre-Built Parking Configurations",
    description:
      "Set up quickly with ready-to-use templates for various parking scenarios and facilities.",
  },
  {
    icon: <PlugZap />,
    text: "Team Collaboration Features",
    description:
      "Enable teams to coordinate and manage parking operations effectively in real-time.",
  },
  {
    icon: <Fingerprint /> ,
    text: "Smart Analytics Dashboard",
    description:
      "Analyze parking trends, peak usage, and revenue insights to make data-driven decisions.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "ORION MALL",
    price: "BANGALORE",
    features: [
      "AVAILABLE WITH CHARGING CENTERS",
      "FREE CAR WASHES",
      "GAME ZONE",
      "MOVIES THEATRE",
    ],
  },
  {
    title: "MANTRI MALL",
    price: "BANGALORE",
    features: [
      "AVAILABLE WITH CHARGING CENTERS",
      "FREE CAR WASHES",
      "GAME ZONE",
      "MOVIES THEATRE",
    ],
  },
  {
    title: "MALL OF ASIA",
    price: "BANGALORE",
    features: [
      "AVAILABLE WITH CHARGING CENTERS",
      "FREE CAR WASHES",
      "GAME ZONE",
      "MOVIES THEATRE",
    ],
  },
  {
    title: "LULU MALL",
    price: "BANGALORE",
    features: [
      "AVAILABLE WITH CHARGING CENTERS",
      "FREE CAR WASHES",
      "GAME ZONE",
      "MOVIES THEATRE",
    ],
  },
  {
    title: "BHARATIYA MALL",
    price: "BANGALORE",
    features: [
      "AVAILABLE WITH CHARGING CENTERS",
      "FREE CAR WASHES",
      "GAME ZONE",
      "MOVIES THEATRE",
    ],
  },
  {
    title: "GALLERIA MALL",
    price: "BANGALORE",
    features: [
      "AVAILABLE WITH CHARGING CENTERS",
      "FREE CAR WASHES",
      "GAME ZONE",
      "MOVIES THEATRE",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
