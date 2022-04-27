import react from 'react';

function Aboutus() {
    return ( 
        <div>
            <section className='py-4 bg-primary'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home/About US
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section bg-c-light border-bottom'>
                <div className="container">
                    <h5 className="min-heading">Our Company</h5>
                    {/* <h5>Our Company</h5> */}
                    <div className="underline"></div>
                    <p>
                        Lorem Ipsum is simply dumb text of the printing era
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Aboutus;