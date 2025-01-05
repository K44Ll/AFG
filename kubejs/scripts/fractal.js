// Definir a receita do Reality Fractal no Crafter do Create
onEvent('recipes', event => {
    event.custom({
        "type": "create:mechanical_crafting", // Define o tipo como Mechanical Crafting (Crafter)
        "pattern": [
            "  N  ",
            " NNN ",
            "NAAAN",
            "NBEDN",
            "NBFDN",
            "NBFDN",
            "NAAAN",
            " NNN ",
            "  N  ",
        ],
        "key": {
            "A": {
                "item": "mekanism:antimatter_pellet"  // Exemplo: substitua por outros itens que você deseja usar
            },
            "B": {
                "item": "modid:mithril_ingot"  // Substitua com o item necessário
            },
            "C": {
                "item": "modid:vibranium_ingot"
            },
            "D": {
                "item": "modid:gregium_ingot"
            },
            "E": {
                "item": "minecraft:dragon_egg"  // Corrigido
            },
            "N": {
                "item": "minecraft:netherite_block"
            },
            "F": {
                "item": "minecraft:clock"
            },
        },
        "result": {
            "item": "modid:reality_fractal",  // O item que será produzido
            "count": 1
        }
    });
});
