import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { HiMiniBars2 } from "react-icons/hi2";
import Heading from '../Heading';
import { FaSearch, FaUserAlt, FaCaretDown, FaShoppingCart } from "react-icons/fa";


const Search = () => {
  return (
    <>
        <section className='py-8 bg-searchBg'>
           <Container>
            <Flex className={'justify-between'}>
                <div className="flex items-center gap-3">
                    <HiMiniBars2 className='text-xl' />
                    <Heading className={'text-sm text-menuHc font-dm'} text={'Shop by Category'} as={'h4'}/>
                </div>
                <div className="relative">
                    <input className='w-[600px] h-[50px] pl-5 bg-white outline-0 placeholder:text-sm placeholder:text-searchC placeholder:font-dm' type="text" placeholder='Search Products' />
                    <FaSearch className='absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-xl' />
                </div>
                <div className="">
                    <Flex>
                        <FaUserAlt className='text-xl cursor-pointer'/>
                        <FaCaretDown className='text-xl cursor-pointer'/>
                        <FaShoppingCart className='ml-5 text-xl cursor-pointer'/>
                    </Flex>
                </div>
            </Flex>
           </Container>
        </section>
    </>
  )
}

export default Search