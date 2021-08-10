let Alaska = {
    photo: 'alaska.jpg',
    title: 'Alaska',
    description: 'This is Alaska'
};

let Azores = {
    photo: 'azores.jpg',
    title: 'Azores',
    description: 'This is Azores'
};

let CapeTown = {
    photo: 'cape-town.jpg',
    title: 'Cape Town',
    description: 'This is Cape Town'
};

let Tibet = {
    photo: 'Tibet.jpg',
    title: 'Tibet',
    description: 'This is Tibet'
};

let Tuvalu = {
    photo: 'tuvalu.jpg',
    title: 'Tuvalu',
    description: 'This is Tuvalu'
};

let Reykjavik = {
    photo: 'reykjavik.jpg',
    title: 'Reykjavik',
    description: 'This is Reykjavik'
};

let Poland = {
    photo: 'poland.jpg',
    title: 'Poland',
    description: 'This is Poland'
};

let Vietnam = {
    photo: 'vietnam.jpg',
    title: 'Vietnam',
    description: 'This is Vietnam'
};

let imagesData = [Alaska, Vietnam, Poland, Reykjavik, Tibet, Tuvalu, CapeTown, Azores]

let currentPhoto = 0

let data = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth']

data.forEach(function(parameter, index){
    
})


//data.forEach((parameter, index) => {  
//$('.thumbnail').append(<div> "class = box" </div>)
//});
//$('.box').click(() => {
//    currentPhoto = data-index;
//})









let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').html(imagesData[photoNumber].title);
    $('#photo-description').html(imagesData[photoNumber].description);
  }
  

  
$('.right').click(() => {
    if (currentPhoto < 7) {currentPhoto++;}
    else {currentPhoto = 0;}
    loadPhoto(currentPhoto);
    
})


$('.left').click(() => {
    if (currentPhoto > 0) {currentPhoto--;}
    else {currentPhoto = 7;}
    loadPhoto(currentPhoto);
})

loadPhoto(currentPhoto)