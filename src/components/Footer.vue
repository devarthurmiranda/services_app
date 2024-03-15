<template>
    <div>
        <footer class="footer">
            <div class="copyright">
                <p>© 2024 Arthur Miranda</p>
                <p>All rights reserved</p>
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
    padding: 20px 0;
    text-align: center;
    color: white;
}
.copyright {
    text-decoration: white;
    font-weight: bold;
}
</style>