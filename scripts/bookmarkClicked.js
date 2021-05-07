function bookmarkClicked() {
    
    const bookmark = document.querySelector('.fa-bookmark')
    bookmark.style = 'transition: 1s; background:hsl(176, 72%, 28%); color: white'

    bookmark.addEventListener("click", () => {
        bookmark.style = ''
        })
    }