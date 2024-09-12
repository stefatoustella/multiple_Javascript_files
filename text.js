export function loadMore() {
    document.querySelector('main').addEventListener
        ('click', (e) => {
            if (e.target.classList.contains('load_more') || ('load_some_more')) {
                if (e.target.parentElement.querySelector('.more_text').style['display'] == '') {
                    e.target.parentElement.querySelector('.more_text').style['display'] = 'none'
                    e.target.innerText = 'load more'
                }
                else {
                    e.target.parentElement.querySelector('.more_text').style['display'] = ''
                    e.target.innerText = 'show excerpts'
                }
            }
        })
}
