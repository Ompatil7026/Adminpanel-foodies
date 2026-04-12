import axios from "axios";

const API_URL: string = "https://foodiesapplicationspringboot-production.up.railway.app/api/orders";

export const fetchAllOrders = async (): Promise<any> => {
  try {
    const response = await axios.get(API_URL + "/all");
    return response.data;
  } catch (error) {
    console.error("Error occured while fetching the orders", error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId: any, status: any): Promise<any> => {
  try {
    const response = await axios.patch(
      `${API_URL}/status/${orderId}?status=${status}`
    );
    return response.status === 200;
  } catch (error) {
    console.error("Error occured while updating the status", error);
    throw error;
  }
};