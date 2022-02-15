<template>
     <div class="info-boxes">
        <div class="info-box">
          <div class="info-text">
            <h4 class="info-text-p">Total customers</h4>
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
    .info-boxes {
    margin: 4rem 5rem 0rem 5rem;
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
    @media (max-width: 1430px) {
        .info-box {
            width: 350px;
        }
    }
    @media (max-width: 1200px) {
        .info-box {
            width: 300px;
        }
    }
    @media (max-width: 1100px) {
        .info-box {
            width: 200px;
        }
    }
    @media (max-width: 800px) {
        .info-boxes {
          flex-direction: column;
            margin: 0 2rem;
            
        }
        .info-box {
            width: 100%;
            margin: 1rem 0;
        }
    }
</style>