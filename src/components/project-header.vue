  <template>
    <header>
      <div class="container">
        <div class="header__wrapper">
          <nav class="navigation">
            <a href="" v-for=" (item, index) in headerLinks" :data-name="item" :key="index" class="navigation__link " @click.prevent="choiseCategory , isActive=index" v-bind:class="isActive==index?'active':''">{{item}}<font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
          </nav>
          <a href="#" class="logo"><img src="../../public/logo.svg" alt="logo"></a>
          <div class="user-box">
            <button class="button user-box__search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
            <button class="button user-box__user">
              Личный кабинет 
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </button>
            <button class="button user-box__favorite"><font-awesome-icon icon="fa-solid fa-heart" /></button>
            <button class="button user-box__basket"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
          </div>
        </div>
      </div>

      <div class="header__substrate"></div>




        <div class="header__menu" v-if="showHeaderMenu">
          <div class="container">
            <div v-if="showMenu1" class="header__submenu header__substrates">
              <div class="header__submenu-column">
                <div class="header__submenu-item" v-for="({img,title,specific_choice,diameter_choice, work_time, price }, index) in currentTypeList.transportType" :key="index">
                  <img :src="require(`../assets/img/${img}.svg`)" alt="itemImage">
                  <div class="header__submenu-item-description">
                    <h2 class="header__submenu-item-title">{{title}}</h2>
                    <template v-if="checkCategory == 'product'">
                      <div class="header__submenu-item-links">
                        <a href="" v-for="(el, index) in specific_choice" :key="index" class="header__submenu-item-text header__submenu-item-link">{{el}}</a>
                      </div>
                      <div class="header__submenu-item-links">
                        <a href="" v-for=" (el, index) in diameter_choice" :key="index" class=" header__submenu-item-text header__submenu-item-link">{{el}}</a>
                      </div>
                    </template>
                    <template v-else-if="checkCategory == 'servises'">
                      <div class="header__submenu-item-links">
                        <p class="header__submenu-item-text"><font-awesome-icon icon="fa-solid fa-clock" /> {{work_time}}</p>
                      </div>
                      <div class="header__submenu-item-links">
                        <p  class="header__submenu-item-text"><font-awesome-icon icon="fa-solid fa-ruble-sign" /> {{price}}</p>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div class="header__submenu-column header__submenu-column-right">
                <a href="#" class="header__submenu-link" v-for="(item, index) in currentTypeList.currentProduct" :key="index">{{item}}</a> 
              </div>
            </div>
            <div v-else-if="showMenu2" class="header__submenu services">
              
            </div>
            <div v-else-if="showMenu3" class="header__submenu company"></div>
          </div>
        </div>
      
      
    </header>  
  </template>
  
  <script>
  
  export default {
    name: 'project-header',
    components: {
      
    },
    data() {
      return {
        headerLinks:['Товары', 'Услуги', 'Компания'],
        isActive: false,
        showHeaderMenu: true,
        showMenu1:true,

        product:{},


        substratesList: [],
        substratesListCategory:{},
        servisesList: [],
        servisesListCategory:{},
        companyList:[],

        currentTypeList: [],


        checkCategory:''
      }
    },
    computed: {
      
    },
    methods: {
      choiseCategory(){
        console.log(12);

      },

      editSubMenu(){
        
      }
    },
    beforeMount(){
      this.product = {
        transportType:[
          {
            img: 'avto',
            title: 'Автомобильные шины',
            specific_choice: ['Летние','Зимние','Шипованые','Фрикционные','Б/у'],
            diameter_choice: ['R13','R14','R15','R16','R17','R18','R19','R20'],
          },
          {
            img: 'track',
            title: 'Грузовые шины',
            specific_choice: ['Ведущие','Универсальные','Рулевые','Прицеп','Рулевые + прицеп'],
            diameter_choice: ['R22,5','R24','R21','R20','R19,5','R18','R19','R20'],
          },
          {
            img: 'moto',
            title: 'Мотошины',
            specific_choice: ['Спорт','Спорт-турист','Чоппер/круйзер','Эндуро','Классика'],
            diameter_choice: ['R12','R13','R14','R15','R16','R18','R19','R20']
          },
        ],
        currentProduct : ['Аксессуары для шин, дисков и шиномонтажа','Аккумуляторы','Автомасла','Автоэлектроника','Автохимия и автокосметика','Внешний декор, тюнинг, защита','Инструменты и техническая помощь','Компрессоры']
      
      },




      this.servises={
        transportType: [
          {
            img: 'disk',
            title: 'Шиномонтаж',
            work_time: 'Ежедневно с 9:00 до 21:00, без перерывов',
            price: 'от 500 ₽'
          },
          {
            img: 'weel',
            title: 'Ремонт и правка дисков',
            work_time: 'Ежедневно с 9:00 до 21:00, без перерывов',
            price: 'от 500 ₽'
          }
        ],
        currentProduct:['Ошиповка зимних шин','Сезонное хранение шин','Сход развал']
      }

      
      
      
      
      
    },
  }
  
  </script>
  
  <style lang="scss">
    @import '../assets/scss/varibles.scss';

    header{
      background: $base-color;
      position: relative;
      z-index: 9;
      padding-top: 16px;
      .header__substrate{
        position: absolute;
        background: $base-color;
        height: 16px;
        width: 96px;
        bottom: -16px;
        left: 50%;
        transform: translate(-50%,0);
        z-index: 8;
        border-radius: 0px 0px 16px 16px;
      }
    }
    .container{
      width: 1224px;
      margin: 0 auto;
    }
    .header__wrapper{
      display: flex;
      align-items: center;
    }
    .navigation{
      display: flex;
      align-self: start;
      margin-right: 235px;

      .navigation__link{
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        padding: 27px 16px 28px 16px;
        margin-right: 8px;
        transition-duration: 300ms;
        svg{
          transition-duration: 300ms;
        }
        &.active{
          border-bottom: 1px solid $secondory-color;
          color:$secondory-color;
          svg{
            transform:rotate(180deg);
            
          }
        }
       

      }
      .navigation__link:last-child{
        margin-right: 0;
      }
      .fa-chevron-down{
        font-size: 10px;
        margin-left: 7px;
      }
    }
    .user-box{
      display: flex;
      margin-left: auto;

      .button{
        background: transparent;
        color: #fff;
        border: none;
        min-height: 80px;
        min-width: 80px;
        box-sizing: border-box;
        padding: 15px;
        font-size: 16px;
        font-family: "IBM Plex Sans", sans-serif;
        cursor: pointer;
      }
      .fa-solid{
        width: 16px;
      }
      .fa-chevron-down{
        margin-left: 7px;
        width: 10px;
      }
    }
    .header__menu{
      background: #2B3143;
      position: absolute;
      width: 100%;
      padding: 32px 0 48px;
    }
    .header__submenu{
      display: flex;
      justify-content: space-between;
    }
    .header__submenu-column{
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }
    .header__submenu-column-right{
      min-width: 490px;
    }
    .header__submenu-item{
      display: flex;
      align-items: center;
      padding-bottom: 24px;
      margin-bottom: 16px;
      border-bottom: 1px solid #3E465F;
    }
    .header__submenu-item-description{
      margin-left: 24px;
    }
    .header__submenu-item-title{
      font-family: 'IBM Plex Sans';
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: $secondory-color;
      margin-bottom: 16px;
      
    }
    .header__submenu-item-links{
      display: flex;
      margin-bottom: 8px;
    }


    .header__submenu-item-text{
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #E5E5E5;
      text-decoration: none;
      margin-right: 8px;
      transition: all .3s;

      svg{
        margin-right: 8px;
      }
    }

    .header__submenu-item-link{
      &:hover{
        color: $secondory-color;

      }
    }
    
    .header__submenu-link{
      color: #fff;
      font-family: 'IBM Plex Sans';
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      border-bottom: 1px solid #3E465F;
      text-decoration: none;
      padding: 12px 16px 11px;
      box-sizing: border-box;
      transition: all .3s;

      &:hover{
        color:$secondory-color;
      }
    }
  </style>
  