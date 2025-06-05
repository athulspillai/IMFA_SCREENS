const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cdNutsSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        Timestamp: { type: Date, required: true },
        TimestampId: { type: Number, required: true },
        TerminalId: { type: Number, required: true },
        TerminalName: { type: String, required: true },
        MeasurandData: [
            {
                _id: false,
                MeasurandId: {
                    type: Number,
                    required: true,
                    unique: true,
                },
                MeasurandName: {
                    type: String,
                    required: true,
                },
                MeasurandValue: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { collection: "CDNuts" }
);

module.exports = mongoose.model("CDNuts", cdNutsSchema);