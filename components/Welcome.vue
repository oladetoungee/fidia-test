<template>
     <div class="welcome">
        <div >
          <h3>Welcome back, Olivia</h3>
          <p class="welcome-note">
            Track, manage and forecast your customers and orders.
          </p>
        </div>
        <div class="welcome-btns">
          <button class="import-btn">
            <img src="~assets/images/cloud.svg" alt=""  />
            Import
          </button>
          <button class="add-btn">
            <img src="~assets/images/add.svg" alt="" />Add
          </button>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .welcome {
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
    padding: 7px 15px;
    }
    
    .welcome-note {
    margin: -1.5rem;
    margin-left: 0.2rem;
    }
    @media (max-width: 800px) {
        .welcome {
            flex-direction: column;
            margin: 0 2rem;
        }
        .welcome-btns {
            margin-top: 2rem;
            margin-left: -1rem;
            
        }
    }

</style>