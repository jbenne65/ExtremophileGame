// create Answer class with attributes text, science, and cost of radioactivity
function Answer(text, sci, radio, name) {
    this.text = text
    this.science = sci
    this.radio = radio
    this.name = name
}

// create Question class with attributes text and answers (list that contain Answer object and years gained)
function Question(text, post_text, answer1, answer2, answer3) {
    this.text = text
    this.post_text = post_text

    this.a1 = answer1[0]
    this.p1 = answer1[1]
    this.uh1 = answer1[2]

    this.a2 = answer2[0]
    this.p2 = answer2[1]
    this.uh2 = answer2[2]

    this.a3 = answer3[0]
    this.p3 = answer3[1]
    this.uh3 = answer3[2]
}

function Science(envir, pic1_capt, pic2_capt, pic3_capt, pic4_capt) {
    this.environment = envir
    this.pic1_src = pic1_capt[0]
    this.pic1_text = pic1_capt[1]
    this.pic2_src = pic2_capt[0]
    this.pic2_text = pic2_capt[1]
    this.pic3_src = pic3_capt[0]
    this.pic3_text = pic3_capt[1]
    this.pic4_src = pic4_capt[0]
    this.pic4_text = pic4_capt[1]
}

let s1 = new Science('Acidophiles live in acidic environments, or places with pH <5. For example:', 
                    ['images/a1/mine.png', 'Acid mine drainage sites, which are mainly the product of abandoned coal mines.'], 
                    ['images/a1/acidic_lakes.png', 'Acidic lakes, such as the lake in the crater of the volcano Kawah Ijen. These form as the result of water reacting with certain types of bedrock and soils.'], 
                    ['images/a1/geyser.png', 'Hot springs, such as in Yellowstone National Park. Hot springs occur over areas where Earth’s internal heat reaches the surface.'],
                    ['images/a1/vent.png', 'Acidic hydrothermal vents, which occur deep within the ocean where magma comes near the surface of Earth’s crust.'])
let s2 = new Science('Alkaliphiles live in basic, or alkaline, environments; these are places with a ph >9. A common, natural alkaline environment are soda lakes; these form when lakes have limited water outflow and balanced evaporation rates, among other things. Examples include:', 
                    ['images/a2/rift_valley.png', 'Rift Valley lakes of East Africa, a type of soda lake.'], 
                    ['images/a2/soda_lakes.png', 'Soda lakes of the western USA.'],
                    ['images/a2/vent.png', 'Alkaline hydrothermal vents, which occur deep within the ocean where magma comes near the surface of Earth’s crust.'],
                    [,])
let s3 = new Science('Halophiles live in environments with high salt concentrations. For example:', 
                    ['images/a3/dead_sea.png', 'The Dead Sea, which is potentially 9x as briny as the sea. Located in an arid low-lying desert, water evaporates quickly, leaving behind salt.'], 
                    ['images/a3/deep_sea_brine.png', 'Deep sea brine pools, which form above salt deposits. They can be 3x to 8x as salty as the surrounding ocean, making them much more dense.'], 
                    ['images/a3/great_salt_lake.png', 'Great Salt Lake, which retains its saltiness because of limited water outflow and evaporation, which traps salt in the lake.'],
                    [,])
let s4 = new Science('Thermophiles and hyperthermophiles live in very warm environments. Specifically,  thermophiles live at temperatures greater than 45 °C (113 °F) and hyperthermophiles live at temperatures greater than 80 &#176;C (176 &#176;F). Examples include:', 
                    ['images/a4/fumarole.png', 'Fumaroles, which are openings near volcanoes that allow Earth’s internal heat to escape.'], 
                    ['images/a4/geysers.png', 'Hot springs and geysers, such as in Yellowstone National Park. Hot springs occur over areas where Earth’s internal heat reaches the surface.'], 
                    ['images/a4/MOR.png', 'Iceland’s Mid-Ocean Ridge, where the rifting between tectonic plates creates a thin Earth crust and therefore is more exposed to the interior heat of Earth.'], 
                    ['images/a4/vent.png', 'Hydrothermal vents, which occur deep within the ocean where magma comes near the surface of Earth’s crust.'])
let s5 = new Science('Psychrophiles live in extremely cold environments, specifically between -20 °C (-4 °F) and 15 °C (59 °C). For example:', 
                    ['images/a5/antartic_ice.png', 'Up to 3 km (2 mi) below the Antarctic ice.'], 
                    ['images/a5/deep_ocean.png', 'The deep ocean, where the temperature remains around 0 °C (32 °F).'], 
                    ['images/a5/permafrost.png', 'Siberian permafrost, where the soil is frozen year round.'],
                    [,])
let s6 = new Science('Piezophiles / barophiles live at pressures significantly greater than atmospheric pressure, or the pressure at the surface of Earth. For example:', 
                    ['images/a6/crust.png', 'Deep inside Earth’s crust, where pressure increases with every kilometer.'], 
                    ['images/a6/marianas_trench.png', 'The deep sea, such as the Mariana Trench, the deepest part of the ocean. The bottom of the Mariana trench reaches pressures 1000x greater than atmospheric pressure.'],
                    [,],
                    [,])
let s7 = new Science('Endoliths live inside of rocks and coral.', 
                    ['images/a7/rock.png', ''],
                    [,],
                    [,],
                    [,])
let s8 = new Science('Xerophiles live in environments where there is very little water available. This includes dry environments and those with low water activity, which generally coincide with high salinity. Examples include:', 
                    ['images/a8/desert.png', 'Deserts, which receive less than 25 cm (10 in) of precipitation a year.'], 
                    ['images/a8/food.png', 'Foods preserved by dehydration or enhanced sugar levels.'], 
                    ['images/a8/salt_bed.png', 'Salt beds, which are the relics of evaporated bodies of water.'],
                    [,])
let s9 = new Science('Radioresistant organisms are tolerant of high radiation, such as UV and gamma radiation. Radiation mostly comes from the sun, but is dissipated by Earth’s atmosphere. Places radioresistant organisms have been found include:', 
                    ['images/a9/desert.png', 'Deserts, which can be exposed to high radiation.'], 
                    ['images/a9/ISS.png', 'The outer surface of the International Space Station.'], 
                    ['images/a9/mesosphere.png', 'Very high altitudes, up to the top of the mesosphere at 85 km (53 mi).'], 
                    ['images/a9/ocean.png', 'Oceans, which can be exposed to high radiation.'])
let s10 = new Science('Metallophiles are found in environments with high metal concentrations, such as lead, zinc, and nickel. For example:', 
                    ['images/a10/agriculture.png', 'Agriculture locations where metal - rich treatments are used to help plant growth.'], 
                    ['images/a10/metal_waste.png', 'Metallurgic waste dumps left by human activity.'], 
                    ['images/a10/nickel_soil.png', 'Nickel-rich ultramafic soils such as those in New Caledonia.'], 
                    ['images/a10/volcano.png', 'Volcanic sites, where fresh magma contains heavy metals.'])

// instantiate Answer objects
let a1 = new Answer('Acidophile', s1, 10, 'ans1')
let a2 = new Answer('Alkaliphile', s2, 15, 'ans2')
let a3 = new Answer('Halophile', s3, 20, 'ans3')
let a4 = new Answer('Thermophile / Hyperthermophile', s4, 10, 'ans4')
let a5 = new Answer('Psychrophile', s5, 15, 'ans5')
let a6 = new Answer('Barophile / Piezophile', s6, 20, 'ans6')
let a7 = new Answer('Endolith', s7, 10, 'ans7')
let a8 = new Answer('Xerophile', s8, 15, 'ans8')
let a9 = new Answer('Radioresistant', s9, 20, 'ans9')
let a10 = new Answer('Metallophile', s10, 25, 'ans10')

// instantiate Question objects
let q1 = new Question('The skies have been getting darker and darker. You realize it’s been a really long time since you’ve properly seen the sun. As you look up at where it’s meant to be, the first drop hits with a resounding plop. Then another. And another. Suddenly, it’s pouring, and as it hits your cell wall, you realize… it’s acid rain. A lot of it.', 
                    'Eventually the acid rain stops, and you breathe a sigh of relief.',
                    [a1, 150000, 'right'], 
                    [a9, 0, 'nah'], 
                    [a4, 0, 'nah'])
let q2 = new Question('The magma stuffed Traps that surround your home have splintered, with lava slowly bubbling up not a mile from your new home. The acidic gas released by the lava travels on the wind, and it’s settling into the water. The acidity is rising, and you can feel your sensitive cytoplasm going all out of whack.', 
                    'The Traps seem to use up all its magma, sealing itself back up as it cools. The acidic smoke stops, and the pH starts to rise again.',
                    [a4, 75000, 'q2_reason'], 
                    [a1, 140000, 'right'], 
                    [a10, 0, 'nah'])
let q3 = new Question('Over the last couple thousand years, you noticed the water has become more and more still, the flow of water being cut off somewhere upstream. With no water coming in, the water level is starting to drop, and your home environment is becoming more and more basic. Your cell membranes are getting incredibly unhappy. What now?', 
                    'The blockage upstream seems to be receding, and with the increased flow the alkalinity is returning to normal.',
                    [a7, 0, 'nah'], 
                    [a3, 100000, 'q3_reason'], 
                    [a2, 200000, 'right'])
let q4 = new Question('With the clouds disappearing, the sun has been really intense lately, evaporating your water and leaving behind the salt. The water is incredibly saline now, and you’re starting to feel the effect of dehydration… need… water…', 
                    'Clouds! You never thought you’d be so happy to see clouds again. The water stops evaporating and the salinity balances out.',
                    [a3, 130000, 'right'], 
                    [a2, 50000, 'q4_reason1'], 
                    [a8, 30000, 'q4_reason2'])
var q5 = new Question('Glaciers have been forming like crazy lately, reaching all the way down to the part of the sea you’ve come to call home. The cold is bearable, but the solidifying water seems to be leaving all it’s salt behind, and you’re getting thirsty. It’s almost unbearable now. What if the glacier’s keep growing?', 
                    'The glaciers are finally receding, melting back into your home and returning salinity to its normal state. Thank. Goodness.',
                    [a3, 170000, 'right'], 
                    [a10, 0, 'nah'], 
                    [a8, 30000, 'q5_reason'])
let q6 = new Question('One day while you’re out exploring, you find a deep sea brine pool. It looks pretty neat, so you go closer to the edge to check it out. Terrible decision. A sudden surge of water pushes you forward, and you’re tumbling into a thick mess of salt. In those seconds before you hit, the thought crosses your mind… is this how it finally happens?', 
                    'Eventually, you’re strong enough to escape the density of the deep sea brine pool and crawl back to safety.',
                    [a6, 0, 'nah'], 
                    [a3, 80000, 'right'], 
                    [a2, 0, 'nah'])
let q7 = new Question('You’ve been swept by an undertow to a weird, strange looking part of the sea floor… there’s these towering structures all around you, bubbling vigorously. It is BEYOND hot; you don’t know how long you can last here. How will you survive?', 
                    'Eventually, you climb your way back to cooler ground.',
                    [a4, 250000, 'right'],
                    [a1, 100000, 'q7_reason'], 
                    [a2, 0, 'nah'])
let q8 = new Question('With a loud bang, the rock next to you suddenly splits open, and pillow basalt comes leaking out! The wave of heat hits you like a boulder, and you feel yourself begin to wither. Think fast!',
                    'As the pillow basalt cools, the temperature drops back to normal.',
                    [a6, 0, 'nah'], 
                    [a4, 130000, 'right'], 
                    [a8, 0, 'nah'])
let q9 = new Question('A low rumble is beginning in the distance… suddenly, the whole world is vibrating, then, BOOM, a nearby volcano erupts. It spews ash into the air, blocking all the light of the sun. In the next couple years, without the sunlight, everything becomes cold. So, so cold…',
                    'Finally, the volcano stops sputtering and the skies begin to clear. The first rays of sun to reach your cell wall in years is the purest, most incredible feeling in the world.',
                    [a5, 60000, 'right'], 
                    [a1, 20000, 'q9_reason'], 
                    [a9, 0, 'nah'])
let q10 = new Question('It’s been getting colder and colder as the days go on… the ocean currents must be shifting, and you’re caught in a deep sea upwelling of cold water. You fear it’s only going to get colder…',
                    'The tides change again, like they always do, and warmth starts to seep back in.',
                    [a1, 0, 'nah'], 
                    [a7, 0, 'nah'], 
                    [a5, 190000, 'right'])
let q11 = new Question('You’ve felt so weak lately… Earth seems like it was only a dream now. You can’t hang on to your rocky outcrop anymore, and you begin to drift with the tides… next thing you know you’re encased in ice! You must have drifted all the way to the pole of this planet.',
                    'By a stroke of luck, the ice melts and you catch a wave back to the warm comfort of home.',
                    [a5, 230000, 'right'], 
                    [a2, 0, 'nah'], 
                    [a3, 0, 'nah'])
let q12 = new Question('You wake up to a low rumble, and you know something bad is coming. You have just enough time to hold your breath when the rock below you begins to shake, as if it’s alive. All at once, the very ground beneath you opens up, and you’re swallowed into darkness. You’re terrified, not of the dark but of the pressure that is growing as you fall deeper and deeper.',
                    'With a last heave, you haul yourself over the top of the ledge, emerging from the rift created by the earthquake.',
                    [a6, 170000, 'right'],
                    [a7, 110000, 'q12_reason'], 
                    [a8, 0, 'nah'])
let q13 = new Question('You awake from your slumber to find that your rock perch has broken away, and you go tumbling down, down, down to the very bottom of the ocean… it’s cold, and it feels like the water around you is pushing in all along your cell wall. You’re not sure how you’re going to get out of this one.',
                    'It’s slow going, but eventually, you wander back home and out of the terribly pressured ocean depths.',
                    [a6, 160000, 'right'],
                    [a5, 160000, 'right'], 
                    [a9, 0, 'nah'])
let q14 = new Question('You’re tired of all the crazy stuff this planet has done to you. Maybe you could finally rest if you could just… somehow… sink into the rock. Sounds crazy, you know, but wouldn’t it be nice?', 
                    'Your rock world is getting boring, so you decide to head back out to see what’s up with the planet these days.',
                    [a10, 0, 'nah'], 
                    [a6, 0, 'nah'], 
                    [a7, 100000, 'right'])
let q15 = new Question('The tides have been getting stronger, and you fear you’ll be swept away at any second now. You’re scared to find out what else is out there… if you could only burrow into the rocks, you could get away from it all.', 
                    'Those tides eventually calm down, and you crawl back out from the rocks.',
                    [a1, 0, 'nah'], 
                    [a7, 120000, 'right'], 
                    [a4, 0, 'nah'])
let q16 = new Question('A chill runs over you, a feeling you’ve felt before… all those years ago, right before the Earth exploded! It’s an asteroid, coming straight to your new home. You try to run, but it impacts near your ocean refuge. The energy from the impact instantly evaporates your water. At least the world didn’t end again, but with no water, you’re not sure how this is any better.',
                    'A natural dam breaks open a few miles away, and water comes flooding back to your home. What a relief.',
                    [a8, 230000, 'right'], 
                    [a3, 0, 'nah'], 
                    [a7, 80000, 'q16_reason'])
let q17 = new Question('Your cell walls have been feeling… prickly lately. It’s almost as if the ozone layer in the planet’s atmosphere is disappearing, and the UV rays are becoming more intense. You worry they could mess with your DNA… how will you protect yourself?',
                    'Eventually, the prickly-ness subsides as the ozone layer fixes itself.',
                    [a4, 0, 'nah'], 
                    [a8, 0, 'nah'], 
                    [a9, 180000, 'right'])
let q18 = new Question('It’s been getting harder to breath lately, but you think you can deal with that without the radium. But as the atmosphere gets thinner, more and more gamma rays seem to penetrate into your home. You can’t see them, but you’re pretty positive they’re a very, very bad thing to have around.', 
                    'The atmosphere fills up again, returning to it’s normal thickness. You almost forgot what it was like to be able to breathe freely.',
                    [a9, 200000, 'right'], 
                    [a5, 20000, 'q18_reason'], 
                    [a10, 0, 'nah'])
let q19 = new Question('Over the last many, many years, you’ve watched with amazement as an ancient iron-banded formation has been exposed by the constant flow of water. But the beautiful piece of rock is turning evil: the iron is being sucked into the water. Guess you better learn to live with it, because it’s here to stay for a long, long time.',
                    'Finally, the iron-banded formation has been completely eroded away, and the iron in the water dissipates.',
                    [a2, 0, 'nah'], 
                    [a10, 210000, 'right'], 
                    [a5, 0, 'nah'])
let q20 = new Question('Without warning, your home becomes cloudy and dark as it fills with soil. The mountain next door must have had a landslide, and now the metal-rich dirt is contaminating your home.',
                    'The soil eventually settles to the bottom of the ocean and the heavy metals are whisked away by the currents.',
                    [a10, 120000, 'right'], 
                    [a6, 0, 'nah'], 
                    [a9, 0, 'nah'])

q_list = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]

