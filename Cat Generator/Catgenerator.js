function generatecat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flexcatgen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif"
    div.appendChild(image);
}