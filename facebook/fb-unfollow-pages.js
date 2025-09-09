(async function autoUnfollow() {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  let totalClicks = 0;
  let round = 1;

  // Preguntar al usuario el modo
  let mode = prompt(
    "¿Quieres hacerlo en loop infinito? (sí/no)",
    "sí"
  ).toLowerCase();
  let maxRounds = Infinity;
  if (mode !== "sí" && mode !== "si") {
    maxRounds =
      parseInt(prompt("¿Cuántos lotes deseas procesar?", "3"), 10) || 1;
  }

  async function unfollowBatch() {
    console.log(`--- 🔄 Iniciando lote ${round} ---`);

    // 1. Abre menús de opciones (los que tienen botón sin texto pero con aria-label)
    const menus = Array.from(
      document.querySelectorAll('div[role="button"]')
    ).filter(
      (el) =>
        el.innerText.trim() === "" &&
        el.getAttribute("aria-label")?.includes("opciones")
    );

    console.log(`ℹ️ Menús encontrados: ${menus.length}`);

    for (let i = 0; i < menus.length; i++) {
      menus[i].click();
      await delay(800);
    }

    // 2. Encuentra botones "Ya no me gusta" / "Dejar de seguir"
    const items = Array.from(
      document.querySelectorAll('[role="menuitem"]')
    ).filter((el) => /Ya no me gusta|Dejar de seguir/i.test(el.innerText));

    console.log(
      `ℹ️ Elementos para unfollow encontrados en este lote: ${items.length}`
    );

    for (let j = 0; j < items.length; j++) {
      items[j].click();
      totalClicks++;
      console.log(`✅ Click ${totalClicks} (lote ${round})`);
      await delay(1500 + Math.random() * 1000);
    }

    console.log(`--- ✅ Lote ${round} completado ---`);
    round++;
    return items.length;
  }

  // Bucle principal
  let keepGoing = true;
  while (keepGoing && round <= maxRounds) {
    const clicks = await unfollowBatch();

    if (clicks === 0) {
      console.log("⬇️ Haciendo scroll para cargar más...");
      window.scrollTo(0, document.body.scrollHeight);
      await delay(4000); // esperar carga
      const newMenus = Array.from(
        document.querySelectorAll('div[role="button"]')
      ).filter(
        (el) =>
          el.innerText.trim() === "" &&
          el.getAttribute("aria-label")?.includes("opciones")
      );
      console.log(`ℹ️ Nuevos menús cargados: ${newMenus.length}`);
      keepGoing = newMenus.length > 0;
    }
  }

  console.log(`🎉 Proceso finalizado. Total de unfollows: ${totalClicks}`);
})();
