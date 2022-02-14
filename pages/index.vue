<template>
  <div>
    <Header></Header>
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
          <form class="search-btn">
            <img src="~assets/images/Iconnn.svg" alt="" />
            <input type="search" placeholder="Search" />
          </form>
        </div>
      </div>
      <div class="section-4">
        <table>
          <tr class="table-head">
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
          <tr  class="table-odd">
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
                <h4 class="users-number">+5</h4>
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
                src="~assets/images/circoles.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Circooles</h5>
                <p>getcirooles.com</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Churned</td>
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
                <h4 class="users-number">+8</h4>
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Design software</h5>
                <p>Super lightweight design app</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr  class="table-odd">
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/command.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Command+R</h5>
                <p>cmdr.aio</p>
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
                 <h4 class="users-number">+2</h4>
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Data prediction</h5>
                <p>AI and machine learning data
                </p>
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
                src="~assets/images/hourglass.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Hourglass</h5>
                <p>hourglass.app</p>
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
                <h5>Productivity app</h5>
                <p>Time management and productivity</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr  class="table-odd">
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/layers.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Layers</h5>
                <p>getlayers.io</p>
              </div>
            </td>
            <td><img src="~assets/images/Progress bar.svg" alt="" /></td>
            <td>Churned</td>
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
                <h4 class="users-number">+1</h4>
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Web app integrations</h5>
                <p>Connect web apps seamlessly</p>
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
                src="~assets/images/quotient.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Quotient</h5>
                <p>quotient.co</p>
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
                <h4 class="users-number">+6</h4>
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Sales CRM</h5>
                <p>Web-based sales doc management</p>
              </div>
            </td>
            <td class="info-edit">
              <img src="~assets/images/delete.svg" alt="" />
              <img src="~assets/images/edit.svg" alt="" />
            </td>
          </tr>
          <tr  class="table-odd">
            <td class="company-infos">
              <input type="checkbox" class="company-info" />
              <img
                src="~assets/images/sisiphus.svg"
                alt=""
                class="company-info"
              />
              <div class="company-info">
                <h5>Sisyphus</h5>
                <p>sisyphus.com</p>
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
                <h4 class="users-number">+4</h4>
              </div>
            </td>
            <td>
              <div class="company-info">
                <h5>Automation and workflow</h5>
                <p>Time tracking, invoicing and expenses</p>
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
import  Header from '../components/Header.vue'
export default {
  components: {
    Header
  }
};
</script>
<style>

.section-1 {
  display: flex;
  justify-content: space-between;
  margin: 1rem 5rem 0rem 5rem;
}

.add-btn {
  background-color: #7f56d9;
  border: 1px solid #7f56d9;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 1rem 0;
}
.import-btn {
  margin: 1rem;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-sizing: border-box;
  border-radius: 8px;
  color: #344054;
  padding: 10px 15px;
}
.welcome-note {
  margin: -2rem;
  margin-left: 0.2rem;
}
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
.section-4 {
  margin: 1rem 5rem 0rem 5rem;
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
/* .table-head {
  background-color: #667085;
  width: 100%;
  height: 2%;
} */
.table-odd {
  background-color: #F9FAFB;
}
.company-infos {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  width: 200px;
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
