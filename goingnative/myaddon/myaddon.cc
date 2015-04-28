#include <nan.h>
#include <iostream>

#ifndef _WIN32
#include <unistd.h>
#endif

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

NAN_METHOD(Delay) {
    Local<Number> num = args[0].As<Number>();
    Local<Function> func = args[1].As<Function>();
    int v = num->IntegerValue();
    
    #ifdef _WIN32
    Sleep(v);
    #else
    usleep(v * 1000);
    #endif
    
    NanMakeCallback(NanGetCurrentContext()->Global(), func, 0, NULL);
    NanReturnUndefined();
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("print"), NanNew<FunctionTemplate>(Print)->GetFunction());
  exports->Set(NanNew("length"), NanNew<FunctionTemplate>(Length)->GetFunction());
  exports->Set(NanNew("delay"), NanNew<FunctionTemplate>(Delay)->GetFunction());
}

NODE_MODULE(myaddon, Init);
