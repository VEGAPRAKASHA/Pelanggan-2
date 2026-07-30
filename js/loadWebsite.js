const API_URL = "https://script.google.com/macros/s/AKfycbzx3tBhEji_VLf2dIey63X-_8_l8xBOyMtNol2witUzl8JY37DKef1Q6sau_M9ma8fk3g/exec";

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
