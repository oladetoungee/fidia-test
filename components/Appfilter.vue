<template>
    <div class="filter">
        <div class="filter-left">
            <div class="filter-dates">
              <button class="date-btn">
              All time <img src="~assets/images/x.svg" alt="" />
                </button>
                <button class="date-btn">
                  US, AU, +4 <img src="~assets/images/x.svg" alt="" />
                </button>
            </div>
            <div class="edit-more">
              <button class="more-btn">
              <img src="~assets/images/more.svg" alt="" /> More filters
              </button>
             <button class="edit-btn" >
              <img src="~assets/images/more.svg" alt="" /> More filters
            </button>
            </div>
             
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
.edit-btn {
  display: none;
}
  .filter {
    margin: 1rem 5rem 0rem 5rem;
    display: flex;
    justify-content: space-between;
    }
    .filter-left {
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
    @media (max-width: 800px) {
        .filter, .filter-left {
            flex-direction: column-reverse;
            margin: 0 2rem;
            
        }
        .header-btn, .filter-dates {
          margin: 0 2rem 0 2rem;
        }
        .filter-dates {
          display: flex;
          flex-direction: row;
          justify-items: flex-start;
        }
        .search-btn {
          
          width: 100%;
        }
        .more-btn {
          justify-self: center;
          margin: 1rem -5rem 1rem 0rem;
          padding: 1rem ;
          width: 400px;
        }
        

        
    }
</style>