import {
  Home,
  HeartHandshake,
  GalleryHorizontal,
  PhoneCall,
  BookOpen,
  MapPinned,
  LayoutDashboard,
} from "lucide-react";

export const headerText = [
  {
    text: "Home",
    icon: <Home className="h-5 w-5" />,
    url: "/",
  },
  {
    text: "Services",
    icon: <BookOpen className="h-5 w-5" />,
    url: "/services",
  },
  {
    text: "About",
    icon: <MapPinned className="h-5 w-5" />,
    url: "/about",
  },
  {
    text: "Adopt",
    icon: <HeartHandshake className="h-5 w-5" />,
    url: "/adopt",
  },
  {
    text: "Gallery",
    icon: <GalleryHorizontal className="h-5 w-5" />,
    url: "/galery",
  },
  {
    text: "Contact",
    icon: <PhoneCall className="h-5 w-5" />,
    url: "/contact",
  },
  {
    text: "Admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
    url: "/admin",
  },
];
