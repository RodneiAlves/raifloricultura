import React from 'react'
import style from './Home.module.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className={style.H1}>
       
        <main>
    <div className={style.cards}>
      <img src="https://th.bing.com/th/id/OIP.x3DvRY3rI49DgX_YQRtDCQHaHa?rs=1&pid=ImgDetMain" alt="" />
      <h2>Buque de rosas</h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>

    <div className={style.cards}>
      <img  src="https://realfloresatelie.com.br/wp-content/uploads/2022/01/buque-de-rosas-line.jpg" alt="" />
      <h2>Buque de rosas  </h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>
    <div className={style.cards}>
      <img  src="https://th.bing.com/th/id/OIP.LfglvrshQDBAercavmWYUAAAAA?rs=1&pid=ImgDetMain" alt="" />
      <h2>Buque de rosas  colobiana</h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div >
    <div className={style.cards}>
      <img src="https://th.bing.com/th/id/OIP.g96t231Dc50tHaUtf5uQuwHaHa?rs=1&pid=ImgDetMain" alt="" />
      <h2>Buque de rosas do vale </h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>
    <div className={style.cards}>
      <img src="https://www.uniflores.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/b/u/buque-tradition-18-sem-vaso.jpg" alt="" />
      <h2>Buque de rosas noiva  </h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>




    <div className={style.cards}>
      <img src="https://images.tcdn.com.br/img/img_prod/695739/arranjo_de_orquidea_branca_de_silicone_em_vaso_de_vidro_1105_3_20200526130439.jpg" alt="" />
      <h2>areas relacionadas a Redes </h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>

    <div className={style.cards}>
      <img src="https://www.paulistaflores.com.br/image/cache/data/produtos/arranjos/aorx01---arranjo-de-orquidea-roxa-plantada-em-vaso-de-ceramica/arranjo-de-orquidea-roxa-plantada-em-vaso-de-ceramica-1-926x926.jpg" alt="" />
      <h2>areas relacionadas a Redes </h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>


    <div className={style.cards}>
      <img src="https://weflores.com/wp-content/uploads/Orqu%C3%ADdea-phalaenopsis-cascata-pink-em-vaso-riscatto.jpg" alt="" />
      <h2>areas relacionadas a Redes </h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>

    <div className={style.cards}>
      <img src="https://images.tcdn.com.br/img/img_prod/958275/arranjo_de_orquidea_de_silicone_mesclada_no_vaso_de_vidro_m_553_1_0576a5b36af5d77c5988ba1545ec51c7_20221228103207.jpg" alt="" />
      <h2>areas relacionadas a Redes </h2>
      <Link to='/sobre'>Clique para saber mais </Link>
    </div>

        </main>
        <footer>

        </footer>
      </div>
  )
}

export default Home;