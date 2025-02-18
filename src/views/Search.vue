<script setup>
import { ref } from 'vue';
import { addBook } from '../Composables.vue';
import axios from 'axios';

const search = ref('')

const searchArray = ref([

])

async function searchBooks() {
    let response = await axios.get(`https://openlibrary.org/search.json?q=${search.value}&limit=20`)
    searchArray.value = await response.data.docs
    search.value = ''
}


function removeBook(id) {
    searchArray.value = searchArray.value.filter((book) => book.key !== id)
}



</script>


<template>
    <h1 class="page-title">Search</h1>

    <form @submit.prevent="searchBooks" class="book-form">
        <input v-model="search" type="text" placeholder="Title or Author" required>

    	<button type="submit">Search</button>
    </form>
    
    <div id="search-display">
        <div class="book-card" v-for="book in searchArray">
            <div class="book-info">
                <h2 class="book-title"> {{ book.title }}</h2>
                <p class="book-author">{{ book.author_name[0] }}</p>
            </div>

            <button class="book-add" @click="addBook(book.title, book.author_name[0]); removeBook(book.key)">
                Add To Library
            </button>
        </div>

    </div>

</template>

<style>

#search-display {
    margin: 0 10%;
	display: flex;
	justify-content: center;
	gap: 20px;
    flex-wrap: wrap;
}

.book-add {
    background: #464646;
	color: white;
	border: none;
	padding: 8px 12px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.book-add:hover {
	background-color: #585858;
}



</style>