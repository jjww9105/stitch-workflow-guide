(function () {
  const toast = document.querySelector(".toast");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 1600);
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
  }

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.getAttribute("data-copy-target");
      const target = document.getElementById(id);
      if (!target) return;

      try {
        await copyText(target.value || target.textContent || "");
        const oldText = button.textContent;
        button.textContent = "Copied";
        showToast("프롬프트를 복사했어요.");
        setTimeout(() => {
          button.textContent = oldText;
        }, 1300);
      } catch (error) {
        showToast("복사에 실패했어요. 직접 선택해서 복사해줘.");
      }
    });
  });
})();
