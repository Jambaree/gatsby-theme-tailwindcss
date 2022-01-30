import React from "react"
import { Hero1, Hero2, Hero3 } from "@jambaree/gatsby-theme-tailwindcss"
import Layout from "../layout"

import { ChartBarIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline"

const navigation = [
  { name: "Poop", href: "#" },
  { name: "Peep", href: "#" },
  { name: "Cats", href: "#" },
  { name: "Dogs", href: "#" },
]

const features = [
  {
    name: "Poopybum",
    href: "#",
    description: "Get a better understanding of poopy bums",
    icon: ChartBarIcon,
  },
]

const callsToAction = [
  { name: "Contact Poopybums", href: "#", icon: PhoneIcon },
]

const resources = [
  {
    name: "Poop Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Poop Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Poop Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Poop Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
]

const recentPosts = [
  { id: 1, name: "Boost your poop rate", href: "#" },
  { id: 2, name: "Mostly dogs", href: "#" },
  { id: 3, name: "Mostly cats", href: "#" },
  { id: 4, name: "Cats and dogs", href: "#" },
]

// import HomeLanding from "../components/HomeLanding"
function IndexPage() {
  return (
    <Layout class="bg-white">
      <Hero2 navigation={navigation} />
      <Hero1 navigation={navigation} />
      <Hero3
        features={features}
        callsToAction={callsToAction}
        resources={resources}
        recentPosts={recentPosts}
      />
    </Layout>
  )
}

export default IndexPage
