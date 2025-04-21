import { collection, addDoc, Timestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const generateOrderNumber = () => {
    const now = new Date();
    const timestamp = now.getTime();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `ORD-${timestamp}-${random}`;
  };

export const saveOrder = async (userData, cart, total) => {
const orderNumber = generateOrderNumber();

    try {
        const orderData = {
            orderNumber,
            userData,
            cart,
            total,
            date: Timestamp.fromDate(new Date()),
        };

        const docRef = await addDoc(collection(db, "orders"), orderData);
        console.log("🧾 Orden guardada con ID:", docRef.id);

        for (const item of cart) {
            const productRef = doc(db, "products", item.id);
            const productSnap = await getDoc(productRef);

            if (productSnap.exists()) {
                const currentStock = productSnap.data().stock || 0;
                const newStock = currentStock - item.qty;

                if (newStock < 0) {
                    console.warn(`⚠️ Stock insuficiente para ${item.title}`);
                } else {
                    await updateDoc(productRef, {
                        stock: newStock,
                    });
                    console.log(`🛒 Stock actualizado para ${item.title}: ${newStock}`);
                }
            }
        }

        return orderNumber;
    } catch (error) {
        console.error("Error al guardar la orden:", error);
        throw error;
    }
};
