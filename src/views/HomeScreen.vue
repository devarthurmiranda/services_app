<template>
    <div>
        <AppBar :title="'Home'" :config="defaultAppBarConfig"/>
        <div class="content">
            <p>Services App</p>
            <p>A new (and smart) way to work!</p>
        </div>
        <Footer/>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBar from '@/components/AppBar.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
    name: 'HomeScreen',
    components: {
        AppBar,
        Footer,

    },
    data(){
        return{
            defaultAppBarConfig: {
                homeRoute: '/home',
                otherRoutes: {
                    Register: '/register',
                    Login: '/login',
                },
            },
        }
    }
});
</script>

<style scoped>


.content {
    padding-top: 200px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 1000;
    color: #ffffff;
    text-shadow: 2px 2px 4px #000000;
    position: relative; /* Make the content container relative */
    height: 100vh; /* Adjust as needed */
}

.content::before {
    content: ''; /* Create a pseudo-element */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/default/HomeScreenBackground.jpg'); /* Add your image */
    background-size: cover;
    background-position: center;
    filter: blur(4px); /* Apply the blur effect */
    z-index: -1; /* Ensure the pseudo-element is behind the content */
}
</style>