// package: 
// file: src/assets/proto/customers.proto

var src_assets_proto_customers_pb = require("../../../src/assets/proto/customers_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CustomerService = (function () {
  function CustomerService() {}
  CustomerService.serviceName = "CustomerService";
  return CustomerService;
}());

CustomerService.GetAll = {
  methodName: "GetAll",
  service: CustomerService,
  requestStream: false,
  responseStream: false,
  requestType: src_assets_proto_customers_pb.Empty,
  responseType: src_assets_proto_customers_pb.CustomerList
};

CustomerService.Get = {
  methodName: "Get",
  service: CustomerService,
  requestStream: false,
  responseStream: false,
  requestType: src_assets_proto_customers_pb.CustomerRequestId,
  responseType: src_assets_proto_customers_pb.Customer
};

CustomerService.Insert = {
  methodName: "Insert",
  service: CustomerService,
  requestStream: false,
  responseStream: false,
  requestType: src_assets_proto_customers_pb.Customer,
  responseType: src_assets_proto_customers_pb.Customer
};

CustomerService.Update = {
  methodName: "Update",
  service: CustomerService,
  requestStream: false,
  responseStream: false,
  requestType: src_assets_proto_customers_pb.Customer,
  responseType: src_assets_proto_customers_pb.Customer
};

CustomerService.Remove = {
  methodName: "Remove",
  service: CustomerService,
  requestStream: false,
  responseStream: false,
  requestType: src_assets_proto_customers_pb.CustomerRequestId,
  responseType: src_assets_proto_customers_pb.Empty
};

exports.CustomerService = CustomerService;

function CustomerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CustomerServiceClient.prototype.getAll = function getAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerService.GetAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CustomerServiceClient.prototype.get = function get(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerService.Get, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CustomerServiceClient.prototype.insert = function insert(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerService.Insert, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CustomerServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerService.Update, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CustomerServiceClient.prototype.remove = function remove(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerService.Remove, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CustomerServiceClient = CustomerServiceClient;

