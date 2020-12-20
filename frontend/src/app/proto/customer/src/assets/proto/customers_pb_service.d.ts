// package: 
// file: src/assets/proto/customers.proto

import * as src_assets_proto_customers_pb from "../../../src/assets/proto/customers_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CustomerServiceGetAll = {
  readonly methodName: string;
  readonly service: typeof CustomerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_assets_proto_customers_pb.Empty;
  readonly responseType: typeof src_assets_proto_customers_pb.CustomerList;
};

type CustomerServiceGet = {
  readonly methodName: string;
  readonly service: typeof CustomerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_assets_proto_customers_pb.CustomerRequestId;
  readonly responseType: typeof src_assets_proto_customers_pb.Customer;
};

type CustomerServiceInsert = {
  readonly methodName: string;
  readonly service: typeof CustomerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_assets_proto_customers_pb.Customer;
  readonly responseType: typeof src_assets_proto_customers_pb.Customer;
};

type CustomerServiceUpdate = {
  readonly methodName: string;
  readonly service: typeof CustomerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_assets_proto_customers_pb.Customer;
  readonly responseType: typeof src_assets_proto_customers_pb.Customer;
};

type CustomerServiceRemove = {
  readonly methodName: string;
  readonly service: typeof CustomerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_assets_proto_customers_pb.CustomerRequestId;
  readonly responseType: typeof src_assets_proto_customers_pb.Empty;
};

export class CustomerService {
  static readonly serviceName: string;
  static readonly GetAll: CustomerServiceGetAll;
  static readonly Get: CustomerServiceGet;
  static readonly Insert: CustomerServiceInsert;
  static readonly Update: CustomerServiceUpdate;
  static readonly Remove: CustomerServiceRemove;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CustomerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAll(
    requestMessage: src_assets_proto_customers_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.CustomerList|null) => void
  ): UnaryResponse;
  getAll(
    requestMessage: src_assets_proto_customers_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.CustomerList|null) => void
  ): UnaryResponse;
  get(
    requestMessage: src_assets_proto_customers_pb.CustomerRequestId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Customer|null) => void
  ): UnaryResponse;
  get(
    requestMessage: src_assets_proto_customers_pb.CustomerRequestId,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Customer|null) => void
  ): UnaryResponse;
  insert(
    requestMessage: src_assets_proto_customers_pb.Customer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Customer|null) => void
  ): UnaryResponse;
  insert(
    requestMessage: src_assets_proto_customers_pb.Customer,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Customer|null) => void
  ): UnaryResponse;
  update(
    requestMessage: src_assets_proto_customers_pb.Customer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Customer|null) => void
  ): UnaryResponse;
  update(
    requestMessage: src_assets_proto_customers_pb.Customer,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Customer|null) => void
  ): UnaryResponse;
  remove(
    requestMessage: src_assets_proto_customers_pb.CustomerRequestId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Empty|null) => void
  ): UnaryResponse;
  remove(
    requestMessage: src_assets_proto_customers_pb.CustomerRequestId,
    callback: (error: ServiceError|null, responseMessage: src_assets_proto_customers_pb.Empty|null) => void
  ): UnaryResponse;
}

