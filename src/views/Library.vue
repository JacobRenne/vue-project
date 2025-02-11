<script setup>
import { ref } from 'vue'

const books = ref([
    {
        title: "Fast cars",
        author: "Peter",
        readStatus: false,
        id: 15,
    },
    {
        title: "Fast cars",
        author: "Peter",
        readStatus: false,
        id: 14,
    },
    {
        title: "Fast cars",
        author: "Peter",
        readStatus: false,
        id: 13,
    }
])

function changeRead(id) {

    books.value.forEach((book) => {
        if (book.id === id) {
            book.readStatus = !book.readStatus
        }
        console.log(book.readStatus)
    })

}


</script>

<template>
    <h1 class="page-title">Library</h1>

    <div id="book-list">
        <div class="book-card" v-for="book in books">
            <div class="book-info">
                <h2 class="book-title"> {{ book.title }}</h2>
                <p class="book-author">by {{ book.author }}</p>
            </div>
            <button class="read-toggle" @click="changeRead(book.id)"> 
                {{ book.readStatus ? "Read" : "Not Read" }}
            </button>
        </div>
    </div>

</template>

<style>

.page-title {
    color: white;
    text-align: center;
}

#book-list {
    margin: 0 10%;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.book-card {
  background: #3A3A3A; 
  border-radius: 16px; 
  padding: 16px;
  width: 150px;
  height: 180px;
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
  background: #444;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.read-toggle:hover {
  background-color: #666;
}


</style>