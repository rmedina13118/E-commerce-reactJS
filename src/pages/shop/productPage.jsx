import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { productId } = useParams();

    // Extraer solo el ID si usaste `id-nombre`
    const id = productId.split("-")[0];

    return <div>Mostrando el producto con ID: {id}</div>;
};

export default ProductPage;
