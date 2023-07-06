import Image from 'next/image'
import pfp from '@/assets/pfp.png'
import { cvData } from '@/utils/cvData'
import Layout from '@/components/layout'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-5xl px-4 ">
        <div className="w-full py-8 sm:py-16 ">
          <div className=" relative flex items-center  pb-6 sm:pb-5">
            <div className="space-y-3">
              <div className="flex items-baseline">
                <p className=" w-full text-3xl font-bold text-black">Brendan Elton</p>
                <div className="absolute right-0  block h-20 w-20 flex-shrink-0 overflow-clip rounded-full  border border-white bg-white  ">
                  <Image className="h-20 w-20 " src={pfp} alt={''} />
                </div>
              </div>
              <div className="flex items-center space-x-1 text-lg">
                <a href={`mailto:${cvData.bio.contact.email}`} className="transition-200 flex cursor-pointer items-center space-x-1  py-1  underline-offset-4 hover:underline">
                  <div>Contact</div>
                </a>
                <div className=" text-black/30">〡</div>
                <a target="_blank" href={cvData.bio.contact.github} className="transition-200 flex cursor-pointer items-center space-x-1  py-1   underline-offset-4 hover:underline">
                  <div>Github</div>
                </a>
              </div>
              <div className="flex">
                <div className="text-base">{cvData.bio.about}</div>
              </div>
            </div>
          </div>

          {cvData.occupation.map((item, i) => (
            <div key={i} className="min-h-[140px] w-full space-y-4 border-t border-black/10 pb-6 pt-1 sm:flex sm:pb-0">
              <div className=" w-full ">
                <div className="flex items-center space-x-0.5">
                  <div className=" text-lg">{item.business}</div>
                  <div className=" text-black/30">〡</div>
                  <div className=" text-lg">{item.title}</div>
                </div>
                <div className="text-base text-black/50">{item.date}</div>
              </div>

              <div className=" w-full flex-col ">
                <div>{item.description}</div>
                {item.link && (
                  <div className="flex w-full pt-4 sm:pb-6 ">
                    <a target="_blank" href={item.link} className="transition-200  flex cursor-pointer items-center space-x-0.5 text-center hover:opacity-50">
                      <button className="underline underline-offset-4 ">View Site</button> <ArrowTopRightIcon className="h-4 w-4  " />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
