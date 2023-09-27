const e = require("express");
const { ObjectId } = require("mongodb");

class ContactService {
  constructor(client) {
    this.Contact = client.db().collection("contact");
  }
  // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}

module.exports = ContactService;