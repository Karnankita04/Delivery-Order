const orderDelivered = (startTime) => {
  return setTimeout(() => {
    const timeOfOrderDelivered = (Date.now() - startTime) / 1000;
    console.log(
      `[${timeOfOrderDelivered}] Order delivered: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box', deliveryDetails: 'Delivered by John at 7:30 PM' }`
    );
  }, 6000);
};

const deliveringOrder = (startTime) => {
  return setTimeout(() => {
    const timeOfDeliveringOrder = (Date.now() - startTime) / 1000;
    console.log(`[${timeOfDeliveringOrder}] Delivering order...`);

    orderDelivered(startTime);
  }, 5000);
};

const packingOrder = (startTime) => {
  return setTimeout(() => {
    const timeOfPackingOrder = (Date.now() - startTime) / 1000;
    console.log(`[${timeOfPackingOrder}] Packing order...`);
    console.log(
      `[${timeOfPackingOrder}] Order packed: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box' }`
    );

    deliveringOrder(startTime);
  }, 2000);
};

const preparingFood = (startTime) => {
  return setTimeout(() => {
    const timeOfPreparingFood = (Date.now() - startTime) / 1000;
    console.log(`[${timeOfPreparingFood}] Preparing food...`);
    console.log(
      `[${timeOfPreparingFood}] Food is ready: { orderId: 123, foodDetails: 'Burger & Fries' }`
    );

    packingOrder(startTime);
  }, 3000);
};

const orderReceived = (startTime) => {
  return setTimeout(() => {
    const timeOfOrderReceived = (Date.now() - startTime) / 1000;
    console.log(`[${timeOfOrderReceived}] Order received: {orderId: 123}`);

    preparingFood(startTime);
  }, 1000);
};

const main = () => {
  const startTime = Date.now();

  orderReceived(startTime);
};

main();
