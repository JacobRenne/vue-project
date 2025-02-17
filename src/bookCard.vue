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
        <button class="read-toggle" @click="$emit('change-read', book.id)" :style="{ background: book.readStatus ? 'green' : ''}"> 
            {{ book.readStatus ? "Read" : "Not Read" }}
        </button>
        <button class="remove-button" @click="$emit('remove-book', book.id)">
            REMOVE
        </button>
    </div>
</template>