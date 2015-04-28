#include <nan.h>
#include <iostream>

using namespace v8;

NAN_METHOD(Print) {
    Local<String> str = args[0].As<String>();
    std::cout << *String::Utf8Value(str) << std::endl;
    NanReturnUndefined();
}

NAN_METHOD(Length) {
    NanScope();
    Local<String> str = args[0].As<String>();
    Local<Number> len = NanNew<Number>(strlen(*String::Utf8Value(str)));
    NanReturnValue(len);
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("print"), NanNew<FunctionTemplate>(Print)->GetFunction());
  exports->Set(NanNew("length"), NanNew<FunctionTemplate>(Length)->GetFunction());
}

NODE_MODULE(myaddon, Init);
