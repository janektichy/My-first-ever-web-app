let Alaska = {
    photo: 'alaska.jpg',
    title: 'Alaska',
    description: "Well, since I've seen the movie Into the Wild, it's kinda impossible not want to visit this beautiful wild nature",
};

let Azores = {
    photo: 'azores.jpg',
    title: 'Azores',
    description: "Azore Islands are one of my deeply loved places. It's just like a little park in the middle of the Sea.",
};

let CapeTown = {
    photo: 'cape-town.jpg',
    title: 'Cape Town',
    description: 'Cape Town is the capital city of South Africa. There are mostly rich Europian people having a party 24/7, so I mean, great place to live. On a really close hill a "silent party" takes place every year and I know I could visit this almost in every country, but with this view? Hard to say no.',
};

let Tibet = {
    photo: 'Tibet.jpg',
    title: 'Tibet',
    description: 'Well, Tibet, Himalayas, do I have to say more?',
};

let Tuvalu = {
    photo: 'tuvalu.jpg',
    title: 'Tuvalu',
    description: "Tuvalu is not really famous island, but it's known as a most thin island in the world. You can see the Ocean on both sides all over the land, isn't that amazing?"
};

let Reykjavik = {
    photo: 'reykjavik.jpg',
    title: 'Reykjavik',
    description: 'Reykjavik - the capital of Iceland. To be honest, the city it self isn not really the reason I want to go there, I just wanted to have a picture of a specific place. I want to see every centermeter of this beautiful island.',
};

let Poland = {
    photo: 'poland.jpg',
    title: 'Poland',
    description: "This is kind of a weird one. It's a small village in Poland known for being the longest village in Europe (in proportion to it's width) and I just consider it super amazing, have to see it in real life.",
};

let Vietnam = {
    photo: 'vietnam.jpg',
    title: 'Vietnam',
    description: 'And last, but not least, Vietnam. Vietnam is a country I admire, because life there is just so peaceful and easy. On the picture is a typical vietnamese farmland, which does look like a peace of art. ',
};

let imagesData = [Alaska, Vietnam, Poland, Reykjavik, Tibet, Tuvalu, CapeTown, Azores]

let currentPhoto = 0








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




let i=0
  
imagesData.forEach(thumb => {
    $('container').append('<div class="thumbnail"><img data-number='+i
                         +' src="'+thumb.photo+'" width="80px" height="60px"><div class="htitle" data-number='+i+7
                         +' >'+thumb.title+'</div></div>')
    i++
});

$('img').click(function() {
    currentPhoto = $(this).attr('data-number')
    loadPhoto(currentPhoto)
});

loadPhoto(currentPhoto)