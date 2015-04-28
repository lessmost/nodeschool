#include <nan.h>
#include <iostream>

using namespace v8;

NAN_METHOD(Print) {
    std::cout << "I am a native addon and I AM ALIVE!" << std::endl;
    NanReturnUndefined();
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("print"), NanNew<FunctionTemplate>(Print)->GetFunction());
}

NODE_MODULE(myaddon, Init);
