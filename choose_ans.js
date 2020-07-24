// ----------------------------------------------
// executes when an answer is chosen / clicked
// calls correct functions based on chosen answer
// ----------------------------------------------
function choose_ans(Q, ans_num, years, radio) {

    // defines variables based on answer# clicked
    if (ans_num == 1) {
        ans = Q.a1
        add_years = Q.p1
        sub_radio = ans.radio
        arg = Q.uh1
    }

    if (ans_num == 2) {
        ans = Q.a2
        add_years = Q.p2
        sub_radio = Q.a2.radio
        arg = Q.uh2
    }

    if (ans_num == 3) {
        ans = Q.a3
        add_years = Q.p3
        sub_radio = Q.a3.radio
        arg = Q.uh3
    }
    
    // add scores
    new_year = years + add_years
    new_radio = radio - sub_radio

    // calculate percent of total years (for progress bar)
    year_perc = new_year / 1000000 * 100

    // change chosen answer text color to black in Adaptations div
    document.querySelector(`#${ans.name}`).setAttribute('style', 'color: black !important')

    // win scenario (if total years above 1,000,000 and radium left above 0)
    // add to progress bars; open science blurb; display win blurb
    if (new_year >= 1000000 && new_radio >= 0) {

        progress_bars(1000000, 100, new_radio)
        
        science_format(ans)

        move_on('win', arg)
    }

    // lose scenario (if radium left below zero; includes both is total years is above or below 1,000,000)
    // add to progress bars; open science; display lose blurb
    else if (new_radio <= 0) {

        og_year_perc = years / 1000000 * 100

        progress_bars(years, og_year_perc, 0)

        science_format(ans)

        move_on('lose')
    }

    // continue game scenario (if radium left above zero and total years below 1,000,000)
    // add to progress bars; open science; continue game scenario
    else {

        progress_bars(new_year, year_perc, new_radio)

        science_format(ans)

        more_stuff(arg, add_years)

        move_on('cont')
    }

    // changes cost of radioactivity value to 0 for clicked answer
    ans.radio = 0  
}

// --------------------------------------------------------
// function changes innerHTML to a null string (essentially 
// deletes elements, in the veiwer's perspective)
// --------------------------------------------------------
function reset(ele) {
    ele.innerHTML = ''
}

// right now it reloads to beginning of story; find way to reload at first question?
    // would have to re-initialize q_list