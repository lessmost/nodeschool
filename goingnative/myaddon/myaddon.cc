#include <nan.h>
#include <iostream>

using namespace v8;

NAN_METHOD(Print) {
    Local<String> str = args[0].As<String>();
    std::cout << *String::Utf8Value(str) << std::endl;
    NanReturnUndefined();
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("print"), NanNew<FunctionTemplate>(Print)->GetFunction());
}

NODE_MODULE(myaddon, Init);
