"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statics = void 0;
const mongoose_1 = require("mongoose");
const statics = (schema) => {
    schema.statics.findLastExportForService = function (serviceId) {
        return new Promise((res, rej) => {
            this.aggregate([
                {
                    $lookup: {
                        from: "identifiers",
                        localField: "userExportId",
                        foreignField: "_id",
                        as: "userExportId",
                    },
                },
                {
                    $unwind: "$userExportId",
                },
                {
                    $match: {
                        "userExportId.service": {
                            $in: [new mongoose_1.Types.ObjectId(serviceId)],
                        },
                    },
                },
                {
                    $sort: {
                        timestamp: -1,
                    },
                },
                {
                    $limit: 5,
                },
            ]).exec(function (err, docs) {
                if (err) {
                    console.log(err);
                    rej(err);
                }
                res(docs);
            });
        });
    };
    schema.statics.findLastImportForService = function (serviceId) {
        return new Promise((res, rej) => {
            this.aggregate([
                {
                    $lookup: {
                        from: "identifiers",
                        localField: "userImportId",
                        foreignField: "_id",
                        as: "userImportId",
                    },
                },
                {
                    $unwind: "$userImportId",
                },
                {
                    $match: {
                        "userImportId.service": {
                            $in: [new mongoose_1.Types.ObjectId(serviceId)],
                        },
                    },
                },
                {
                    $limit: 5,
                },
            ]).exec(function (err, docs) {
                if (err) {
                    console.log(err);
                    rej(err);
                }
                res(docs);
            });
        });
    };
};
exports.statics = statics;
