document.addEventListener("DOMContentLoaded", function () {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  const updatePreview = () => {
    preview.innerHTML = marked(editor.value);
  };

  editor.addEventListener("input", updatePreview);

  updatePreview();
});
