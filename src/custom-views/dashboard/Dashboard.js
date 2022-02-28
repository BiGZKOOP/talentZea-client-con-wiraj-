import {Col, Row} from "reactstrap"
import FreeLancerSvg from "../../assets/custom_images/svg/FreeLancer.svg"
import "../../assets/css/dashboard.css"

const Dashboard = () => {

    return (
        <Row>
            <Row className="mt-lg-5">
                <Col className="d-center" lg={6} sm={12}>
                    <FreeLancerSvg/>
                </Col>
                <Col lg={6} sm={12} className="mt-5 mt-lg-0">
                    <h1 className="f-Londrina font-large-2 text-sm-c-center">We create memories here</h1>
                    <p className="text-medium f-shippori line-h-3 text-sm-c-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <Col className="d-flex d-center-sm">
                        <button className="btn btn-outline-primary mr-3 text-medium">
                            See our work
                        </button>
                        <button className="btn btn-danger mt-lg-0 text-medium">
                            Let's do a project
                        </button>
                    </Col>
                </Col>
            </Row>
        </Row>
    )
}

export default Dashboard