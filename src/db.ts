/**
 *  Movies.html ning kodlari
 * 
 */
interface Movie {
    title: string;
    genre: string;
    stock: number;
    rate: number;
  }
  
  // DOM Elementlari
  const movieList = document.getElementById("movie-list") as HTMLElement;
  const movieForm = document.getElementById("movie-form") as HTMLElement;
  const editTitle = document.getElementById("edit-title") as HTMLInputElement;
  const editGenre = document.getElementById("edit-genre") as HTMLInputElement;
  const editStock = document.getElementById("edit-stock") as HTMLInputElement;
  const editRate = document.getElementById("edit-rate") as HTMLInputElement;
  const saveButton = document.getElementById("save-button") as HTMLButtonElement;
  
  // Tanlangan kinoni saqlash uchun o'zgaruvchi
  let selectedMovie: HTMLElement | null = null;
  
  // Kino ma'lumotlarini yangilash
  function updateMovieInList(movie: Movie) {
    if (selectedMovie) {
      const row = selectedMovie.closest("tr") as HTMLTableRowElement;
      if (row) {
        // Eski linkni o'chirish
        row.cells[0].innerHTML = "";
  
        // Yangi link yaratish
        const newLink = document.createElement("a");
        newLink.href = "#";
        newLink.className = "text-blue-500 hover:text-blue-700 edit-movie";
        newLink.textContent = movie.title;
  
        // Yangi linkni qo'shish
        row.cells[0].appendChild(newLink);
  
        // Qolgan ma'lumotlarni yangilash
        row.cells[1].textContent = movie.genre;
        row.cells[2].textContent = movie.stock.toString();
        row.cells[3].textContent = movie.rate.toString();
      }
    }
  }
  
  // Tahrirlash formasini ko'rsatish
  document.querySelectorAll(".edit-movie").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      selectedMovie = e.target as HTMLElement;
  
      // Formani to'ldirish
      const row = selectedMovie.closest("tr") as HTMLTableRowElement;
      if (row) {
        editTitle.value = row.cells[0].textContent || "";
        editGenre.value = row.cells[1].textContent || "";
        editStock.value = row.cells[2].textContent || "";
        editRate.value = row.cells[3].textContent || "";
      }
  
      // Formani ko'rsatish
      movieList.classList.add("hidden");
      movieForm.classList.remove("hidden");
    });
  });
  
  // Save tugmasi bosilganda
  saveButton.addEventListener("click", () => {
    const updatedMovie: Movie = {
      title: editTitle.value,
      genre: editGenre.value,
      stock: parseInt(editStock.value, 10),
      rate: parseFloat(editRate.value),
    };
  
    // Kino ma'lumotlarini yangilash
    updateMovieInList(updatedMovie);
  
    // Formani yashirish va ro'yxatni ko'rsatish
    movieList.classList.remove("hidden");
    movieForm.classList.add("hidden");
  });
  