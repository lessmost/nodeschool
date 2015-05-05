#include "learnuv.h"

void idle_cb(uv_idle_t* handle) {
  static int64_t count = -1;
  count++;
  if ((count % 10000) == 0) log_report(".");
  if (count >= 50000) uv_idle_stop(handle);
}

int main() {
  uv_idle_t idle_handle;
  int err;

  /* 1. create the event loop */
  uv_loop_t loop;
  err = uv_loop_init(&loop);
  CHECK(err, "uv_loop_init");

  /* 2. initialize an idle handler for the loop */
  err = uv_idle_init(&loop, &idle_handle);
  CHECK(err, "uv_idle_init");

  /* 3. start the idle handler with a function to call */
  err = uv_idle_start(&idle_handle, idle_cb);
  CHECK(err, "uv_idle_start");

  /* 4. start the event loop */
  uv_run(&loop, UV_RUN_DEFAULT);

  return 0;
}
