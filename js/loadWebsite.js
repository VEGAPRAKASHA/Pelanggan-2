const API_URL = "https://script.google.com/macros/s/AKfycbywA7g5xDTF2vx3HvNP0x_U3KApioBFDKEn7pOnUk4HZrtekxA4GtlIXx_ubxuwUyG8BQ/exec";

async function loadWebsite() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load data");
        }

        const data = await response.json();

        console.log(data);

        // ==========================
        // TEXT
        // ==========================
        document.getElementById("route").textContent = data.route || "";
        document.getElementById("title").textContent = data.title || "";
        document.getElementById("subtitle").textContent = data.subtitle || "";
        document.getElementById("caption").textContent = data.caption || "";

        document.getElementById("message").innerHTML =
            (data.message || "").replace(/\n/g, "<br>");

        document.getElementById("quote").textContent = data.quote || "";
        document.getElementById("signature").textContent = data.signature || "";

        // ==========================
        // PHOTO
        // ==========================
        if (data.photo) {
            document.getElementById("photo").src = data.photo;
        }

        // ==========================
        // COUNTDOWN
        // ==========================
        if (data.countdown) {
            targetDate = new Date(data.countdown).getTime();
            console.log("Countdown:", new Date(targetDate));
        }

    } catch (err) {

        console.error("Load Website Error:", err);

    }

}

document.addEventListener("DOMContentLoaded", loadWebsite);
