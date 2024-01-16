const mongoose = require('mongoose')

const dateSchema = new mongoose.Schema({
    petName: { type: String, required: true },
    time: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: {
        type: String,
        enum: ["Hủy Đơn Hàng","Đơn Hàng Chờ Xác Nhận", "Đã Xác Nhận Thông Tin", "Đã Giao Cho ĐVVC", "Đã Nhận Được Hàng", "Đơn Hàng Đã Hoàn Thành"],
        default: "Đơn Hàng Chờ Xác Nhận",
    },
    deliveredAt: { type: Date },
},
    {
        timestamps: true,
    }
);
const Order = mongoose.model('Date', dateSchema);
module.exports = Order