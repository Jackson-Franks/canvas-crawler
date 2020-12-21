console.log('ogre');

// references to DOM Elements i will use.
// let movementDisplay = movement;
//console.log(movement)
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')

game.setAttribute('width', '800px')
game.height = 400;

// get some context
let ctx = game.getContext('2d')
// ctx = context

// do some drawling
// fill color
ctx.fillStyle = 'white'
// line color
ctx.strokeStyle = 'red'
// line width
ctx.lineWidth = 5

ctx.fillRect(10, 10, 100, 100)
// fill rectangle
ctx.strokeRect(10, 10, 100, 100)