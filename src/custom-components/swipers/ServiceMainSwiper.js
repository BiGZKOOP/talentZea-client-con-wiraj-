import '@styles/react/libs/swiper/swiper.scss'
import SwiperResponsive from "../../views/extensions/swiper/SwiperResponsive"
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {useEffect} from "react"
import {scrollToTopUTIL} from "../../utility/Utils"


const ServiceMainSwiper = ({ isRtl, images, count }) => {

    useEffect(() => {
        console.log(images)
        scrollToTopUTIL()
    }, [])

    const params = {
        slidesPerView: count,
        spaceBetween: 50,
        pagination: {
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: count,
                spaceBetween: 40
            },
            768: {
                slidesPerView: count,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }

    return <div className="m-0 p-0">
        <CardBody className="m-0 p-0">
            <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
                {
                    images?.map((image, index) => {
                        return <SwiperSlide>
                            {
                                image ? <img src={image} height="360px" width="360px" alt={`swiper ${index}`} className='object-fit'/> : <></>
                            }
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </CardBody>
    </div>
}

export default ServiceMainSwiper