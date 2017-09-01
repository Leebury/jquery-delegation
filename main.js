console.log('Still here!');
//Jquery event delegation
$(function(){

var $addbutton = $('#add-button');
var $squareContainer = $('.red-square');
var $colourchange = $('.little-square');
var rotate = 0;

$addbutton.click(function(event){
	$squareContainer.append('<div class="little-square"></div>');
})

 setInterval(function(){
 $squareContainer.append('<div class="little-square"></div>');
 },2000)

$colourchange.click(function(event){
	$(this).addClass('blue');
	// Remeber with .css ('what you want to change', 'then what to')
	setInterval(function(){
	     rotate += 10;
	     $(this).css('transform', 'rotateZ('+ rotate+ 'deg)');
	 },1000);
})

setInterval(function(){
    rotate += 10;
    $orangeBox.css('transform', 'rotateZ('+ rotate+ 'deg)');


$squareContainer.on('click','.little-square' ,function(){
	$(this).addClass('blue');
	var $timer = $(this);

	setInterval(function(){
		$timer.addClass('blue');
	},1000);	

	setInterval(function(){
		$timer.removeClass('blue');
	},2000);

//Parent goes first and it passes this onto the 
//Child element which is the little-square
})

// Jquery effects

// var $orangeBox = $('#big-square')

// $orangeBox
//     .animate({
//         height: '100px',
//         width: '1000px'
// }, 2000)
//     .animate({
//         height: '300px',
//         width: '300px', 
//         },2000)   


// setInterval(function(){
// 	console.log('Hello Lee');
// },2000)


// other way

// setTimeout(sayhello,2000);
// 	console.log('hello');










})