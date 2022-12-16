//theme change
{
    const switchBtn = document.getElementById('switch-to-normal-btn');
    const myPicDark = document.getElementById('my-pic-dark');
    const myPicLight = document.getElementById('my-pic-light');

    switchBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        document.body.classList.toggle('fallout');
        myPicDark.hidden = !myPicDark.hidden;
        myPicLight.hidden = !myPicLight.hidden;
    })
}