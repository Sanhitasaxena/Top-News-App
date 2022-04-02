// aqcuiring the elements
const input = document.getElementById("input")
const submit = document.getElementById("submit")
const newsList = document.getElementById("news-list")

// function to be called on "clicking of submit button"
function getresult(){
   newsList.innerHTML = ''
    const apikey = 'dba702f67dae4b439c83fdaed9ef44c9'
    let topic = input.value
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
    // console.log(url)
    fetch(url).then(response => response.json())
    .then(data => {
        data.articles.forEach(article => {
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.setAttribute('href', article.url)
            a.setAttribute('target', '_blank')
            a.textContent = article.title
           
            // appending childs
            li.appendChild(a)
            newsList.appendChild(li)
            newsList.style.visibility = "visible"
        });
    })
}