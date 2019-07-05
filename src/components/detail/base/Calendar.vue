<template>
  <div class="calendar">
    <ul class="calendar-title border-bottom">
      <li @click="handleTicket">门票</li>
      <li @click="handleTourist">一日游</li>
    </ul>
    <div
      class="calendar-item"
      v-for="(item, index) in calendarInfo"
      :key="index"
    >
      <h3 class="border-bottom" ref="title">{{ item.calendarInfo.title }}</h3>
      <div
        class="calendar-info border-bottom"
        @click="handleClick(result)"
        v-for="(result, i) in item.calendarInfo.result"
        :key="i"
      >
        <div class="calendar-left">
          <h4 class="calendar-title">{{ result.subtitle }}</h4>
        </div>
        <div class="calendar-right">
          <span
            >¥{{ result.price
            }}<i
              class="iconfont icon-jiantouxiangxia"
              :style="result.styleObj"
            ></i
          ></span>
        </div>
        <detail-recommend
          v-show="result.isShow"
          :recommendInfo="result.recommendInfo"
        ></detail-recommend>
      </div>
    </div>
  </div>
</template>
<script>
import DetailRecommend from "@/components/detail/base/Recommend";
export default {
  name: "DetailCalendar",
  props: ["calendarInfo"],
  components: {
    DetailRecommend
  },
  methods: {
    handleClick(result) {
      result.isShow = !result.isShow;

      result.styleObj.transform = "rotate(" + result.isShow * 180 + "deg)";
    },
    handleTicket() {
      document.documentElement.scrollTop = this.$refs.title[0].offsetTop - 85;
    },
    handleTourist() {
      document.documentElement.scrollTop = this.$refs.title[2].offsetTop - 43;
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar .recommend /deep/ .recommend {
  width: 100%;
}
.calendar .recommend /deep/ .recommend-title {
  line-height: 0.4rem;
}
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.calendar {
  .recommend {
    background-color: #f5f5f5;
  }

  .calendar-item {
    padding: 0 0.2rem;
    border-bottom: 0.2rem solid #f5f5f5;
  }

  .calendar-title {
    display: flex;

    li {
      width: 50%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.3rem;
    }
  }

  h3 {
    line-height: 1rem;
    font-size: 0.32rem;
  }

  .calendar-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.1rem 0;

    .calendar-left {
      width: 6rem;
      color: #616161;

      h4 {
        display: -webkit-box;
        overflow: hidden;
        line-height: 0.6rem;
        font-size: 0.28rem;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      p {
        line-height: 0.5rem;
        font-size: 0.28rem;
      }

      span {
        color: #00afc7;
        font-size: 0.24rem;
      }
    }

    .calendar-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 1.8rem;
      text-align: center;

      span {
        color: #ff9852;
        font-size: 0.35rem;
        font-weight: 400;

        &::first-letter {
          font-size: 0.24rem;
        }

        i {
          position: absolute;
          font-size: 0.24rem;
          color: #bbb;
        }
      }
    }
  }
}
</style>
