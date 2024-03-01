import Link from "next/link"
import Image from "next/image"
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const headingFont = localFont({
    src: '../public/fonts/font.woff2',

})

const Logo = () => {
  return (
      <Link href="/">
         <div className='hover:opacity-75 hidden md:flex items-center gap-x-2'>
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <p className={cn('text-neutral-700 text-2xl pb-1',headingFont.className)}>Taskify</p>
    </div></Link>
  )
}

export default Logo