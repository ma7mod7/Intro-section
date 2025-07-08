import { Button } from '../Ui/Button'
import HeroImg from "../intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png"
import HeroImgMobile from "../intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png"

import DataBiz from "../intro-section-with-dropdown-navigation-main/images/client-databiz.svg"
import Audio from "../intro-section-with-dropdown-navigation-main/images/client-audiophile.svg"
import Meet from "../intro-section-with-dropdown-navigation-main/images/client-meet.svg"
import Maker from "../intro-section-with-dropdown-navigation-main/images/client-maker.svg"



export const Hero = () => {
  return (
    <div className='flex justify-center items-center xl:gap-[300px] md:gap-[100px] w-full max-md:flex-col-reverse'>
      <div className=' md:w-[38%] flex flex-col items-start max-md:items-center  gap-10'> 
        <h1 className='lg:text-8xl font-bold md:text-5xl md:mt-20 text-4xl '>
          <span className='md:block'>
            Make
          </span>
          remote work
        </h1>
        <p className='text-gray-400 p-2 font-medium max-md:text-center'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button className="border-[1px] border-gray-600 rounded-2xl px-10 py-3 text-center hover:bg-black hover:text-white ">
          Learn more
        </Button>
        <div className='flex items-center gap-10 md:mt-[40px] flex-wrap max-md:justify-center'>
          <img src={DataBiz} />
          <img src={Audio} />
          <img src={Meet} />
          <img src={Maker} />
        </div>
      </div>
      <div >
        <img src={HeroImg} alt="Hero img" className='lg:w-[520px] md:w-[350px] max-md:hidden mt-10' />
        <img src={HeroImgMobile} alt="Hero img" className=' md:hidden mb-8' />

      </div>
    </div>
  )
}
