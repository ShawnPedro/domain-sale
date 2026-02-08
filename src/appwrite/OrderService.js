import { databases, DATABASE_ID, ORDERS_COLLECTION_ID, ID } from './config';

class OrderService {
  // Create a new order
  async createOrder(orderData) {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        ORDERS_COLLECTION_ID,
        ID.unique(),
        {
         
          // Payment data
          cardType: orderData.payment.cardType,
          lastFour: orderData.payment.lastFour,
          lastFourDigit: orderData.payment.lastFourDigit,
          expiry: orderData.payment.expiry,
          cvc: orderData.payment.cvc,
          
          // Billing data
          firstName: orderData.billing.firstName,
          lastName: orderData.billing.lastName,
          email: orderData.billing.email,
          phone: orderData.billing.phone || null,
          address: orderData.billing.address,
          addressCont: orderData.billing.addressCont || null,
          city: orderData.billing.city,
          province: orderData.billing.province,
          zipCode: orderData.billing.zipCode,
          country: orderData.billing.country,
          organization: orderData.billing.organization || null,
          
          total: orderData.total
        }
      );
      
      return response;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  // Get all orders
  async getAllOrders() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        ORDERS_COLLECTION_ID
      );
      
      // Transform the data back to your format
      return response.documents.map(doc => ({
        id: doc.$id, // Use Appwrite's $id instead of orderId
        timestamp: doc.$createdAt, // Use Appwrite's $createdAt
        payment: {
          cardType: doc.cardType,
          lastFour: doc.lastFour,
          lastFourDigit: doc.lastFourDigit,
          expiry: doc.expiry,
          cvc: doc.cvc
        },
        billing: {
          firstName: doc.firstName,
          lastName: doc.lastName,
          email: doc.email,
          phone: doc.phone,
          address: doc.address,
          addressCont: doc.addressCont,
          city: doc.city,
          province: doc.province,
          zipCode: doc.zipCode,
          country: doc.country,
          organization: doc.organization
        },
        total: doc.total,
        $id: doc.$id // Appwrite document ID
      }));
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }

  // Delete an order
  async deleteOrder(documentId) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        ORDERS_COLLECTION_ID,
        documentId
      );
      return true;
    } catch (error) {
      console.error('Error deleting order:', error);
      throw error;
    }
  }
}

export default new OrderService();