<template>
  <div>
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
          <div class="icon-btn">
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
          <button class="search-btn">
            <img src="~assets/images/Iconnn.svg" alt="" />Search
          </button>
        </div>
      </div>
    </header>
    <section>
      <div class="section-1">
        <div class="welcome">
          <h3>Welcome back, Olivia</h3>
          <p class="welcome-note">
            Track, manage and forecast your customers and orders.
          </p>
        </div>
        <div class="welcome-btns">
          <button class="import-btn">
            <img src="~assets/images/cloud.svg" alt="" />Import
          </button>
          <button class="add-btn">
            <img src="~assets/images/add.svg" alt="" />Add
          </button>
        </div>
      </div>
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
          <button class="search-btn">
            <img src="~assets/images/Iconnn.svg" alt="" />Search
          </button>
        </div>
      </div>
      <div class="section-4">
        <table>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <p class="company-info">Company</p>
              <img src="~assets/images/arrow.svg" alt="" class="company-info" />
            </td>
            <td><p>License Use</p></td>
            <td><p>Status</p></td>
            <td><p>Users</p></td>
            <td><p>About</p></td>
          </tr>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/company1.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Catalog</h5>
                <p>catalogapp.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Customer</td>
            <td>
              <div class="company-avatar">
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (2).svg"
                  alt=""
                  class="avatar"
                />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Content curating app</h5>
                <p>Brings all your news into one place</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/company1.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Catalog</h5>
                <p>catalogapp.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Customer</td>
            <td>
              <div class="company-avatar">
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (2).svg"
                  alt=""
                  class="avatar"
                />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Content curating app</h5>
                <p>Brings all your news into one place</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/company1.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Catalog</h5>
                <p>catalogapp.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Customer</td>
            <td>
              <div class="company-avatar">
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (2).svg"
                  alt=""
                  class="avatar"
                />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Content curating app</h5>
                <p>Brings all your news into one place</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/company1.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Catalog</h5>
                <p>catalogapp.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Customer</td>
            <td>
              <div class="company-avatar">
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (2).svg"
                  alt=""
                  class="avatar"
                />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Content curating app</h5>
                <p>Brings all your news into one place</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/company1.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Catalog</h5>
                <p>catalogapp.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Customer</td>
            <td>
              <div class="company-avatar">
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (2).svg"
                  alt=""
                  class="avatar"
                />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Content curating app</h5>
                <p>Brings all your news into one place</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/company1.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Catalog</h5>
                <p>catalogapp.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Customer</td>
            <td>
              <div class="company-avatar">
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (2).svg"
                  alt=""
                  class="avatar"
                />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Content curating app</h5>
                <p>Brings all your news into one place</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/company1.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Catalog</h5>
                <p>catalogapp.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Customer</td>
            <td>
              <div class="company-avatar">
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
                <img src="~assets/images/Avatar-1.svg" alt="" class="avatar" />
                <img
                  src="~assets/images/Avatar (2).svg"
                  alt=""
                  class="avatar"
                />
                <img
                  src="~assets/images/Avatar (3).svg"
                  alt=""
                  class="avatar"
                />
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Content curating app</h5>
                <p>Brings all your news into one place</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
        </table>
        <footer>
          <div class="footer-transition">
            <button class="previous-btn">Previous</button>
            <button class="previous-btn">Next</button>
          </div>
          <div class="footer-page">
            <p>Page 1 of 10</p>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style>
.header-left {
  display: flex;
}
.header-right {
  justify-content: space-between;
  display: flex;
  margin-right: 5rem;
}
.header-bottom {
  margin-right: 5rem;
  display: flex;
  justify-content: space-between;
}

.header-nav {
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
  padding: 0 1rem;
}
.search-btn {
  width: 50px;
  height: 40px;
  padding-right: 250px;
  margin-top: 1rem;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.setting-btn {
  padding: 0.5rem;
  margin-bottom: 1rem;
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
.section-1 {
  display: flex;
  justify-content: space-between;
  margin: 0rem 5rem 0rem 3rem;
}

.add-btn {
  background-color: #7f56d9;
  border: 1px solid #7f56d9;
  color: #ffffff;
  border-radius: 8px;
  padding: 7px 15px;
}
.import-btn {
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-sizing: border-box;
  border-radius: 8px;
  color: #344054;
  padding: 5px 5px;
  margin-right: 0.2rem;
}
.welcome-note {
  margin: -2rem;
  margin-left: 0.2rem;
}
.section-2,
.section-3 {
  margin: 5rem 5rem 0rem 3rem;
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
  width: 400px;
}
.info-text,
.info-data {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.left-3 {
  display: flex;
  justify-content: space-between;
}
.date-btn {
  padding: 5px 20px;
  background: #f9f5ff;
  border: 1px solid #f9f5ff;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.more-btn {
  padding: 0 20px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.section-4 {
  margin: 5rem 5rem 0rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #eaecf0;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
}

table {
  width: 100%;
}
.company-infos {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  width: 370px;
  height: 40px;
}
.company-info {
  padding: 0.8rem;
}
.company-info p {
  margin: 0;
}
.company-info h5 {
  margin: 0;
}
.info-edit {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}
.company-avatar {
  display: flex;
}
.avatar {
  width: 50px;
  margin: -0.5rem;
}
footer {
  display: flex;
  justify-content: space-between;
  margin: 1rem 3rem;
 
}

.previous-btn {
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  padding: 0.5rem;
  
}
</style>
