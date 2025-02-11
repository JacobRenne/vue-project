<script>
    



</script>

<template>
    <h1 class="page-title">Library</h1>
    <div class="book-card">
        <div class="book-info">
            <h2 class="book-title">Book Title</h2>
            <p class="book-author">by Author Name</p>
        </div>
        <button class="read-toggle" onclick="toggleRead(this)">Not Read</button>
    </div>

</template>

<style>

.page-title {
    color: white;
    text-align: center;
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