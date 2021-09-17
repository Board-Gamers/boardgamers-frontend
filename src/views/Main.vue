<template>
    <div class="main container text-center">
        <div class="row w-100">
            <div class="col-xs-12">
                <Navigation />
            </div>
        </div>
        <br />

        <div class="row bg-img">
            <img :src="require('@/assets/main/1.jpg')" alt="1" />
            <h1>스플랜더</h1>
            <div class="d-flex justify-content-between" style="width: 30%;">
                <h2>전략</h2>
                <h2>2~4인</h2>
            </div>
            <h3>용을 물리치고 용사가 되어 보물을 얻는 게임</h3>
        </div>

        <div class="my-5"></div>

        <div class="row card-section">
            <div class="col">
                <div class="card">
                    <div>
                        <img :src="require('@/assets/main/1.jpg')" alt="1" class="card-bg-img" />
                        <div>
                            <h5 class="my-3">평점 높은 순</h5>
                            <img :src="require('@/assets/main/1.jpg')" class="card-img-top" alt="1" />
                            <h5 class="my-3">스플랜더</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">2. Card title</h5>
                        <h5 class="card-title">3. Card title</h5>
                        <h5 class="card-title">4. Card title</h5>
                        <h5 class="card-title">5. Card title</h5>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div>
                        <img :src="require('@/assets/main/2.png')" alt="2" class="card-bg-img" />
                        <div>
                            <h5 class="my-3">리뷰 많은 순</h5>
                            <img :src="require('@/assets/main/2.png')" class="card-img-top" alt="2" />
                            <h5 class="my-3">할리갈리</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">2. Card title</h5>
                        <h5 class="card-title">3. Card title</h5>
                        <h5 class="card-title">4. Card title</h5>
                        <h5 class="card-title">5. Card title</h5>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div>
                        <img :src="require('@/assets/main/3.png')" alt="3" class="card-bg-img" />
                        <div>
                            <h5 class="my-3">유저 기반 추천 게임</h5>
                            <img :src="require('@/assets/main/3.png')" class="card-img-top" alt="3" />
                            <h5 class="my-3">5초 준다</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">2. Card title</h5>
                        <h5 class="card-title">3. Card title</h5>
                        <h5 class="card-title">4. Card title</h5>
                        <h5 class="card-title">5. Card title</h5>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div>
                        <img :src="require('@/assets/main/4.jpg')" alt="4" class="card-bg-img" />
                        <div>
                            <h5 class="my-3">내가 좋아할만한 게임</h5>
                            <img :src="require('@/assets/main/4.jpg')" class="card-img-top" alt="4" />
                            <h5 class="my-3">카탄</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">2. Card title</h5>
                        <h5 class="card-title">3. Card title</h5>
                        <h5 class="card-title">4. Card title</h5>
                        <h5 class="card-title">5. Card title</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "@/components/boardgame/Navigation.vue";

export default {
    name: "Main",
    components: {
        Navigation,
    },
};
</script>

<style scoped>
.main {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main .bg-img {
    width: 100%;
    height: 350px;
    overflow: hidden;
    position: relative;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 30px;
    border-radius: 10px;
}

.main .bg-img img {
    padding: 0;
    position: absolute;
    opacity: 0.5;
    mix-blend-mode: screen;
}

.main .card-section .card > div:first-child {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    color: white;
    height: 300px;
}

.main .card-section .card > div:first-child div {
    height: 100%;
    z-index: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.main .card-img-top {
    width: 50%;
}

.main .card-bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(5px) brightness(60%);
}

.main .card-body {
    text-align: start;
    padding: 20px 8%;
}
</style>
