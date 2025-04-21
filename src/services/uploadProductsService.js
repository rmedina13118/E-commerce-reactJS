import { db } from "../firebase/firebaseConfig"
import { collection, setDoc, doc } from "firebase/firestore"


const products = [
    {
        id: 1,
        name: "Guitarra electroacústica Epiphone",
        price: 2000000,
        stock: 10,
        category: 'Cuerdas',
        img: 'https://tmsmusic.co/cdn/shop/files/guitarra-electro-acustica-epiphone-j-15-ec-deluxe-ee21vsch1-the-music-site-1.jpg?v=1708735576&width=600',
        description: "Una guitarra electroacústica de calidad profesional con un sonido brillante y versátil, perfecta para cualquier estilo musical."
    },
    {
        id: 2,
        name: "Guitarra acústica Yamaha",
        price: 800000,
        stock: 5,
        category: 'Cuerdas',
        img: 'https://sinfoniamusical.com/cdn/shop/files/F310.jpg?v=1707940734&width=900',
        description: "Guitarra acústica con un sonido cálido y natural, ideal para principiantes y músicos intermedios."
    },
    {
        id: 3,
        name: "Bajo Eléctrico Fender",
        price: 1500000,
        stock: 3,
        category: 'Cuerdas',
        img: 'https://ortizo.com.co/cdn/shop/files/GB0059_900x.jpg?v=1684171849',
        description: "Un bajo eléctrico Fender de calidad profesional, con una construcción sólida y un tono potente para todos los géneros musicales."
    },
    {
        id: 4,
        name: "Batería Yamaha",
        price: 3000000,
        stock: 2,
        category: 'Percusión',
        img: 'https://tiendamusicland.com/wp-content/uploads/2023/10/Yamaha-Stage-Custom-Birch-5-Piece-Shell-Pack-With-20-Bass-Drum-1.webp',
        description: "Batería acústica de alta calidad, ideal para músicos que buscan un sonido cálido y definido con una durabilidad excepcional."
    },
    {
        id: 5,
        name: "Guitarra eléctrica Fender",
        price: 2000000,
        stock: 5,
        category: 'Cuerdas',
        img: 'https://www.haikuo.com.tw/upload_file/haikuo/961/17212099611.jpg',
        description: "Guitarra eléctrica Fender con un tono versátil y potente, perfecta para músicos de todos los niveles y estilos musicales."
    },
    {
        id: 6,
        name: "Piano eléctrico Yamaha",
        price: 30000000,
        stock: 5,
        category: 'Teclados',
        img: 'https://www.falymusic.com/images/thumbnails/465/465/detailed/7/montage-8-4_opt.jpg',
        description: "Piano eléctrico de alta gama con una sensación realista al tacto y sonidos de piano auténticos, ideal para profesionales."
    },
    {
        id: 7,
        name: "Cajón peruano LP",
        price: 500000,
        stock: 20,
        category: 'Percusión',
        img: 'https://www.miche.com.co/cdn/shop/products/CAJO04_787x787.png?v=1574712914',
        description: "Cajón peruano LP con un sonido cálido y profundo, perfecto para percusionistas de todos los niveles."
    },
    {
        id: 8,
        name: "Batería acústica Mapex",
        price: 4500000,
        stock: 10,
        category: 'Percusión',
        img: 'https://dojiw2m9tvv09.cloudfront.net/52889/product/X_captura-de-pantalla-2024-06-14-a-la-s-14-39-125059.png?27&time=1732585662',
        description: "Batería acústica Mapex, ideal para bateristas profesionales que buscan un sonido equilibrado y una excelente resonancia."
    },
    {
        id: 9,
        name: "Sintetizador Nord Stage",
        price: 5000000,
        stock: 10,
        category: 'Teclados',
        img: 'https://www.recmusicpy.com/img/1/2337/produtos/540/755812b7ec440c4193770b5876124953.jpg',
        description: "Sintetizador Nord Stage, diseñado para músicos que buscan una amplia gama de sonidos y efectos en un solo instrumento."
    },
    {
        id: 10,
        name: "Keytar Alesis",
        price: 1500000,
        stock: 10,
        category: 'Teclados',
        img: 'https://www.malaga8.com/65022-large_default/alesis-vortex-wireless-2-p-26925.jpg',
        description: "Un keytar inalámbrico de Alesis que combina la facilidad de un teclado con la movilidad de una guitarra, ideal para músicos en vivo."
    },
    {
        id: 11,
        name: "Batería eléctrica Alesis",
        price: 1800000,
        stock: 10,
        category: 'Percusión',
        img: 'https://www.pianosbogota.com/wp-content/uploads/2023/11/BATERIA-ALESIS-NITRO-MAX-KIT-bogota.png',
        description: "Batería electrónica Alesis Nitro, perfecta para músicos que desean practicar con una variedad de sonidos y efectos."
    },
    {
        id: 12,
        name: "Piano Digital Roland",
        price: 6000000,
        stock: 5,
        category: 'Teclados',
        img: 'https://m.media-amazon.com/images/I/61RiFWYpWSL._AC_SX569_.jpg',
        description: "Piano digital Roland con teclas ponderadas y sonidos de piano realistas, ideal para pianistas profesionales y avanzados."
    }
];


export async function uploadProducts() {

    try {
        // Aseguramos que la colección products esté en la raíz
        const productsCollection = collection(db, "products")

        for (const product of products) {
            const firestoreProduct = {
                name: product.name,
                price: product.price,
                stock: product.stock,
                category: product.category,
                img: product.img,
                description: product.description,
            }

            await setDoc(doc(productsCollection, String(product.id).padStart(2, "0")), firestoreProduct)


        }

    } catch (error) {
    }
}
