<template>
    <div class="pt-3">
        <div class="text-start fs-5 mt-5">최대 게임 시간</div>
        <select class="form-select" aria-label="Default select example" v-model="playtime">
            <option value="" selected>전체</option>
            <option value="20">20분 이내</option>
            <option value="40">40분 이내</option>
            <option value="60">60분 이내</option>
        </select>

        <div class="text-start fs-5 mt-3">인원수</div>
        <div>
            <select class="form-select w-75" aria-label="Default select example" v-model="minplayer">
                <option value="" selected>전체</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button class="btn">~</button>
            <select class="form-select w-75 float-end" aria-label="Default select example" v-model="maxplayer">
                <option value="" selected>전체</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>

        <div class="text-start fs-5 mt-3">최소 연령</div>
        <select class="form-select" aria-label="Default select example" v-model="minage">
            <option value="" selected>전체</option>
            <option value="8">8세 이상</option>
            <option value="10">10세 이상</option>
            <option value="12">12세 이상</option>
            <option value="16">16세 이상</option>
        </select>

        <div class="input-group mt-3">
            <input type="text" class="form-control" placeholder="키워드 검색" aria-label="Recipient's username" aria-describedby="button-addon2" @keyup.enter="keywordSearch" v-on:input="updatekey" />
        </div>

        <button type="submit" class="btn btn-primary mt-3 w-100" v-on:click="keywordSearch">검색하기</button>
    </div>
</template>

<script>
export default {
    name: "tap",
    data() {
        return {
            playtime: "",
            minplayer: "",
            maxplayer: "",
            minage: "",
            serachkeyword: "",
        };
    },
    methods: {
        keywordSearch() {
            let que = {
                keyword: this.serachkeyword,
                maxPlayTime: this.playtime,
                minPlayers: this.minplayer,
                maxPlayers: this.maxplayer,
                minAge: this.minage,
            };
            this.$router.push({ path: "search", query: que }).catch(() => {});
        },
        updatekey(e) {
            this.serachkeyword = e.target.value;
        },
    },
};
</script>

<style></style>
