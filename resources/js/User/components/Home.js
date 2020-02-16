import React from 'react';
export default ()=>{

    return(
        <div >
        <h1>All Test</h1>
         <div className="container-fluid mx-auto d-none d-md-block my-2">
        <div className="row">
            <div className="col-6 col-lg-6 d-flex mb-6">
                <div className="card flex-fill ">
                    <div className="card-header bg-primary text-light rounded">Eye Test</div>
                    <div className="card-body">
                        <img src="https://dgeiu3fz282x5.cloudfront.net/g/l/l-143641.jpg" alt="card-alt-img-text"
                            className="card-img-top img-fluid" />
                        <p className="my-2">What's the card number ?</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios1" value="option1"  />
                            <label className="form-check-label" forhtml="exampleRadios1" style={{marginLeft: "20px"}}>
                                1 trefel
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios2" value="option2"/>
                            <label className="form-check-label" forhtml="exampleRadios2" style={{marginLeft: "20px"}}>
                                4 trefel </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios3" value="option3" />
                            <label className="form-check-label" forhtml="exampleRadios3" style={{marginLeft: "20px"}}>
                                1 Sbata
                            </label>
                        </div>
                        <br/>

                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-outline-primary text-primary d-block w-75 mx-auto">Check!</button>
                    </div>
                </div>
            </div>


            <div className="col-6 col-lg-6 d-flex mb-6">
                <div className="card flex-fill">
                    <div className="card-header bg-primary text-light rounded">Ears Test</div>
                    <div className="card-body">

                            <span>What's the correct track ?</span>
                            <br/>

                        <figure>
                            <br/>
                            <audio controls src="fan.wav">
                                <code>audio</code>

                            </audio>
                        </figure>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios1" value="option1"  />
                            <label className="form-check-label" forhtml="exampleRadios1" style={{marginLeft:" 20px"}}>Fun you call that Fun
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios2" value="option2"/>
                            <label className="form-check-label" forhtml="exampleRadios2" style={{marginLeft:" 20px"}}>
                                Funny you call it funny </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios3" value="option3"/>
                            <label className="form-check-label" forhtml="exampleRadios3" style={{marginLeft:" 20px"}} >
                                fun what's fun ?
                            </label>
                        </div>
                        <br/>


                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary text-primary d-block w-75 mx-auto">Check
                            !</button>
                    </div>
                </div>
            </div>


        </div>
    </div>

        </div>
    )
}
