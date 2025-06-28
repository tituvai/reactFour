import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <>
   <section className='py-8'>
     <Container>
        <Flex className={'justify-between'}>
            <div className="">
                <Image imgSrc={logo}/>
            </div>
            <div className="">
                <ul className='flex gap-10'>
                    <li className='text-sm font-dma text-menuC hover:text-menuH font-bold cursor-pointer'>Home</li>
                    <li className='text-sm font-dma text-menuC hover:text-menuH font-bold cursor-pointer'>Shop</li>
                    <li className='text-sm font-dma text-menuC hover:text-menuH font-bold cursor-pointer'>About</li>
                    <li className='text-sm font-dma text-menuC hover:text-menuH font-bold cursor-pointer'>Contacts</li>
                    <li className='text-sm font-dma text-menuC hover:text-menuH font-bold cursor-pointer'>Journal</li>
                </ul>
            </div>
            <div className=""></div>
        </Flex>
    </Container>
   </section>
    </>
  )
}

export default Header