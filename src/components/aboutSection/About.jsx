import React from 'react'
import Container from '../Container'
import women from '../../assets/about.jpg'

const About = () => {
    return (
        <div className='py-[30px] pb-[80px] ' style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #d9d9d9 40%, #000000 100%)'
        }}
        >
            <div className="pt-14"></div>
            <Container>
                <div className="flex justify-between pb-[50px]">
                    <div className="mt-28 w-[7%] h-[0%] border boder-[1px] border-[black]">
                        <div className="py-2 border-b-[1px] border-black text-center">
                            <a className='font-bold  uppercase'>Home</a>
                        </div>
                        <div className="py-3 border-b-[1px] border-black text-center">
                            <a className='font-bold  uppercase'>About</a>
                        </div>
                        <div className="py-3 border-b-[1px] border-black text-center">
                            <a className='font-bold  uppercase'>Products</a>
                        </div>
                        <div className="py-3 border-b-[1px] border-black text-center">
                            <a className='font-bold  uppercase'>Shop</a>
                        </div>
                        <div className="py-3 border-b-[1px] border-black text-center">
                            <a className='font-bold  uppercase'>Services</a>
                        </div>
                        <div className="py-3 border-b-[1px] border-black text-center">
                            <a className='font-bold  uppercase'>Contact</a>
                        </div>
                    </div>
                    <div className="md:w-[18vw] ml-[140px] ">
                        <img src={women} className='' alt="" />
                    </div>
                    <div className="w-[40%] pt-[80px]">
                        <h3 className='text-[52px] font-bold uppercase'>Power Of Make Up</h3>
                        <p className='w-[90%] pb-8 font-bold
                        '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione neque sapiente accusamus cupiditate quam voluptatibus molestias possimus, repellendus ipsa reiciendis porro commodi inventore? Maxime quisquam a unde est officia provident magnam ut cupiditate repellat rem, nihil nobis voluptatum. Unde modi aspernatur quia. Reprehenderit reiciendis maxime voluptas aut suscipit quidem enim doloremque, iusto quia ab consequuntur!</p>
                        <a className='text-white bg-black px-8 py-4'>Learn More</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
