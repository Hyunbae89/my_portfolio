import React from "react";
import Carousel from "react-bootstrap/Carousel";
import IMG_1233 from "../../image/IMG_1233.JPG";
import IMG_1234 from "../../image/IMG_1234.JPG";

export class MainBoard extends React.Component{


    render() {
        return(
            <div className='container-fluid'>
                <div className="row">
                    <div className='pt-4'>
                        <Carousel fade className={"testsize"}>
                            <Carousel.Item >
                                <img
                                      className="d-block w-100"
                                      src={IMG_1233}
                                      alt="First slide"
                                    />
                                    <Carousel.Caption>
                                      <h3>First slide label</h3>
                                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={IMG_1234}
                                  alt="Second slide"
                                />

                                <Carousel.Caption>
                                  <h3>Second slide label</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                              </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
                        <div className='row pb-4'>

                            <div className='col-md-3'>
                                <div className='card text-center'>
                                    <div className="card-header">
                                        title
                                    </div>
                                    <img src="" alt=""/>
                                    <div className='card-body'>
                                        <blockquote className={'blockquote'}>
                                            <div className='card-text'>
                                            text area
                                        </div>
                                        <footer className={'blockquote-footer'}>someone else</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='card text-center'>
                                    <div className="card-header">
                                        title
                                    </div>
                                    <img src="" alt=""/>
                                    <div className='card-body'>
                                        <blockquote className={'blockquote'}>
                                            <div className='card-text'>
                                            text area
                                        </div>
                                        <footer className={'blockquote-footer'}>someone else</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='card text-center'>
                                    <div className="card-header">
                                        title
                                    </div>
                                    <img src="" alt=""/>
                                    <div className='card-body'>
                                        <blockquote className={'blockquote'}>
                                            <div className='card-text'>
                                            text area
                                        </div>
                                        <footer className={'blockquote-footer'}>someone else</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='card text-center'>
                                    <div className="card-header">
                                        title
                                    </div>
                                    <img src="" alt=""/>
                                    <div className='card-body'>
                                        <blockquote className={'blockquote'}>
                                            <div className='card-text'>
                                            text area
                                        </div>
                                        <footer className={'blockquote-footer'}>someone else</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pb-4">
                            <div className="col-md-4">
                                <button className='btn btn-secondary btn-lg btn-block'>test</button>
                            </div>
                            <div className="col-md-4">
                                <button className='btn btn-secondary btn-lg btn-block'>test</button>
                            </div>
                            <div className="col-md-4">
                                <button className='btn btn-secondary btn-lg btn-block'>test</button>
                            </div>
                        </div>
                    </div>
        );
    }
}
export default MainBoard;