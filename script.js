function initPage() {
    const searchTerm = document.getElementById("searchTerm");
    const searchEl = document.getElementById("submit");
    
    searchEl.addEventListener("click", function () {
    console.log(searchTerm.value);
    fetchBooks();
    })
    }
    initPage();
    
    // fetch('https://www.googleapis.com/books/v1/volumes?q='+ searchTerm).then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data)
    // });
    
    
    function fetchBooks(){
        fetch('https://www.googleapis.com/books/v1/volumes?q='+ searchTerm).then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
        });
    }
    
    
    








