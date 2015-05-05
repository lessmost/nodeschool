#ifndef __INTERACTIVE_HORSE_RACE_H__
#define __INTERACTIVE_HORSE_RACE_H__

/*
 * Config
 */

/* set to 0 in order to not draw but log messages instead */
#define DRAW 1
#if DRAW == 1
#define LOGLEVEL 0
#endif

#include "learnuv.h"

#define DELAY        1E6
#define MAX_SPEED    20

/*
 * TCP server
 */

#define MAX_CLIENTS 5

typedef struct luv_server_s luv_server_t;

typedef struct {
  uv_tcp_t  connection;
  int       id;
  int       slot;
  luv_server_t* server;
  void* data;
} luv_client_t;

typedef struct {
  char*           buf;
  size_t          len;
  luv_client_t*   client;
} luv_client_msg_t;

typedef void (*luv_onclient_msg_processed)(luv_client_msg_t*, char*);
typedef void (*luv_onclient_msg)(luv_client_msg_t*, luv_onclient_msg_processed);
typedef void (*luv_onclient_connected)(luv_client_t*, int);
typedef void (*luv_onclient_disconnected)(luv_client_t*, int);

/* server inherits uv_tcp_t since its the first field */
struct luv_server_s {
  uv_tcp_t      tcp;
  const char*   host;
  int           port;
  luv_client_t* clients[MAX_CLIENTS];
  int           num_clients;
  int           ids;
  void*         data;
  /* events */
  luv_onclient_connected onclient_connected;
  luv_onclient_disconnected onclient_disconnected;
  luv_onclient_msg onclient_msg;
};

void luv_server_send(luv_server_t* self, luv_client_t* client, char* msg);
void luv_server_broadcast(luv_server_t*, char*);
void luv_server_destroy(luv_server_t*);
void luv_server_start(luv_server_t*, uv_loop_t*);

luv_server_t* luv_server_create(
    uv_loop_t *loop
  , const char* host
  , int port
  , luv_onclient_connected onclient_connected
  , luv_onclient_disconnected onclient_disconnected
  , luv_onclient_msg onclient_msg);

/*
 * Questions
 */

typedef struct {
  char* question;
  char* answer;
} luv_question_t;

void luv_questions_init();
luv_question_t luv_questions_get();

/*
 * Game
 */

typedef struct {
  char* name;
  int color;
  int track;
  int position;
} luv_horse_t;


typedef struct {
  luv_client_t *client;
  luv_horse_t *horse;
  int color;
  int track;
  int speed;
  int position;
} luv_player_t;

typedef struct {
  luv_server_t* server;
  int in_progress;
  int question_asked;
  luv_question_t question;
  int time_to_answer;
  int delay;
} luv_game_t;

/*
 * Track
 */

void track_handler(uv_idle_t*);
void track_init(uv_loop_t*, luv_client_t**, int);

#endif
