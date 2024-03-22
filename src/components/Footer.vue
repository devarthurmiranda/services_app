<template>
    <div>
        <footer class="footer">
            <div class="copyright">
                <p>© 2024 Arthur Miranda</p>
                <p>All rights reserved</p>
            </div>
            <div >
                <a href="https://github.com/devarthurmiranda">
                    <img class="icon" src="../assets/github.png" alt="">
                </a>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Footer-C',
});


</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #000000;
    padding: 8px 0;
    text-align: center;
    color: white;
}
.copyright {
    font-weight: bold;
}
.icon {
    width: 30px;
    height: 30px;
    margin: 0 10px;
}
</style>