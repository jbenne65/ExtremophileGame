// build science div based on answer choice
function science_format(answer) {

    // for answers with 4 pictures
    if (answer.name === 'ans1' || answer.name === 'ans4' || answer.name === 'ans9' || answer.name === 'ans10') {
        science.innerHTML = 
            `<br>
            
            <div class='sci'>
                <div class='row'>
                    <div class='col-md-12'>
                        <h4> ${answer.text} </h4>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-md-12'>
                        <p> ${answer.science.environment} </p>
                    </div>
                </div>

                <div class='row'>
                    <div class='card-deck'>
                        <div class='card'>
                            <img src='${answer.science.pic1_src}' class='card-img-top image-fluid w-100'>
                            <div class='card-body'>
                                <p class='card-text'> ${answer.science.pic1_text} </p>
                            </div>
                        </div>
                        
                        <div class='card'>
                            <img src='${answer.science.pic2_src}' class='card-img-top image-fluid w-100'>
                            <div class='card-body'>
                                <p class='card-text'> ${answer.science.pic2_text} </p>
                            </div>
                        </div>

                        <div class='card'>
                            <img src='${answer.science.pic3_src}' class='card-img-top image-fluid w-100'>
                            <div class='card-body'>
                                <p class='card-text'> ${answer.science.pic3_text} </p>
                            </div>
                        </div>

                        <div class='card'>
                            <img src='${answer.science.pic4_src}' class='card-img-top image-fluid w-100'>
                            <div class='card-body'>
                                <p class='card-text'> ${answer.science.pic4_text} </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <br>`
    } 

    // for answers with 3 pictures
    if (answer.name == 'ans2' || answer.name == 'ans3' || answer.name === 'ans5' || answer.name === 'ans8') {
        science.innerHTML = 
            `<br>
            
            <div class='sci'>

                <div class='row'>
                    <div class='col-md-12'>
                        <h4> ${answer.text} </h4>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-md-12'>
                        <p> ${answer.science.environment} </p>
                    </div>
                </div>

                <div class='row'>
                    <div class='card-deck'>

                        <div class='card'>
                            <img src='${answer.science.pic1_src}' class='card-img-top image-fluid w-100'>
                            <div class='card-body'>
                                <p class='card-text'> ${answer.science.pic1_text} </p>
                            </div>
                        </div>
                        
                        <div class='card'>
                            <img src='${answer.science.pic2_src}' class='card-img-top image-fluid w-100'>
                            <div class='card-body'>
                                <p class='card-text'> ${answer.science.pic2_text} </p>
                            </div>
                        </div>

                        <div class='card'>
                            <img src='${answer.science.pic3_src}' class='card-img-top image-fluid w-100'>
                            <div class='card-body'>
                                <p class='card-text'> ${answer.science.pic3_text} </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <br>`
    }

    // for answers with 2 pictures
    if (answer.name === 'ans6') {
        science.innerHTML = 
            `<br>
            
            <div class='sci'>
                <div class='row'>

                    <div class='col-md-5'>
                        <h4> ${answer.text} </h4>
                        <br>
                        <p> ${answer.science.environment} </p>
                    </div>

                    <div class='col-md-7'>
                        <div class='card-deck'>

                            <div class='card'>
                                <img src='${answer.science.pic1_src}' class='card-img-top image-fluid w-100'>
                                <div class='card-body'>
                                    <p class='card-text'> ${answer.science.pic1_text} </p>
                                </div>
                            </div>
                            
                            <div class='card'>
                                <img src='${answer.science.pic2_src}' class='card-img-top image-fluid w-100'>
                                <div class='card-body'>
                                    <p class='card-text'> ${answer.science.pic2_text} </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            
            <br>`
    }

    // for answers with 1 picture
    if (answer.name === 'ans7') {
        science.innerHTML = 
            `<br>
            
            <div class='sci'>

                <div class='row'>
                    <div class='col-md-12'>
                        <h4> ${answer.text} </h4>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-md-12'>
                        <p> ${answer.science.environment} </p>
                    </div>
                </div>

                <div class='img_rnd'>
                    <img src='${answer.science.pic1_src}' class='card-img-top image-fluid w-100'>
                </div>
            </div>
            
            <br>`
    }
}