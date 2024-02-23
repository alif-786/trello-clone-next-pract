import { Medal } from 'lucide-react'
import Link from 'next/link'
import localFont from 'next/font/local'


import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const headingFont = localFont({
    src:'../../public/fonts/font.woff2'
})

const MarketingPage = () => {
  return (
      <div className='flex items-center justify-center flex-col'>
          <div className={cn('flex items-center justify-center flex-col',headingFont.className)}>
              <div className='mb-4 flex  items-center p-4 bg-amber-100 text-amber-700 shadow-md rounded-full uppercase border'>
                  <Medal className='h-6 w-6 mr-2'/>
                  no 1 task Management
              </div>
                  <h1 className='text-3xl md:text-6xl mb-6 text-neutral-700 text-center'>Taskify help team move</h1>
                  <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-700 px-4 p-2 w-fiit rounded-md text-white pb-4'>
                      work forward
                  </div>
          </div>
          <div className='text-sm md:text-xl max-w-xs md:max-w-2xl mx-auto text-center mt-4 text-neutral-400'>
              collaborate, manage project and reach new productivity peaks. From high rises to the home office, the way your team work is unique - Accomplish all it with Taskify
          </div>
          <Button className='mt-4' size={'lg'} asChild>
              <Link href="/sign-up">
                Get taskify for free
              </Link>
          </Button>
    </div>
  )
}

export default MarketingPage