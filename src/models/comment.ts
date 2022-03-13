class Comment {
	id: number;
	firstname: string;
	surname: string;
	gender: string;
	email: string;
	telephone: string;
	dob: string;
	comments: string;

	constructor(
		id: number,
		firstname: string,
		surname: string,
		gender: string,
		email: string,
		telephone: string,
		dob: string,
		comments: string
	) {
		this.id = id;
		this.firstname = firstname;
		this.surname = surname;
		this.gender = gender;
		this.email = email;
		this.telephone = telephone;
		this.dob = dob;
		this.comments = comments;
	}
}

export default Comment;
