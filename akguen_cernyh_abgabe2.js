//Beginn Basics
var course = {
	title: 'mmsys1',
	room: 10,
	description: 'Schwerpunkt: Grundlagen von JavaScript',
	credits: 4,
	num_students: 5
};


//2.1a
delete course.description;
console.log(course);

//2.1b
course.room = 11;
console.log(course);


//2.1c
var course = {
	title: 'mmsys1',
	room: 10,
	description: 'Schwerpunkt: Grundlagen von JavaScript',
	credits: 4,
	num_students: 5
}
course.lecturer = "Monika Steinberg";
console.log(course);

//2.1d
var courseKeys = Object.keys(course);
console.log(courseKeys);


//2.1e
var moreCourseInformations = {
	bulding: 'E12',
	students: ['Anna', 'Tim', 'Lukas', 'Julia', 'Lena']
};
course = Object.assign(course, moreCourseInformations);
console.log(course);



//Beginn Advanced

var library = {
	books: {total: 18000, subjects: 193400, digital: 12200},
	cds: {total: 1320, subjects: 2339},
	videos: {total: 9008, subjects: 8273, digital: 1299}
};
var books = [
	{
		title: 'JavaScript for impatient programmers',
		isbn: 1091210098,
		pages: 526,
		language: 'en'
	},
	{
		title: 'Client Side Scripting: Using JavaScript',
		isbn: 9333223878,
		pages: 164,
		language: 'en'
	}
];

//2.2a
console.log(library.books.digital);

// 2.2 b.)
console.log(books[1].pages);

// 2.2 c.)
var student = {
	id: 1391,
	firstName: 'Jonas',
	lastName: 'Schulz',
	major: 'bim',
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};

var fullName = student.fullName();
console.log(fullName);
