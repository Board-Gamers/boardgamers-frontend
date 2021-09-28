<template>
    <div>
        <span class="star1">
            <span v-if="rating < 1"><i class="far fa-star"></i></span>
            <span v-if="rating >= 1 && rating < 2"><i class="fas fa-star-half-alt"></i></span>
            <span v-if="rating >= 2"><i class="fas fa-star"></i></span>
        </span>
        <span class="star2">
            <span v-if="rating < 3"><i class="far fa-star"></i></span>
            <span v-if="rating >= 3 && rating < 4"><i class="fas fa-star-half-alt"></i></span>
            <span v-if="rating >= 4"><i class="fas fa-star"></i></span>
        </span>
        <span class="star3">
            <span v-if="rating < 5"><i class="far fa-star"></i></span>
            <span v-if="rating >= 5 && rating < 6"><i class="fas fa-star-half-alt"></i></span>
            <span v-if="rating >= 6"><i class="fas fa-star"></i></span>
        </span>
        <span class="star4">
            <span v-if="rating < 7"><i class="far fa-star"></i></span>
            <span v-if="rating >= 7 && rating < 8"><i class="fas fa-star-half-alt"></i></span>
            <span v-if="rating >= 8"><i class="fas fa-star"></i></span>
        </span>
        <span class="star5">
            <span v-if="rating < 9"><i class="far fa-star"></i></span>
            <span v-if="rating >= 9 && rating < 10"><i class="fas fa-star-half-alt"></i></span>
            <span v-if="rating >= 10"><i class="fas fa-star"></i></span>
        </span>
    </div>
</template>

<script>
export default {
    name: "Star",
    props: {
        rating: Number,
    },
};
</script>

<style></style>
