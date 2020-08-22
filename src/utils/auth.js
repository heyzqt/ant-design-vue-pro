export function getCurrnetAuthority() {
  return ["admin"];
}

export function check(authority) {
  const current = getCurrnetAuthority();
  return current.some(item => authority.includes(item));
}

export function isLogin() {
  const current = getCurrnetAuthority();
  return current && current[0] !== "guest";
}
