const photos = [
  "loguit.svg",
  "image 1.jpg",
  "capa1.svg",
  // Adicione mais URLs de fotos aqui
];

const albumElement = document.getElementById("album");

photos.forEach((photo) => {
  const imgElement = document.createElement("img");
  imgElement.src = photo;
  imgElement.alt = "Foto";
  albumElement.appendChild(imgElement);
});
