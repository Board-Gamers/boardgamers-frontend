<template>
    <div class="form-floating mb-3">
        <input :type="type" class="form-control" :placeholder="placeholder" v-on:input="onEmit" @keyup.enter="keyUp" />
        <label for="floatingInput">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        placeholder: String,
        type: String,
        label: String,
    },
    data() {
        return {};
    },
    methods: {
        onEmit(e) {
            this.$emit("setInput", e.target.value);
        },
        keyUp() {
            this.$emit("keyUp");
        },
    },
};
</script>

<style></style>
