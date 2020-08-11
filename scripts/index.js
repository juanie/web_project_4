

//edit profile
const editProfilepopup = document.querySelector('.popup_type_edit-profile')

const editButton = document.querySelector('.profile__edit-button'); 
const editCloseButton = document.querySelector('.popup__close-btn_type_edit-profile'); 
const editForm = editProfilepopup.querySelector('.popup__form'); 
const inputName = document.querySelector('.popup__input_name'); 
const inputDesc = document.querySelector('.popup__input_desc'); 
 
const profileName = document.querySelector('.profile__name'); 
const profileDesc = document.querySelector('.profile__desc'); 

//add image 
const addImageButton = document.querySelector('.profile__add-button');

const addImagepopup = document.querySelector('.popup_type_add-image');

const addImageForm = addImagepopup.querySelector('.popup__form');
const closeAddImage = addImagepopup.querySelector('.popup__close-btn_type_add-image');
const addImageTitle = addImagepopup.querySelector('.popup__input_image-name');
const addImageUrl = addImagepopup.querySelector('.popup__input_url');

//image enlarged
const imagepopup = document.querySelector('.popup_type_image');
const closeImagepopup = imagepopup.querySelector('.popup__close-btn_type_image');
const popupImg = document.getElementById("img-large");
const imagepopupEnlarge = imagepopup.querySelector('.popup__large-image');
const imagepopupCaption = imagepopup.querySelector('.popup__caption');
//new images template
const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__item');


//like button
//list of originl images
const list = document.querySelector('.elements__list');


const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
},
{
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg"
},
{
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
},
{
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
},
{
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
},
{
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}
];

//functions 
//open the popup
function togglepopupWindow(e){ 
  e.classList.toggle('popup_is-open'); 
} 

//open the edit profile popup
 editButton.addEventListener('click', () => {
  togglepopupWindow(editProfilepopup);
})
//close the edit profile popup
editCloseButton.addEventListener('click', () => {
  togglepopupWindow(editProfilepopup);
})

//open the add image popup
addImageButton.addEventListener('click', () => {
  togglepopupWindow(addImagepopup);
})

//close the add image popup
closeAddImage.addEventListener('click', () => {
  togglepopupWindow(addImagepopup);
})
//enlarge image


//close enlarged image
closeImagepopup.addEventListener('click', () => {
  togglepopupWindow(imagepopup);
})

//handle edit profile form
const formSubmitHandler = (e) => {

    e.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileDesc.textContent = inputDesc.value; 
    togglepopupWindow(editProfilepopup);
} 
//submit edit profile form
editForm.addEventListener('submit', formSubmitHandler);


  //go through images list
  function renderImage(data) {
    list.prepend(createCard(data));
  }
  initialCards.forEach((data) => {
    renderImage(data)
  })

//create a new card
function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__title');
  const clickLike = cardElement.querySelector('.elements__heart');
  const deleteCardButton = cardElement.querySelector('.elements__delete');

  // image name and image url
  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;
  //like button

  clickLike.addEventListener("click", function(e){
    e.target.classList.toggle("elements__heart-active");
  });
    //delete image

  deleteCardButton.addEventListener('click', (e) => {
    cardElement.remove();
    e.stopPropagation();
    });
  //Enlarging image
  cardImage.addEventListener('click', () => {
    imagepopupEnlarge.setAttribute('src', data.link);
    imagepopupCaption.textContent = data.name;
    togglepopupWindow(imagepopup);
  })


  return cardElement;
}



//new image handler 

const addImageHandler = (e) => {
  e.preventDefault();
  const cardElement = createCard({
    name: addImageTitle.value, link: addImageUrl.value
  });
  list.prepend(cardElement);
  togglepopupWindow(addImagepopup);
};
//add new image once pressed 'submit'
addImageForm.addEventListener('submit', addImageHandler);


