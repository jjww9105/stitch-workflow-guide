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

  function extractCodeBlocks(markdown) {
    const blocks = [];
    const pattern = /```(?:text)?\r?\n([\s\S]*?)\r?\n```/g;
    let match = pattern.exec(markdown);
    while (match) {
      blocks.push(match[1].trim());
      match = pattern.exec(markdown);
    }
    return blocks;
  }

  async function loadPrompts() {
    const textareas = Array.from(document.querySelectorAll("textarea[data-source]"));
    const sources = Array.from(new Set(textareas.map((textarea) => textarea.dataset.source)));
    const cache = new Map();

    await Promise.all(
      sources.map(async (source) => {
        const response = await fetch(source, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`${source} ${response.status}`);
        }
        const markdown = await response.text();
        cache.set(source, extractCodeBlocks(markdown));
      })
    );

    textareas.forEach((textarea) => {
      const blocks = cache.get(textarea.dataset.source) || [];
      const index = Number.parseInt(textarea.dataset.block || "0", 10);
      const prompt = blocks[index];
      if (!prompt) {
        textarea.value = "프롬프트 코드블록을 찾지 못했어요. 원본 md를 확인해줘.";
        textarea.dataset.loaded = "false";
        return;
      }
      textarea.value = prompt;
      textarea.dataset.loaded = "true";
      const button = document.querySelector(`[data-copy-target="${textarea.id}"]`);
      if (button) button.disabled = false;
    });
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
      if (!target || target.dataset.loaded !== "true") {
        showToast("프롬프트를 아직 불러오는 중이에요.");
        return;
      }

      try {
        await copyText(target.value || target.textContent || "");
        const oldText = button.textContent;
        button.textContent = "복사됨";
        showToast("프롬프트를 복사했어요.");
        setTimeout(() => {
          button.textContent = oldText;
        }, 1300);
      } catch (error) {
        showToast("복사에 실패했어요. 직접 선택해서 복사해줘.");
      }
    });
  });

  loadPrompts().catch((error) => {
    document.querySelectorAll("textarea[data-source]").forEach((textarea) => {
      textarea.value = "프롬프트를 불러오지 못했어요. 웹서버로 열었는지 확인하거나 원본 md를 열어줘.";
    });
    showToast("프롬프트 로딩에 실패했어요.");
    console.error(error);
  });
})();
