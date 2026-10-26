// 공통 JavaScript

"use strict";

// 공통 HTML 컴포넌트 불러오기

document.addEventListener("DOMContentLoaded", async () => {

  // 공통 헤더
  const header = document.getElementById("header");

  if (header) {
    try {
      const response = await fetch("components/header.html");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      header.innerHTML = await response.text();

    } catch (error) {
      console.error("헤더 로딩 실패:", error);
    }
  }

});
