
function searchOnPage() {

    var input, filter, div, divElements, title, text, notFoundContainer, button;
    var isAnyArticleVisible = false;
    input = document.getElementById('inptSearch');
    filter = input.value.toUpperCase();
    div = document.getElementById('allArticles');
    divElements = div.getElementsByClassName('articleBlogContainer');
    notFoundContainer = document.getElementById('notFoundContainer');
    button = document.getElementById('btnLoadMore');
    for (i = 0; i < divElements.length; i++) {
        title = divElements[i].getElementsByTagName("a")[1];
        text = divElements[i].getElementsByTagName("p")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1 || text.innerHTML.toUpperCase().indexOf(filter) > -1) {
            divElements[i].style.display = "flex";
            isAnyArticleVisible = true;
        } else {
            divElements[i].style.display = "none";
        }
    }

    notFoundContainer.style.display = isAnyArticleVisible ? "none" : "block";
    button.style.display = isAnyArticleVisible ? "block" : "none";
}

