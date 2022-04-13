import '@styles/react/libs/swiper/swiper.scss'
import SwiperResponsive from "../../views/extensions/swiper/SwiperResponsive"
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {useEffect} from "react"
import {scrollToTopUTIL} from "../../utility/Utils"


const OurWorkMainService = ({ isRtl, images }) => {

    useEffect(() => {
        console.log(images)
        scrollToTopUTIL()
    }, [])

    const params = {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }

    return <div>
        <CardBody>
            <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
                {
                    images?.map((image, index) => {
                        return <SwiperSlide>
                            <img src={image} height="300px" width="100%" alt={`swiper ${index}`} className='object-fit'/>
                        </SwiperSlide>
                    })
                }
                {/*<SwiperSlide>*/}
                {/*    <img src={img4} alt='swiper 4' className='img-fluid'/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src={img5} alt='swiper 5' className='img-fluid'/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src={img6} alt='swiper 6' className='img-fluid'/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src={img7} alt='swiper 7' className='img-fluid'/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src={img8} alt='swiper 8' className='img-fluid'/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src={img9} alt='swiper 9' className='img-fluid'/>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </CardBody>
    </div>
}

export default OurWorkMainService