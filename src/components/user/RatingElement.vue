<template>
    <div>
        <div class="square">
            <div class="inner">
                <div class="review-star">
                    <div>&nbsp;{{ myrate }}</div>
                    <input type="radio" :id="id + 100" :name="id" value="10" v-model="myrate" />
                    <label :for="id + 100" class="star pr-4">★</label>
                    <input type="radio" :id="id + 200" :name="id" value="8" v-model="myrate" />
                    <label :for="id + 200" class="star">★</label>
                    <input type="radio" :id="id + 300" :name="id" value="6" v-model="myrate" />
                    <label :for="id + 300" class="star">★</label>
                    <input type="radio" :id="id + 400" :name="id" value="4" v-model="myrate" />
                    <label :for="id + 400" class="star">★</label>
                    <input type="radio" :id="id + 500" :name="id" value="2" v-model="myrate" />
                    <label :for="id + 500" class="star">★</label>
                </div>
            </div>
        </div>
        <div class="text-white">
            {{ ele }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ele: Number,
        myrate: Number,
        id: String,
    },
    data() {
        return {};
    },
};
</script>

<style>
.square {
    width: 100%;
    position: relative;
}
.square:after {
    content: "";
    display: block;
    padding-bottom: 110%;
}
.inner {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightgray;
    z-index: 2;
}
.review-star {
    width: 100%;
    flex-direction: row-reverse;
    display: flex;
    justify-content: center;
    z-index: 3;
}
.review-star input {
    display: none;
}
.review-star label {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: blue;
    cursor: pointer;
}
.review-star :checked ~ label {
    -webkit-text-fill-color: blue;
}
.review-star label:hover,
.review-star label:hover ~ label {
    -webkit-text-fill-color: blue;
}
</style>
