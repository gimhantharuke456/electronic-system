import axios from "axios";

export const predictSales = async (sales, month) => {
  const data = await axios.post("http://127.0.0.1:5001/predict", {
    current_quantity: sales,
    month: month,
  });
  return data.data["next_month_sales"];
};
