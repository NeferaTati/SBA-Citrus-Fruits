window.alert('welcome')

const imageUrls = [
    'https://res.cloudinary.com/dvvin6oes/image/upload/v1717097964/bruna-branco-7r1HxvVC7AY-unsplash_pkdefu.jpg',
    'https://res.cloudinary.com/dvvin6oes/image/upload/v1717097988/odiseo-castrejon-1CsaVdwfIew-unsplash_qzbkw2.jpg',
    'https://res.cloudinary.com/dvvin6oes/image/upload/v1717097973/rayia-soderberg-lyBXE61X5Jw-unsplash_uvq4x8.jpg',
    'https://res.cloudinary.com/dvvin6oes/image/upload/v1717095285/vecteezy_generative-ai-harvested-symmetry_30459214_fbyxrp.jpg'
];
/// this is to change the background using an array to iterate through
document.getElementById('changeImageButton').addEventListener('click', function() {
    document.body.style.backgroundImage = getRandImage();
}
);
//// the loop 
function getRandImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return `url(${imageUrls[randomIndex]}

    )`;
}
/// i made a button for the gifs because i cant click on them with out got to gif webside
document.querySelectorAll('.showInfoButton').forEach(button => {
    button.addEventListener('click', function() {
        let  infoDiv = this.nextElementSibling ;
        if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
           
             infoDiv.style.display = 'block';
} else {
                infoDiv.style.display = 'none';
        }
    });
});


const form = document.getElementById('fruit-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const heading = document.createElement('h1');
    const output = document.getElementById("form-output");
    
    heading.innerHTML = `Your favorite fruit is ${event.target[0].value}`
    output.append(heading)
})

