<template>
    <header>
      <div class="header-nav">
        <div class="header-left">
          <div class="logo-bar">
            <img src="~assets/images/Logo.svg" alt="" />
          </div>
          <div class="nav-bar">
            <ul class="nav-list">
              <li class="nav-item"><nuxt-link to="">Home</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="">Dashboard</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="">Projects</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="">Tasks</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="">Reporting</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="">Users</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="header-right">
          <button class="upgrade-btn">
            <img src="~assets/images/Icon.svg" alt="" />
            Upgrade now
          </button>

          <div class="setting-btn">
            <img src="~assets/images/Iconn.svg" alt="" />
          </div>
          <div class="icon-btn">
            <img src="~assets/images/button.svg" alt="" />
          </div>
          <div class="avatar-btn">
            <img src="~assets/images/Avatar.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="header-bottom">
        <div class="overview-list">
          <ul class="nav-list">
            <li class="nav-item"><nuxt-link to="">Overview</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="">Notifications</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="">Analytics</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="">Saved report</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="">Trade history</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="">User report</nuxt-link></li>
          </ul>
        </div>
        <div class="header-search">
          <form class="search-btn">
            <img src="~assets/images/Iconnn.svg" alt="" />
            <input type="search" placeholder="Search" />
          </form>
        </div>
      </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style>
    header {
    margin: 1rem 5rem 0rem 2rem;
    }
    .header-left {
    display: flex;
    }
    .header-right {
    display: flex;
    /* margin-right: 5rem; */
    }
    .header-bottom {
    display: flex;
    justify-content: space-between;
    
    }

    .header-nav, .header-bottom {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #eaecf0 solid;
    }

    h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
    }
    p {
    color: #667085;
    }
    .nav-bar {
    margin: -1.5rem;
    }
    .logo-bar {
    margin-left: 3rem;
    }

    .upgrade-btn {
    height: 40px;
    background: #ffffff;
    border: 1px solid #eaecf0;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
        0px 1px 2px rgba(16, 24, 40, 0.06);
    border-radius: 8px;
    padding: 0 .7rem;
    margin-right: .5rem;
    }
    .avatar-btn {
    margin-left: .5rem;
    }
    input {
    border: none;
    }
    .search-btn {
    /* margin-right: 5rem; */
    display: flex;
    width: 65px;
    height: 40px;
    padding-right: 250px;
    margin-top: 1rem;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    }
    .icon-btn,
    .setting-btn {
    width: 30px;

    margin: 0 0.2rem 0.5rem 0.2rem;
    }
    .setting-btn {
    padding-top: 0.5rem;
    }

    .nav-list {
    display: flex;
    list-style-type: none;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    }
    .nav-item {
    padding: 1rem;
    }
    .nav-item a {
    text-decoration: none;
    }
</style>