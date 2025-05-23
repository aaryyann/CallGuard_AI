import mongoose, { Document, Schema, Model } from "mongoose";

export interface ICall extends Document {
    patientName: string;
    doctorName: string;
    callDate: Date;
    duration: number;
    audioUrl: string;
    transcript: string;
    keywordsFlagged: string[];
    riskLevel: "Low" | "Medium" | "High" | "None";
    confidenceScore: Number,
    condition: String,
    advice: String,
    redFlags: String,
    userId: string
}

const CallSchema: Schema<ICall> = new mongoose.Schema({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    callDate: { type: Date, required: true },
    duration: { type: Number, required: true },
    audioUrl: {
        type: String,
        required: true
    },
    transcript: { type: String, required: true },
    keywordsFlagged: [{ type: String }],
    riskLevel: {
        type: String,
        enum: ["Low", "Medium", "High", "None"],
        default: "None"
    },
    confidenceScore: {
        type: Number,
        default: 0
    },
    condition: {
        type: String,
        default: ""
    },
    advice: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        required: true
    }
});

const Call: Model<ICall> =
    mongoose.models.Call || mongoose.model<ICall>("Call", CallSchema);

export default Call;
