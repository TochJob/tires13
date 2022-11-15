  <template>
    <header>
      <div class="container">
        <div class="header__wrapper">
          <nav class="navigation">
            <a href="" class="navigation__link" @click.prevent="s">Товары<font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
            <a href="" class="navigation__link" @click.prevent="s">Услуги<font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
            <a href="" class="navigation__link" @click.prevent="s">Компания<font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
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
                <div class="header__submenu-item" v-for="(el, index) in substratesList" :key="index">
                  <img :src="require(`../assets/img/${el.img}.svg`)" alt="itemImage">
                  <div class="header__submenu-item-description">
                    <h2 class="header__submenu-item-title">{{el.title}}</h2>
                    <div class="header__submenu-item-links">
                      <a href="" v-for="(el, index) in el.specific_choice" :key="index" class="header__submenu-item-link">{{el}}</a>
                    </div>
                    <div class="header__submenu-item-links">
                      <a href="" v-for=" (el, index) in el.diameter_choice" :key="index" class="header__submenu-item-link">{{el}}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="header__submenu-column">
                <a href="#" class="header__submenu-link" v-for="(item, index) in substratesListCategory.category" :key="index">{{item}}</a> 
              </div>
            </div>
            <div v-else-if="showMenu2" class="header__submenu services"></div>
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
        showHeaderMenu: true,
        showMenu1:true,
        substratesList: [],
        substratesListCategory:{},
        servisesList: [],
        servisesListCategory:{},
        companyList:[],
      }
    },
    computed: {
      // itemImage() {
      //   return this.substratesList.forEach((el)=>{
      //     require(`../assets/img/${el.img}.svg`);
      //   })
      // }
    },
    methods: {
      s(){
        console.log('qwe')
      }
    },
    beforeMount(){
      this.substratesList = [{
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
        category:[]
      },
      {
        img: 'moto',
        title: 'Мотошины',
        specific_choice: ['Спорт','Спорт-турист','Чоппер/круйзер','Эндуро','Классика'],
        diameter_choice: ['R12','R13','R14','R15','R16','R18','R19','R20'],
      },],

      this.substratesListCategory = {
       category:['Аксессуары для шин, дисков и шиномонтажа','Аккумуляторы','Автомасла','Автоэлектроника','Автохимия и автокосметика','Внешний декор', 'тюнинг', 'защита','Инструменты и техническая помощь','Компрессоры']
      },
      this.servisesListCategory ={
        category:['Ошиповка зимних шин','Сезонное хранение шин','Сход развал']
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
    .header__submenu{
      display: flex;
      justify-content: space-between;
    }
    .header__submenu-column{
      max-width: 600px;
    }
    .header__submenu-item{
      display: flex;
      align-items: center;
    }
    .header__submenu-item-description{
      margin-left: 24px;
    }
    .header__submenu-item-title{
      font-family: 'IBM Plex Sans';
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #FF850E;
      margin-bottom: 16px;
      
    }
    .header__submenu-item-links{
      display: flex;
      margin-bottom: 8px;
    }
    .header__submenu-item-link{
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #E5E5E5;
      text-decoration: none;
      margin-right: 8px;
    }
  </style>
  