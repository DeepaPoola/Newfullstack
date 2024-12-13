
import store from '../components/store/store'
import { setLoading } from '../components/store/features/common'
import { getProductBySlug } from '../api/fetchProducts';

export const loadProductBySlug = async ({params})=>{
   
   try{
     store.dispatch(setLoading(true));
     const product = await getProductBySlug(params?.slug);
     store.dispatch(setLoading(false));
     return {product}
   }
   catch(err){

   }
 }


