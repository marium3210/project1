import React from 'react'

import Card from './Components/Card'
const App = () => {
const posts = [
  {
    title: "Web Design",
    post: "Designs visually appealing and user-friendly websites.",
    tag1: "Landing Page",
    tag2: "Portfolio",
    tag3: "One Page",
    bgColor: "#DCEBFA",
    tagColor1: "#E6F1FB",
    tagColor2: "#D0E6F9",
    tagColor3: "#C4E0F8",
  },
  {
    title: "Graphic Design",
    post: "Creates striking visuals that communicate brand identity.",
    tag1: "Logo",
    tag2: "Packaging",
    tag3: "Branding",
    bgColor: "#F9C6C9",
    tagColor1: "#FCD6D9",
    tagColor2: "#FAC8CC",
    tagColor3: "#F8BDC2",
  },
  {
    title: "App Development",
    post: "Builds responsive and feature-rich mobile applications.",
    tag1: "iOS",
    tag2: "Android",
    tag3: "Cross-Platform",
    bgColor: "#E3F4E0",
    tagColor1: "#ECF9EA",
    tagColor2: "#DFF2D9",
    tagColor3: "#D3EBCB",
  },
  {
    title: "UI/UX Design",
    post: "Designs smooth and intuitive digital experiences.",
    tag1: "Wireframes",
    tag2: "Prototypes",
    tag3: "User Research",
    bgColor: "#FFF5D9",
    tagColor1: "#FFF9E6",
    tagColor2: "#FFF3CC",
    tagColor3: "#FFF0B3",
  },
  {
    title: "Copywriting",
    post: "Writes engaging copy that drives attention and sales.",
    tag1: "Blog Posts",
    tag2: "Ad Copy",
    tag3: "Product Descriptions",
    bgColor: "#E9E4FF",
    tagColor1: "#F2EEFF",
    tagColor2: "#DDD7FF",
    tagColor3: "#D1CCFF",
  },
  {
    title: "Digital Marketing",
    post: "Promotes brands through targeted online strategies.",
    tag1: "SEO",
    tag2: "Email",
    tag3: "Social Media",
    bgColor: "#F4EAF7",
    tagColor1: "#FAF1FB",
    tagColor2: "#F6E1F5",
    tagColor3: "#F0D7EE",
  },
  {
    title: "Video Editing",
    post: "Edits and enhances video content for visual impact.",
    tag1: "Reels",
    tag2: "Short Films",
    tag3: "YouTube",
    bgColor: "#CDEAF6",
    tagColor1: "#E3F4FA",
    tagColor2: "#D1EBF4",
    tagColor3: "#BFE2EF",
  },
  {
    title: "Photography",
    post: "Captures creative visuals that tell a story.",
    tag1: "Portraits",
    tag2: "Product",
    tag3: "Event",
    bgColor: "#F9EAD7",
    tagColor1: "#FDF4E5",
    tagColor2: "#FBEED1",
    tagColor3: "#F8E7BD",
  },
  {
    title: "3D Modeling",
    post: "Creates realistic 3D assets for games and visuals.",
    tag1: "Rendering",
    tag2: "Animation",
    tag3: "Texturing",
    bgColor: "#E4F1FC",
    tagColor1: "#EFF7FE",
    tagColor2: "#D9EFFF",
    tagColor3: "#CCE7FD",
  },
  {
    title: "Content Strategy",
    post: "Plans and manages content for consistent growth.",
    tag1: "Brand Voice",
    tag2: "Scheduling",
    tag3: "Analytics",
    bgColor: "#FFECEC",
    tagColor1: "#FFF4F4",
    tagColor2: "#FFE0E0",
    tagColor3: "#FFD6D6",
  },
];



  return (
    <div className='parent'>
   {
      posts.map(function(elem){
      return <Card tagColor1={elem.tagColor1} tagColor2={elem.tagColor2} tagColor3={elem.tagColor3} bgColor={elem.bgColor} title={elem.title} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} tag3={elem.tag3}/>

     })
   }

    </div>
  )
}   

export default App