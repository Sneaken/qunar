<template>
  <div class="weekend">
    <div class="title">
      <span>周末去哪儿</span>
    </div>
    <ul style="background-color: #f5f5f5;">
      <router-link
        :to="{ name: 'week', params: { id: item.id } }"
        tag="li"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="container">
          <img :src="item.imgUrl" alt="" />
          <div>
            <p class="item_title">{{ item.title }}</p>
            <p class="item_desc">{{ item.desc }}</p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Weekend",
  props: ["weekendList"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.weekend {
  .title {
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.26rem;
    background-color: #f5f5f5;
  }
  .container {
    margin-bottom: 0.1rem;
    img {
      width: 100%;
      height: 3.12rem;
    }
    div {
      padding: 0.14rem 0.2rem 0.2rem;
      background-color: white;
      p {
        padding-right: 1.2rem;
      }
      .item_title {
        height: 0.48rem;
        line-height: 0.48rem;
      }
      .item_desc {
        height: 0.42rem;
        line-height: 0.42rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
