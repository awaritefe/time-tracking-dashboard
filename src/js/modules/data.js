const container = document.getElementById("cards-container");

const appendItem = (item) => {
    const card = document.createElement("div");
    card.className = `card ${item.title}`;
    card.innerHTML = `
        <div class="card-title">
            <h2>${item.title}</h2>
            <img src="../../../assets/images/icon-ellipsis.svg" alt="Icon ellipsis">
        </div>
        <div class="card-details daily active">
            <span>${item.timeframes.daily.current}hrs</span>
            <p>Last Week - ${item.timeframes.daily.previous}</p>        
        </div>
        <div class="card-details weekly">
            <span>${item.timeframes.weekly.current}hrs</span>
            <p>Last Week - ${item.timeframes.weekly.previous}</p>        
        </div>
        <div class="card-details monthly">
            <span>${item.timeframes.monthly.current}hrs</span>
            <p>Last Week - ${item.timeframes.monthly.previous}</p>        
        </div>

    `;
    container.appendChild(card);

    try {
        const daily = document.querySelectorAll(".card-details.daily");
        const weekly = document.querySelectorAll(".card-details.weekly");
        const monthly = document.querySelectorAll(".card-details.monthly");

        const dailyBtn = document.querySelector(".daily-btn");
        const weeklyBtn = document.querySelector(".weekly-btn");
        const monthlyBtn = document.querySelector(".monthly-btn");

        if (daily && weekly && monthly) {
            const toggleData = () => {
                if (dailyBtn) {
                    dailyBtn.addEventListener("click", () => {
                        daily.forEach((e) => {
                            e.classList.add("active");
                        });
                        weekly.forEach((e) => {
                            e.classList.remove("active");
                        });
                        monthly.forEach((e) => {
                            e.classList.remove("active");
                        });
                    });
                }
                if (weeklyBtn) {
                    weeklyBtn.addEventListener("click", () => {
                        daily.forEach((e) => {
                            e.classList.remove("active");
                        });
                        weekly.forEach((e) => {
                            e.classList.add("active");
                        });
                        monthly.forEach((e) => {
                            e.classList.remove("active");
                        });
                    });
                }
                if (monthlyBtn) {
                    monthlyBtn.addEventListener("click", () => {
                        daily.forEach((e) => {
                            e.classList.remove("active");
                        });
                        weekly.forEach((e) => {
                            e.classList.remove("active");
                        });
                        monthly.forEach((e) => {
                            e.classList.add("active");
                        });
                    });
                }
            };
            toggleData();
        } else {
            console.log("Elements not yet loaded");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const populateDOM = (data) => {
    data.forEach((item) => {
        appendItem(item);
    });
};

fetch("data.json")
    .then((response) => {
        if (!response.ok) return console.log("Oops! Something went wrong.");

        return response.json();
    })
    .then((data) => {
        populateDOM(data);
    });

export function initialiseData() {
    try {
        return;
    } catch (error) {
        console.error("Error initializing application:", error);
    }
}
