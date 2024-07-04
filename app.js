
let name = prompt('Please Enter your name')
alert('☆ ★ ✮ ★ ☆ ☆ ★ ✮ ★ ☆ ☆ ★ ✮ ★ ☆ \n -ˏˋ⋆ ᴡ ᴇ ʟ ᴄ ᴏ ᴍ ᴇ ⋆ˊˎ-' + '  ' + name + '\n ☆ ★ ✮ ★ ☆ ☆ ★ ✮ ★ ☆ ☆ ★ ✮ ★ ☆ \n \n Lets play a game \n its related to anything' )
alert('I will ask you fifteen MCQs from which you have to score at least 10 ')
let point = 0

let cricket = prompt('Who won 2024 cricket final \n \n ▶  india \n ▶  Afganistan \n ▶  Pakistan \n ▶  South Africa  ')
if (cricket == 'india') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let html = prompt('What language an Html is ? \n \n ▶  markup language \n ▶  programming language \n ▶  Scripting language  \n ▶  other')
if (html == 'markup language') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let p = prompt('What is <p> tag in html \n \n ▶   heading tag \n ▶   bold tag \n ▶   paragraph tag \n ▶   styling tag \n')
if (p == 'paragraph tag') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let mountain = prompt('The Mount Everest lies on the borders between Nepal and_______? \n \n ▶   India \n ▶   Tibet  \n ▶   Bhutan  \n ▶ Assam')
if (mountain == 'Tibet') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let word_problem = prompt('Naeem sold a computer for Rs 25000 at which he suffered 20 Percent loss. \n (Hint : Formulae =Loss % = Loss/Cost Price × 100.) Find the purchase price of the computer? \n \n ▶  31000 \n ▶   41250 \n ▶   31250 \n ▶   None of These')
if (word_problem == '31250') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let reminder = prompt('What is 93 % 5 = \n \n ▶   18 \n ▶   18.6 \n ▶   3 \n ▶   0.0537...')
if (reminder == '3') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let chemical = prompt('What is the chemical symbol for water? \n \n ▶   NaCl \n ▶   H2O \n ▶   CO2 \n ▶   O2')
if (chemical == 'H2O') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}
let ocean = prompt('Which is the largest ocean on Earth? \n \n ▶   Atlantic Ocean \n ▶   Indian Ocean \n ▶   Arctic Ocean \n ▶   Pacific Ocean')
if (ocean == 'Pacific Ocean') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let pie = prompt('What is the value of π (pi) to two decimal places? \n \n ▶   3.12 \n ▶   3.14 \n ▶   3.16 \n ▶    3.18 ')
if (pie == '3.14') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let title= prompt('Who is given the title Alien \n \n ▶   Ab De Villiers \n ▶   Chris Gayle \n ▶   Sachin Tendulkar \n ▶   Viv Richards')
if (title == 'Ab de Villiers') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let capital = prompt('What is the capital of Australia? \n \n ▶   Melbourne \n ▶    Brisbane \n ▶   Canberra \n ▶   Sydney')
if (capital == 'Canberra') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let salt = prompt('What is the chemical formula for table salt? \n \n ▶   KCl \n ▶   NaCl \n ▶   MgCl2 \n ▶   CaCl2')
if (salt == 'NaCl') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let powerhouse= prompt('What is the powerhouse of the cell? \n \n ▶   Nucleus \n ▶   Ribosome \n ▶   Mitochondrion \n ▶   Endoplasmic Reticulum')
if (powerhouse == 'Mitochondrion') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let subtraction = prompt('What is 57-89 = \n \n ▶   146 \n ▶   32 \n ▶   -32 \n ▶   33')
if (subtraction == '-32') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}

let invented = prompt('Who invented JavaScript? \n \n ▶   Tim Berners-Lee \n ▶   Brendan Eich \n ▶   Bill Gates \n ▶   James Gosling ')
if (invented == 'Brendan Eich') {
    console.log(++point);
    alert('✔️') 
}else{
    alert('❌')
}


if (point == 15) {
    alert('You scored ' + point + ' ' + 'out of 15 \n \n Marvelious! ⭐⭐⭐⭐⭐ ')
}
else if (point >= 13) {
alert('You scored ' + point + ' ' + 'out of 15 \n \n Marvelious! ⭐⭐⭐⭐')
}
else if (point >= 10) {
    alert('You scored ' + point + ' ' + 'out of 15 \n \n Excellent! ⭐⭐⭐')
}
else if (point >= 5) {
alert('You scored ' + point + ' ' + 'out of 15 \n \n Nice ! ⭐⭐')
}
else{
alert('You scored ' + point + ' ' + 'out of 15 \n \n Better Luck for next time ! ⭐')
}
