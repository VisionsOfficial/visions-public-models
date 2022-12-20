"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.virtuals = void 0;
var virtuals = function (schema) {
    schema.virtual("identifiers", {
        ref: "Identifier",
        localField: "_id",
        foreignField: "service",
    });
    schema.virtual("datatypes", {
        ref: "DataType",
        localField: "_id",
        foreignField: "provenance",
    });
    schema.virtual("purposes", {
        ref: "Purpose",
        localField: "_id",
        foreignField: "service",
    });
};
exports.virtuals = virtuals;
