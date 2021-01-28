const updateImage = document.getElementById('update');
const getImage = document.getElementById('image');
updateImage.addEventListener('submit', function (event) {
    event.preventDefault();
    const imageUrl = document.getElementById('url');
    if (imageUrl.value.length) {
        document.getElementById('image').setAttribute('src', imageUrl.value);
        imageUrl.value = '';
    }

});


const inputRange = document.querySelectorAll('.inputRange');
for(let i = 0 ; i< inputRange.length; i++){
    inputRange[i].addEventListener('input',function(){        // you can use change/input/click here
        // let getBlur = document.getElementById('blur');
        let blur = inputRange[0].value;
        let brightness = inputRange[1].value;
        let contrast = inputRange[2].value;
        let grayscale = inputRange[3].value;
        let hue = inputRange[4].value;
        let invert = inputRange[5].value;
        let opacity = inputRange[6].value;
        let saturate = inputRange[7].value;
        let sepia = inputRange[8].value;
        getImage.style.filter = 'blur('+blur+'px) brightness('+brightness+'%) contrast('+contrast+'%) grayscale('+grayscale+'%) hue-rotate('+hue+'deg) invert('+invert+'%) opacity('+opacity+'%) saturate('+saturate+'%) sepia('+sepia+'%)';
        
        console.log('blur('+blur+'px) brightness('+brightness+'%) contrast('+contrast+'%) grayscale('+grayscale+'%) hue-rotate('+hue+'deg) invert('+invert+'%) opacity('+opacity+'%) saturate('+saturate+'%) sepia('+sepia+'%)');
        //   grayscale('+grayscale+'%) hue-rotate('+hue+'deg) invert('+invert+'%) opacity('+opacity+'%) saturate('+saturate+'%) sepia('+sepia+'%)';
    });
}

