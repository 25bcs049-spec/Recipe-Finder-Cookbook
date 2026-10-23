
const recipes = [
  {
    id: 1,
    name: "Creamy Tomato Pasta",
    category: "veg",
    time: 20,
    difficulty: "Easy",
    emoji: "🍝",
    description: "Comforting pasta with a creamy tomato sauce.",
    ingredients: [
      "150 g pasta",
      "2 tomatoes, chopped",
      "2 garlic cloves, minced",
      "2 tbsp cream",
      "1 tbsp olive oil",
      "Salt, pepper and herbs"
    ],
    instructions: [
      "Boil the pasta in salted water until tender.",
      "Heat olive oil and cook the garlic for a minute.",
      "Add tomatoes, salt and pepper. Cook until soft.",
      "Stir in the cream and cooked pasta.",
      "Mix well and finish with your favourite herbs."
    ]
  },
  {
    id: 2,
    name: "Masala Omelette",
    category: "nonveg",
    time: 10,
    difficulty: "Easy",
    emoji: "🍳",
    description: "A quick, flavourful egg breakfast.",
    ingredients: [
      "2 eggs",
      "1 small onion, chopped",
      "1 green chilli, chopped",
      "2 tbsp coriander leaves",
      "Salt and pepper",
      "1 tsp oil"
    ],
    instructions: [
      "Beat the eggs with salt and pepper.",
      "Mix in the onion, chilli and coriander.",
      "Heat oil in a pan over medium heat.",
      "Pour in the egg mixture and cook until set.",
      "Flip carefully, cook the other side and serve."
    ]
  },
  {
    id: 3,
    name: "Garden Veggie Salad",
    category: "veg",
    time: 15,
    difficulty: "Easy",
    emoji: "🥗",
    description: "A fresh and crunchy bowl of vegetables.",
    ingredients: [
      "1 cucumber",
      "2 tomatoes",
      "1 carrot",
      "Lettuce leaves",
      "1 tbsp lemon juice",
      "Salt and pepper"
    ],
    instructions: [
      "Wash all the vegetables thoroughly.",
      "Chop the cucumber, tomatoes and carrot.",
      "Tear the lettuce into bite-sized pieces.",
      "Combine everything in a bowl.",
      "Add lemon juice, salt and pepper, then toss."
    ]
  },
  {
    id: 4,
    name: "Banana Pancakes",
    category: "veg",
    time: 15,
    difficulty: "Easy",
    emoji: "🥞",
    description: "Soft, sweet pancakes for a relaxed morning.",
    ingredients: [
      "1 ripe banana",
      "1 egg",
      "4 tbsp flour",
      "3 tbsp milk",
      "A pinch of cinnamon",
      "A little butter or oil"
    ],
    instructions: [
      "Mash the banana in a bowl.",
      "Mix in the egg, flour, milk and cinnamon.",
      "Heat a lightly greased pan.",
      "Pour small portions of batter into the pan.",
      "Cook both sides until golden and serve."
    ]
  },
  {
    id: 5,
    name: "Garlic Fried Rice",
    category: "veg",
    time: 15,
    difficulty: "Easy",
    emoji: "🍚",
    description: "A simple way to turn leftover rice into a meal.",
    ingredients: [
      "2 cups cooked rice",
      "3 garlic cloves, chopped",
      "1/2 cup mixed vegetables",
      "1 tbsp oil",
      "1 tsp soy sauce",
      "Pepper to taste"
    ],
    instructions: [
      "Heat oil in a pan or wok.",
      "Add garlic and cook briefly.",
      "Add the mixed vegetables and stir-fry until tender.",
      "Add the cooked rice, soy sauce and pepper.",
      "Toss everything together and serve hot."
    ]
  },
  {
    id: 6,
    name: "Chicken Pepper Stir-Fry",
    category: "nonveg",
    time: 25,
    difficulty: "Medium",
    emoji: "🍗",
    description: "A savoury chicken dish with colourful peppers.",
    ingredients: [
      "250 g boneless chicken, sliced",
      "1 bell pepper, sliced",
      "1 onion, sliced",
      "2 garlic cloves",
      "1 tbsp oil",
      "Salt and pepper"
    ],
    instructions: [
      "Heat oil in a pan and cook the garlic briefly.",
      "Add the chicken and stir-fry until nearly cooked.",
      "Add onion and bell pepper.",
      "Season and cook until the chicken reaches 74°C internally.",
      "Serve hot with rice or flatbread."
    ]
  },
  {
    id: 7,
    name: "Tomato Cheese Toast",
    category: "veg",
    time: 10,
    difficulty: "Easy",
    emoji: "🍞",
    description: "Crispy toast topped with tomato and melted cheese.",
    ingredients: [
      "2 bread slices",
      "1 tomato, sliced",
      "Cheese of your choice",
      "A pinch of oregano",
      "Black pepper"
    ],
    instructions: [
      "Place tomato slices on the bread.",
      "Add cheese, oregano and pepper.",
      "Toast in a suitable oven or covered pan until crisp and melted.",
      "Allow it to cool slightly before eating."
    ]
  },
  {
    id: 8,
    name: "Mango Smoothie",
    category: "veg",
    time: 5,
    difficulty: "Easy",
    emoji: "🥭",
    description: "A refreshing mango drink with a creamy texture.",
    ingredients: [
      "1 ripe mango",
      "1/2 cup milk",
      "1/2 cup plain yogurt",
      "Ice cubes, optional"
    ],
    instructions: [
      "Peel and chop the mango.",
      "Add mango, milk and yogurt to a blender.",
      "Blend until smooth.",
      "Add ice if desired and blend again.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 9,
    name: "Lemon Herb Fish",
    category: "nonveg",
    time: 20,
    difficulty: "Medium",
    emoji: "🐟",
    description: "A light fish dish with lemon and fragrant herbs.",
    ingredients: [
      "2 fish fillets",
      "1 tbsp lemon juice",
      "1 garlic clove, minced",
      "1 tsp oil",
      "Mixed herbs",
      "Salt and pepper"
    ],
    instructions: [
      "Season the fish with lemon, garlic, herbs, salt and pepper.",
      "Heat oil in a pan.",
      "Cook the fish until it is opaque and flakes easily.",
      "Check that it reaches 63°C internally.",
      "Serve with vegetables or rice."
    ]
  }
];

const grid = document.getElementById("recipe-grid");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsCount = document.getElementById("results-count");
const emptyMessage = document.getElementById("empty-message");
const sectionTitle = document.getElementById("section-title");
const favoriteToggle = document.getElementById("favorites-toggle");
const favoriteCount = document.getElementById("favorite-count");
const filters = document.querySelectorAll(".filter");

const dialog = document.getElementById("recipe-dialog");
const recipeDetails = document.getElementById("recipe-details");
const closeDialog = document.getElementById("close-dialog");

let activeCategory = "all";
let showFavoritesOnly = false;

function loadFavorites() {
  try {
    const stored = JSON.parse(
      localStorage.getItem("gather-favorites") || "[]"
    );

    if (!Array.isArray(stored)) return [];

    return stored.filter(
      id => Number.isSafeInteger(id) &&
      recipes.some(recipe => recipe.id === id)
    );
  } catch {
    return [];
  }
}

let favorites = loadFavorites();

function saveFavorites() {
  try {
    localStorage.setItem("gather-favorites", JSON.stringify(favorites));
    return true;
  } catch {
    alert("Favourites could not be saved in this browser.");
    return false;
  }
}

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
  favoriteToggle.setAttribute(
    "aria-pressed",
    String(showFavoritesOnly)
  );
}

function getFilteredRecipes() {
  const query = searchInput.value.trim().toLowerCase();

  return recipes.filter(recipe => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.ingredients.some(item => item.toLowerCase().includes(query));

    const matchesCategory =
      activeCategory === "all" ||
      recipe.category === activeCategory;

    const matchesFavorite =
      !showFavoritesOnly || favorites.includes(recipe.id);

    return matchesSearch && matchesCategory && matchesFavorite;
  });
}

function renderRecipes() {
  grid.replaceChildren();

  const filtered = getFilteredRecipes();

  sectionTitle.textContent = showFavoritesOnly
    ? "Your favourites"
    : "Recipes for you";

  resultsCount.textContent =
    `${filtered.length} ${filtered.length === 1 ? "recipe" : "recipes"} found`;

  emptyMessage.hidden = filtered.length !== 0;

  filtered.forEach(recipe => {
    const card = document.createElement("article");
    card.className = "recipe-card";

    const imageArea = document.createElement("div");
    imageArea.className = "recipe-image";

    const emoji = document.createElement("span");
    emoji.className = "recipe-emoji";
    emoji.textContent = recipe.emoji;
    emoji.setAttribute("aria-hidden", "true");
    imageArea.append(emoji);

    const category = document.createElement("span");
    category.className = recipe.category === "veg"
      ? "veg-tag"
      : "veg-tag nonveg-tag";

    category.textContent = recipe.category === "veg"
      ? "VEGETARIAN"
      : "NON-VEGETARIAN";

    imageArea.append(category);

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "favorite-btn";
    favoriteButton.classList.toggle(
      "saved",
      favorites.includes(recipe.id)
    );
    favoriteButton.textContent = favorites.includes(recipe.id)
      ? "♥"
      : "♡";

    favoriteButton.setAttribute(
      "aria-label",
      favorites.includes(recipe.id)
        ? `Remove ${recipe.name} from favourites`
        : `Add ${recipe.name} to favourites`
    );

    favoriteButton.setAttribute(
      "aria-pressed",
      String(favorites.includes(recipe.id))
    );

    favoriteButton.addEventListener("click", () => {
      toggleFavorite(recipe.id);
    });

    imageArea.append(favoriteButton);

    const info = document.createElement("div");
    info.className = "recipe-info";

    const meta = document.createElement("div");
    meta.className = "recipe-meta";

    const time = document.createElement("span");
    time.textContent = `◷ ${recipe.time} min`;

    const difficulty = document.createElement("span");
    difficulty.textContent = recipe.difficulty;

    meta.append(time, difficulty);

    const name = document.createElement("h3");
    name.textContent = recipe.name;

    const description = document.createElement("p");
    description.textContent = recipe.description;

    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.className = "view-recipe";
    viewButton.textContent = "View recipe →";
    viewButton.addEventListener("click", () => {
      openRecipe(recipe);
    });

    info.append(meta, name, description, viewButton);
    card.append(imageArea, info);
    grid.append(card);
  });

  updateFavoriteCount();
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites();
  renderRecipes();
}

function openRecipe(recipe) {
  recipeDetails.replaceChildren();

  const emoji = document.createElement("div");
  emoji.className = "dialog-emoji";
  emoji.textContent = recipe.emoji;
  emoji.setAttribute("aria-hidden", "true");

  const title = document.createElement("h2");
  title.id = "dialog-title";
  title.textContent = recipe.name;

  const description = document.createElement("p");
  description.className = "dialog-description";
  description.textContent =
    `${recipe.description} · ${recipe.time} minutes · ${recipe.difficulty}`;

  const ingredientHeading = document.createElement("h3");
  ingredientHeading.textContent = "Ingredients";

  const ingredientList = document.createElement("ul");

  recipe.ingredients.forEach(ingredient => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    ingredientList.append(item);
  });

  const instructionsHeading = document.createElement("h3");
  instructionsHeading.textContent = "How to make it";

  const instructionsList = document.createElement("ol");

  recipe.instructions.forEach(instruction => {
    const item = document.createElement("li");
    item.textContent = instruction;
    instructionsList.append(item);
  });

  recipeDetails.append(
    emoji,
    title,
    description,
    ingredientHeading,
    ingredientList,
    instructionsHeading,
    instructionsList
  );

  if (!dialog.open) {
    dialog.showModal();
  }
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  showFavoritesOnly = false;
  favoriteToggle.classList.remove("selected");
  renderRecipes();
  document.getElementById("recipes").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", renderRecipes);

document.querySelectorAll(".quick-btn").forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    showFavoritesOnly = false;
    renderRecipes();

    document.getElementById("recipes").scrollIntoView({
      behavior: "smooth"
    });
  });
});

filters.forEach(button => {
  button.setAttribute(
    "aria-pressed",
    String(button.dataset.category === "all")
  );

  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    showFavoritesOnly = false;

    filters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });

    favoriteToggle.classList.remove("selected");
    renderRecipes();
  });
});

favoriteToggle.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;

  favoriteToggle.classList.toggle("selected", showFavoritesOnly);
  favoriteToggle.style.background = showFavoritesOnly
    ? "var(--orange-light)"
    : "white";

  renderRecipes();

  document.getElementById("recipes").scrollIntoView({
    behavior: "smooth"
  });
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

renderRecipes();
