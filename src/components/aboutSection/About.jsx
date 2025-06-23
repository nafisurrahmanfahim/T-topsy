import React from 'react'
import Container from '../Container'
import women from '../../assets/about.jpg'

const About = () => {
    return (
        <div>
            <div className="pt-14"></div>
            <Container>
                <div className="flex justify-between pb-[50px]">
                    <div className="md:w-[20vw] ml-[140px]">
                        <img src={women} className='' alt="" />
                    </div>
                    <div className="w-[50%] pt-[80px]">
                        <h3 className='text-[52px] font-bold uppercase'>Power Of Make Up</h3>
                        <p className='w-[90%] pb-8
                        '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione neque sapiente accusamus cupiditate quam voluptatibus molestias possimus, repellendus ipsa reiciendis porro commodi inventore? Maxime quisquam a unde est officia provident magnam ut cupiditate repellat rem, nihil nobis voluptatum. Unde modi aspernatur quia. Reprehenderit reiciendis maxime voluptas aut suscipit quidem enim doloremque, iusto quia ab consequuntur!</p>
                        <a className='text-white bg-black px-8 py-4'>Learn More</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
