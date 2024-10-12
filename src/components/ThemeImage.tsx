'use client'
import { cn } from '@/utils/cn'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FC } from 'react'

interface ThemeImageProps {
  src?: string
  srcLight?: string
  srcDark?: string
  classname?: string
  classnameLight?: string
  classnameDark?: string
  alt: string
  width: number
  height: number
}

const ThemeImage: FC<ThemeImageProps> = ({
  src,
  srcLight,
  srcDark,
  classname,
  classnameLight,
  classnameDark,
  alt,
  width,
  height,
}) => {
  const { theme } = useTheme()
  const imageSrc = theme === 'dark' ? srcDark || src : srcLight || src
  const imageClassname =
    theme === 'dark' ? cn(classnameDark, classname) : cn(classnameLight, classname)

  return (
    <Image src={imageSrc!} alt={alt} width={width} height={height} className={imageClassname} />
  )
}

export default ThemeImage
