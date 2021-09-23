<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/main">Main</router-link> | 
            <router-link to="/">Main</router-link> | 
            <router-link to="/login">Login</router-link>
        </div> -->
        <router-view />
    </div>
</template>

<style>
@font-face {
    font-family: "Noto Sans CJK KR";
    src: url("./fonts/NotoSansCJKkr-Regular.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
}

#app {
    font-family: "Noto Sans CJK KR", sans-serif;
    /*-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;*/
}

#nav {
    padding: 30px;
    text-align: center;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
