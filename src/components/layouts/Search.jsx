import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Hadding from '../Hadding';
import { MdOutlineSearch } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Search = () => {
  return (
    <>
        <section className='bg-searchC py-7'>
            <Container>
                <Flex className={'justify-between'}>

                    <div className="flex gap-3 items-center">
                        <><HiMiniBars3BottomLeft /> <Hadding className={'text-sm text-menuH font-dma'} text={'Shop by Category'} as={'h3'}/>  </>
                    </div>
                    <div className="relative">
                        <input className='w-[600px] h-[50px] bg-white pl-5 outline-0 ' type="text" placeholder='Search Products ' />
                        <MdOutlineSearch className='absolute top-1/2 right-5 -translate-y-1/2 text-xl' />
                    </div>
                    <div className="flex items-center ">
                        <RiUser3Fill className='text-lg' />
                        <FaCaretDown className='text-lg' />
                        <FaShoppingCart className='ml-5 text-lg' />
                    </div>

                </Flex>
            </Container>
        </section>
    </>
  )
}

export default Search