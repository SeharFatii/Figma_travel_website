"use client"

import React from "react"
import Image from "next/image"
import { TextScroll } from "@/components/ui/text-scroll"

import img1 from "@/public/pic1.png"
import img2 from "@/public/pic2.png"
import img3 from "@/public/pic3.png"

export function TextScrollDemo() {
  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <TextScroll
        default_velocity={2}
        className="flex gap-12 items-center"
        text={
          <>
            <Image src={img1} alt="Image 1" width={80} height={80} />
            <Image src={img2} alt="Image 2" width={80} height={80} />
            <Image src={img3} alt="Image 3" width={80} height={80} />
          </>
        }
      />
    </div>
  )
}
