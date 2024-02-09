
import ProductInfo from '../../../../components/ProductInfo/ProductInfo'

export default function ProductPage({params}) {
    return <ProductInfo productId={params.productId}/>;
}