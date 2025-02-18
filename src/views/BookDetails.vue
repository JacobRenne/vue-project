<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { library } from '../Composables.vue';

const route = useRoute()

const bookDetails = computed(() => {
    return library.value.find(book => book.id === route.params.id) || null;
})


</script>

<template>
    <div v-if="bookDetails" id="book-details">
        <h2>{{ bookDetails.title }}</h2>
        <p>Author: {{ bookDetails.author }}</p>
    </div>
    <p v-else>Book not found!</p>
</template>

<style>

#book-details {
    color: white;
    width: fit-content;
    height: fit-content;
    padding: 30px;
    margin-top: 20px;
    background-color: #121212;
    border-radius: 15px;
}

</style>