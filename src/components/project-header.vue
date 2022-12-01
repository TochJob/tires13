  <template>
    <header>
      <div class="container">
        <div class="header__wrapper">
          <nav class="navigation">
            <a href="" v-for=" (item, index) in headerLinks" :data-name="item" :key="index" class="navigation__link " @click.prevent="choiseCategory(index, item)" v-bind:class="isActive==index ? 'active': ''">{{item}}<font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
          </nav>
          <a href="#" class="logo"><img src="../../public/logo.svg" alt="logo"></a>
          <div class="user-box">
            <button class="button user-box__search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
            <button class="button user-box__favorite"><font-awesome-icon icon="fa-solid fa-heart" /></button>
            <button class="button user-box__basket"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
          </div>
        </div>
      </div>

      <div class="header__substrate"></div>



        <div class="header__menu" v-if="showHeaderMenu">
          <div class="container">
            <div class="header__submenu header__substrates">
              <template v-if="this.checkCategory != 'company'">
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
              </template>
              <template v-else-if="this.checkCategory == 'company'">
                <div class="company-box ">
                  <a href="#" class="header__submenu-link" v-for="(item, index) in currentTypeList.currentProduct" :key="index">{{item}}</a> 
                </div>
              </template>
              <template v-else-if="this.checkCategory == 'user'" >
                
              </template>
            </div>

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
        headerLinks:['Товары', 'Услуги', 'Компания','Личный кабинет'],
        isActive: -1,
        showHeaderMenu: false,

        product:{},
        servises:{},
        company:[],
        


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
      choiseCategory(index, el){
        if(this.isActive == index){ 
          this.showHeaderMenu = false
          this.isActive = -1 
          this.currentTypeList = ''
        }else{ 
          this.showHeaderMenu = true

          this.isActive = index;
          this.fillCategory(el);
        }
      },
      fillCategory(navEl){
        console.log(navEl);
        if(navEl === 'Товары'){
          this.currentTypeList = this.product
          this.checkCategory = 'product'
        }else if(navEl === 'Услуги'){
          this.checkCategory = 'servises'
          this.currentTypeList = this.servises
        }else if(navEl === 'Компания'){
          this.checkCategory = 'company'
          this.currentTypeList = this.company
        }else if(navEl === 'Личный кабинет'){
          this.checkCategory = 'user'
        }
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
      },

      this.company ={
        currentProduct:['О компании','Контакты','Статьи и новости','Акции и скидки','Доставка','Оптовым клиентам','Оплата','Кредит','Гарантия','Возврат товара','Подарочные сертифиакты']
      }
      
      
      
      
    },
    mounted() {
      this.$el.querySelector('.user-box__search').insertAdjacentElement('afterend',this.$el.querySelector('a[data-name="Личный кабинет"]'));  
    },
  }
  
  </script>
  
  <style lang="scss">
    @import '../assets/scss/varibles.scss';

  </style>
  