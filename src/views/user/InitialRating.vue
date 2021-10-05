<template>
    <div class="whole-rating">
        <Bgi />
        <Logo />
        <div class="row">
            <span class="fs-2 text-white text-center my-3">보드게임에 별점을 남겨주세요</span>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="row row-cols-2 row-cols-md-5" v-if="elements !== []">
                    <!-- <div class="col my-3" v-for="ele in elements" v-bind:key="ele.id">
                        <Element :ele="ele" :myrate="myrate[ele]" :id="ele" />
                    </div> -->
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner active0">
                                <div class="review-star">
                                    <div class="text-white">&nbsp;{{ myrate[0] }}</div>
                                    <input type="radio" id="15-stars" name="rating" value="10" v-model="myrate[0]" />
                                    <label for="15-stars" class="star pr-4">★</label>
                                    <input type="radio" id="14-stars" name="rating" value="8" v-model="myrate[0]" />
                                    <label for="14-stars" class="star">★</label>
                                    <input type="radio" id="13-stars" name="rating" value="6" v-model="myrate[0]" />
                                    <label for="13-stars" class="star">★</label>
                                    <input type="radio" id="12-stars" name="rating" value="4" v-model="myrate[0]" />
                                    <label for="12-stars" class="star">★</label>
                                    <input type="radio" id="11-star" name="rating" value="2" v-model="myrate[0]" />
                                    <label for="11-star" class="star">★</label>
                                </div>
                            </div>    
                        </div>-->
                        <img src="../../assets/images/pic2286966.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[0] }}</div>
                            <input type="radio" id="15-stars" name="rating" value="10" v-model="myrate[0]" />
                            <label for="15-stars" class="star pr-4">★</label>
                            <input type="radio" id="14-stars" name="rating" value="8" v-model="myrate[0]" />
                            <label for="14-stars" class="star">★</label>
                            <input type="radio" id="13-stars" name="rating" value="6" v-model="myrate[0]" />
                            <label for="13-stars" class="star">★</label>
                            <input type="radio" id="12-stars" name="rating" value="4" v-model="myrate[0]" />
                            <label for="12-stars" class="star">★</label>
                            <input type="radio" id="11-star" name="rating" value="2" v-model="myrate[0]" />
                            <label for="11-star" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[0] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                <div class="review-star">
                                    <div class="text-white">&nbsp;{{ myrate[1] }}</div>
                                    <input type="radio" id="25-stars" name="rating2" value="10" v-model="myrate[1]" />
                                    <label for="25-stars" class="star pr-4">★</label>
                                    <input type="radio" id="24-stars" name="rating2" value="8" v-model="myrate[1]" />
                                    <label for="24-stars" class="star">★</label>
                                    <input type="radio" id="23-stars" name="rating2" value="6" v-model="myrate[1]" />
                                    <label for="23-stars" class="star">★</label>
                                    <input type="radio" id="22-stars" name="rating2" value="4" v-model="myrate[1]" />
                                    <label for="22-stars" class="star">★</label>
                                    <input type="radio" id="21-star" name="rating2" value="2" v-model="myrate[1]" />
                                    <label for="21-star" class="star">★</label>
                                </div>
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic458934.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[1] }}</div>
                            <input type="radio" id="25-stars" name="rating2" value="10" v-model="myrate[1]" />
                            <label for="25-stars" class="star pr-4">★</label>
                            <input type="radio" id="24-stars" name="rating2" value="8" v-model="myrate[1]" />
                            <label for="24-stars" class="star">★</label>
                            <input type="radio" id="23-stars" name="rating2" value="6" v-model="myrate[1]" />
                            <label for="23-stars" class="star">★</label>
                            <input type="radio" id="22-stars" name="rating2" value="4" v-model="myrate[1]" />
                            <label for="22-stars" class="star">★</label>
                            <input type="radio" id="21-star" name="rating2" value="2" v-model="myrate[1]" />
                            <label for="21-star" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[1] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic76814.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[2] }}</div>
                            <input type="radio" id="35-stars" name="rating3" value="10" v-model="myrate[2]" />
                            <label for="35-stars" class="star pr-4">★</label>
                            <input type="radio" id="34-stars" name="rating3" value="8" v-model="myrate[2]" />
                            <label for="34-stars" class="star">★</label>
                            <input type="radio" id="33-stars" name="rating3" value="6" v-model="myrate[2]" />
                            <label for="33-stars" class="star">★</label>
                            <input type="radio" id="32-stars" name="rating3" value="4" v-model="myrate[2]" />
                            <label for="32-stars" class="star">★</label>
                            <input type="radio" id="31-star" name="rating3" value="2" v-model="myrate[2]" />
                            <label for="31-star" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[2] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic3534841.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[3] }}</div>
                            <input type="radio" id="45-stars" name="rating4" value="10" v-model="myrate[3]" />
                            <label for="45-stars" class="star pr-4">★</label>
                            <input type="radio" id="44-stars" name="rating4" value="8" v-model="myrate[3]" />
                            <label for="44-stars" class="star">★</label>
                            <input type="radio" id="43-stars" name="rating4" value="6" v-model="myrate[3]" />
                            <label for="43-stars" class="star">★</label>
                            <input type="radio" id="42-stars" name="rating4" value="4" v-model="myrate[3]" />
                            <label for="42-stars" class="star">★</label>
                            <input type="radio" id="41-star" name="rating4" value="2" v-model="myrate[3]" />
                            <label for="41-star" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[3] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic4156641.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[4] }}</div>
                            <input type="radio" id="05-stars" name="rating0" value="10" v-model="myrate[4]" />
                            <label for="05-stars" class="star pr-4">★</label>
                            <input type="radio" id="04-stars" name="rating0" value="8" v-model="myrate[4]" />
                            <label for="04-stars" class="star">★</label>
                            <input type="radio" id="03-stars" name="rating0" value="6" v-model="myrate[4]" />
                            <label for="03-stars" class="star">★</label>
                            <input type="radio" id="02-stars" name="rating0" value="4" v-model="myrate[4]" />
                            <label for="02-stars" class="star">★</label>
                            <input type="radio" id="01-star" name="rating0" value="2" v-model="myrate[4]" />
                            <label for="01-star" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[4] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->

                        <img src="../../assets/images/pic594969.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[5] }}</div>
                            <input type="radio" id="55-stars" name="rating5" value="10" v-model="myrate[5]" />
                            <label for="55-stars" class="star pr-4">★</label>
                            <input type="radio" id="54-stars" name="rating5" value="8" v-model="myrate[5]" />
                            <label for="54-stars" class="star">★</label>
                            <input type="radio" id="53-stars" name="rating5" value="6" v-model="myrate[5]" />
                            <label for="53-stars" class="star">★</label>
                            <input type="radio" id="52-stars" name="rating5" value="4" v-model="myrate[5]" />
                            <label for="52-stars" class="star">★</label>
                            <input type="radio" id="51-star" name="rating5" value="2" v-model="myrate[5]" />
                            <label for="51-star" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[5] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                               
                            </div>
                        </div> -->

                        <img src="../../assets/images/pic981505.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[6] }}</div>
                            <input type="radio" id="65-stars" name="rating6" value="10" v-model="myrate[6]" />
                            <label for="65-stars" class="star pr-4">★</label>
                            <input type="radio" id="64-stars" name="rating6" value="8" v-model="myrate[6]" />
                            <label for="64-stars" class="star">★</label>
                            <input type="radio" id="63-stars" name="rating6" value="6" v-model="myrate[6]" />
                            <label for="63-stars" class="star">★</label>
                            <input type="radio" id="62-stars" name="rating6" value="4" v-model="myrate[6]" />
                            <label for="62-stars" class="star">★</label>
                            <input type="radio" id="61-stars" name="rating6" value="2" v-model="myrate[6]" />
                            <label for="61-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[6] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic5872080.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[7] }}</div>
                            <input type="radio" id="75-stars" name="rating7" value="10" v-model="myrate[7]" />
                            <label for="75-stars" class="star pr-4">★</label>
                            <input type="radio" id="74-stars" name="rating7" value="8" v-model="myrate[7]" />
                            <label for="74-stars" class="star">★</label>
                            <input type="radio" id="73-stars" name="rating7" value="6" v-model="myrate[7]" />
                            <label for="73-stars" class="star">★</label>
                            <input type="radio" id="72-stars" name="rating7" value="4" v-model="myrate[7]" />
                            <label for="72-stars" class="star">★</label>
                            <input type="radio" id="71-stars" name="rating7" value="2" v-model="myrate[7]" />
                            <label for="71-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[7] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                               
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic1273407.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[8] }}</div>
                            <input type="radio" id="85-stars" name="rating8" value="10" v-model="myrate[8]" />
                            <label for="85-stars" class="star pr-4">★</label>
                            <input type="radio" id="84-stars" name="rating8" value="8" v-model="myrate[8]" />
                            <label for="84-stars" class="star">★</label>
                            <input type="radio" id="83-stars" name="rating8" value="6" v-model="myrate[8]" />
                            <label for="83-stars" class="star">★</label>
                            <input type="radio" id="82-stars" name="rating8" value="4" v-model="myrate[8]" />
                            <label for="82-stars" class="star">★</label>
                            <input type="radio" id="81-stars" name="rating8" value="2" v-model="myrate[8]" />
                            <label for="81-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[8] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic5140451.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[9] }}</div>
                            <input type="radio" id="95-stars" name="rating9" value="10" v-model="myrate[9]" />
                            <label for="95-stars" class="star pr-4">★</label>
                            <input type="radio" id="94-stars" name="rating9" value="8" v-model="myrate[9]" />
                            <label for="94-stars" class="star">★</label>
                            <input type="radio" id="93-stars" name="rating9" value="6" v-model="myrate[9]" />
                            <label for="93-stars" class="star">★</label>
                            <input type="radio" id="92-stars" name="rating9" value="4" v-model="myrate[9]" />
                            <label for="92-stars" class="star">★</label>
                            <input type="radio" id="91-stars" name="rating9" value="2" v-model="myrate[9]" />
                            <label for="91-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[9] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic1170986.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[10] }}</div>
                            <input type="radio" id="105-stars" name="rating10" value="10" v-model="myrate[10]" />
                            <label for="105-stars" class="star pr-4">★</label>
                            <input type="radio" id="104-stars" name="rating10" value="8" v-model="myrate[10]" />
                            <label for="104-stars" class="star">★</label>
                            <input type="radio" id="103-stars" name="rating10" value="6" v-model="myrate[10]" />
                            <label for="103-stars" class="star">★</label>
                            <input type="radio" id="102-stars" name="rating10" value="4" v-model="myrate[10]" />
                            <label for="102-stars" class="star">★</label>
                            <input type="radio" id="101-stars" name="rating10" value="2" v-model="myrate[10]" />
                            <label for="101-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[10] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->

                        <img src="../../assets/images/pic2419375.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[11] }}</div>
                            <input type="radio" id="115-stars" name="rating11" value="10" v-model="myrate[11]" />
                            <label for="115-stars" class="star pr-4">★</label>
                            <input type="radio" id="114-stars" name="rating11" value="8" v-model="myrate[11]" />
                            <label for="114-stars" class="star">★</label>
                            <input type="radio" id="113-stars" name="rating11" value="6" v-model="myrate[11]" />
                            <label for="113-stars" class="star">★</label>
                            <input type="radio" id="112-stars" name="rating11" value="4" v-model="myrate[11]" />
                            <label for="112-stars" class="star">★</label>
                            <input type="radio" id="111-stars" name="rating11" value="2" v-model="myrate[11]" />
                            <label for="111-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[11] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->

                        <img src="../../assets/images/pic1904079.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[12] }}</div>
                            <input type="radio" id="125-stars" name="rating12" value="10" v-model="myrate[12]" />
                            <label for="125-stars" class="star pr-4">★</label>
                            <input type="radio" id="124-stars" name="rating12" value="8" v-model="myrate[12]" />
                            <label for="124-stars" class="star">★</label>
                            <input type="radio" id="123-stars" name="rating12" value="6" v-model="myrate[12]" />
                            <label for="123-stars" class="star">★</label>
                            <input type="radio" id="122-stars" name="rating12" value="4" v-model="myrate[12]" />
                            <label for="122-stars" class="star">★</label>
                            <input type="radio" id="121-stars" name="rating12" value="2" v-model="myrate[12]" />
                            <label for="121-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[12] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->

                        <img src="../../assets/images/pic3663361.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[13] }}</div>
                            <input type="radio" id="135-stars" name="rating13" value="10" v-model="myrate[13]" />
                            <label for="135-stars" class="star pr-4">★</label>
                            <input type="radio" id="134-stars" name="rating13" value="8" v-model="myrate[13]" />
                            <label for="134-stars" class="star">★</label>
                            <input type="radio" id="133-stars" name="rating13" value="6" v-model="myrate[13]" />
                            <label for="133-stars" class="star">★</label>
                            <input type="radio" id="132-stars" name="rating13" value="4" v-model="myrate[13]" />
                            <label for="132-stars" class="star">★</label>
                            <input type="radio" id="131-stars" name="rating13" value="2" v-model="myrate[13]" />
                            <label for="131-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[13] }}
                        </div>
                    </div>
                    <div class="col my-3">
                        <!-- <div class="square">
                            <div class="inner">
                                
                            </div>
                        </div> -->
                        <img src="../../assets/images/pic4597123.jpg" alt="" style="width: 100%; height:130px; " />
                        <div class="review-star">
                            <div class="text-white">&nbsp;{{ myrate[14] }}</div>
                            <input type="radio" id="145-stars" name="rating14" value="10" v-model="myrate[14]" />
                            <label for="145-stars" class="star pr-4">★</label>
                            <input type="radio" id="144-stars" name="rating14" value="8" v-model="myrate[14]" />
                            <label for="144-stars" class="star">★</label>
                            <input type="radio" id="143-stars" name="rating14" value="6" v-model="myrate[14]" />
                            <label for="143-stars" class="star">★</label>
                            <input type="radio" id="142-stars" name="rating14" value="4" v-model="myrate[14]" />
                            <label for="142-stars" class="star">★</label>
                            <input type="radio" id="141-stars" name="rating14" value="2" v-model="myrate[14]" />
                            <label for="141-stars" class="star">★</label>
                        </div>
                        <div class="text-white">
                            {{ elements[14] }}
                        </div>
                    </div>
                </div>
                <div class="row mb-3" v-on:click="initial">
                    <Button text="완료하기" />
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
</template>

<script>
import Bgi from "@/components/user/BackgroundImage.vue";
import Logo from "@/components/user/Logo.vue";
import Button from "@/components/user/Button.vue";
import Element from "@/components/user/RatingElement.vue";
import BoardgameApi from "@/apis/BoardgameApi.js";

export default {
    name: "Rating",
    components: {
        Button,
        Logo,
        Bgi,
        Element,
    },
    data() {
        return {
            elements: [
                "루미큐브",
                "할리갈리",
                "텀블링몽키",
                "펭귄얼음깨기",
                "드래곤마스터",
                "부루마불",
                "우노",
                "도블",
                "다빈치코드",
                "젠가",
                "뱅!",
                "카탄",
                "스플렌더",
                "EXIT 방탈출 게임: 북극 탐험 기지",
                "우봉고",
            ],
            elements2: [811, 2944, 12826, 225981, 11396, 10506, 2223, 63268, 8946, 2452, 3955, 13, 148228, 215842, 16986],
            myrate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            isActive: [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        };
    },
    methods: {
        toggle(num) {
            console.log(this.isActive[num]);
            this.isActive[num] = !this.isActive[num];
        },
        initial() {
            for (let i = 0; i < 15; i++) {
                if (!this.myrate[i]) continue;

                let data = {
                    comment: "제가 생각한 별점입니다",
                    gameId: this.elements2[i],
                    rating: this.myrate[i],
                };
                BoardgameApi.requestWriteReview(data);
            }
            alert("평가를 남겨주셔서 감사합니다.");
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
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
    display: flex;
    align-items: center;
    z-index: 2;
}
.active0 {
    background-image: url("../../assets/images/pic2286966.jpg");
    z-index: 5;
    background-size: cover;
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
    -webkit-text-stroke-color: white;
    cursor: pointer;
}
.review-star :checked ~ label {
    -webkit-text-fill-color: white;
}
.review-star label:hover,
.review-star label:hover ~ label {
    -webkit-text-fill-color: white;
}
</style>
