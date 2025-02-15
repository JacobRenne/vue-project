<script setup>
import { addBook } from '../Composables.vue'
import { library } from '../Composables.vue'
import { ref } from 'vue'

const title = ref('')
const author = ref('')

function addBookForm() {
	addBook(title.value, author.value)

	title.value = ''
	author.value = ''
}

if (JSON.parse(localStorage.getItem('library'))) {
    library.value = JSON.parse(localStorage.getItem('library'))
}


function changeRead(id) {
    library.value.forEach((book) => {
        if (book.id === id) {
            book.readStatus = !book.readStatus
        }
    })
}

function removeBook(id) {
	library.value = library.value.filter((book) => book.id !== id)
	localStorage.setItem("library", JSON.stringify(library.value))
}

</script>

<template>
    <h1 class="page-title">Library</h1>
    
    <form @submit.prevent="addBookForm" class="book-form">
		<div>
			<label for="title-input">Book Title</label>
        	<input v-model="title" type="text" placeholder="Book Title" id="title-input" required>
		</div>
		
		<div>
			<label for="author-input">Author name</label>
			<input v-model="author" type="text" placeholder="Author name" id="author-input">
		</div>
    	<button type="submit">Add Book</button>
    </form>

    <div class="book-list">
        <div class="book-card" v-for="book in library" :key="book.id">
            <div class="book-info">
                <h2 class="book-title"> {{ book.title }}</h2>
                <p class="book-author">by {{ book.author }}</p>
            </div>
            <button class="read-toggle" @click="changeRead(book.id)" :style="{ background: book.readStatus ? 'green' : ''}"> 
                {{ book.readStatus ? "Read" : "Not Read" }}
            </button>
			<button class="remove-button" @click="removeBook(book.id)">
				REMOVE
			</button>
        </div>
    </div>

</template>

<style>

.page-title {
	color: white;
	text-align: center;
}

.book-form {
	display: flex;
	gap: 10px;
	margin-bottom: 20px;
	justify-content: center;
	background-color: #121212;
	width: fit-content;
	padding: 10px;
	border-radius: 15px;
}

.book-form > div {
	display: flex;
	flex-direction: column;
	color: white;
	font-weight: bold;
	gap: 5px;
}

.book-form input {
	padding: 8px;
	border: 1px solid grey;
	background: #121212;
	color: white;
	outline: none;
}

.book-form button {
	padding: 8px 15px;
	background: #3A3A3A;
	color: white;
	border: none;
	cursor: pointer;
	border-radius: 15px;
}

.book-form button:hover {
	background: #45a049;
}

.book-list {
	margin: 0 10%;
	display: flex;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;
}

.book-card {
	background: #3A3A3A; 
	border-radius: 15px; 
	padding: 15px;
	width: 130px;
	min-height: 180px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.363);
}

.book-title {
	font-size: 1.1rem;
	color: white;
	font-weight: bold;
	margin-bottom: 4px;
}

.book-author {
	font-size: 0.9rem;
	color: #bbb;
	margin-bottom: 12px;
}

.read-toggle {
	background: #464646;
	color: white;
	border: none;
	padding: 8px 12px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.2s ease;
	margin-bottom: 5px;
}

.read-toggle:hover {
	background-color: #585858;
}

.remove-button {
	background: #9700006c;
	color: white;
	border: none;
	padding: 8px 12px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.remove-button:hover {
	background-color: #585858;
}


</style>