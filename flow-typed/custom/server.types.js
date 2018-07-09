declare type HTTPMethod =
  | 'GET'
  | 'PUT'
  | 'POST'
  | 'DELETE'
  | 'HEAD'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH'

declare type YABRouteT = {
  method: HTTPMethod,
  matcher: RegExp | string,
  handler: Function
}
