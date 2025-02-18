<script>
import { v4 as uuidv4 } from 'uuid'
import { ref, watch } from 'vue'


export const library = ref([])

if (JSON.parse(localStorage.getItem('library'))) {
    library.value = JSON.parse(localStorage.getItem('library'))
}


watch(library, () => {
        localStorage.setItem("library", JSON.stringify(library.value))
    }, 
    { deep: true }
)

export function addBook(title, author) {
    library.value.push({
        title,
        author,
        readStatus: false,
        id: uuidv4(),
    })

}
    

</script>