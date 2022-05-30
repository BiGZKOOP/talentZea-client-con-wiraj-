import '@styles/react/libs/swiper/swiper.scss'
import SwiperResponsive from "../../views/extensions/swiper/SwiperResponsive"
import {Card, CardBody, CardHeader, CardTitle, Col, Input} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {useSelector} from "react-redux"
import OurWorkMainService from "../MainService/OurWorkMainService"
import {useHistory} from "react-router-dom"
import {useState} from "react"


// eslint-disable-next-line no-unused-vars
const MainServiceSwipper = ({isRtl, count}) => {

    // eslint-disable-next-line no-unused-vars
    const {singleSubService, allSubServices, singleSubLoad} = useSelector(state => state.mainServiceReducer)
    // eslint-disable-next-line no-unused-vars
    const [thumbsSwiper, setThumbsSwiper] = useState(null)


    const history = useHistory()

    // eslint-disable-next-line no-unused-vars
    const getImageArray = (e) => {
        console.log(e)
        return [e?.image?.image1, e?.image?.image2, e?.image?.image3]
    }

    const params = {
        className: 'swiper-gallery',
        slidesPerView: count,
        watchSlidesProgress: true,
        freeMode: true,
        spaceBetween: 50,
        pagination: {
            clickable: true
        },
        thumbs: { swiper: thumbsSwiper },
        breakpoints: {
            1024: {
                slidesPerView: count,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
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

    // eslint-disable-next-line no-unused-vars
    const paramsThumbs = {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true
    }

    return <div className="m-0 p-0 bg-light">
        <div className="m-0 p-0">
            <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
                {
                    !singleSubLoad && allSubServices.map(e => {
                        return <SwiperSlide className="sales-card bg-light cursor-pointer">
                            <Card
                                onClick={() => {
                                    history.push(`/sub-service/${e?._id}`)
                                }}
                                className="sales-card m-2 bg-semi-dark m-0 p-0 bg-light">
                                <CardBody className="p-0">
                                    <div className="w-100">
                                        {/*<OurWorkMainService count={1} images={getImageArray(e)}/>*/}
                                        <img src={e?.image?.image1} width="100%" height="200px" className="object-fit"/>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between m-1">
                                        <div>
                                            <h4 className="f-Londrina text-black-c">{e?.mainTopic}</h4>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...paramsThumbs}>
                {
                    !singleSubLoad && allSubServices.map(e => {
                        return <SwiperSlide className="sales-card bg-light cursor-pointer opacity-75">
                            <Card
                                className="sales-card m-2 bg-semi-dark m-0 p-0 bg-light clickable">
                                <CardBody className="p-0">
                                    <div className="w-100">
                                        <img src={e?.image?.image1} width="100%" height="80px" className="object-fit"/>
                                    </div>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    </div>
}

export default MainServiceSwipper