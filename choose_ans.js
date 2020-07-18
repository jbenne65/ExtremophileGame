// executes when an answer is chosen
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

    year_perc = new_year / 1000000 * 100

    document.querySelector(`#${ans.name}`).setAttribute('style', 'color: black !important')

    // add to progress bars
    // open science
    // win scenario
    if (new_year >= 1000000 && new_radio >= 0) {

        progress_bars(1000000, 100, new_radio)
        
        science_format(ans)

        move_on('win', arg)
    }

    // add to progress bars
    // open science
    // lose scenario; display 'You Lost'
    else if (new_radio <= 0 && new_year < 1000000) {

        progress_bars(new_year, year_perc, 0)

        science_format(ans)

        move_on('lose')
    }

    // add to progress bars
    // open science
    // continue game scenario
    else {

        progress_bars(new_year, year_perc, new_radio)

        science_format(ans)

        more_stuff(arg, add_years)

        move_on('cont')
    }

    // changes radioactivity value to 0 for clicked answer
    ans.radio = 0  

}

function reset(ele) {
    ele.innerHTML = ''
}

// right now it reloads to beginning of story; find way to reload at first question?
    // would have to re-initialize q_list

// win and lose scenarios st
