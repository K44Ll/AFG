// KubeJS para registrar os minérios e alloys com texturas e receitas no GregTech
onEvent('item.registry', (event) => {
  // Registra os minérios (Gregium, Mithril, Dilithium, Vibranium) com suas texturas locais
  event.create('modid:gregium_ingot')
    .texture('modid:all_from_greg/kubejs/alloys/textures/gregium_ingot');
  
  event.create('modid:mithril_ingot')
    .texture('modid:all_from_greg/kubejs/alloys/textures/mithril_ingot');
  
  event.create('modid:dilithium_ingot')
    .texture('modid:all_from_greg/kubejs/alloys/textures/dilithium_ingot');
  
  event.create('modid:vibranium_ingot')
    .texture('modid:all_from_greg/kubejs/alloys/textures/vibranium_ingot');

  // Registra os alloys com as cores sólidas e suas texturas locais
  event.create('modid:gregium_mithril_alloy')
    .texture('modid:all_from_greg/kubejs/alloys/textures/gre_mithril_alloy');

  event.create('modid:gregium_dilithium_alloy')
    .texture('modid:all_from_greg/kubejs/alloys/textures/gre_dilithium_alloy');

  event.create('modid:mithril_dilithium_alloy')
    .texture('modid:all_from_greg/kubejs/alloys/textures/mith_dilithium_alloy');

  event.create('modid:dilithium_vibranium_alloy')
    .texture('modid:all_from_greg/kubejs/alloys/textures/dilith_vibranium_alloy');
});

// Criando as receitas de alloys no Alloy Smelter
onEvent('recipes', (event) => {
  let gregiumIngot = Item.of('modid:gregium_ingot');
  let mithrilIngot = Item.of('modid:mithril_ingot');
  let dilithiumIngot = Item.of('modid:dilithium_ingot');
  let vibraniumIngot = Item.of('modid:vibranium_ingot');
  
  let gregiumMithrilAlloy = Item.of('modid:gregium_mithril_alloy');
  let gregiumDilithiumAlloy = Item.of('modid:gregium_dilithium_alloy');
  let mithrilDilithiumAlloy = Item.of('modid:mithril_dilithium_alloy');
  let dilithiumVibraniumAlloy = Item.of('modid:dilithium_vibranium_alloy');

  // Receitas para criar os alloys no GregTech Alloy Smelter
  event.recipes.gregtech.alloy_furnace([
    gregiumMithrilAlloy
  ], [
    gregiumIngot,
    mithrilIngot
  ]).id('kubejs:gregium_mithril_alloy_recipe');

  event.recipes.gregtech.alloy_furnace([
    gregiumDilithiumAlloy
  ], [
    gregiumIngot,
    dilithiumIngot
  ]).id('kubejs:gregium_dilithium_alloy_recipe');

  event.recipes.gregtech.alloy_furnace([
    mithrilDilithiumAlloy
  ], [
    mithrilIngot,
    dilithiumIngot
  ]).id('kubejs:mithril_dilithium_alloy_recipe');

  event.recipes.gregtech.alloy_furnace([
    dilithiumVibraniumAlloy
  ], [
    dilithiumIngot,
    vibraniumIngot
  ]).id('kubejs:dilithium_vibranium_alloy_recipe');
});
