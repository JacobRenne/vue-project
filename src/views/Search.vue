<script setup>
import { ref } from 'vue';


const searchArray = ref([
    {
        author: "peter",
        title: "cars",
        id: 50,
        readStatus: false,
    }
])


</script>


<template>
    <h1 class="page-title">Search</h1>

    <form @submit.prevent="searchBooks" class="book-form">
        <input v-model="title" type="text" placeholder="Title or Author" required>

    	<button type="submit">Search</button>
    </form>
    
    <div>
        <div class="book-card" v-for="book in searchArray" :key="book.id">
            <div class="book-info">
                <h2 class="book-title"> {{ book.title }}</h2>
                <p class="book-author">Hey</p>
            </div>

            <button class="book-add">
                Add To Library
            </button>
        </div>

    </div>

</template>

<style>

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