<script>
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'


export const library = ref([])


export function addBook(title, author) {
    library.value.push({
        title,
        author,
        readStatus: false,
        id: uuidv4(),
    })

    localStorage.setItem("library", JSON.stringify(library.value))
}
    

</script>