// ------------------------------------------------------------------------
// randomly chooses to correct / wrong blurb or calls kind of correct blurb
// ------------------------------------------------------------------------
function more_stuff(arg2, answ) {

    // options for correct blurbs
    right1 = `Great choice! You got ${answ} more years!`
    right2 = `You've got this surviving thing under your thumb - you make it ${answ} more years!`
    right3 = `Amazing! ${answ} years for you!`
    right4 = `You are totally on this, you survive another ${answ} years. Succumbing to the elements what?`

    // create list of correct blurbs
    right = [right1, right2, right3, right4]

    // options for wrong blurbs
    nah1 = `That won't do you much good!`
    nah2 = `Buddy. What you doing. Believe in yourself, you can do it.`
    nah3 = `Mmm... not quite. Better luck next time.`
    nah4 = `Nah my dude. Think about Earth. They are all rooting for you... hypothetically.`

    // create lsit of wrong blurbs
    nah = [nah1, nah2, nah3, nah4]

    // displays random correct blurb if uh is 'right'
    if (arg2 === 'right') {
        more.innerHTML = `<h4 class='qtext'> ${right[rand_ind(right)]} </h4>`
    }

    // displays random wrong blurb if uh is 'nah'
    if (arg2 === 'nah') {
        more.innerHTML = `<h4 class='qtext'> ${nah[rand_ind(nah)]} </h4>`
    }

    // ----------------------------------------------------------
    // displays kind of correct blurb attached to question answer
    // ----------------------------------------------------------
    if (arg2 === 'q2_reason') {
        more.innerHTML = 
            `<h4 class='qtext'> 
                Not the best choice, but thermophiles do often have acidophile properties - 
                so it’ll get you through the next ${answ} years. 
            </h4>`
    }

    if (arg2 === 'q3_reason') {
        more.innerHTML = 
            `<h4 class='qtext'>
                There was a better choice, but evaporation leading to alkaline 
                environments can also lead to salty environments. Looks like you’re 
                in luck - you make it another ${answ} years
            </h4>`
    }

    if (arg2 === 'q4_reason1') {
        more.innerHTML = 
            `<h4 class='qtext'>
                Not the best decision, but evaporation leading to salty water can 
                also lead to alkaline environments. It works for you this time, 
                and you survive another ${answ} years.
            </h4>`
    }

    if (arg2 === 'q4_reason2') {
        more.innerHTML =
            `<h4 class='qtext'>
                You could have done better, but this will work. Salty environments 
                have low water activity, so xerophilic adaptations could be useful. 
                Looks like you’ll go on ${answ} more years.
            </h4>`
    }

    if (arg2 === 'q5_reason') {
        more.innerHTML = 
            `<h4 class='qtext'>
                You could have done better, but this will work. Salty environments 
                have low water activity, so xerophilic adaptations could be useful. 
                Looks like you’ll go on another ${answ} years.
            </h4>`
    }

    if (arg2 === 'q7_reason') {
        more.innerHTML = 
            `<h4 class='qtext'>
                Not exactly what you needed, but hydrothermal vents can be acidic. You 
                lucked out here and survive ${answ} more years.
            </h4>`
    }

    if (arg2 === 'q9_reason') {
        more.innerHTML =
            `<h4 class='qtext'>
                Not the most helpful decision, but volcanism could lead to acidic 
                conditions. You’ll get through another ${answ} years.
            </h4>`
    }

    if (arg2 === 'q12_reason') {
        more.innerHTML =
            `<h4 class='qtext'>
                You would be better off with something else, but endoliths can 
                survive at high pressures. You’re ${answ} years closer to aliens saving you.
            </h4>`
    }

    if (arg2 === 'q16_reason') {
        more.innerHTML =
            `<h4 class='qtext'>
                Not the safest decision, but  you bury deep down into the rocks and find 
                water. You make it another ${answ} years.
            </h4>`
    }

    if (arg2 === 'q18_reason') {
        more.innerHTML =
            `<h4 class='qtext'>
                There was a better decision, but a thinner atmosphere does mean it’s 
                getting a lot colder. You survive ${answ} more years.
            </h4>`
    }
}

// ----------------
// build 'cont' div
// ----------------
function move_on(arg1) {

    // continue game scenario
    // build Next Question button, which re-initializes next question page
    if (arg1 === 'cont') {
        cont.innerHTML =
            `<div class='row justify-conent-end'>
                <div class='col-md-12 text-right'>
                    <button id='nextQ' class='btn btn-default'> 
                        Next Question 
                    </button>
                </div>
            </div>`

        let nextQ = document.querySelector('#nextQ')
        nextQ.addEventListener('click', () => post_Q(Q))
        nextQ.addEventListener('click', () => whole_Q(next_Q_ind, new_year, new_radio))
        nextQ.addEventListener('click', () => reset(science))
        nextQ.addEventListener('click', () => reset(cont))
        nextQ.addEventListener('click', () => reset(more))
    }

    // lose scenario
    if (arg1 === 'lose') {
        cont.innerHTML = 
            `<h1 id='lose'> 
                Oh no... the radium. The radium is gone! The last living piece of Earth will soon be gone... forever.
            </h1>
            <div class='row justify-content-end'>
                <div class='col-lg-3 text-right'>
                    <button onClick='location.reload()' class='btn btn-default'> 
                        Play Again 
                    </button>
                </div>
            </div>`
    }

    // win scenario
    if (arg1 === 'win') {
        cont.innerHTML =
            `<h1 id='won'> 
                Congratulations! After 1,000,000 years, an alien race has finally showed up on their glowing ships. 
                They've taken you aboard and given you everything you need to live a comfortable life. You're safe. 
                And you're alive.
            </h1>
            <div class='row justify-content-end'>
                <div class='col-lg-3 text-right'>
                    <button onClick='location.reload()' class='btn btn-default'> 
                        Play Again 
                    </button>
                </div>
            </div>`
    }
}

// -----------------------------------------------------
// add correct post-question text to 'post_question' div
// -----------------------------------------------------
function post_Q(que) {
    post_question.innerHTML = 
        `<h1 class='qtext'>${que.post_text}</h1>`
}