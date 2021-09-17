<template>
    <div class="d-grid gap-2 mt-3">
        <button class="btn btn-danger py-2 mt-3" type="button">{{ text }}</button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
    },
    methods: {},
};
</script>

<style scoped></style>
