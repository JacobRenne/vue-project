<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    book: Object,
    required: true,
})

</script>

<template>
    <div class="book-card">
        <div class="book-info">
            <h2 class="book-title"> {{ book.title }}</h2>
            <p class="book-author">by {{ book.author }}</p>
        </div>
        <RouterLink :to="`book/${book.id}`">
            <button id="detail-button">Details</button>
        </RouterLink>

        <button class="read-toggle" @click="$emit('change-read', book.id)" :style="{ background: book.readStatus ? 'green' : ''}"> 
            {{ book.readStatus ? "Read" : "Not Read" }}
        </button>
        <button class="remove-button" @click="$emit('remove-book', book.id)">
            REMOVE
        </button>
        
    </div>
</template>

<style>

#detail-button {
    padding: 8px 15px;
	background: #0002204d;
	color: white;
	border: none;
	cursor: pointer;
	border-radius: 5px;
    margin-bottom: 5px;
}


</style>