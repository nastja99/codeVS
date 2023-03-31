//Beginn Basics
var course = {
	title: 'mmsys1',
	room: 10,
	description: 'Schwerpunkt: Grundlagen von JavaScript',
	credits: 4,
	num_students: 5
};


//2.1a
console.log("Original object:",course);
delete course.description
console.log("Updated object: ",course)

//2.1b
course.room = 22;
console.log("Updated object: ",course)


//2.1c
var course = {
	title: 'mmsys1',
	room: 10,
	description: 'Schwerpunkt: Grundlagen von JavaScript',
	credits: 4,
	num_students: 5
}
course['lecturer'] = 'Monika Steinberg';
console.log(course);

//2.1d
var mycourse = ['mmsys1', 10, 'Schwerpunkt: Grundlagen von JavaScript', 4, 5 ];
console.log(mycourse);


//2.1e
var moreCourseInformations = {
	bulding: 'E12',
	students: ['Anna', 'Tim', 'Lukas', 'Julia', 'Lena']
};
var allCourseInformation = Object.assign({}, course, moreCourseInformations);
console.log(allCourseInformation);



//Beginn Advanced

var library = {
	books: {total: 18000, subjects: 193400, digital: 12200},
	cds: {total: 1320, subjects: 2339},
	videos: {total: 9008, subjects: 8237, digital: 1299}
};

//2.2a
var library = document.getElementsByClassName ('books);
console.log(library);