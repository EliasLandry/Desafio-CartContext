import React, {useState,useEffect} from 'react' 
import ItemDetail from './ItemDetail/ItemDetail'
import { getProductos } from '../FakeApi.js'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const { itemId } = useParams();

    useEffect(() => {
      getProductos
        .then(datos => {setProductDetail(datos.find(prod => prod.id === itemId))})
    }, [])

  return (
    <div className= 'd-flex '>
      <ItemDetail productDetail = {productDetail}/>
    </div>
  )
}

export default ItemDetailContainer

