
const imageUrls = [
    'https://res.cloudinary.com/dvvin6oes/image/upload/v1717097964/bruna-branco-7r1HxvVC7AY-unsplash_pkdefu.jpg',
    'https://res.cloudinary.com/dvvin6oes/image/upload/v1717097988/odiseo-castrejon-1CsaVdwfIew-unsplash_qzbkw2.jpg',
    'https://res.cloudinary.com/dvvin6oes/image/upload/v1717097973/rayia-soderberg-lyBXE61X5Jw-unsplash_uvq4x8.jpg'
  ];
  
  document.getElementById('changeImageButton').addEventListener('click', function() {
    document.body.style.backgroundImage = getRandomImage();
});

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
      