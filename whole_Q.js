// executes when Begin Game or Next Question is clicked
function whole_Q(Q_ind, years, radio) {

    // get correct Question
    Q = q_list[Q_ind]

    // remove question from q_list
    q_list.splice(Q_ind, 1)

    // randomly choose next question
    next_Q_ind = Math.floor(Math.random()*q_list.length)

    // calculate percent of total years
    years_perc = years / 1000000 * 100

    // build question text and answer buttons
    question.innerHTML = 
        `<h1 class='qtext'> ${Q.text} </h1>

        <br>

        <div class='row justify-content-center'>
            <div class='col-sm-4 text-center'>
                <button id='answer1' class='btn btn-default'>
                    ${Q.a1.text} <span class="badge badge-light"> ${Q.a1.radio}g </span>
                </button>
            </div>
            <div class='col-sm-4 text-center'>
                <button id='answer2' class='btn btn-default'>
                    ${Q.a2.text} <span class="badge badge-light"> ${Q.a2.radio}g </span> 
                </button>
            </div>
            <div class='col-sm-4 text-center'>
                <button id='answer3' class='btn btn-default'>
                    ${Q.a3.text} <span class="badge badge-light"> ${Q.a3.radio}g </span> 
                </button>
            </div>
        </div>`

    // create js variable for buttons
    let answer1 = document.querySelector('#answer1')
    let answer2 = document.querySelector('#answer2')
    let answer3 = document.querySelector('#answer3')

    // kick to choose_ans on click
    answer1.addEventListener('click', () => choose_ans(Q, 1, years, radio))
    answer2.addEventListener('click', () => choose_ans(Q, 2, years, radio))
    answer3.addEventListener('click', () => choose_ans(Q, 3, years, radio))

    //disable answer buttons
    answer1.addEventListener('click', () => dis_but(answer1))
    answer1.addEventListener('click', () => dis_but(answer2))
    answer1.addEventListener('click', () => dis_but(answer3))

    answer2.addEventListener('click', () => dis_but(answer1))
    answer2.addEventListener('click', () => dis_but(answer2))
    answer2.addEventListener('click', () => dis_but(answer3))

    answer3.addEventListener('click', () => dis_but(answer1))
    answer3.addEventListener('click', () => dis_but(answer2))
    answer3.addEventListener('click', () => dis_but(answer3))
}

function dis_but(button) {
    button.disabled = true
}