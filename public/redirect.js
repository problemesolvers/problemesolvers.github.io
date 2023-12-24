(function () {
  window.location.href = `/${
    window.location.pathname
      ? `?lastRoute=${window.location.pathname.slice(1)}`
      : ""
  }`;
})();
