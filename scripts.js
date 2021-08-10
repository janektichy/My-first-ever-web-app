let Alaska = {
    photo: 'alaska.jpg',
    title: 'Alaska',
    description: 'This is Alaska',
    thumbnail: 0
};

let Azores = {
    photo: 'azores.jpg',
    title: 'Azores',
    description: 'This is Azores',
    thumbnail: 1
};

let CapeTown = {
    photo: 'cape-town.jpg',
    title: 'Cape Town',
    description: 'This is Cape Town',
    thumbnail: 2
};

let Tibet = {
    photo: 'Tibet.jpg',
    title: 'Tibet',
    description: 'This is Tibet',
    thumbnail: 3
};

let Tuvalu = {
    photo: 'tuvalu.jpg',
    title: 'Tuvalu',
    description: 'This is Tuvalu',
    thumbnail: 4
};

let Reykjavik = {
    photo: 'reykjavik.jpg',
    title: 'Reykjavik',
    description: 'This is Reykjavik',
    thumbnail: 5
};

let Poland = {
    photo: 'poland.jpg',
    title: 'Poland',
    description: 'This is Poland',
    thumbnail: 6
};

let Vietnam = {
    photo: 'vietnam.jpg',
    title: 'Vietnam',
    description: 'This is Vietnam',
    thumbnail: 7
};

let imagesData = [Alaska, Vietnam, Poland, Reykjavik, Tibet, Tuvalu, CapeTown, Azores]

let currentPhoto = 0

//let data = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth']

//data.forEach(function(parameter, index){

//})


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
    $('.thumbnail').val(imagesData[photoNumber].thumbnail)
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




$('.thumbnail').click(function() {
    console.log('ahoj'); //vyresit proc thumbnail nema value
});