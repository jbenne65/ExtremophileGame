// build progress bars
function progress_bars(years, years_perc, radio) {

    // remove text from story
    story.innerHTML = ''

    // define local variables
    y = years
    yp = years_perc
    r = radio

    // create score tracker; display question text; create answer buttons
    progress.innerHTML = 
        `<div class='progress' style='height: 22px';>
            <div id='year_progress' class='progress-bar bg-warning large-font' role='progressbar' style='width: ${yp}%' aria-valuenow='${y}' aria-valuemin='0' aria-valuemax='1000000'>
                <div class='d-flex justify-content-start'>
                    &nbsp&nbsp&nbsp${y} years 
                </div> 
            </div>
        </div>

        <br>

        <div class='progress' style='height: 22px';>
            <div id='radio_progress' class='progress-bar bg-danger large-font' role='progressbar' style='width: ${r}%' aria-valuenow='${r}' aria-valuemin='0' aria-valuemax='100'>
                <div class='d-flex justify-content-start'>
                    &nbsp&nbsp&nbsp${r}g radium
                </div> 
            </div>
        </div>

        <br>`
}


// build adaptations div
function adaptation() {
    adaptations.innerHTML = 
        `<div class='row justify-content-center'>
            <div class='col-lg-4 text-center'>
                <h1 class='justify-content-center' id='adapt_header'> 
                    Adaptations 
                </h1>
            </div>
        </div>


        <div class='row justify-content-center'>
            <div class='col-sm-4 text-center'>
                <h5 class='justify-content-center adapt' id='ans1'>
                    ${a1.text}
                </h5>
            </div>
            <div class='col-sm-4 text-center'>
                <h5 class='justify-content-center adapt' id='ans2'>
                    ${a2.text}
                </h5>
            </div>
            <div class='col-sm-4 text-center'>
                <h5 class='justify-content-center adapt' id='ans3'>
                    ${a3.text}
                </h5>
            </div>
        </div>

        <br>

        <div class='row justify-content-center'>
            <div class='col-sm-3 text-center'>
                <h5 class='justify-content-center adapt' id='ans4'>
                    ${a4.text}
                </h5>
            </div>
            <div class='col-sm-3 text-center'>
                <h5 class='justify-content-center adapt' id='ans5'>
                    ${a5.text}
                </h5>
            </div>
            <div class='col-sm-3 text-center'>
                <h5 class='justify-content-center adapt' id='ans6'>
              
                ${a6.text}
                </h5>
            </div>
            <div class='col-sm-3 text-center'>
                <h5 class='justify-content-center adapt' id='ans7'>
                    ${a7.text}
                </h5>
            </div>
        </div>

        <br>

        <div class='row justify-content-center'>
            <div class='col-sm-4 text-center'>
                <h5 class='justify-content-center adapt' id='ans8'>
                    ${a8.text}
                </h5>
            </div>
            <div class='col-sm-4 text-center'>
                <h5 class='justify-content-center adapt' id='ans9'>
                    ${a9.text}
                </h5>
            </div>
            <div class='col-sm-4 text-center'>
                <h5 class='justify-content-center adapt' id='ans10'>
                    ${a10.text}
                </h5>
            </div>
        </div>
        
        <hr>`
}