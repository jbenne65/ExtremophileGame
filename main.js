// instantiates scores
let years_initial = 0
let radio_initial = 100

function rand_ind(name) {
    i = Math.floor(Math.random()*name.length)
    return i
}

Q_next = rand_ind(q_list)

prev_ans = []

// create body variable
var b = document.querySelector('#b')
var progress = document.querySelector('#progress')
var adaptations = document.querySelector('#adaptations')
var question = document.querySelector('#question')
var science = document.querySelector('#science')
var story = document.querySelector('#story')
var cont = document.querySelector('#cont')
var post_question = document.querySelector('#post_question')
var more = document.querySelector('#more')

home()

// build home page
function home() {
    story.innerHTML =
        `<div class='row justify-content-center'>
            <div class='col-lg-6 text-center'>
                <h1 id='header'>
                    Extremophile Game
                </h1>
                <h3 id='subheader'>
                    Can you survive?
                </h3>
                <button id='next1' class='btn btn-default'>
                    Heck yeah - let's go
                </button>
            </div>
        </div>`

    let next = document.querySelector('#next1')
    next.addEventListener('click', () => story_pg_1())
}

// build story page 1
function story_pg_1() {
    story.innerHTML = 
        `<p class='story'>
            You’ve lived on Earth for millions of years, a humble bacteria just 
            mindlessly doing what you do. But for all those years, there is one 
            day you will never, ever forget: the day the Earth was vaporized.

            <br>
            <br>
            
            It happened all too quickly; one moment, you were chilling on the 
            wing of a cardinal, and the next, the entire world shook and creaked 
            and tumbled and shattered. And then… well, and then everything you 
            ever knew was gone. But you weren’t.
        </p>
        <div class='row justify-content-end'>
            <div class='col-lg-2 text-right'>
                <button id='next2' class='btn btn-default'> 
                    Next 
                </button>
            </div>
        </div>`

    let next = document.querySelector('#next2')
    next.addEventListener('click', () => story_pg_2()) 
}
 
// build story page 2
function story_pg_2() {
    story.innerHTML = 
        `<p class='story'>
            Somehow, you survived the gigantic impact, being ejected out into space 
            on a small rock. But it was no ordinary rock; it contained radium, a 
            radioactive element you could use to gain special abilities. You 
            harnessed its energy and developed ways to protect yourself against the 
            cold vacuum of space, and then you went dormant. For years, and years, 
            and years, until today.
        </p>
        <div class='row justify-content-end'>
            <div class='col-lg-3 text-right'>
                <button id='next3' class='btn btn-default'> 
                    Next 
                </button>
            </div>
        </div>`
        
    let next = document.querySelector('#next3')
    next.addEventListener('click', () => story_pg_3())
}

// build story page 3
function story_pg_3() {
    story.innerHTML = 
        `<p class='story'>
            Today, you woke up to a miracle: your lonely radium rock from Earth was 
            now headed right for a planet. And not just any planet; this planet 
            looked just like Earth. Water, land, white, puffy clouds; just… nothing 
            green. No life.

            <br>
            <br>

            You braced yourself as your rock pierced the planet’s atmosphere and began 
            to tumble. Your rock crashed into the water, and you and the radium sunk 
            deep into the ocean of this new world. With a jolt, you settled at the 
            bottom, and you were determined: using the radium, you would develop 
            whatever skills were necessary to survive this planet. If you could make 
            it a million years, there was a chance an alien race would find you; you 
            just had to make it. Survive a million years.
        </p>
        <div class='row justify-content-end'>
            <div class='col-lg-3 text-right'>
                <button id='next4' class='btn btn-default'> 
                    Next 
                </button>
            </div>
        </div>`
        
    let next = document.querySelector('#next4')
    next.addEventListener('click', () => instructions())
}

// build story 3 page
// create 'Begin Game' button that initiates question page
function instructions() {
    story.innerHTML = 
        `<h1 class='story'>
            Game Instructions        
        </h1>
        <p>
            The environment of this planet is constantly changing. 
            You have 100g of radium that allow you to develop extremophile 
            adaptations. 

            <br>
            <br>
            
            Choose wisely - make it 1,000,000 years, and maybe 
            an alien race will save you!

            <br>
            <br>

            Progress bars at the top will show how many years you've survived 
            and how much radium you have left. 

            <br>
            <br>

            Every time you chose an adaptation, it will no longer cost radium.

            <br>
            <br>

            Good luck, and may the environment be ever in your favor.
        </p>
        <div class='row justify-content-end'>
            <div class='col-lg-3 text-right'>
                <button id='begin' class='btn btn-default'>
                    Begin Game 
                </button>
            </div>
        </div>`

    let begin = document.querySelector('#begin')
    begin.addEventListener('click', () => progress_bars(years_initial, 0, radio_initial))
    begin.addEventListener('click', () => adaptation())
    begin.addEventListener('click', () => whole_Q(Q_next, years_initial, radio_initial))
}




