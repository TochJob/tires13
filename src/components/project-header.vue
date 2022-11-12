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
          
      </div>
    </header>  
  </template>
  
  <script>
  
  export default {
    name: 'project-header',
    components: {
      
    },
    methods: {
      s(){
        console.log('qwe')
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
  </style>
  