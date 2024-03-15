<template>
    <div>
        <AppBar :title="'Home'" :config="defaultAppBarConfig"/>
        <div class="container">
            <h1>Home Screen</h1>
            <p>This is the home screen</p>
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