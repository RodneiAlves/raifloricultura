
import style from './Home.module.css'
import {Link} from 'react-router-dom'
const Vazos = () => {
  return (

          <div className={style.H1}>
       
       <main>
   <div className={style.cards}>
     <img src="https://a-static.mlcdn.com.br/800x560/vaso-rosa-de-vidro-12x65cm-florarte/galoroutilidades/15049672315/48c032ba96b9da271307f5c8abb8538e.jpg" alt="" />
     <h2>areas relacionadas a Redes </h2>
     <Link to='/sobre'>Clique para saber mais </Link>
   </div>

   <div className={style.cards}>
     <img  src="https://cdn.leroymerlin.com.br/products/vaso_rosa_em_vidro_canelado_ii_cdp_1568819422_52f6_600x600.jpg" alt="" />
     <h2>areas relacionadas a Redes </h2>
     <Link to='/sobre'>Clique para saber mais </Link>
   </div>
   <div className={style.cards}>
     <img  src="https://a-static.mlcdn.com.br/1500x1500/vaso-de-vidro-rosa-transparente-laco-corda-decoracao-nova/temnacasa2/33484/30989df52a0a6a8cd3530cd2e83ea6dd.jpg" alt="" />
     <h2>areas relacionadas a Redes </h2>
     <Link to='/sobre'>Clique para saber mais </Link>
   </div >
   <div className={style.cards}>
     <img src="https://freitasvarejo.vteximg.com.br/arquivos/ids/167188-1000-1000/foto_0.jpg?v=637692342453770000" alt="" />
     <h2>areas relacionadas a Redes </h2>
     <Link to='/sobre'>Clique para saber mais </Link>
   </div>
   <div className={style.cards}>
     <img src="https://static3.tcdn.com.br/img/img_prod/482052/vaso_decorativo_de_vidro_rosa_26cm_run0003_btc_22837_1_45c78b0368e10ff87521fe60d628e2b8.jpg" alt="" />
     <h2>areas relacionadas a Redes </h2>
     <Link to='/sobre'>Clique para saber mais </Link>
   </div>
       </main>
    </div>
  )
}

export default Vazos;