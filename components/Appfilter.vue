<template>
    <div class="section-3">
        <div class="left-3">
          <button class="date-btn">
            All time <img src="~assets/images/x.svg" alt="" />
          </button>
          <button class="date-btn">
            US, AU, +4 <img src="~assets/images/x.svg" alt="" />
          </button>
          <button class="more-btn">
            <img src="~assets/images/more.svg" alt="" /> More filters
          </button>
        </div>

        <div class="header-search">
          <form class="search-btn">
            <img src="~assets/images/Iconnn.svg" alt="" />
            <input type="search" placeholder="Search" />
          </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .left-3 {
  display: flex;
  justify-content: space-between;
    }
    .date-btn {
    margin: .5rem;
    padding: 0 1rem;
    background: #f9f5ff;
    border: 1px solid #f9f5ff;
    
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    color: #6941C6;

    }
    .more-btn {
    padding: 0 2rem 0 2rem;
    margin: .5rem;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    }
</style>