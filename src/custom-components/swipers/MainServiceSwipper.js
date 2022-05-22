import '@styles/react/libs/swiper/swiper.scss'
import SwiperResponsive from "../../views/extensions/swiper/SwiperResponsive"
import {Card, CardBody, CardHeader, CardTitle, Col, Input} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {useSelector} from "react-redux"
import OurWorkMainService from "../MainService/OurWorkMainService"
import {useHistory} from "react-router-dom"


// eslint-disable-next-line no-unused-vars
const MainServiceSwipper = ({isRtl, count}) => {

    // eslint-disable-next-line no-unused-vars
    const {singleSubService, allSubServices, singleSubLoad} = useSelector(state => state.mainServiceReducer)


    const history = useHistory()

    // eslint-disable-next-line no-unused-vars
    const getImageArray = (e) => {
        console.log(e)
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
                                        <img src={e?.image?.image1} width="270px" height="270px" className="object-fit"/>
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