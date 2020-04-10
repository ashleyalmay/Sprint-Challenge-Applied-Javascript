// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



// topicsArray.forEach(topic => {
//     axios.get("https://lambda-times-backend.herokuapp.com/topics")
//         .then((response) => {
//             console.log(tabs(response.data));
//             console.log(response)
//             let topics = response.data;
//             tab.appendChild(topics)

//         })
//         .catch(error => console.log(error))
// })


axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) => {
        const topics = response.data.topics;
        topics.forEach(topic => {

            const tab = document.createElement('div')
            tab.classList.add('tab');
            tab.textContent = topic;
            const divTopics = document.querySelector('.topics');
            divTopics.appendChild(tab)

        })

    }).catch(error => console.log(error));