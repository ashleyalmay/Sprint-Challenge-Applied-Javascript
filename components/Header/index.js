// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(
    date,
    lambda,
    temp
) {
    //elements
    const head = document.createElement('div')
    const datetoday = document.createElement('span')
    const title = document.createElement('h1')
    const temperature = document.createElement('span')

    // order
    head.appendChild(datetoday)
    head.appendChild(title)
    head.appendChild(temperature)

    // div call names
    head.classList.add('header')
    datetoday.classList.add('date')
    title.classList.add('lambda')
    temperature.classList.add('temp')

    //bring the data in
    datetoday.textContent = date;
    title.textContent = lambda;
    temperature.textContent = temp;

    return head;
}
const header = document.querySelector('.header-container');
header.appendChild(Header('SMARCH 28, 2019', 'Lambda Times', '98°'))