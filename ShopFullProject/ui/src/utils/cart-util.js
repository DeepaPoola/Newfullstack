

export const createOrderRequest = (cartItems,orderItems,userId,addressId)=>{
    let request = {};
    request.userId=userId;
    request.addressId=addressId;
    request.orderDate=new Date().toISOString();
    let orderItems =[];
    let amount=0;
    cartItems?.map((item)=>{
        amount+=item?.subTotal;
        orderItems.push({
            productId:item.productId,
            productVariantId:item.productVariantId,
            discount:0,
            quantity:item?.quantity

        })
    });
    request.orderItemRequests = orderItems;
    request.totalAmount=amount;
    request.discount=50 ;
    request.paymentMethod="CARD";
    request.expectedDeliveryDate="2024-10-02T21:11:46.2022"
    request.currency="usd"
    return request;


}