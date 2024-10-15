import { blogImage, comprehensiveService, customerService, gpsIcon, pricing, servicesBusinesses, servicesHomeOwners, servicesManager, servicesRenters } from "../assets";

export const navHeaders = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
      children: [
        {
            label: "Service-1",
            link: "/service1",
        }
      ]
    },
    {
      label: "More",
      link: "/More",
      children: [
        {
            label: "More-1",
            link: "/more1",
        }
      ]
    },
    {
        label: "Contact",
        link: "/contact",
      },
  ];

  export const whyChooseUs = [
    {
        id: "benefit-1",
        title: "Exceptional Customer Service",
        image: customerService,
        text: "We prioritize customer satisfaction by offering friendly, professional service. Our team is dedicated to making your moving experience as stress-free as possible.",
    },
    {
        id: "benefit-2",
        title: "Competitive Pricing",
        image: pricing,
        text: "We offer competitive rates for our services without compromising on quality. Get a high-value service at a price that fits your budget.",
    },
    {
        id: "benefit-3",
        title: "GPS Tracking",
        image: gpsIcon,
        text: "We provide real-time tracking of your belongings, giving you peace of mind during the moving process.",
    },
    {
        id: "benefit-4",
        title: "Comprehensive Services",
        image: comprehensiveService,
        text: "In addition to moving, we provide cleaning services to ensure your new space is spotless and ready for you to move in.",
    }
  ]

  export const ourServices = [
    {
        id: "service-1",
        title: "HOMEOWNERS",
        image: servicesHomeOwners,
        text: "Whether moving across town or to a new state, we help homeowners transition smoothly.",
    },
    {
        id: "service-2",
        title: "RENTERS",
        image: servicesRenters,
        text: "We assist renters with their moves, ensuring they leave their rental properties clean and in good condition.",
    },
    {
        id: "service-3",
        title: "BUSINESSES",
        image: servicesBusinesses,
        text: "Our commercial moving services help businesses relocate with minimal disruption.",
    },
    {
        id: "service-4",
        title: "PROPERTY MANAGERS",
        image: servicesManager,
        text: "We partner with property managers to offer seamless moving services for their tenants.",
    },
  ]

  export const blogPosts = [
    {
        id: "post-1",
        date: "JULY 10, 2024",
        image: blogImage,
        title: "Settling into a new home: Strategies for an effortless movement , hassle free.",
    },
    {
        id: "post-2",
        date: "JULY 10, 2024",
        image: blogImage,
        title: "Settling into a new home: Strategies for an effortless movement , hassle free.",
    },
    {
        id: "post-3",
        date: "JULY 10, 2024",
        image: blogImage,
        title: "Settling into a new home: Strategies for an effortless movement , hassle free.",
    },
  ]

  export const residentailMovingLinkFooter = [
    {
        label: "Complete Packing",
        link: "#",
    },
    {
        label: "Loading and Unloading",
        link: "#",
    },
    {
        label: "Transportation",
        link: "#",
    },
    {
        label: "Unpacking Services",
        link: "#",
    },
    {
        label: "Commercial Moving",
        link: "#",
    },
    {
        label: "Office and Business Relocation",
        link: "#",
    },
    {
        label: "Packing and Transportation",
        link: "#",
    },
    {
        label: "Setup Services",
        link: "#",
    },
  ]

export const specialtyMovesFooterLink =
[
    {
        label: "Delicate Items",
        link: "#",
    },
    {
        label: "Heavy Furniture",
        link: "#",
    },
    {
        label: "Cleaning Services",
        link: "#",
    },
    {
        label: "Post-Move Cleaning",
        link: "#",
    },
]

export const quickLinkFooterLink =
[
    {
        label: "About Us",
        link: "#",
    },
    {
        label: "FAQ",
        link: "#",
    },
    {
        label: "Blog",
        link: "#",
    },
    {
        label: "Privacy Policy",
        link: "#",
    },
    {
        label: "Term of Service",
        link: "#",
    },
    {
        label: "SiteMaps",
        link: "#",
    },
]