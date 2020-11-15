const movie = [
{
		name: "Bumblebee",
		year: "2018",
		director: "Travis Knight", 
		image: "cs-bumblebee.jpg"
},
{
		name: "The_Protector",
		year: "2005",
		director: "James_Mangold",
		image: "8-protector.jpg"
},
{
		name: "The_Protector_2",
		year: "2013",
		director: "Prachya_Pinkaew",
		image: "protector2.jpg"
},
{
		name: "XXX_Return_Of_Xander_Cage",
		year: "2017",
		director: "DJ_Caruso",
		image: "Movie-xander-cage.jpg"
},
{
		name: "GI_Joe_Rise_Of_The_Cobra",
		year: "2009",
		director: "Stephen_Sommers",
		image: "7_gi_joe.jpg"
},
];

const list = document.getElementById("listID");

const listItems = movie.map(aMovie =>` 
<li>
   <h3>Name: ${aMovie.name}</h3>
   <img src="${aMovie.image}" height="50%" width="50%"/>
   <p>Year: ${aMovie.year}</p>
   <p>Director: ${aMovie.director}</p>
   
</li>`
);

list.innerHTML = listItems.join('');