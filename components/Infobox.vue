<template>
     <div class="section-2">
        <div class="info-box">
          <div class="info-text">
            <p class="info-text-p">Total customers</p>
            <img class="info-text-dot" src="~assets/images/three.svg" alt="" />
          </div>
          <div class="info-data">
            <div class="info-num">
              <h2>2,420</h2>

              <p>
                <img src="~assets/images/arrow.svg" alt="" /> 40% vs last month
              </p>
            </div>

            <div class="info-graph">
              <img src="~assets/images/_Chart.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="info-box">
          <div class="info-text">
            <p class="info-text-p">Members</p>
            <img class="info-text-dot" src="~assets/images/three.svg" alt="" />
          </div>
          <div class="info-data">
            <div class="info-num">
              <h2>1,210</h2>

              <p>
                <img src="~assets/images/arrow-down.svg" alt="" /> 10% vs last
                month
              </p>
            </div>

            <div class="info-graph">
              <img src="~assets/images/Chart.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="info-box">
          <div class="info-text">
            <p class="info-text-p">TActive now</p>
            <img class="info-text-dot" src="~assets/images/three.svg" alt="" />
          </div>
          <div class="info-data">
            <div class="info-num">
              <h2>314</h2>

              <p>
                <img src="~assets/images/arrow.svg" alt="" /> 20% vs last month
              </p>
            </div>

            <div class="info-graph">
              <img src="~assets/images/_Chart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .section-2 {
    margin: 2rem 5rem 0rem 5rem;
    display: flex;
    justify-content: space-between;
    }
    .section-3 {
    margin: 1rem 5rem 0rem 5rem;
    display: flex;
    justify-content: space-between;
    }
    .info-box {
    background: #ffffff;
    border: 1px solid #eaecf0;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
        0px 1px 2px rgba(16, 24, 40, 0.06);
    border-radius: 8px;
    width: 450px;
    }
    .info-text,
    .info-data {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    }
</style>