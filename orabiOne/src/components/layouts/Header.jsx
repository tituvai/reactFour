import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
    <section className='py-7'>
        <Container>
            <Flex className={'justify-between'}>
                <div className="">
                    <Image imgSrc={logo}/>
                </div>
                <div className="">
                    <ul className='flex items-center gap-x-10'>
                        <li className='text-sm text-menuC font-dm font-bold hover:text-menuHc cursor-pointer'>Home</li>
                        <li className='text-sm text-menuC font-dm font-bold hover:text-menuHc cursor-pointer'>Shop</li>
                        <li className='text-sm text-menuC font-dm font-bold hover:text-menuHc cursor-pointer'>About</li>
                        <li className='text-sm text-menuC font-dm font-bold hover:text-menuHc cursor-pointer'>Contacts</li>
                        <li className='text-sm text-menuC font-dm font-bold hover:text-menuHc cursor-pointer'>Journal</li>
                    </ul>
                </div>
                <div className="">
                  
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Header