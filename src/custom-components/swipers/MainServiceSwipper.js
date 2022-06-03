import '@styles/react/libs/swiper/swiper.scss'
import SwiperResponsive from "../../views/extensions/swiper/SwiperResponsive"
import {Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Input} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {useState} from "react"
import Avatar from "../../@core/components/avatar"
// eslint-disable-next-line no-unused-vars
import logo from "../../assets/custom_images/logo.png"

// eslint-disable-next-line no-unused-vars
const MainServiceSwipper = ({isRtl, count, allSubServices}) => {

    // eslint-disable-next-line no-unused-vars
    const {singleSubLoad} = useSelector(state => state.mainServiceReducer)
    // eslint-disable-next-line no-unused-vars
    const [thumbsSwiper, setThumbsSwiper] = useState(null)


    const history = useHistory()

    // eslint-disable-next-line no-unused-vars
    const getImageArray = (e) => {
        console.log(e)
        return [e?.image?.image1, e?.image?.image2, e?.image?.image3]
    }

    // eslint-disable-next-line no-unused-vars
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

    return <div className="m-0 p-0 bg-light">
        <div className="m-0 p-0">
            <div className="d-flex flex-wrap">
                {
                    !singleSubLoad && allSubServices.map(e => {
                        return <div className="sales-card bg-light cursor-pointer mr-3">
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
                                    <div className="m-1">
                                        <div className="mb-1 d-flex align-items-center">
                                            <div>
                                                <Avatar className="bg-dark" img={"https://static.vecteezy.com/system/resources/thumbnails/007/249/604/small_2x/led-blue-glow-neon-font-realistic-neon-explosion-letter-t-alphabet-of-night-show-among-the-stars-illustration-uppercase-font-3d-render-isolated-on-white-background-vector.jpg"}/>
                                            </div>
                                            <div className="ml-1 f-Staatliches">
                                                <p className="m-0 p-0 text-small">Talent zea</p>
                                                <p className="m-0 p-0 text-silver text-small-extra">Premium seller</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="f-Staatliches text-medium-extra text-black-c">{e?.mainTopic}</h4>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter className="d-flex justify-content-end">
                                    <p className="text-small-xxx font-bold">STARTING AT <span className="text-medium-extra text-black">${e.price}</span></p>
                                </CardFooter>
                            </Card>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default MainServiceSwipper