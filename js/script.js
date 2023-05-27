const cat = document.getElementById('cat');

const assustar = document.getElementById('assustar');

const showCatRun = () => {
    const audio = new Audio('../sound/musicaassustada.mp3');
    audio.play();

    cat.style.display = 'block';

    const audio2 = new Audio('../sound/corre-negada.mp3')
    setTimeout(() => {
        audio2.play();
    }, 4000)

    setTimeout(() => {
        cat.style.display = 'none';
    }, 6000)
}

assustar.addEventListener('click', showCatRun)