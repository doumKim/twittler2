const usernameInput = document.querySelector('#username');
const commentTextArea = document.querySelector('#comment');
const commentButton = document.querySelector('button.submit-tweet');
const commentList = document.querySelector('ul.comment-list');
const commentListTemplate = document.querySelector('.comment-item-template');
let inputData = { username: '', tweetComment: '' };

const DATA = [
	// { username: 'kim', tweetComment: '더미 데이터1 입니다.' },
	// { username: 'lee', tweetComment: '더미 데이터2 입니다.' },
];

const onChangeInputValue = (e) => {
	const { value, name } = e.target;
	inputData[name] = value;
};

const printComments = (data) => {
	data.forEach(printComment);
};

const printComment = (comment) => {
	const commentElement = makeCommentElement(comment);
	commentList.appendChild(commentElement);
};

const makeCommentElement = (comment) => {
	const now = new Date().toLocaleString();
	let cloneList = document.importNode(commentListTemplate.content, true);
	let commentUsername = cloneList.querySelector('h3');
	let commentText = cloneList.querySelector('p');
	let commentTime = cloneList.querySelector('span');
	commentUsername.textContent = comment.username;
	commentText.textContent = comment.tweetComment;
	commentTime.textContent = now;
	return cloneList;
};

const resetInput = () => {
	usernameInput.value = '';
	commentTextArea.value = '';
	inputData.username = '';
	inputData.tweetComment = '';
	inputData.date = '';
	usernameInput.focus();
};

printComments(DATA);

const submitComment = (e) => {
	const { username, tweetComment, date } = inputData;
	e.preventDefault();
	if (username && tweetComment) {
		printComment(inputData);
	} else if (!username || !tweetComment) {
	}
	resetInput();
};

usernameInput.addEventListener('change', onChangeInputValue);
commentTextArea.addEventListener('change', onChangeInputValue);
commentButton.addEventListener('click', submitComment);
