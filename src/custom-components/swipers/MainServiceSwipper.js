import '@styles/react/libs/swiper/swiper.scss'
import SwiperResponsive from "../../views/extensions/swiper/SwiperResponsive"
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {useSelector} from "react-redux"
import OurWorkMainService from "../MainService/OurWorkMainService"
import {useHistory} from "react-router-dom"


// eslint-disable-next-line no-unused-vars
const MainServiceSwipper = ({isRtl, count}) => {

    const {mainServices, mainServicesLoad} = useSelector(state => state.loginReducer)

    const history = useHistory()

    const getImageArray = (e) => {

        return [e?.image?.image1, e?.image?.image2, e?.image?.image3]
    }

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

    return <div className="m-0 p-0 bg-light">
        <CardBody className="m-0 p-0">
            <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
                {
                    mainServicesLoad && mainServices?.map(e => {
                        return <SwiperSlide className="sales-card bg-light cursor-pointer">
                            <Card
                                onClick={() => {
                                    history.push(`/service/${e?._id}`)
                                }}
                                className="sales-card m-2 scalable bg-semi-dark m-0 p-0 bg-light">
                                <CardBody className="p-0">
                                    <div className="w-100">
                                        <OurWorkMainService count={1} images={getImageArray(e)}/>
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
        </CardBody>
    </div>
}

export default MainServiceSwipper